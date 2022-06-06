<template>
  <div class="buttons">
    <button @click="$store.dispatch('decreaseCounterAction')">-</button>
    <button @click="$store.dispatch('increaseCounterAction')">+</button>
  </div>
</template>

<script>
export default {
    name: 'buttons',
};
</script>

<style>
.buttons button {
  font-size: 40px;
  width: 50px;
  margin: 0 10px;
}
</style>