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
            /*输入的值*/
            type: [String, Number],
            default: "",
            require: true,
        },

        range: {
            /*控制输入区间*/
            type: Array,
            default: () => {
                return [];
            },
        },
        decimals: {
            /*保留小数位*/
            type: Number,
            default: 0,
        },
    },
    watch: {
        value(newVal) {
            // console.log(newVal);
            if (!parseFloat(newVal)) {
                this.myValue = null;
                return;
            }

            if (/^[1-9]+$/.test(this.decimals)) {
                let n;
                if (Array.isArray(this.range) && this.range.length == 2) {
                    n = newVal.toString().replace(/\.{2,}/g, "");
                    n = n
                        .replace(".", "$#$")
                        .replace(/\./g, "")
                        .replace("$#$", ".");
                    let output =
                        n.replace(/[^\d.]/g, "") >= this.range[0] &&
                        n.replace(/[^\d.]/g, "") <= this.range[1]
                            ? n.replace(/[^\d.]/g, "")
                            : "";
                            console.log(output);
                    if (
                        output.length &&
                        output.length -
                            1 -
                            output.indexOf(".") -
                            this.decimals >
                            0
                    ) {
                        this.myValue = this.retainDecimal(
                            output,
                            this.decimals
                        );
                    } else {
                        this.myValue = output;
                    }
                } else {
                    n = newVal.toString().replace(/\.{2,}/g, "");
                    n = n
                        .replace(".", "$#$")
                        .replace(/\./g, "")
                        .replace("$#$", ".");
                    let output = n.replace(/[^\d.]/g, "");
                    if (
                        output.length -
                            1 -
                            output.indexOf(".") -
                            this.decimals >
                        0
                    ) {
                        this.myValue = this.retainDecimal(
                            output,
                            this.decimals
                        );
                    } else {
                        this.myValue = output;
                    }
                }
            } else {
                let output = "";
                if (Array.isArray(this.range) && this.range.length == 2) {
                    let num = newVal.toString().replace(/[^\d]/g, "");
                    output =
                        num >= this.range[0] && num <= this.range[1] ? num : "";
                } else {
                    output = newVal.toString().replace(/[^\d]/g, "");
                }
                this.myValue = parseInt(output);
            }
        },
        myValue(newVal) {
            this.$emit("input", newVal);
        },
    },
    methods: {
        retainDecimal(num, decimals) {
            if (isNaN(num) || (!num && num !== 0)) {
                return "--";
            }
            // 默认为保留的小数点后两位
            let dec = decimals ? decimals : 2;
            let tempNum = Number(num);
            let pointIndex = String(tempNum).indexOf(".") + 1; // 获取小数点的位置 + 1
            let pointCount = pointIndex
                ? String(tempNum).length - pointIndex
                : 0; // 获取小数点后的个数(需要保证有小数位)
            // 源数据为整数或者小数点后面小于decimals位的作补零处理
            if (pointIndex === 0 || pointCount <= dec) {
                let tempNumA = tempNum;
                if (pointIndex === 0) {
                    tempNumA = `${tempNumA}.`;
                    for (let index = 0; index < dec - pointCount; index++) {
                        tempNumA = `${tempNumA}0`;
                    }
                } else {
                    for (let index = 0; index < dec - pointCount; index++) {
                        tempNumA = `${tempNumA}0`;
                    }
                }
                return tempNumA;
            }
            let realVal = "";
            // 截取当前数据到小数点后decimals位
            realVal = `${String(tempNum).split(".")[0]}.${String(tempNum)
                .split(".")[1]
                .substring(0, dec)}`;
            // 判断截取之后数据的数值是否为0
            if (realVal == 0) {
                realVal = 0;
            }
            return realVal;
        },
    },
};
</script>

<style scoped>
</style>
