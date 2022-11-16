export enum ActionTypes {
  SAVE_ACCESS_TOKEN = "SAVE_ACCESS_TOKEN",
}

export function saveAccessToken(token: string) {
  return {
    type: ActionTypes.SAVE_ACCESS_TOKEN,
    payload: {
      token,
    },
  };
}
