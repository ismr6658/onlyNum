import number from "./components/number.vue";

const onlynum = {
    install(Vue){
        Vue.component('onlynum',number)
    }
}
if(typeof window !== 'undefined' && window.Vue){
    window.Vue.use(onlynum)
}
export default onlynum;