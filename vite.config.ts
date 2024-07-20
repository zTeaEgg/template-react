import ViteYaml from '@modyfi/vite-plugin-yaml';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, PluginOption } from 'vite';
import qiankun from 'vite-plugin-qiankun';
export default defineConfig(() => {
  return {
    base: './',
    server:{
      port: 9091
    },
    plugins: [
      react(),
      qiankun('subApp', {
        useDevMode: true
      }) as PluginOption,
      ViteYaml()
    ],
    resolve:{
      alias:{
        '@':resolve(__dirname,'./src')
      }
    }
  }
})
