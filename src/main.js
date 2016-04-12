import './vue-boot.js';
import app from './app.vue';
import VuexRouterSync from 'vuex-router-sync';
import store from './store/store.js';
import router from './routes/router';

// Sync router and store
VuexRouterSync.sync(store, router);

// Start router
router.start({
  store,
  components: { app },
  vuex: {
    getters: {
      seo(state) {
        return { ...state.seo };
      },
    },
  },
}, 'html');
