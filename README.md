# 数字输入框-ElNumber

基于ElementUI的数字输入框

## 特性

- 仅支持输入数字的输入框
- 支持小数位数限制、输入区间限制

## 示例

```html
<number
    :value="test"
    @input="test = $event"
/>
 ```

 ```js
export default {
    data() {
        return {
            test: 1
        };
    },
    ...
}
 ```

## 参数

### value[String, Number]

初始值，默认''

### decimals[Number]

保留小数位数，值为非负整数，默认0，即只能输入整数

### range[Array]

长度为2的数组，设置输入数字的区间限制

### round[Boolean]

保留小数位是否需要四舍五入，默认false

### zeroFill[Boolean]

输入不足小数位是否需要补零，默认false

### placeholder[String]

输入框占位符，同ElInput控件，默认“请输入”

### disabled[Boolean]

禁用，同ElInput控件，默认false

### size[String]

尺寸，同ElInput控件，默认''

### readonly[Boolean]

只读，同ElInput控件，默认false

## 事件

### input

输入回调，参数 value[String]
