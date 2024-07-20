import { UserState } from "@/store/types";
import { createSlice } from "@reduxjs/toolkit";

const userInitState: UserState = {
    token: '1',
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