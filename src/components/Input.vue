<template>
  <div>
    <input
      placeholder="Enter Colour"
      type="text"
      class="input-box"
      v-model="colorCode"
    />
  </div>
</template>

<script>
export default {
  name: "input",
  computed: {
    colorCode: {
      get() {
        return this.$store.state.color;
      },
      set(newColor) {
        this.$store.commit("changeColor", newColor);
      },
    },
  },
};
</script>

<style>
.input-box {
  text-align: center;
}
</style>