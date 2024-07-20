import config from '@/../qiankun.json';
import config_ from '@/../qiankun.yaml';
import { RegistrableApp } from "qiankun/es/interfaces";
export default config.main || config_.main as  Array<RegistrableApp<any>>
 
