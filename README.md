# 数字输入框

### 解决问题：
+ 该组件实现PC端输入框只可输入数字相关内容。
+ 支持整数、小数、以及限制输入数字范围等功能。

 ###参数
    ##### 1、integer :
     ```
     true: 默认值，设置为整数
     false：设置为负数
     ```
     ##### 1、range :
     ```
     [1,100]：设置可输入数字区间范围
     ```
##### 事例
```
<only-num v-model="num" :integer="false" :range="[1,10]"></only-num>
<script>
    export default {
        components: {
            onlyNum,
        },
        data() {
            return {
                num: 1,
            };
        },
    };
</script>
 ```

##### Project setup
```
npm install
```

##### Compiles and hot-reloads for development
```
npm run serve
```

##### Compiles and minifies for production
```
npm run build
```



