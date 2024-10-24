import { MicroConfig } from "@/microApp/types"
import useMicorApp from "@/microApp/useMicorApp"

export function microAppRender(prop:{
    microAppConfig:MicroConfig
}){
    const {microApp,component:m} = useMicorApp(prop.microAppConfig)
    return (
        <>
            {m(prop)}
        </>
    )
}