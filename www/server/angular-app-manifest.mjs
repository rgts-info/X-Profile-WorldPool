
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
    'index.csr.html': {size: 9286, hash: '07d45b8201df904d878442f9afa0bf363022740bf3681af735f4490c555e56ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2639, hash: 'da72993933f44382b173e8603f4f021cf9590c40395a7ec0794ee9e8c26b6ccc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30464, hash: '754e3b7f1933c48221af1f81defb6ce2dff0fe8339ee2c69e8022355636149db', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FV7ERX2C.css': {size: 48329, hash: 'BaHtYXXmfEE', text: () => import('./assets-chunks/styles-FV7ERX2C_css.mjs').then(m => m.default)}
  },
};
