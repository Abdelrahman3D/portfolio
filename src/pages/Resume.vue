<template lang="pug">
CleanLayout
  .resume
    .resume-header
      h2.resume-name {{ info.name }}
      a.resume-header-info(:href="info.portfolio" target="_blank")
        AppIcon(name="home")
        | {{ info.portfolio }}
      a.resume-header-info(:href="info.github" target="_blank")
        AppIcon(name="github")
        | {{ info.github }}
      a.resume-header-info(:href="`mailto:${info.email}?Subject=Hello`" target="_blank")
        AppIcon(name="mail")
        | {{ info.email }}
      a.resume-header-info(:href="`tel:${info.portfolio}`" target="_blank")
        AppIcon(name="phone")
        | {{ info.mobile }}
      a.resume-header-info
        AppIcon(name="landMark")
        | {{ info.address }}

    .resume-section
      h3.resume-title Summary
      .resume-section-content
        p {{ summary.summary }}
    .resume-section
      h3.resume-title Experiences

      .resume-experience(v-for="exp in experiences")
        a(:href="exp.url" target="_blank" rel="noopener").resume-experience-title
          h4 {{ exp.title }}
          |  - 
          small {{ exp.name }}
          span.resume-experience-subtitle {{ exp.location }}
          span.resume-experience-date {{ exp.start }} - {{ exp.end }}
        
        .resume-section-content
          div.resume-experience-content(v-html="exp.content")
          h5 Leveraged knowledge:
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
import summary from '~/assets/data/resources/summary.json';
import skills from '~/assets/data/resources/skills.json';
import info from '~/assets/data/resources/info.json';
import AppIcon from '~/components/AppIcon';

export default {
  name: 'Resume',
  components: { AppIcon },
  data: () => ({
    education,
    summary,
    skills,
    info,
  }),
  computed: {
    experiences() {
      return this.$static.allExperience.edges.map(({ node }) => node) || [];
    },
  },
  metaInfo: {
    title: 'Resume',
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
@import '../stylus/resume'
</style>
