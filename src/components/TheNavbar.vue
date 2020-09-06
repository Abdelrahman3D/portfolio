<template lang="pug">
header
  nav.navbar
    a.navbar-brand
      span.brand-letter Ismail9k
      span.brand-dash _
    .navbar-end
      ul.navbar-menu
        li: a.navbar-item(href="#working") working
        li: a.navbar-item(href="#projects") projects
        li: a.navbar-item(href="#writings") writings
        li: a.navbar-item(href="#contact") contact
        li: .navbar-item
          label.theme-switcher(for="themeSwitcher")
            span.sr-only Theme mode switcher
            input#themeSwitcher(type="checkbox" aria-labelledby="")
            span(class="theme-🌝") 🌝
            span(class="theme-🌚") 🌚
</template>

<script>
export default {
  name: 'TheNavbar',
  mounted() {
    this.initThemeSwitcher();
  },
  methods: {
    initThemeSwitcher() {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const themeSwitcher = document.querySelector('#themeSwitcher');

      themeSwitcher.checked = mql.matches;
      themeSwitcher.addEventListener('change', this.themeChangeHandler);
      mql.addListener(this.themeChangeHandler);
    },

    themeChangeHandler(e) {
      const body = document.querySelector('body');
      const themeSwitcher = document.querySelector('#themeSwitcher');
      const isDark = (e.target && e.target.checked) || e.matches;

      themeSwitcher.checked = isDark;
      body.classList.remove('theme-dark', 'theme-light');
      body.classList.add(`theme-${isDark ? 'dark' : 'light'}`);
    },
  },
};
</script>
