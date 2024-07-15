import { RegistrableApp } from "qiankun/es/interfaces";
import config from '../../qiankun.json';
import config_ from '../../qiankun.yaml';
export default config.main || config_.main as  Array<RegistrableApp<any>>
 
