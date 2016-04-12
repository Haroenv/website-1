<template>
  <header>
    <nav>
      <a v-link="{ name: 'portfolio' }">Portfolio</a>
      <a v-link="{ name: 'blog' }">Blog</a>
      <a v-link="'/contact'">Contact</a>
    </nav>
    <progress-bar> </progress-bar>
  </header>
  <main v-event-optimizer.window="resize">
    <aside class="clearfix">
      <partial name="cartoon-me"> </partial>
      <div>
        <p><strong>Blake Newman</strong></p>
        <p>Web Developer</p>
      </div>
    </aside>
    <router-view> </router-view>
  </main>
</template>

<script>
  import progressBar from './components/progress-bar.vue';
  import eventOptimizer from './directives/event-optimizer.js';
  import cartoonMe from './partials/cartoon-me.html';

  export default {
    components: { progressBar },
    partials: { cartoonMe },
    directives: { eventOptimizer },
  };
</script>

<style src="normalize.css"></style>
<style src="./styles/base/layout.css"></style>
<style src="./styles/base/typeface.css"></style>
<style src="./styles/base/header.css"></style>
<style src="./styles/highlight/hybrid.css"></style>
<style src="./styles/highlight/idea.css"></style>
