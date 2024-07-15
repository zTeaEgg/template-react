import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";

const userInitState: UserState = {
    token: '',
    userInfo: {}
}
const user = createSlice({
    name: 'user',
    initialState: userInitState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
        reset: (state) => {
            state.token = '',
                state.userInfo = {}
        }
    }
})
export const { setToken, setUserInfo, reset } = user.actions
export default user.reducer