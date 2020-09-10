<template lang="pug">
CleanLayout
  .resume
    .resume-header
      h2.resume-name {{ info.name }}
      p.resume-country {{ info.address }}

    .resume-section
      h3.resume-title Summary

    .resume-section
      h3.resume-title Experiences
      div(v-for="exp in experiences")
        p {{ exp }}

    .resume-section
      h3.resume-title Education
      p {{ education }}

    .resume-section
      h3.resume-title Skills
      p {{ tools }}



</template>

<script>
import education from '~/assets/data/resources/education.json';
import tools from '~/assets/data/resources/tools.json';
import info from '~/assets/data/resources/info.json';

export default {
  name: 'Resume',
  data: () => ({
    education,
    tools,
    info,
  }),
  computed: {
    experiences() {
      return this.$static.allExperience.edges.map(({ node }) => node) || [];
    },
  },
};
</script>

<static-query>
query {
  allExperience(limit: 100) {
    edges {
      node {
        name
        url
        title
        location
        start
        end
        knowledge
        content
      }
    }
  }
}
</static-query>

<style lang="stylus">
@import '../stylus/utils/_index.styl'

.resume
  padding: 40px
  border: 1px solid $dark
  background-color: $white
  color: $dark
</style>
