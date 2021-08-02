import { defineConfig } from 'umi';
import routes from './route';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: '系统',
    layout:'topmenu',
    navTheme: 'light',
    loading: true,
    icon:'user',
  },
  routes,
  fastRefresh: {},
  mfsu: {},
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:7001',
    }
  },
  dva: {
    immer: true,
    hmr: false,
    disableModelsReExport: true,
    lazyLoad: true,
  },
});
