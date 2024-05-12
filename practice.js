var app=Vue.createApp({
    //資料模型
    data:function(){
        return{
            message:"Hello world!"
        }
    },
});
//Vue.js 渲染畫面的 HTML Element
app.mount("#app");

var app1=Vue.createApp({
    data(){
        return{
            text:"first"
        }
    }
})
app1.mount("#content")

var app2=Vue.createApp({
    data(){
        return{
            list:[1,2,5,3,6]
        }
    }
})
app2.mount("#list")

var app3=Vue.createApp({
    data(){
        return 
    },

    methods:{
        onclick(){
            alert("clicked")
        }
    }
})
app3.mount("#btn")

/* 在 Vue.js 中，computed 和 methods 是兩種不同的方式來處理數據和函數。

computed:

computed 屬性用於定義一個計算屬性，它會根據其依賴的數據屬性進行計算，並返回計算後的結果。
computed 屬性的值會被緩存，只有當其依賴的數據屬性發生變化時，才會重新計算。
computed 屬性通常用於根據數據屬性的變化來計算、衍生新的數據，例如過濾、排序等。
methods:

methods 屬性用於定義一個普通的方法，它可以包含任意的 JavaScript 代碼，並且可以透過 Vue 實例來調用。
methods 中的方法每次調用時都會執行，不會像 computed 那樣被緩存。
methods 主要用於處理事件、執行業務邏輯、進行複雜的運算等。

雖然在某些情況下，computed 和 methods 可能看起來可以共用
但它們的主要目的和行為是不同的。computed 主要用於計算衍生數據
並且具有緩存功能，而 methods 主要用於定義一般的方法，每次都會執行
因此，在選擇使用哪一種方式時，應根據具體的需求和情況來決定。*/
