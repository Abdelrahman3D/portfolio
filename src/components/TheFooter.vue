<template lang="pug">
footer.footer
  ul.footer-list
    li(v-for="social in socials")
      a.footer-item(:href="social.href" target="_blank" rel="noopener")
        AppIcon(:name="social.name")
</template>

<script>
import AppIcon from '~/components/AppIcon';
import socials from '~/assets/data/socials';
export default {
  components: { AppIcon },
  data: () => ({ socials }),
};
</script>
