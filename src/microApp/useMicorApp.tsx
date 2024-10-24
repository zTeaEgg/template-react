import { MicroApp } from "qiankun"
import { useEffect, useRef } from "react"
import { handleLoadMicroApp } from "./mainApp"
import { MicroConfig } from "./types"

export default function (microConfig: MicroConfig) {
    const componentRef = useRef(null)
    let microApp: MicroApp | null = null
    let loaded = false
    useEffect(() => {

        if (componentRef.current && !microApp && !loaded) {
            loaded = true
            try {

                handleLoadMicroApp({
                    ...microConfig,
                    container: componentRef.current
                }).then((app) => {
                    microApp = app || null
                }).catch(e => {
                    loaded = false
                    console.log('eeee', e);

                })
            } catch (e) {
                console.log('eee', e);

            }
            console.log('microApp', microApp);

        }
        return () => {
            microApp?.unmount()
        }
    }, [componentRef])
    return {
        microApp,
        component: ({ className, style }: any) => {
            return (<div className={className} style={style} ref={componentRef}></div>)
        }
    }
}