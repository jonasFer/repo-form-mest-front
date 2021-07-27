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
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
Vue.use(VueFormWizard)


Vue.use(Element, {
  size: 'medium',
  locale: ptBr
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
