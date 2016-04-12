import * as ghostPostService from '../../services/ghost/post.js';
import {
  ADD_POSTS,
  ADD_NOTIFICATION,
} from '../storeMutationTypes';

export default {
  state: [],

  mutations: {
    /**
     * @method ADD_POSTS
     * @desc Add posts to state
     * @param {VuexStore.state.notification} state - Vuex Store's notification state
     * @param {Array} posts - Array of posts
     * @returns {Void} Mutation does not return
     * @memberof VuexStore.posts.mutations
     **/
    [ADD_POSTS](state, posts) {
      posts.forEach((post) => {
        let exists = false;
        state.forEach((slug) => {
          if (slug === post.slug) exists = true;
        });
        if (!exists) state.push(post.slug);
      });
    },
  },

  actions: {
    /**
     * @method getPosts
     * @desc Get posts from ghost and add them to module's state
     * @param {VuexStore} store - Vuex Store
     * @param {Object} options - post request options
     * @returns {Promise} returns '/ghost/posts' request as promise
     * @memberof VuexStore.posts.actions
     **/
    getPosts(store, options) {
      return ghostPostService.getPosts(options)
        .then((response) => {
          store.dispatch(ADD_POSTS, response.data.posts);
          return response;
        })
        .catch((response) => {
          store.dispatch(ADD_NOTIFICATION, {
            type: 'error',
            message: 'Unable to fetch posts. Please try again.',
          });
          throw response;
        });
    },
  },
};
