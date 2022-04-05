<script setup lang="ts">
import TheSudoku from "./components/TheSudoku.vue";
</script>

<template>
  <header>
    <img
      alt="PK Logo"
      class="logo"
      src="./assets/logo.png"
      width="125"
      height="125"
    />
  </header>

  <main>
    <h1>The Sudoku Solver</h1>
    <TheSudoku />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}
h1 {
  font-size: 4rem;
  font-weight: bold;
  margin: 2rem auto;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
