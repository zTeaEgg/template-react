import config from '@/../qiankun.json';
import config_ from '@/../qiankun.yaml';
import { MainConfig } from './types';
export default (config.main || config_.main)  as MainConfig
 
