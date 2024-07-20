import user from "@/store/user";
import { decryptObj, decryptText, encryptObj, encryptText } from "@/utils/useEncrypt";
import { configureStore, Store } from "@reduxjs/toolkit";
import { isObject } from 'lodash';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createTransform, PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { StoreType } from "./types";
const encryptTransform = createTransform((subState) => {

    return isObject(subState) ? encryptObj(subState) : encryptText(subState as any)
}, (subState) => {

    return isObject(subState) ? decryptObj(subState) : decryptText(subState as any)
}, {
})
const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    transforms: [encryptTransform]
}
export const store: Store = configureStore<StoreType>({
    reducer: {
        user: persistReducer(persistConfig, user)
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