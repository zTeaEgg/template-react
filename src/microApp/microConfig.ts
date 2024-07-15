import { RegistrableApp } from "qiankun";
import config from '../../qiankun.json';
import config_ from '../../qiankun.yaml';
export default config.micro || config_.micro as RegistrableApp<any>

