import produce from "immer";
import { ActionTypes } from "@/actions/application";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  roles: string[];
}

interface LabCourseState {
  token: string;
  currentUser: User | null;
}

export function applicationReducer(state: LabCourseState, action: any) {
  switch (action.type) {
    case ActionTypes.SAVE_ACCESS_TOKEN:
      return produce(state, (draft) => {
        draft.token = action.payload;
      });

    default:
      return state;
  }
}
