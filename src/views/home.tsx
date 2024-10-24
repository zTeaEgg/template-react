import { microAppRender } from "@/components/microAppRender";
import mainConfig from "@/microApp/mainConfig";

export default function (){
    
    return (
        <>
        {microAppRender({microAppConfig:mainConfig.micro[0]})}
        <div>hello,world</div>
        </>
    )
}