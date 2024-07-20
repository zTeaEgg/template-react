import config from '@/../qiankun.json';
import config_ from '@/../qiankun.yaml';
import { RegistrableApp } from "qiankun";
export default config.micro || config_.micro as RegistrableApp<any>

