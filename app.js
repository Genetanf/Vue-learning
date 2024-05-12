// Vue.js 3.x
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



//迴圈
var cycle=Vue.createApp({
    data:function(){
        return{
            list:["小明","小白","小黃"]
        }
    },
});
cycle.mount("#cycle");



//輸入資訊
var text=Vue.createApp({
    data:function(){
        return{
            text:"預設資訊"
        }
    },
});
text.mount("#text");



//事件
var test=Vue.createApp({
    methods: {
        testEvent:function(){
            alert("Click Success!");
        }
    }
});
test.mount("#event");



//條件式
var isShow=Vue.createApp({
    data:function(){
        return{
            speak:"條件成立",
            isShow:true            
        }
    }
});

isShow.mount("#show");



// v-bind
var bind=Vue.createApp({
    data:function(){
        return{
            text1:"使用v-bind綁定資料",
            text2:"使用縮寫綁定資料"
        };
    }
});
bind.mount("#bind");

// v-bind (class attributes)
var bindClass=Vue.createApp({
    data:function(){
        return{
            className:"test-style-class",
            customStyle:{
                width:"200px",
                margin:"5px",
                padding:"5px 10px",
                color:"white",
                backgroundColor:"black",
                "textAlign":"center"
            }
        }
    }
})
bindClass.mount("#bindClass")



// 圖片綁定 image binding
var image=Vue.createApp({
    data:function(){
        return{
            imageSrc:"picture.jpg",
            typeStyle:{
                width:"200px",
                height:"200px"
            }
        };
    }
});
image.mount("#image");



//v-for
var forSource = Vue.createApp({
    data:function() {
        return {
            scores: {
                '小白':185,
                '小黃':220,
                'Alert':500
            }
            
        };
    }
});
forSource.mount("#forSource");



// v-show
var vshow=Vue.createApp({
    data:function(){
        return{
            imageList:[
                {
                    name:"飛機照片",
                    path:"flight.jpg",
                    is_sth:true,
                },
                {
                    name:"LOGO照片",
                    path:"mepo.jpg",
                    is_sth:true
                },
                {
                    name:"可頌照片",
                    path:"croissant.jpg",
                    is_sth:false
                },
            ],

            showclass:{
                width:"200px",
                height:"200px",
            }
        };
    }
});
vshow.mount("#vshow");



// $ref
const refWay=Vue.createApp({
    data(){
        return{}
    },

    mounted() {
        console.log(this.$refs["reference"])
    },
});
refWay.mount("#refWay");

//$el/$ref 操作
const elRef=Vue.createApp({
    data(){
        return{
            el:{
                width:"N/A",
                hieght:"N/A",
            },
            ref:{
                width:"N/A",
                hieght:"N/A",
            }
        };
    },
    //當元件掛載完成後
    mounted(){
        // $el 裡的顏色文字改為#666
        this.$el.parentElement.style.color="#666";
        //取得 $el 的寬/高
        this.el.width=this.$el.parentElement.clientWidth||"N/A";
        this.el.height=this.$el.parentElement.clientHeight||"N/A";
        // $ref 裡的文字顏色改為#999
        this.$refs["samplerefs"].style.color="#999";
        //取得 $refs 的寬/高
        this.ref.width=this.$refs["samplerefs"].clientWidth||"N/A";
        this.ref.height=this.$refs["samplerefs"].clientHeight||"N/A";

    }
});

elRef.mount("#elRef");



// v-model
//sample 1
const vmodel=Vue.createApp({
    data(){
        return{
            modelmessage:""
        };
    }
});
vmodel.mount("#vmodel");

//sample 2
const sample2=Vue.createApp({
    data(){
        return{
            check:[]
        };
    }
});
sample2.mount("#sample2");

//sample 3
const sapmle3=Vue.createApp({
    data(){
        return{
            checkValue:[],
            options:[
                {text:"A",value:"A"},
                {text:"B",value:"B"},
                {text:"C",value:"C"}
            ]
        };
    }
});
sapmle3.mount("#sample3")



// v-on
const von=Vue.createApp({
    methods:{
        onClick:function(){
            alert("you clicked")
        }
    }
});
von.mount("#vonv");

//sample 2
const onSapmle2=Vue.createApp({
    data(){
        return{
            count:0
        }
    },
    methods:{
        onClick:function(value){
            this.count+=value
        }
    }
});
onSapmle2.mount("#onSample2");

