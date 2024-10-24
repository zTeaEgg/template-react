import config from '@/../qiankun.json';
import config_ from '@/../qiankun.yaml';
import { MicroConfig } from './types';
export default (config.micro || config_.micro) as MicroConfig

