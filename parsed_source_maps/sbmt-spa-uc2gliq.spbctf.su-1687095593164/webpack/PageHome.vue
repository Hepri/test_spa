<template>
  <div :class="$options.name">
    <app-hero :action="{ to: { name: `cabinet` }, label: `Click me!` }">
      <template slot="headline">
        Welcome!
      </template>

      <p>
        Lorem ipsum dolor sit amet, <app-link :to="{ name: `list` }">
        consetetur</app-link> adipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>
    </app-hero>

  </div>
</template>

<script>
import AppHero from '../app/AppHero.vue';
import AppLink from '../app/AppLink.vue';
import AppTeaser from '../app/AppTeaser.vue';
import AppTeaserList from '../app/AppTeaserList.vue';
import AppTeaserListItem from '../app/AppTeaserListItem.vue';

export default {
  name: `PageHome`,
  components: {
    AppHero,
    AppLink,
    AppTeaser,
    AppTeaserList,
    AppTeaserListItem,
  },
};
</script>

<style lang="scss" scoped>
.PageHome {
  $section-spacing: 3em;

  &__teaserList {
    margin-top: $section-spacing;
  }
}
</style>
