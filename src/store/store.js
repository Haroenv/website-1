import Vue from '../vue-boot.js';
import Vuex from 'vuex';
import notification from './modules/notification';
import postList from './modules/post-list';
import posts from './modules/posts';
import progress from './modules/progress';
import seo from './modules/seo';

const strict = Vue.config.debug;

const store = new Vuex.Store({
  // Combine store sub-trees and mutations (modules)
  modules: {
    notification,
    postList,
    posts,
    progress,
    seo,
  },
  strict,
  middlewares: [],
});

export default store;

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept([
    './modules/notification',
    './modules/post-list',
    './modules/posts',
    './modules/progress',
    './modules/seo',
  ], () => {
    // swap in the new actions and mutations
    store.hotUpdate({
      modules: {
        notification: require('./modules/notification').default,
        postList: require('./modules/post-list').default,
        posts: require('./modules/posts').default,
        progress: require('./modules/progress').default,
        seo: require('./modules/seo').default,
      },
    });
  });
}
