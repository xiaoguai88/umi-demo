import { defineConfig } from 'umi';
import routes from './route';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: '系统',
  },
  routes,
  fastRefresh: {},
  mfsu: {},
});
