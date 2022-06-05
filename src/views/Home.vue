<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">{{ $store.state.counter }}</div>
    <div class="buttons">
      <button @click="$store.dispatch('decreaseCounterAction')">-</button>
      <button @click="$store.dispatch('increaseCounterAction')">+</button>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'Home',
  mounted() {
    axios
  }
}
</script>

<style scoped>
  div {
    margin-bottom: 10px;
  }

  .counter{
    font-size: 70px;
  }

  .buttons button{
    font-size: 40px;
    width: 50px;
    margin: 0 10px;
  }
</style>
