export * from '@/microApp/mainApp';
export * from '@/microApp/mainConfig';
export * from '@/microApp/microApp';

export function isMicroApp () {
    
    return window.__POWERED_BY_QIANKUN__
}