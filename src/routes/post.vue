<template>
  <div class="page page__post">
    <h1 v-text="title"> </h1>
    <p v-text="date | date"> </p>
    <article v-highlight-code-blocks="article" v-html="article"> </article>
    <div id="disqus_thread"></div>
  </div>
</template>

<script>
  import progress from '../mixins/progress.js';
  import posts from '../store/modules/posts.js';
  import seo from '../store/modules/seo.js';
  import dateFilter from '../filters/date.js';
  import highlightCodeBlocks from '../directives/highlight-code-blocks.js';

  export default {
    mixins: [ progress ],
    directives: { highlightCodeBlocks },
    filters: { date: dateFilter },
    data() {
      return { slug: this.$route.params.slug, article: '', title: '', date: '' };
    },
    vuex: {
      actions: {
        getPostBySlug: posts.actions.getPostBySlug,
        setSeo: seo.actions.set,
      },
    },
    methods: {
      updatePost(post) {
        this.article = post.html;
        this.title = post.title;
        this.date = post.published_at;
        this.setSeo({ title: post.meta_title, description: post.meta_description });
      },
      setDisqus(id) {
        window.disqus_config = function config() {
          this.page.identifier = id;
          this.page.url = this.$store.state.seo.url;
          this.page.title = this.$store.state.seo.title;
        };

        const script = document.createElement('script');
        script.src = '//blakenewman.disqus.com/embed.js';
        script.setAttribute('data-timestamp', new Date());
        this.$el.appendChild(script);
      },
    },
    route: {
      activate(transition) {
        const slug = transition.to.params.slug;
        let post = this.$store.state.posts[slug];
        const updatePost = !!post;

        // If post is available then continue transition
        if (updatePost) {
          this.updatePost(post);
          transition.next();
        }

        // Get post by slug even if we have post, ensuring that we have latest content
        this.getPostBySlug(slug)
          .then((response) => {
            post = this.$store.state.posts[slug];
            if (!updatePost) transition.next();
            this.updatePost(post);
            this.setDisqus(post.uuid);
            this.progressFinish();
            return response;
          })
          .catch((response) => {
            this.progressFinish({ state: 'error' });
            if (!updatePost) transition.abort();
            throw response;
          });
      },
    },
    ready() {

    },
  };
</script>

<style lang="postcss">
  .page__post {
    & img {
      display: block;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      padding: 0.6em 0;
      height: auto;
      max-width: 126%;
    }
  }
</style>
