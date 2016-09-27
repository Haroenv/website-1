<template>
  <div :class="['skillWidget', size, level]">
    <a v-if="link" :href="link" target="_blank">
      <img :src="image" :alt="title" height="64px" :width="imageWidth" />
    </a>
    <img v-else :src="image" :alt="title" height="64px" :width="imageWidth" />
  </div>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        coerce(val) {
          return `skillWidget--${val || 'small'}`;
        },
      },
      image: {
        type: String,
        required: true,
        coerce(val) {
          return `assets/skills/${val}`;
        },
      },
      level: {
        type: String,
        coerce(val) {
          return `skillWidget--${(val || 100)}`;
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
    data() {
      return {
        imageWidth: this.size === 'skillWidget--long' ? '170px' : '64px',
      };
    },
  };
</script>

<style lang="postcss">
  @import '../styles/mixins/boxes.css';
  @import '../styles/mixins/boxes-link.css';
  @import '../styles/mixins/boxes-link-overlay.css';

  .skillWidget {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    margin: 8px 6px;
    padding: 10px;
    height: 90px;
    cursor: pointer;
    vertical-align: middle;

    &--small {
      width: 90px;
    }

    &--long {
      width: 196px;
    }

    @mixin boxes 3px;
    @mixin boxes-link;
    @mixin boxes-link-overlay 25%;

    @define-mixin skill-level $percent {
      &--$(percent):after {
        height: $percent%;
      }
    }
    @mixin skill-level 100;
    @mixin skill-level 90;
    @mixin skill-level 80;
    @mixin skill-level 70;
    @mixin skill-level 60;
    @mixin skill-level 50;
    @mixin skill-level 40;
    @mixin skill-level 30;
    @mixin skill-level 20;
    @mixin skill-level 10;

    &:after {
      top: auto !important;
    }
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
</style>
