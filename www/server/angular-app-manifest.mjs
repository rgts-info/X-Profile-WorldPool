
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
    'index.csr.html': {size: 9286, hash: '5951e15cacdaa098a06c1d88cff57b71de536ae04111f2fbccada9c9b0f3f86b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2639, hash: 'ddc9184782b152974020bbbedec8aaef3808f1bfa29ebd775498c1c25b5aa4eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37731, hash: 'e9b798582783bc6dde9f2f43294af234966dd01ad2c058122078182003acef1d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FV7ERX2C.css': {size: 48329, hash: 'BaHtYXXmfEE', text: () => import('./assets-chunks/styles-FV7ERX2C_css.mjs').then(m => m.default)}
  },
};
