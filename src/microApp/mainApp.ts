import { registerMicroApps } from "qiankun";
import microAppConfig from './mainConfig';
export function doRegisterMicroApp(){

    registerMicroApps(microAppConfig.micro)
}
