import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  id: number | null;
  login: string | null;
  accessToken: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: {
    id: null,
    login: null,
    accessToken: null,
  } as AuthState,
  reducers: {
    getTokens: (state) => {
      const strId = localStorage.getItem("id");
      const id = strId ? +strId : null;
      const login = localStorage.getItem("login");
      const accessToken = localStorage.getItem("accessToken");
      return { ...state, id, login, accessToken };
    },
    authorize: (_: AuthState, action: PayloadAction<AuthState>) => {
      const { id, login, accessToken } = action.payload;
      localStorage.setItem("id", id?.toString() ?? "");
      localStorage.setItem("login", login ?? "");
      localStorage.setItem("accessToken", accessToken ?? "");

      return action.payload;
    },
    unauthorize: () => {
      localStorage.clear();

      return {
        id: null,
        accessToken: null,
        login: null,
      };
    },
  },
});

export type { AuthState };
export const { getTokens, authorize, unauthorize } = slice.actions;
export default slice.reducer;
