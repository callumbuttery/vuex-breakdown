<template>
  <div class="counter" :style="{ color: $store.state.color }">
    {{ $store.state.counter }}
  </div>
  <div class="counter-squared">
    {{ $store.state.counter }}
    <sup>2</sup> =
    {{ $store.getters.counterSquared }}
  </div>
</template>

<script>
export default {
  name: "counters",
};
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 70px;
}
</style>