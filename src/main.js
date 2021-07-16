import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import '../vue.config';
import './permission';

import Element from 'element-ui';
import './assets/scss/element-variables.scss';
import ptBr from 'element-ui/lib/locale/lang/pt-br';
import '@/assets/scss/index.scss';

Vue.use(Element, {
  size: 'medium',
  locale: ptBr
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
