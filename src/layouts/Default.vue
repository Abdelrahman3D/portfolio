<template lang="pug">
div
  main.main
    TheNavbar
    slot
  TheFooter
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
  components: { TheNavbar, TheFooter },
};
</script>
