<template lang="pug">
footer.footer
  ul.footer-list
    li(v-for="social in Object.keys(socials)")
      a.footer-item(:href="socials[social]" target="_blank" rel="noopener")
        AppIcon(:name="social")
</template>

<script>
import AppIcon from '~/components/AppIcon';
export default {
  components: { AppIcon },
  computed: {
    socials() {
      return this.$static.resource;
    },
  },
};
</script>

<static-query>
query {
  resource(path:"/socials") {
    twitter
    github
    medium
    linkedin
    dev
    mail
  }
}
</static-query>
