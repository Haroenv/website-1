<template>
  <div class="notification" :class="notification.type"
    :style="{ display: notification.message ? 'block' : 'none'}"
    @mouseover="pause" @mouseout="play" @click="close">
    <p class="message" v-html="notification.message"></p>
  </div>
</template>

<script>
  import * as notificationActions from 'src/store/modules/notification';

  const DURATION = 5000;

  export default {
    replace: true,
    vuex: {
      getters: {
        notification(state) {
          return state.notification.queue[0] || {};
        },
      },
      actions: {
        remove: notificationActions.remove,
      },
    },
    methods: {
      pause() {
        clearTimeout(this.timeout);
      },
      play() {
        // Clear any active timeouts
        clearTimeout(this.timeout);
        // Upon timeout complete clear timeout and remove notification
        this.timeout = setTimeout(() => {
          this.pause();
          this.remove(this.notification);
        }, this.notification.duration || DURATION);
      },
      close() {
        // If closing notification and url option is available then action route and remove notification
        if (this.url) this.$router.go(this.url);
        this.remove(this.notification);
      },
    },
    watch: {
      notification(newVal, oldVal) {
        // Watch for changes is notification to display. If message and type are the same then skip.
        if (!newVal) return;
        if (oldVal.message === newVal.message && oldVal.type === newVal.type) {
          this.remove(this.notification);
          return;
        }
        this.play();
      },
    },
    beforeDestroy() {
      // Clear notification timeout
      clearTimeout(this.timeout);
    },
  };
</script>
