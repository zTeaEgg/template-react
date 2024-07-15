export * from './mainApp';
export * from './mainConfig';
export * from './microApp';

export function isMicroApp () {
    
    return window.__POWERED_BY_QIANKUN__
}