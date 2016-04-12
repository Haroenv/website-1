import VueRouter from 'vue-router';
import progress from '../store/modules/progress.js';

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  root: '/',
});

router.map({
  // Portfolio
  portfolio: {
    name: 'portfolio',
    title: 'Portfolio',
    component: (resolve) => {
      require.ensure([ './portfolio.vue' ], (require) => {
        require([ './portfolio.vue' ], resolve);
      }, 'portfolio');
    },
  },

  // Blog
  blog: {
    name: 'blog',
    title: 'Blog',
    description: 'Developer Blog of Blake Newman',
    component: (resolve) => {
      require.ensure([ './blog.vue' ], (require) => {
        require([ './blog.vue' ], resolve);
      }, 'blog');
    },
  },
  'blog/post/:slug': {
    name: 'blog-post',
    title: 'Blog',
    description: 'Developer Blog of Blake Newman',
    component: (resolve) => {
      require.ensure([ './post.vue' ], (require) => {
        require([ './post.vue' ], resolve);
      }, 'post');
    },
  },
});

router.redirect({
  '*': '/blog',
});

router.alias({
  '/': '/portfolio',
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
  progress.actions.start(router.app.$store);
});

export default router;
