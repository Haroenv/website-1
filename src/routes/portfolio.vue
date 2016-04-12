<template>
  <div class="page page__portfolio">
    <section class="page__portfolio__main clearfix">
      <h1>Portfolio</h1>
      <div>
        <portfolio-widget title="Vue.js" image="vuejs.jpg" link="http://www.vuejs.org">
          <p><a href="http://www.vuejs.org">Vue.js</a> is a library for creating reactive components for Web Interfaces. Together with other tools you can call it a <i>“framework”</i>, although all tools are optional.</p>
          <p>I am currently on the core team. I have brought support for stylelint to .Vue files, and continue to help shape <a href="http://www.vuejs.org">Vue.js</a> and it's tools. I am now writing a technical book for <a href="http://www.vuejs.org">Vue.js</a>.</p>
        </portfolio-widget>

        <portfolio-widget title="Present 2 Glass" image="glass.jpg"
          link="https://github.com/blake-newman/Present2Glass_Client">
          <p>When purchasing <a href="https://developers.google.com/glass/">Google Glass</a>. A real-time application for communicatating brief presentation notes to <a href="https://developers.google.com/glass/">Google Glass</a> to help aid those presenting.</p>
          <p>The application is built in Java and Sockets to communicate between the devices. There was challenges to building an application on a Beta platform, but worth the experience.</p>
        </portfolio-widget>

        <portfolio-widget title="Sainsburys" image="sainsburys.jpg" link="http://www.sainsburys.work/">
          <p>Currently working at <a href="http://www.sainsburys.work/">Sainsbury's</a> as a web developer. Engaging my skill set with many others to deliver websites and tools.</p>
          <p>Working on <a href="https://sainsburysentertainment.co.uk">Sainsbury's Entertainment</a>, helping to modernise the platforms architecture to bring the most value. I delivered a <a href="https://register.sainsburysentertainment.co.uk">migration and portal tool</a> for UK Nook customers to onboard our platform simply.</p>
        </portfolio-widget>

        <portfolio-widget title="Ignition" image="ignition.jpg" link="http://www.ignitiononline.com" >
          <p>I have proudly built plenty for <a href="http://www.ignitiononline.com">Ignition</a> whilst being their Lead Developer. Projects vary from applications, Command line tools, Websites and eLearnings.</p>
          <p>Projects at <a href="http://www.ignitiononline.com">Ignition</a> were fast paced and challenging. I have worked with High profile Clients such as <a href="https://www.goodyear.eu/">Goodyear</a>, <a href="https://www.toyota-europe.com/">Toyota Europe</a>, <a href="www.nissan.co.uk/">Nissan GB</a>, <a href="https://www.renault.co.uk/">Renault GB</a>, <a href="http://www.loreal.com/group">L'Oreal</a> and <a href="http://www.ignitiononline.com/about/#clients">more</a>.</p>
        </portfolio-widget>

        <portfolio-widget title="Eframe" image="eframe.jpg" link="http://www.ignitiononline.com">
          <p>Eframe is a closed source tool for <a href="http://www.ignitiononline.com">Ignition</a>; providing an ecosystem of web components. This tool includes; hierarchial state management, translation support and agnostic database integration.</p>
          <p>Managed with a CLI to create projects and components. Further aiding it's modular structure; it features exporting and importing translation, smart packaging, component management, dev tools and test utilities.</p>
        </portfolio-widget>
      </div>
    </section>

    <section class="page__portfolio__skills clearfix">
      <h1>Skills</h1>
      <p>The list below are some key skills. These is is only a brief list, being adaptive enough to work within any environment, workflow or libraries. I have always learnt development concepts and not the languages, I'm more versatile by knowing the concepts, so I can swiftly switch between many languages. Hover over the skills to see my level of experience.</p>
      <div class="page__portfolio__skills__items clearfix">
        <skill-widget title="HTML" level="100" image="html5.svg"> </skill-widget>
        <skill-widget title="CSS" level="90" image="css3.svg"> </skill-widget>
        <skill-widget title="JavaScript" level="100" image="javascript.svg"> </skill-widget>
        <skill-widget title="ES6" level="100" image="es6.svg"> </skill-widget>
        <skill-widget title="Vue.js" level="100" image="vuejs.png" link="http://www.vuejs.org"> </skill-widget>
        <skill-widget title="React" level="50" image="react.svg" link="https://facebook.github.io/react/">
        </skill-widget>
        <skill-widget title="AngularJS" level="90" size="long" image="angular.svg" link="http://www.angularjs.org">
        </skill-widget>
        <skill-widget title="backbone.js" level="60" size="long" image="backbone.svg" link="http://www.backbonejs.org">
        </skill-widget>
        <skill-widget title="CoffeeScript" level="100" size="long" image="coffeescript.svg"
          link="http://www.coffeescript.org">
        </skill-widget>
        <skill-widget title="TypeScript" level="70" size="long" image="typescript.svg"
          link="http://www.typescriptlang.org">
        </skill-widget>
        <skill-widget title="Sass" level="70" image="sass.svg" link="http://www.sass-lang.com"> </skill-widget>
        <skill-widget title="less" level="70" image="less.svg" link="http://www.lesscss.org"> </skill-widget>
        <skill-widget title="Stylus" level="90" image="stylus.svg" link="http://www.learnboost.github.io/stylus/">
        </skill-widget>
        <skill-widget title="cssnext" level="80" size="long" image="cssnext.svg" link="http://cssnext.io/">
        </skill-widget>
        <skill-widget title="PostCSS" level="80" image="postcss.svg" link="https://github.com/postcss/postcss">
        </skill-widget>
        <skill-widget title="JQuery" level="100" size="long" image="jquery.svg" link="http://www.jquery.com">
        </skill-widget>
        <skill-widget title="Git" level="70" image="git.png" link="http://www.git-scm.com"> </skill-widget>
        <skill-widget title="NPM" level="90" image="npm.svg" link="http://www.npmjs.com"> </skill-widget>
        <skill-widget title="Node.js" level="80" size="long" image="node.svg" link="http://www.nodejs.org">
        </skill-widget>
        <skill-widget title="Brunch" level="70" image="brunch.svg" link="http://www.brunch.io"> </skill-widget>
        <skill-widget title="Webpack" level="70" image="webpack.svg" link="https://webpack.github.io/"> </skill-widget>
        <skill-widget title="Grunt" level="60" image="grunt.svg" link="http://www.gruntjs.com"> </skill-widget>
        <skill-widget title="Gulp" level="60" image="gulp.png" link="http://www.gulpjs.com"> </skill-widget>
        <skill-widget title="Bower" level="100" image="bower.svg" link="http://www.bower.io"> </skill-widget>
        <skill-widget title="CouchDB" level="40" image="couchdb.svg" link="http://www.couchdb.apache.org/">
        </skill-widget>
        <skill-widget title="Android" level="50" image="android.svg" link="http://www.android.com"> </skill-widget>
        <skill-widget title="Google Glass" level="60" image="glass.svg" link="http://developers.google.com/glass">
        </skill-widget>
        <skill-widget title="SCORM &amp; Tin Can API" level="70" image="scorm.png" link="http://www.scorm.com">
        </skill-widget>
        <skill-widget title="Photoshop" level="50" image="photoshop.png" link="http://www.adobe.com"> </skill-widget>
        <skill-widget title="Illustrator" level="40" image="illustrator.jpg" link="http://www.adobe.com"> </skill-widget>
        <skill-widget title="Flash Proffesional" level="80" image="flash.jpg" link="http://www.adobe.com">
        </skill-widget>
        <skill-widget title="Java" level="60" image="java.svg" link="http://www.java.com"> </skill-widget>
        <skill-widget title="PHP" level="50" image="php.svg" link="http://www.php.net"> </skill-widget>
        <skill-widget title="Python" level="30" image="python.svg" link="http://www.python.org/"> </skill-widget>
        <skill-widget title="Ruby" level="40" image="ruby.svg" link="http://www.ruby-lang.org"> </skill-widget>
      </div>
    </section>
  </div>
</template>

<script>
  import portfolioWidget from '../components/portfolio-widget.vue';
  import skillWidget from '../components/skill-widget.vue';
  import progress from '../mixins/progress.js';

  export default {
    components: {
      portfolioWidget,
      skillWidget,
    },
    mixins: [ progress ],
    ready() {
      this.progressFinish();
    },
  };
</script>

<style lang="postcss">
  .page__portfolio {
    &__skills__items {
      width: 100%;
      text-align: center;
    }

    & > section {
      margin: 0 0 50px 0;

      & > h1 {
        margin-bottom: 30px;
        padding: 10px 0;
        border-top: 2px solid #000;
        border-bottom: 2px solid #000;
      }
    }
  }
</style>

<!-- Media styles -->
<style lang="postcss">
  @media print {
    .page__portfolio__main,
    .page__portfolio__skills {
      page-break-before: always;
    }
  }
</style>
