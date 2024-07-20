export function parseJson(d:string){
    try{
       return JSON.parse(d)
    } catch{
        return d
    }
}

export function stringifyJson(d:any){
    try{
       return JSON.stringify(d)
    }catch {
        return d
    }
}