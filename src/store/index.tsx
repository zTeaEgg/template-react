import { configureStore, Store } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createTransform, PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { decryptObject, encryptObject } from "../utils/useEncrypt";
import user from "./user";
const encryptTransform = createTransform((subState,key)=>{
    
    return  encryptObject(subState)
},(subState,key)=>{
    return decryptObject(subState)
})
const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    transforms:[encryptTransform]
}
export const store: Store = configureStore({
    reducer: {
        user:persistReducer(persistConfig,user)
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false
        }),
    devTools: true
})
export const persistStore_ = persistStore(store)
export type RootState = ReturnType<typeof store.getState>

export const appDispatch: () => typeof store.dispatch = useDispatch
export const appSelector: TypedUseSelectorHook<RootState> = useSelector