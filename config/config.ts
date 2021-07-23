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
      target: 'http://localhost:5656',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  dva: {
    immer: true,
    hmr: false,
    disableModelsReExport: true,
    lazyLoad: true,
  },
});
