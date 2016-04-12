<template>
  <div class="progressBar" :class="{ 'progressBar--active' : progressActive }">
    <div class="progressBar__bar"
      :class="['progressBar__bar--' + progressState]"
      :style="{ width: progressPercent + '%' }">
    </div>

    <div class="progressBar__spinner" :class="'progressBar__spinner--' + progressState">
      <div></div>
    </div>
  </div>
</template>

<script>
  import progress from '../mixins/progress.js';

  export default {
    mixins: [ progress ],
  };
</script>

<style lang="postcss">
  @keyframes spinner-animation {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }

  @keyframes spinner-animation {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }

  .progressBar {
    position: relative;
    opacity: 0;
    transition: opacity 0.4s ease 0.3s, width 0.2s ease, background-color 0.2s ease;

    &--active { opacity: 1; }

    &__bar {
      height: 2px;
      width: 0%;
      background-color: var(--blue);

      &--error { background-color: var(--red); }
      &--success { background-color: var(--green); }
    }

    &__spinner {
      position: absolute;
      top: 20px;
      right: 20px;
      height: 15px;
      width: 15px;

      & > div {
        display: block;
        position: absolute;
        border-radius: 50%;
        height: 100%;
        width: 100%;
        box-shadow: 0 2px 0 0 var(--blue);
        animation: spinner-animation 0.6s linear infinite;
      }

      &--error > div { box-shadow: 0 2px 0 0 var(--red); }
      &--success > div { box-shadow: 0 2px 0 0 var(--green); }
    }
  }

</style>
