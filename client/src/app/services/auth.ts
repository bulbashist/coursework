import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store";

type AuthState = {
  id: number | null;
  handler: NodeJS.Timeout | undefined;
  login: string | null;
  accessToken: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: {
    id: null,
    handler: undefined,
    login: null,
    accessToken: null,
    // refreshToken: null,
  } as AuthState,
  reducers: {
    getTokens: (state) => {
      const strId = localStorage.getItem("id");
      const id = strId ? +strId : null;
      const login = localStorage.getItem("login");
      const accessToken = localStorage.getItem("accessToken");
      return { ...state, id, login, accessToken };
    },
    authorize: (
      state: AuthState,
      action: PayloadAction<Pick<AuthState, "id" | "login" | "accessToken">>
    ) => {
      const { id, login, accessToken } = action.payload;
      localStorage.setItem("id", id?.toString() ?? "");
      localStorage.setItem("login", login ?? "");
      localStorage.setItem("accessToken", accessToken ?? "");
      // axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      // localStorage.setItem("refreshToken", refreshToken ?? "");
      const handler = setTimeout(() => {
        store.dispatch(unauthorize());
      }, 1000 * 60 * 10);

      return { ...state, handler, ...action.payload };
    },
    unauthorize: (state) => {
      localStorage.clear();
      clearInterval(state.handler);
      return {
        ...state,
        handler: undefined,
        accessToken: null,
        login: null,
      };
    },
  },
});

export type { AuthState };
export const { getTokens, authorize, unauthorize } = slice.actions;
export default slice.reducer;
