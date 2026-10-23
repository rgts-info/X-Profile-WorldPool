
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
    'index.csr.html': {size: 9286, hash: '7c8bc923dee23f12c5793f26e7bf0ed911747af1048b45824e59e5c7738a7920', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2639, hash: '214f634e4b9b70853fcce282d7ea3c41d814030d32523d005a970e72db94392f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30790, hash: '6d1bde458afa13df1147ac442483e92eecefd7e8f2f27b50c720bafff380722f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FV7ERX2C.css': {size: 48329, hash: 'BaHtYXXmfEE', text: () => import('./assets-chunks/styles-FV7ERX2C_css.mjs').then(m => m.default)}
  },
};
