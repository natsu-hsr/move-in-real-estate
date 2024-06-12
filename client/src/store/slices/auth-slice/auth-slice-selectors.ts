import {RootState} from "../../store";

export const selectAuthError = (state: RootState) => state.authReducer.error;