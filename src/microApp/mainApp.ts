import microAppConfig from '@/microApp/mainConfig';
import { registerMicroApps } from "qiankun";
export function doRegisterMicroApp(){

    registerMicroApps(microAppConfig.micro)
}
