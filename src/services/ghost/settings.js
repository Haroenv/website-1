/**
 * Ghost settings service
 * @namespace services.ghost.settings
 **/
const prefix = '/ghost/api/v0.1/';
export default {
  urls: {
    prefix,
    posts: `${prefix}posts`,
    postBySlug: `${prefix}posts/slug{/slug}`,
  },
  token: {
    client_id: process.env.GHOST_CLIENT_ID,
    client_secret: process.env.GHOST_SECRET,
  },
};
