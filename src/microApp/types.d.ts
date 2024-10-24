export interface MicroConfig extends RegistrableApp<any>  {
    name:string 
    entry:string
    container:string
    activeRule:string
}
export interface MainConfig {
    micro :MicroConfig[]
}