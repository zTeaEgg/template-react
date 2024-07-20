import useConfig from "@/utils/useConfig";
import axios from "axios";
const {getAppConfig} = useConfig()
const service = axios.create({
    timeout:getAppConfig().apiTimeout,
    baseURL:''
})

service.interceptors.request.use((config)=>{
    return config
},(error)=>{
    return Promise.reject(error)
})
service.interceptors.response.use((response)=>{
    return response
},(error)=>{
    return Promise.reject(error)
})
export function post(...p:Parameters<typeof service.post>){
    service.post(...p)
}
export function get(...p:Parameters<typeof service.get>){
    service.get(...p)
}
export default service