<template lang="pug">
CleanLayout
  .resume
    .resume-header
      h2.resume-name {{ info.name }}
      p.resume-header-info {{ info.address }}
      p.resume-header-info {{ info.email }}
      p.resume-header-info {{ info.github }}
      p.resume-header-info {{ info.portfolio }}
      p.resume-header-info {{ info.mobile }}

    .resume-section
      h3.resume-title Experiences

      .resume-experience(v-for="exp in experiences")
        a(:href="exp.url" target="_blank" rel="noopener").resume-experience-title
          h4 {{ exp.title }}
          |  - 
          small {{ exp.name }}
        span.resume-experience-subtitle {{ exp.start }} - {{ exp.end }}
        span.resume-experience-subtitle {{ exp.location }}

        .resume-section-content
          p(v-html="exp.content")
          p {{ exp.knowledge }}

    .resume-section
      h3.resume-title Education
      .resume-section-content
        dl.resume-education
          dt.resume-education-data(style="grid-column: span 2") {{ education.university }}
          dt.resume-education-term Major: 
          dd.resume-education-data {{ education.major }}
          dt.resume-education-term Minor: 
          dd.resume-education-data {{ education.minor }}
          dt.resume-education-term CS Coursework: 
          dd.resume-education-data {{ education.coursework_ee }}
          dt.resume-education-term EE Coursework: 
          dd.resume-education-data {{ education.coursework_cs }}


    .resume-section
      h3.resume-title Skills
      .resume-section-content
        p {{ skills.expert.join(', ') }}
        p {{ skills.moderate.join(', ') }}
        p {{ skills.other.join(', ') }}



</template>

<script>
import education from '~/assets/data/resources/education.json';
import skills from '~/assets/data/resources/skills.json';
import info from '~/assets/data/resources/info.json';

export default {
  name: 'Resume',
  data: () => ({
    education,
    skills,
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
  allExperience(limit: 100 sortBy: "sort") {
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
  max-width: 100ch
  margin: 60px auto
  border: 1px solid $dark
  background-color: $white
  color: $dark
  line-height: 1.5em

.resume-header
  padding: 20px 60px
  border-bottom: 1px solid $slategray

.resume-section
  padding: 20px 60px
  &:not(:last-child)
    border-bottom: 1px solid $slategray

.resume-title
  font-size: 20px
  margin-top: 0.5em
  margin-bottom: 0.5em

.resume-section-content
  font-size: 16px
  margin-left: 20px
  text-align: justify
  ul
    padding-left: 15px

.resume-experience
  &:not(:last-child)
    border-bottom: 1px solid $slategray

.resume-experience-title
  display: block
  font-weight: bold
  color: $dark
  text-decoration: none
  margin-top: 1em
  margin-bottom: 0.5em
  h4
    display: inline-block
    margin: 0
  small
    font-weight: normal

.resume-experience-subtitle
  display: block
  font-size: 12px
  color: lighten($dark, 20%)

.resume-education
  display: grid
  grid-column-gap: 10px
  grid-template-columns: 140px 1fr

.resume-education-data
  font-weight: bold
  margin: 0
</style>
