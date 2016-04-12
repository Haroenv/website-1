<template>
  <article class="portfolioWidget">
    <h4 v-text="title"></h4>
    <figure>
      <a v-if="link" :href="link" target="_blank">
        <img height="280px" width="620px"
          :alt="title" :src="image" v-aspect-ratio="0.451">
      </a>
      <img height="280px" width="620px"
        v-else :alt="title" :src="image" v-aspect-ratio="0.451">
      <figcaption>
        <slot></slot>
      </figcaption>
    </figure>
  </article>
</template>

<script>
  import aspectRatio from '../directives/aspect-ratio.js';

  export default {
    props: {
      image: {
        type: String,
        required: true,
        coerce(val) {
          return `/assets/portfolio/${val}`;
        },
      },
      link: {
        type: String,
      },
      title: {
        type: String,
        required: true,
      },
    },
    replace: true,
    directives: {
      aspectRatio,
    },
  };
</script>

<style lang="postcss">
  @import '../styles/mixins/boxes.css';
  @import '../styles/mixins/boxes-link.css';
  @import '../styles/mixins/boxes-link-overlay.css';

  .portfolioWidget {
    float: left;
    box-sizing: border-box;
    margin: 0 0 2%;
    padding: 20px 20px 0;
    width: 100%;

    @mixin boxes 5px;

    @mixin boxes-link-overlay 20%, & figure > a {
      display: block;
      position: relative;
    }

    @mixin boxes 1px, 10%, & img, {
      display: block;
      height: auto;
      width: 100%;
      min-height: 78px;
    }

    & figure { margin: 0; }

    & figcaption {
      margin-top: 20px;
      & :any-link {
        padding: 1px 3px;
        color: var(--black);
        text-decoration: none;
      }
    }

    @mixin boxes 0, 30%, & figcaption a;
    @mixin boxes-link 10%, & figcaption a;
  }
</style>

<!-- Media styles -->
<style lang="postcss">
  @media (--more-medium-screen) {
    .portfolioWidget {
      width: 49%;
      &:nth-child(2n) { margin: 0% 0 1% 1%; }
      &:nth-child(2n-1) { margin: 0% 1% 1% 0; }
      &:nth-child(1n+3) { margin-top: 1%; }
    }
  }
</style>
