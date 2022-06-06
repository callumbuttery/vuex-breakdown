<template>
  <div class="main-text">
    The coloured number on screen is red from state
    
    <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> = {{ $store.getters.counterSquared }} is calculated from a
      getter
    </div>
    Both the + and - buttons use an action to call a random number API. A
    mutation is then used to incremet the counter

    Finally, the color search input mutates the color in state
  </div>
</template>

<script>
export default {
  name: "Explaination-text",
};
</script>

<style>
.main-text {
  margin-top: 50px;
  margin-right: 30%;
  margin-left: 30%;
}
</style>