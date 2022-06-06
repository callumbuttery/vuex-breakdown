<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <counters />
    <buttons />
    <inputs />
    <Explaination />
  </div>
</template>

<script>
import counters from "../components/Counters.vue";
import buttons from "../components/Buttons.vue";
import inputs from "../components/Input.vue";
import Explaination from '../components/Explaination-text.vue'

export default {
  name: "Home",
  components: {
    counters,
    buttons,
    inputs,
    Explaination
  },
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
