import { api } from "@/services/api";
import { saveAccessToken, destroySession } from "@/actions/application";
import { applicationReducer } from "@/reducers/application";
import { useNavigate } from "react-router-dom";
import {
  ReactNode,
  createContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { AppRoutes } from "@/router/routes";

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
  signOut: () => void;
  error: any;
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
  const navigate = useNavigate();
  const [error, setError] = useState("");
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
      navigate(AppRoutes.Courses);
    } catch (err: any) {
      if (err.response.status === 401) {
        setError("E-mail/Senha invalálidos");
      }

      console.log(err);
    }
  }

  function signOut() {
    localStorage.removeItem(localStorageName);
    dispatch(destroySession());
  }

  return (
    <LabCourseContext.Provider
      value={{ token, currentUser, signIn, signOut, error }}
    >
      {children}
    </LabCourseContext.Provider>
  );
}
