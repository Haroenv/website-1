import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';

// Set to debug mode when not in production
Vue.config.debug = process.env.NODE_ENV !== 'production';

// Install Vue plugins
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(VueRouter);

export default Vue;
