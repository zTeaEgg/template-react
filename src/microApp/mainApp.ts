import microAppConfig from '@/microApp/mainConfig';
import { MicroConfig } from '@/microApp/types';
import { addGlobalUncaughtErrorHandler, loadMicroApp, MicroApp, registerMicroApps, start } from "qiankun";
export function doRegisterMicroApp(){

    registerMicroApps(microAppConfig.micro)
}
export async function handleLoadMicroApp(microConfig:MicroConfig):Promise<MicroApp | void>{
  const app = loadMicroApp(microConfig)
  return app.mountPromise.then(()=>{
   return app
  }).catch((e)=>{
    console.log('eeeee',e);
    
    Promise.reject(e)

  })
}

export function startMainApp() {
  start({ prefetch: false, urlRerouteOnly: true })
  doRegisterMicroApp()
  addGlobalUncaughtErrorHandler((e)=>{
    console.log('error',e);
    
  })
}