// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import 'intersection-observer';

import DefaultLayout from '~/layouts/Default.vue';
import CleanLayout from '~/layouts/Clean.vue';
import metaData from '~/assets/data/meta';
import '~/assets/js/script.js';
import '~/assets/style/app.styl';

export default function(Vue, { router, head, isClient }) {
  // Add a meta tags
  metaData.forEach((meta) => head.meta.push(meta));

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('CleanLayout', CleanLayout);
}
