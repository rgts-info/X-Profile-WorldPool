
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
    'index.csr.html': {size: 9286, hash: '39c7c722018209118e3edb8978bf026b955612e22fd1ab4c06cf8d22e7d6e360', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2639, hash: '8caa78a7243b4ed1768c998cfc931ff7902019532b12b43998f253ca3f22e1da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 37731, hash: 'cb6a92d5838a4762860656f54ef2b7bd73ec436a66521112f2d0dac19a7ce02a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FV7ERX2C.css': {size: 48329, hash: 'BaHtYXXmfEE', text: () => import('./assets-chunks/styles-FV7ERX2C_css.mjs').then(m => m.default)}
  },
};
