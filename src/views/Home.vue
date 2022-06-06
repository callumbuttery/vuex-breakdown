<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter" :style="{ color: $store.state.color }">{{ $store.state.counter }}</div>
    <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2</sup> =
      {{ $store.getters.counterSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decreaseCounterAction')">-</button>
      <button @click="$store.dispatch('increaseCounterAction')">+</button>
    </div>
    <div>
      <input placeholder="Enter Colour" type="text" class="input-box" v-model="colorCode">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    colorCode: {
      get() {
        return this.$store.state.color
      },
      set(newColor) {
        this.$store.commit('changeColor', newColor);
      }
    }
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

  .input-box {
    text-align: center;
  }
</style>
