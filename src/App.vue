<template>
  <div id="app">
    <div class="box">
      <span>可输入1-10之间任意数字：</span>
      <number :value="num" :range="[0,10]" :decimals="2" zeroFill @input="num = $event" />
      <p>输出：{{ num }}</p>
    </div>
  </div>
</template>

<script>
import number from "./components/number.vue";

export default {
  components: {
    number,
  },
  data() {
    return {
      num: null
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  width: 400px;
  margin: 0 auto;
}
</style>
