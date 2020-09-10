<template lang="pug">
footer.footer
  ul.footer-list
    li(v-for="social in socials")
      a.footer-item(:href="social.link" target="_blank" rel="noopener")
        AppIcon(:name="social.name")
</template>

<script>
import AppIcon from '~/components/AppIcon';

export default {
  components: { AppIcon },
  computed: {
    socials() {
      return this.$static.allSocial.edges.map(({ node }) => node) || [];
    },
  },
};
</script>

<static-query>
query {
  allSocial(limit: 10) {
    edges {
      node {
        name
        link
      }
    }
  }
}
</static-query>
