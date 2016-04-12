<template>
  <div class="page page__blog">
    <h1>Recent Posts</h1>
    <post-list :slugs="slugs"></post-list>
  </div>
</template>

<script>
  import progress from '../mixins/progress.js';
  import postList from '../store/modules/post-list.js';
  import postListComponent from '../components/post-list.vue';

  export default {
    components: { postList: postListComponent },
    mixins: [ progress ],
    vuex: {
      actions: {
        getPosts: postList.actions.getPosts,
      },
      getters: {
        slugs(state) {
          return state.postList;
        },
      },
    },
    route: {
      activate(transition) {
        const hasPosts = !!this.$store.state.postList;
        if (hasPosts) transition.next();
        this.getPosts()
          .then((response) => {
            this.progressFinish();
            if (!hasPosts) transition.next();
            return response;
          })
          .catch((response) => {
            this.progressFinish({ state: 'error' });
            if (!hasPosts) transition.abort();
            throw response;
          });
      },
    },
  };
</script>