//sample 3
const onSample3=Vue.createApp({
    data(){
        return{
            name:"",
            age:0,
            list:[
                {name:"王大明",age:"20"}
            ]
        };
    },

    methods:{
        add(){  
            this.list.push({
                name:this.name,
                age:this.age
            });
        },
        remove(index){
            this.list.splice(index,1);
        }
    }
});
onSample3.mount("#onSample3");

//sample4
const onSample4=Vue.createApp({
    data(){
        return{
            preview:"",
        };
    },

    methods:{
        handleChange(event){
            var file=event.target.files[0];
            if(file && file.type.match(/^image\/(png|jpg)$/)){
                this.preview=window.URL.createObjectURL(file);
            }
        }
    }
});
onSample4.mount("#onSample4");



// option-API computed 基礎
const computedBasic=Vue.createApp({
    data(){
        return{
            firstName:"小明",
            lastName:"王",
            haveMoney:500,
            usedMoney:130
        }
    },

    computed:{
        fullName(){
            return this.lastName+=this.firstName;
        },
        usage(){
            return (this.usedMoney/this.haveMoney*100)
        },
    },
});
computedBasic.mount("#computedBasic");

// computed 自定義組合變數的更新
const computedSelf=Vue.createApp({
    data(){
        return{
            examineNumber:500,
            passNumber:130,
        }
    },

    computed:{
        passrate:{
            get:function(){
                return (this.passNumber/this.examineNumber)*100;
            },
            set(value){
                this.passNumber=(value/100)*this.examineNumber;
            },
        },
    },
    
});
computedSelf.mount("#computedSelf");

// 匯率計算
const rate=Vue.createApp({
    data(){
        return{
            ntd:100,
            jpnRate:0.2788,
            usdRate:31.22,
        }
    },
    
    computed:{
        jpn(){
            return Math.round(this.ntd/this.jpnRate*100)/100
        },
        
        usd(){
            return Math.round(this.ntd/this.usdRate*100)/100
        }
    }
});
rate.mount("#rate");



// v-watch
const Watch=Vue.createApp({
    data(){
        return{
            mainID:"",
            subID:"",
            currentSubList:[],
            typeList:[
                {
                    id:1,
                    name:"飲料",
                    sub:[
                        {id:1,name:"紅茶"},
                        {id:2,name:"綠茶"},
                        {id:3,name:"麥茶"}
                    ]
                },
                {
                    id:2,
                    name:"蛋糕",
                    sub:[
                        {id:1,name:"蜂蜜蛋糕"},
                        {id:2,name:"起士蛋糕"},
                        {id:3,name:"巧克力蛋糕"}
                    ]
                },
                {
                    id:3,
                    name:"麵包",
                    sub:[
                        {id:1,name:"吐司"},
                        {id:2,name:"肉鬆麵包"}
                    ]
                },
            ]
        }
    },
    watch:{
        mainID:function(newID,oldID){
            if(newID==""){
                this.currentSubList=[];
            }else{
                const tempItem=this.typeList.find(typeItem => {
                    return typeItem.id==newID;
                })
                this.currentSubList=tempItem.sub
            }
        }
    }
})
Watch.mount("#watch");

// sample 2
const watchSample2=Vue.createApp({
    data(){
        return{
            buyList:[],
            showList:[],
            totalPrice:0,
            selectProduct:"",
            products:[
                {id:1,name:"紅茶",price:30},
                {id:2,name:"綠茶",price:35},
                {id:3,name:"麥茶",price:40},
                {id:4,name:"奶茶",price:45},
                {id:5,name:"高山茶",price:50},
            ],
        };
    },

    methods:{
        buy(){
            if(this.selectProduct!==""){
                this.buyList.push(this.selectProduct);
                this.selectProduct="";
            }
        }
    },

    watch:{
        buyList:{
            handler:function(changeList,oldList){
                let total=0;
                let showList=[];
                const prods=this.products;
                changeList.forEach(productsID=>{
                    const selectProd=prods.find(products=>{
                        return products.id==productsID;
                    })
                    if(selectProd.price!==undefined){
                        total+=selectProd.price;
                        showList.push(selectProd);
                    }
                });
                this.showList=showList;
                this.totalPrice=total;
            },
            deep:true,
        }
    }
});
watchSample2.mount("#watchSample2");