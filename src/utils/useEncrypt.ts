import { getAppConfig } from '@/utils/useConfig';
import CryptoJS from 'crypto-js';
import { isObject } from 'lodash';
import { parseJson, stringifyJson } from './tools';
const isCryptPropertyName = '__is_c__'
interface EncryptRecord<T extends any>{
    raw:T
    [isCryptPropertyName]:boolean
}
function encryptWarn(e) {
    console.warn('encode failed,please check data', e);

}
function decryptWarn(e) {
    console.warn('decode failed,please check data', e);

}
function packCryptData<T extends any>(d:EncryptRecord<string>|T):EncryptRecord<T>{
    function pack(){
        return {
            raw:d as T,
            [isCryptPropertyName]:false
        }
    }
    if(validateCryptPacked(d)){
        return d as EncryptRecord<T>
    }else{
        return pack()

    }
   
}
function validateCryptPacked(p:any):boolean{
    return p && isObject(p) && (isCryptPropertyName in p)
}
export function encrypt<T extends string>(d:EncryptRecord<T>|T):EncryptRecord<T> | T{
    try{
        if(validateCryptPacked(d) ){
            if(d[isCryptPropertyName] === true){

                return d
            }else{
                return {
                    raw :encryptText((d as EncryptRecord<T>).raw),
                    [isCryptPropertyName]:true
                }
            }
        }else{
            return {
                raw :encryptText( (d as T)),
                [isCryptPropertyName]:true
            }
        }
     
    }catch(e){
        encryptWarn(e)
        return d
    }
}
export function decrypt<T extends string>(c:EncryptRecord<T> | T): T{
    try{
        if(validateCryptPacked(c)){
            if(c[isCryptPropertyName] === true){
                return decryptText((c as EncryptRecord<T>).raw)
            }else{
                return (c as EncryptRecord<T>).raw
            }
        }else{
            return c as T
        }

    }catch(e){
        decryptWarn(e)
        return c as any
    }
}
export function encryptText(d: string) {
    try {
        if(['',null,undefined].includes(d)){
            return ''
        }
        const { encryptKey, encryptIV } = getAppConfig()
        const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(d), encryptKey, {
            encryptIV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        })
        return encrypted.ciphertext.toString().toUpperCase()
    } catch (e) {
        encryptWarn(e)
        return d
    }
}
export function decryptText(c: string) {
    try {
        if(!c){
            return c
        }
        if(['',null,undefined].includes(c)){
            return ''
        }
        const { encryptKey, encryptIV } = getAppConfig()
        const srcs = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(c))
        const decrypt = CryptoJS.AES.decrypt(srcs, encryptKey, {
            encryptIV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        })
        
        return decrypt.toString(CryptoJS.enc.Utf8).toString()

    } catch (e) {
        decryptWarn(e)
        return c
    }
}
export function encryptObj(d:any){
    
    return encryptText(stringifyJson(d))
}
export function decryptObj(c:any){
    return decryptText(parseJson(c))
}
export default () => {
    return {
        encryptText,
        decryptText,
        encrypt,
        decrypt
    }
}