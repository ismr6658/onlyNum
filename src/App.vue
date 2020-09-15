<template>
    <div id="app">
        <div class="box">
          <span>可输入1-10之间任意数字：</span>
            <number v-model="num" :integer="false" :range="[1,10]" :decimals='2' />
            <p>输出：{{num ? num :''}}</p>
        </div>
    </div>
</template>

<script>
import number from "./components/number.vue";

export default {
    name: "App",
    components: {
        number,
    },
    data() {
        return {
            num: 1,
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
