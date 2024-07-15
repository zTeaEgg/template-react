import CryptoJS from 'crypto-js';
import { getAppConfig } from './useConfig';
function encryptWarn(e) {
    console.warn('encode failed,please check data', e);

}
export function encryptText(d: string) {
    try {
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

        const { encryptKey, encryptIV } = getAppConfig()
        const srcs = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(c))
        const decrypt = CryptoJS.AES.decrypt(srcs, encryptKey, {
            encryptIV,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        })
        return decrypt.toString(CryptoJS.enc.Utf8).toString()

    } catch (e) {
        encryptWarn(e)
        return c
    }
}
export function encryptObject(d: any) {
    try {
        JSON.stringify(d)
        return encryptText(d)
    } catch (e) {
        encryptWarn(e)
        return d

    }
}
export function decryptObject(c:any){
    
    try{
        const t = decryptText(c)
        return t? JSON.parse(decryptText(c)):decryptText(c)
    }catch(e){
        encryptWarn(e)
        return c
    }
}
export default () => {
    return {
        encryptText,
        encryptObject,
        decryptText,
        decryptObject
    }
}