<template>
  <ul class="postList">
    <li class="postList__item" v-for="post in posts">
      <h3 v-text="post.date | date"></h3>
      <h2><a v-link="{ name: 'blog-post', params: { slug: post.slug } }" v-text="post.title"></a></h2>
    </li>
  </ul>
</template>

<script>
  import date from '../filters/date.js';

  export default {
    filters: { date },
    props: {
      slugs: {
        type: Array,
        required: true,
      },
    },
    computed: {
      posts() {
        return this.slugs.map((slug) => {
          const post = this.$store.state.posts[slug];
          return {
            title: post.title,
            date: post.published_at,
            slug: post.slug,
          };
        });
      },
    },
  };
</script>

<style lang="postcss">
  .postList {
    margin: 0;
    padding: 0;
    width: 100%;
    text-transform: uppercase;
    list-style-type: none;

    &__item {
      padding: 10px 10px;
      border-top: 1px solid color(var(--black) alpha(0.2));

      & a:any-link {
        color: var(--black);
        text-decoration: none;
      }
      & a:matches(:hover, :active) { color: var(--green); }
      &:nth-child(4n-2) a:matches(:hover, :active) { color: var(--blue); }
      &:nth-child(4n-1) a:matches(:hover, :active) { color: var(--red); }
      &:nth-child(4n) a:matches(:hover, :active) { color: var(--orange); }

      & h2 {
        margin-top: 6px;
        font-size: 18px;
      }

      & h3 {
        margin-top: 18px;
        color: color(var(--black) alpha(0.5));
        font-size: 2rem;
      }
    }
  }
</style>

<!-- Media styles -->
<style lang="postcss" scoped>
  @media (--more-medium-screen) {
    .postList__item {
      & > h3 {
        position: absolute;
        font-size: 1.6rem;
      }

      & > h2 {
        margin: 16px 0 10px 130px;
        font-size: 2rem;
      }
    }
  }
</style>
