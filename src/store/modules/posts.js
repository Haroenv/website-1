import * as ghostPostService from '../../services/ghost/post.js';
import {
  ADD_POSTS,
  ADD_NOTIFICATION,
} from '../storeMutationTypes';

export default {
  state: {
  },

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
        state[post.slug] = post;
      });
    },
  },

  actions: {
    /**
     * @method getPostBySlug
     * @desc Get post by slug from ghost and add to modules state
     * @param {VuexStore} store - Vuex Store
     * @param {String} slug - post slug
     * @returns {Promise} returns '/ghost/posts/slug/:slug' request as promise
     * @memberof VuexStore.posts.actions
     **/
    getPostBySlug(store, slug) {
      return ghostPostService.getPostBySlug(slug)
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
