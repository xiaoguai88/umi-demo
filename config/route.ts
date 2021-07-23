export default [
  {
    path: '/vacantspace',
    name: '虚空',
    component: './VacantSpace',
    icon: 'home',
    routes: [],
  },
  {
    path: '/kong',
    name: '空间',
    component: '@/pages/Kong',
    icon: 'bug',
  },
  {
    path: '/ying',
    name: '暗影',
    component: './Ying',
    icon: 'fileText',
    routes: [],
  },
  {
    path: '/ji',
    name: '寂灭',
    icon: 'rocket',
    component: '@/pages/Ji',
  },
  {
    path: '/guang',
    name: '光明',
    component: './Guang',
    icon: 'nodeExpand',
    routes: [],
  },
  {
    path: '/mei',
    name: '影魅',
    component: '@/pages/Mei',
    icon: 'unorderedList',
    // menu: false,  // 是否隐藏该项，默认为true
  },
];
