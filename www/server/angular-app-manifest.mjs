
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/X-Profile-WorldPool/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/X-Profile-WorldPool"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9286, hash: 'd19624f3063010215036eed19ff4e6d3cb7bc759a32808289c2281c24dfc591f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2639, hash: '02078552b72419537a029180aac6cd766ba57783b34f09b706bece947f635b33', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30936, hash: '0e537a9ae195ea24df3dd8ddc7ef758bf9919e011fa201217a683147e5cf2ea1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FV7ERX2C.css': {size: 48329, hash: 'BaHtYXXmfEE', text: () => import('./assets-chunks/styles-FV7ERX2C_css.mjs').then(m => m.default)}
  },
};
