import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport, {VantResolve} from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),],
  server: {
    port: 8888,
    proxy:{
      '/api':{
        target:'http://120.26.164.99:3000/'
      }
    }
  }
});
