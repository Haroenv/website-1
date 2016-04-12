/**
 * Ghost settings service
 * @namespace services.ghost.posts
 **/
import Vue from '../../vue-boot.js';
import settings from './settings';

const posts = Vue.resource(settings.urls.posts, {
  ...settings.token,
});

const postBySlug = Vue.resource(settings.urls.postBySlug, {
  ...settings.token,
});

/**
 * @method getPosts
 * @desc Get ghost posts
 * @param {Object} options - request options
 * @return {Promise} '/ghost/posts' request as promise
 * @memberof services.ghost.posts
 */
export function getPosts(options = {}) {
  return posts.get(options);
}

/**
 * @method getPostBySlug
 * @desc Get ghost post by slug
 * @param {String} slug - request options
 * @return {Promise} '/ghost/posts/slug/:slug' request as promise
 * @memberof services.ghost.posts
 */
export function getPostBySlug(slug) {
  return postBySlug.get({ slug });
}
