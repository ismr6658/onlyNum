<template>
    <el-input v-model="myValue" placeholder="请输入"></el-input>
</template>

<script>
export default {
    data() {
        return {
            myValue: this.value,
        };
    },
    props: {
        value: {
            type: [String, Number],
            default: "",
            require: true,
        },
        integer: {
            type: Boolean,
            default: true,
        },
        range: {
            type: Array,
        },
        decimals: {
            type: Number,
        },
    },
    watch: {
        value(newVal) {
            console.log(newVal);
            if (!newVal) {
                return;
            }
            if (!this.integer) {
                let n;
                if (this.range) {
                    n = newVal.toString().replace(/\.{2,}/g, "");
                    n = n
                        .replace(".", "$#$")
                        .replace(/\./g, "")
                        .replace("$#$", ".");
                    this.myValue =
                        n.replace(/[^\d.]/g, "") >= this.range[0] &&
                        n.replace(/[^\d.]/g, "") <= this.range[1]
                            ?  n.replace(/[^\d.]/g, "")
                            : "";
                } else {
                    n = newVal.toString().replace(/\.{2,}/g, "");
                    n = n
                        .replace(".", "$#$")
                        .replace(/\./g, "")
                        .replace("$#$", ".");
                    this.myValue = n.replace(/[^\d.]/g, "");
                }
            } else {
                if (this.range) {
                    let num = newVal.toString().replace(/[^\d]/g, "");
                    this.myValue =
                        num >= this.range[0] && num <= this.range[1] ? num : "";
                } else {
                    this.myValue = newVal.toString().replace(/[^\d]/g, "");
                }
            }
        },
        myValue(newVal) {
            this.$emit("input", newVal);
        },
    },
};
</script>

<style scoped lang="less">
</style>
