import ViteYaml from '@modyfi/vite-plugin-yaml';
import react from '@vitejs/plugin-react';
import { defineConfig, PluginOption } from 'vite';
import qiankun from 'vite-plugin-qiankun';
export default defineConfig(() => {
  return {
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
  }
})
