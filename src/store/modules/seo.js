import {
  ROUTER_CHANGED,
  SET_SEO,
} from '../storeMutationTypes';
import _store from '../store.js';

const TITLE = 'Blake Newman | ';
const TITLE_EXTENSION = 'Web Developer | Blog';
const DESCRIPTION = `Blake Newman - Developer with a passion for designing beautiful and functional
website/application with the latest technologies.`;
const URL = 'http://blakenewman.co.uk';

export default {
  state: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
  },

  mutations: {
    /**
     * @method ROUTER_CHANGED
     * @desc Mutates config state's properties
     * @param {VuexStore.state.seo} state - Vuex Store's seo state
     * @param {VueRouter.route} route - VueRouter's current route object
     * @param {String} route.path - Route objects current path
     * @returns {Void} Mutation does not return
     * @memberof VuexStore.seo.mutations
     **/
    [ROUTER_CHANGED](state, { path }) {
      const route = _store.router.app.$route;
      state.title = `${TITLE}${route.title || TITLE_EXTENSION}`;
      state.description = route.description || DESCRIPTION;
      state.url = `${URL}${path}`;
      window.addthis_share = { title: state.title, url: state.url };
    },

    /**
     * @method SET_SEO
     * @desc Mutates seo title and description properties
     * @param {VuexStore.state.seo} state - Vuex Store's seo state
     * @param {Object} seo - seo data
     * @param {String} seo.title - seo title
     * @param {String} seo.description - seo description
     * @returns {Void} Mutation does not return
     * @memberof VuexStore.seo.mutations
     **/
    [SET_SEO](state, { title, description }) {
      state.title = `${TITLE}${title || TITLE_EXTENSION}`;
      state.description = description || DESCRIPTION;
      window.addthis_share = { title: state.title, url: state.url };
    },
  },

  actions: {
    /**
     * @method set
     * @desc set seo information
     * @param {VuexStore} store - Vuex Store
     * @param {Object} seo - seo data
     * @param {String} [seo.title] - seo title
     * @param {String} [seo.description] - seo description
     * @param {String} [seo.url] - seo url
     * @returns {Void} Action does not return
     * @memberof VuexStore.seo.actions
     **/
    set(store, seo) {
      store.dispatch(SET_SEO, seo);
    },
  },
};
