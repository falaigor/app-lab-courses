export enum ActionTypes {
  SAVE_ACCESS_TOKEN = "SAVE_ACCESS_TOKEN",
  DESTROY_SESSION = "DESTROY_SESSION",
}

export function saveAccessToken(token: string) {
  return {
    type: ActionTypes.SAVE_ACCESS_TOKEN,
    payload: {
      token,
    },
  };
}

export function destroySession() {
  return {
    type: ActionTypes.DESTROY_SESSION,
  };
}
