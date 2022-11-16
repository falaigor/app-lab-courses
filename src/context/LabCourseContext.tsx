import { api } from "@/services/api";
import { saveAccessToken } from "@/actions/application";
import { applicationReducer } from "@/reducers/application";
import { ReactNode, createContext, useReducer, useEffect } from "react";

interface UserLogin {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  roles: string[];
}

interface LabCourseContextData {
  token: string;
  currentUser: User | null;
  signIn: (data: UserLogin) => void;
}

export const LabCourseContext = createContext({} as LabCourseContextData);

interface LabCourseContextProviderProps {
  children: ReactNode;
}

const initialState = {
  token: "",
  currentUser: null,
};

export function LabCourseContextProvider({
  children,
}: LabCourseContextProviderProps) {
  const localStorageName = "@ignite-lab-course:storage";
  const [applicationState, dispatch] = useReducer(
    applicationReducer,
    {
      token: "",
      currentUser: null,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(localStorageName);

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );

  const { token, currentUser } = applicationState;

  useEffect(() => {
    const stateJson = JSON.stringify(applicationState);

    localStorage.setItem(localStorageName, stateJson);
  }, [applicationState]);

  async function signIn(data: UserLogin) {
    try {
      const response = await api.post("/auth/session", data);
      const { access_token } = response.data;

      dispatch(saveAccessToken(access_token));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <LabCourseContext.Provider value={{ token, currentUser, signIn }}>
      {children}
    </LabCourseContext.Provider>
  );
}
