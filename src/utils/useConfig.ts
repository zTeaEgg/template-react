import appConfig from '@/../app.config.json'
import mainConfig from '@/microApp/mainConfig'
import microConfig from '@/microApp/microConfig'
type AppConfig = {
    encryptKey:string
    encryptIV:string
    apiTimeout:number
    mainApp:boolean
    microApp:boolean
}
export function getAppConfig():AppConfig{
    return appConfig
}

export function getMicroConfig(){
    return  microConfig
}

export function getMainConfig(){
    return mainConfig
}

export default ()=>{
    return {
        getAppConfig,
        getMainConfig,
        getMicroConfig
    }
}