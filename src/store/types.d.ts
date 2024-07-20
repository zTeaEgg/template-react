export type UserState = {
    token:string
    userInfo:Record<string| number |symbol,any>
}
export type PersistState<T> = T & PersistPartial
export interface StoreType {
    user:PersistState<UserState>
}