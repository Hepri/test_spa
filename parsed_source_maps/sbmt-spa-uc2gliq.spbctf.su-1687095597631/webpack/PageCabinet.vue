<template>
  <div :class="$options.name">
    <app-headline>Cabinet</app-headline>

    <app-intro :class="`${$options.name}__intro`">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren.
      </p>
    </app-intro>

    <app-text :class="`${$options.name}__text`">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sit amet.
      </p>

      <p v-for="article in news.items.news" :key="user.id">
        <app-headline :level="2">{{ article.caption }}</app-headline>
        {{ article.text }}
      </p>

      <app-headline :level="3"></app-headline>

    </app-text>
  </div>
</template>

<script>
import AppHeadline from '../app/AppHeadline.vue';
import AppIntro from '../app/AppIntro.vue';
import AppText from '../app/AppText.vue';

export default {
  name: `PageArticle`,
  components: {
    AppHeadline,
    AppIntro,
    AppText,
  },
  computed: {
    user () {
        return this.$store.state.authentication.user;
    },
    news () {
        return this.$store.state.news.all;
    }
  },
  created () {
    this.$store.dispatch('news/init', {role: this.$store.state.authentication.role});
    this.$store.dispatch('news/getAll');
  }
};
</script>

<style lang="scss" scoped>
.PageArticle {
  &__intro,
  &__text {
    margin-top: 1.5em;
  }
}
</style>
