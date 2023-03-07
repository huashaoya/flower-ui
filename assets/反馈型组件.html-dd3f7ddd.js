import{_ as y,M as b,p as f,q as v,Q as a,N as n,V as c,t as s,a7 as m,R as h,T as g,a1 as k,a4 as C,a5 as V}from"./framework-e225a5e3.js";const w={data(){return{active:!0,modalVisible:!1,modalVisible1:!1,modalVisible2:!1,modalVisible3:!1,modalVisible4:!1,show_modalCode_1:!1,show_progressCode_1:!1,percentage:0,percentage1:0,customColors:[{color:"#f56c6c",percentage:20},{color:"#6f7ad3",percentage:40},{color:"#e6a23c",percentage:60},{color:"#1989fa",percentage:80},{color:"#5cb87a",percentage:100}],customColor:"green"}},methods:{modalCode_1_Clicked(){this.show_modalCode_1=!this.show_modalCode_1},progressCode_1_Clicked(){this.show_progressCode_1=!this.show_progressCode_1},closeModal(u){this.modalVisible=u,this.modalVisible1=u,this.modalVisible2=u,this.modalVisible3=u,this.modalVisible4=u},lowerProgress(){this.percentage-=10,this.percentage<0&&(this.percentage=0)},addProgress(){this.percentage+=10,this.percentage>100&&(this.percentage=100)},lowerProgress1(){this.percentage1-=10,this.percentage1<0&&(this.percentage1=0)},addProgress1(){this.percentage1+=10,this.percentage1>100&&(this.percentage1=100)}}},p=u=>(C("data-v-c6b8fcbc"),u=u(),V(),u),M=k('<h1 id="反馈型组件" tabindex="-1" data-v-c6b8fcbc><a class="header-anchor" href="#反馈型组件" aria-hidden="true" data-v-c6b8fcbc>#</a> 反馈型组件</h1><h2 id="modal对话框" tabindex="-1" data-v-c6b8fcbc><a class="header-anchor" href="#modal对话框" aria-hidden="true" data-v-c6b8fcbc>#</a> Modal对话框</h2><h3 id="基本用法" tabindex="-1" data-v-c6b8fcbc><a class="header-anchor" href="#基本用法" aria-hidden="true" data-v-c6b8fcbc>#</a> 基本用法</h3><p data-v-c6b8fcbc>点击Modal弹出一个对话框，适合需要定制性更大的场景</p>',4),x={class:"hs-box"},q={key:0},P=p(()=>a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[s(),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("fl-button")]),s(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("success"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("modalVisible=true"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s("点击打开 Modal"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("fl-button")]),a("span",{class:"token punctuation"},">")]),s(`
 `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("fl-modal")]),s(),a("span",{class:"token attr-name"},":modalVisible"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("modalVisible"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"@closeModal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("closeModal"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s(`
   `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("template")]),s(),a("span",{class:"token attr-name"},"#footer"),a("span",{class:"token punctuation"},">")]),s(`
     `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("fl-button")]),s(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("foo"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"plain"),s(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("modalVisible=false"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s("取消"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("fl-button")]),a("span",{class:"token punctuation"},">")]),s(`
     `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("fl-button")]),s(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("success"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("modalVisible=false"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s("确定"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("fl-button")]),a("span",{class:"token punctuation"},">")]),s(`
   `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("template")]),a("span",{class:"token punctuation"},">")]),s(`
 `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("fl-modal")]),a("span",{class:"token punctuation"},">")]),s(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[s(`
`),a("span",{class:"token keyword"},"export"),s(),a("span",{class:"token keyword"},"default"),s(),a("span",{class:"token punctuation"},"{"),s(`
  `),a("span",{class:"token function"},"data"),s(),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),s(),a("span",{class:"token punctuation"},"{"),s(`
    `),a("span",{class:"token keyword"},"return"),s(),a("span",{class:"token punctuation"},"{"),s(`
      `),a("span",{class:"token literal-property property"},"modalVisible"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token boolean"},"false"),s(`     
    `),a("span",{class:"token punctuation"},"}"),s(`
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),s(`
  `),a("span",{class:"token literal-property property"},"methods"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token punctuation"},"{"),s(`
    `),a("span",{class:"token function"},"closeModal"),s(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"value"),a("span",{class:"token punctuation"},")"),s(),a("span",{class:"token punctuation"},"{"),s(`
      `),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),s("modalVisible "),a("span",{class:"token operator"},"="),s(` value
    `),a("span",{class:"token punctuation"},"}"),s(` 
  `),a("span",{class:"token punctuation"},"}"),s(`
`),a("span",{class:"token punctuation"},"}"),s(`

`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("script")]),a("span",{class:"token punctuation"},">")]),s(`

`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1)),S=[P],z=p(()=>a("h3",{id:"自定义modal对话框显示的内容",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#自定义modal对话框显示的内容","aria-hidden":"true"},"#"),s(" 自定义Modal对话框显示的内容")],-1)),N=p(()=>a("p",null,[s("Modal 组件的内容可以是任意的，甚至可以是表格或表单，只需要在"),a("code",null,"<fl-modal></fl-modal>"),s("中写入你想写的内容即可")],-1)),B={class:"box"},W=p(()=>a("h3",{id:"可修改关闭方式",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#可修改关闭方式","aria-hidden":"true"},"#"),s(" 可修改关闭方式")],-1)),I=p(()=>a("p",null,[s("默认关闭Modal的方式有：点击右上角关闭，点击下方按钮关闭 在fl-modal中可传入"),a("code",null,"closeWrapper"),s("参数")],-1)),A=p(()=>a("p",null,[a("code",null,"closeWrapper"),s("可接受一个Boolean值，默认值为false，"),a("code",null,"传入true则点击modal对话框以外的内容也可关闭modal对话框")],-1)),D={class:"box"},T=p(()=>a("p",null,"点击对话框以外的区域我可以直接关闭",-1)),j=p(()=>a("h3",{id:"确定和取消按钮是去除的",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#确定和取消按钮是去除的","aria-hidden":"true"},"#"),s(" 确定和取消按钮是去除的")],-1)),E=p(()=>a("p",null,[s("在"),a("code",null,"<fl-modal></fl-modal>"),s("中的"),a("code",null,"<template #footer></template>"),s("是可去除的，当modal的内容显示一些其他组件时或是某些情景，你可以去掉这两个按钮")],-1)),Q={class:"box"},R=p(()=>a("p",null,"也可以去掉下方的确定&取消按钮的关闭方式",-1)),U=k('<h3 id="可自定义modal的内容" tabindex="-1" data-v-c6b8fcbc><a class="header-anchor" href="#可自定义modal的内容" aria-hidden="true" data-v-c6b8fcbc>#</a> 可自定义Modal的内容</h3><p data-v-c6b8fcbc>在fl-modal中可传入<code data-v-c6b8fcbc>width</code>&amp;<code data-v-c6b8fcbc>top</code>&amp;<code data-v-c6b8fcbc>title</code>参数</p><p data-v-c6b8fcbc><code data-v-c6b8fcbc>width</code>可接收String类型的参数，用以设置显示Modal对话框的宽度<code data-v-c6b8fcbc>30vw</code></p><p data-v-c6b8fcbc><code data-v-c6b8fcbc>top</code>可接收String类型的参数，用以设置显示Modal对话框距离浏览器顶部的高度，默认值为<code data-v-c6b8fcbc>15vh</code></p><p data-v-c6b8fcbc><code data-v-c6b8fcbc>title</code>可接收String类型的参数，用以设置显示Modal对话框的标题，默认值为<code data-v-c6b8fcbc>提示</code></p>',5),F={class:"box"},G=p(()=>a("p",null,"模态框内容宽度为50%，距离浏览器顶部的高度为40vh",-1)),H=k('<h3 id="attributes" tabindex="-1" data-v-c6b8fcbc><a class="header-anchor" href="#attributes" aria-hidden="true" data-v-c6b8fcbc>#</a> Attributes</h3><table data-v-c6b8fcbc><thead data-v-c6b8fcbc><tr data-v-c6b8fcbc><th data-v-c6b8fcbc>参数</th><th data-v-c6b8fcbc>说明</th><th data-v-c6b8fcbc>类型</th><th data-v-c6b8fcbc>默认值</th></tr></thead><tbody data-v-c6b8fcbc><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>modalVisible</td><td data-v-c6b8fcbc>是否显示 Modal</td><td data-v-c6b8fcbc>Boolean</td><td data-v-c6b8fcbc>false</td></tr><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>title</td><td data-v-c6b8fcbc>Modal 的标题，也可通过具名 slot传入</td><td data-v-c6b8fcbc>String</td><td data-v-c6b8fcbc>提示</td></tr><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>width</td><td data-v-c6b8fcbc>Modal 的宽度</td><td data-v-c6b8fcbc>String</td><td data-v-c6b8fcbc>30vw</td></tr><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>top</td><td data-v-c6b8fcbc>Modal CSS 中的 margin-top 值</td><td data-v-c6b8fcbc>String</td><td data-v-c6b8fcbc>15vh</td></tr><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>closeWrapper</td><td data-v-c6b8fcbc>点击Modal对话框以外的内容是否可以直接关闭Modal</td><td data-v-c6b8fcbc>Boolean</td><td data-v-c6b8fcbc>false</td></tr></tbody></table><h3 id="slot" tabindex="-1" data-v-c6b8fcbc><a class="header-anchor" href="#slot" aria-hidden="true" data-v-c6b8fcbc>#</a> Slot</h3><table data-v-c6b8fcbc><thead data-v-c6b8fcbc><tr data-v-c6b8fcbc><th data-v-c6b8fcbc>name</th><th data-v-c6b8fcbc>说明</th></tr></thead><tbody data-v-c6b8fcbc><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>—</td><td data-v-c6b8fcbc>Dialog 的内容</td></tr><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>title</td><td data-v-c6b8fcbc>Dialog 标题区的内容</td></tr><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>footer</td><td data-v-c6b8fcbc>Dialog 按钮操作区的内容</td></tr></tbody></table><h3 id="events" tabindex="-1" data-v-c6b8fcbc><a class="header-anchor" href="#events" aria-hidden="true" data-v-c6b8fcbc>#</a> Events</h3><table data-v-c6b8fcbc><thead data-v-c6b8fcbc><tr data-v-c6b8fcbc><th data-v-c6b8fcbc>事件名称</th><th data-v-c6b8fcbc>说明</th><th data-v-c6b8fcbc>回调参数</th></tr></thead><tbody data-v-c6b8fcbc><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>handleClose</td><td data-v-c6b8fcbc>Modal 关闭的回调</td><td data-v-c6b8fcbc>—</td></tr><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>handleCloseWrapper</td><td data-v-c6b8fcbc>Modal 处理closeWrapper的回调</td><td data-v-c6b8fcbc>—</td></tr></tbody></table><h2 id="progress组件" tabindex="-1" data-v-c6b8fcbc><a class="header-anchor" href="#progress组件" aria-hidden="true" data-v-c6b8fcbc>#</a> progress组件</h2><p data-v-c6b8fcbc>用于展示操作进度，告知用户当前状态和预期。</p><h4 id="线形进度条" tabindex="-1" data-v-c6b8fcbc><a class="header-anchor" href="#线形进度条" aria-hidden="true" data-v-c6b8fcbc>#</a> 线形进度条</h4><p data-v-c6b8fcbc>Progress 组件设置<code data-v-c6b8fcbc>percentage</code>属性即可，表示进度条对应的百分比，必填，必须在 0-100。</p>',10),J={class:"hs-box"},K={key:0},L=p(()=>a("div",{class:"language-html line-numbers-mode","data-ext":"html"},[a("pre",{class:"language-html"},[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("fl-progress")]),s(),a("span",{class:"token attr-name"},":percentage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("22"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},":color"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("customColors"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("line"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"line_height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("10"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("fl-progress")]),a("span",{class:"token punctuation"},">")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("fl-progress")]),s(),a("span",{class:"token attr-name"},":percentage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("44"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},":color"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("customColors"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("line"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"line_height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("10"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("fl-progress")]),a("span",{class:"token punctuation"},">")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("fl-progress")]),s(),a("span",{class:"token attr-name"},":percentage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("66"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},":color"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("customColors"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("line"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"line_height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("10"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("fl-progress")]),a("span",{class:"token punctuation"},">")]),s(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("fl-progress")]),s(),a("span",{class:"token attr-name"},":percentage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("percentage"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},":color"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("customColors"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"type"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("line"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"line_height"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("30"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("fl-progress")]),a("span",{class:"token punctuation"},">")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),a("span",{class:"token punctuation"},">")]),s(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("fl-button")]),s(),a("span",{class:"token attr-name"},"plain"),s(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("lowerProgress"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s("-"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("fl-button")]),a("span",{class:"token punctuation"},">")]),s(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("fl-button")]),s(),a("span",{class:"token attr-name"},"plain"),s(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("addProgress"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s("+"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("fl-button")]),a("span",{class:"token punctuation"},">")]),s(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")]),s(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[s(`
`),a("span",{class:"token keyword"},"export"),s(),a("span",{class:"token keyword"},"default"),s(),a("span",{class:"token punctuation"},"{"),s(`
  `),a("span",{class:"token function"},"data"),s(),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),s(),a("span",{class:"token punctuation"},"{"),s(`
    `),a("span",{class:"token keyword"},"return"),s(),a("span",{class:"token punctuation"},"{"),s(`
      `),a("span",{class:"token literal-property property"},"percentage"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),s(`
      `),a("span",{class:"token literal-property property"},"customColors"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token punctuation"},"["),s(`
        `),a("span",{class:"token punctuation"},"{"),s(),a("span",{class:"token literal-property property"},"color"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'#f56c6c'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token literal-property property"},"percentage"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token number"},"20"),s(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),s(`
        `),a("span",{class:"token punctuation"},"{"),s(),a("span",{class:"token literal-property property"},"color"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'#6f7ad3'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token literal-property property"},"percentage"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token number"},"40"),s(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),s(`
        `),a("span",{class:"token punctuation"},"{"),s(),a("span",{class:"token literal-property property"},"color"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'#e6a23c'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token literal-property property"},"percentage"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token number"},"60"),s(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),s(`
        `),a("span",{class:"token punctuation"},"{"),s(),a("span",{class:"token literal-property property"},"color"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'#1989fa'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token literal-property property"},"percentage"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token number"},"80"),s(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),s(`
        `),a("span",{class:"token punctuation"},"{"),s(),a("span",{class:"token literal-property property"},"color"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'#5cb87a'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token literal-property property"},"percentage"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token number"},"100"),s(),a("span",{class:"token punctuation"},"}"),s(`
      `),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),s(`
      `),a("span",{class:"token literal-property property"},"customColor"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'green'"),s(`      
    `),a("span",{class:"token punctuation"},"}"),s(`
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),s(`
  `),a("span",{class:"token literal-property property"},"methods"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token punctuation"},"{"),s(`
    `),a("span",{class:"token function"},"lowerProgress"),s(),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),s(),a("span",{class:"token punctuation"},"{"),s(`
      `),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),s("percentage "),a("span",{class:"token operator"},"-="),s(),a("span",{class:"token number"},"10"),s(`
      `),a("span",{class:"token keyword"},"if"),s(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),s("percentage "),a("span",{class:"token operator"},"<"),s(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},")"),s(),a("span",{class:"token punctuation"},"{"),s(`
        `),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),s("percentage "),a("span",{class:"token operator"},"="),s(),a("span",{class:"token number"},"0"),s(`
      `),a("span",{class:"token punctuation"},"}"),s(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),s(`
    `),a("span",{class:"token function"},"addProgress"),s(),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),s(),a("span",{class:"token punctuation"},"{"),s(`
      `),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),s("percentage "),a("span",{class:"token operator"},"+="),s(),a("span",{class:"token number"},"10"),s(`
      `),a("span",{class:"token keyword"},"if"),s(),a("span",{class:"token punctuation"},"("),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),s("percentage "),a("span",{class:"token operator"},">"),s(),a("span",{class:"token number"},"100"),a("span",{class:"token punctuation"},")"),s(),a("span",{class:"token punctuation"},"{"),s(`
        `),a("span",{class:"token keyword"},"this"),a("span",{class:"token punctuation"},"."),s("percentage "),a("span",{class:"token operator"},"="),s(),a("span",{class:"token number"},"100"),s(`
      `),a("span",{class:"token punctuation"},"}"),s(`
    `),a("span",{class:"token punctuation"},"}"),s(`  
  `),a("span",{class:"token punctuation"},"}"),s(`
`),a("span",{class:"token punctuation"},"}"),s(`

`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("script")]),a("span",{class:"token punctuation"},">")]),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1)),O=[L],X=p(()=>a("p",null,[s("Progress 组件设置"),a("code",null,"line_height"),s("属性可以调整线性进度条的高度")],-1)),Y={class:"flexbox"},Z=p(()=>a("h4",{id:"环形进度条",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#环形进度条","aria-hidden":"true"},"#"),s(" 环形进度条")],-1)),$=p(()=>a("p",null,[s("Progress 组件可通过 "),a("code",null,"type"),s(" 属性来指定使用环形进度条，在环形进度条中，还可以通过 "),a("code",null,"size"),s(" 属性来设置其大小。")],-1)),aa={class:"flexbox"},sa=p(()=>a("h4",{id:"仪表盘形进度条",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#仪表盘形进度条","aria-hidden":"true"},"#"),s(" 仪表盘形进度条")],-1)),ta=p(()=>a("p",null,[s("Progress 组件设置"),a("code",null,"showPercentage"),s("属性可以关闭显示百分比文字")],-1)),na={class:"flexbox"},ea=k('<h3 id="attributes-1" tabindex="-1" data-v-c6b8fcbc><a class="header-anchor" href="#attributes-1" aria-hidden="true" data-v-c6b8fcbc>#</a> Attributes</h3><table data-v-c6b8fcbc><thead data-v-c6b8fcbc><tr data-v-c6b8fcbc><th data-v-c6b8fcbc>参数</th><th data-v-c6b8fcbc>说明</th><th data-v-c6b8fcbc>类型</th><th data-v-c6b8fcbc>默认值</th></tr></thead><tbody data-v-c6b8fcbc><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>size</td><td data-v-c6b8fcbc>设置环形进度条的大小</td><td data-v-c6b8fcbc>Number</td><td data-v-c6b8fcbc>0</td></tr><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>line_height</td><td data-v-c6b8fcbc>设置线形进度条的高度</td><td data-v-c6b8fcbc>Number</td><td data-v-c6b8fcbc>20</td></tr><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>showPercentage</td><td data-v-c6b8fcbc>是否显示进度条的百分比文字</td><td data-v-c6b8fcbc>Boolean</td><td data-v-c6b8fcbc>true</td></tr><tr data-v-c6b8fcbc><td data-v-c6b8fcbc>type</td><td data-v-c6b8fcbc>设置进度条的样式为线形或环形</td><td data-v-c6b8fcbc>String</td><td data-v-c6b8fcbc>line/circle</td></tr></tbody></table>',2);function ca(u,e,oa,la,t,i){const l=b("fl-button"),d=b("fl-modal"),_=b("fl-switch"),r=b("fl-progress");return f(),v("div",null,[M,a("div",x,[n(l,{type:"success",onClick:e[0]||(e[0]=o=>t.modalVisible=!0)},{default:c(()=>[s("点击打开 Modal")]),_:1}),s(),n(d,{modalVisible:t.modalVisible,onCloseModal:i.closeModal},{footer:c(()=>[n(l,{class:"foo",plain:"",onClick:e[1]||(e[1]=o=>t.modalVisible=!1)},{default:c(()=>[s("取消")]),_:1}),n(l,{type:"success",onClick:e[2]||(e[2]=o=>t.modalVisible=!1)},{default:c(()=>[s("确定")]),_:1})]),_:1},8,["modalVisible","onCloseModal"]),a("div",{class:"code-box",onClick:e[3]||(e[3]=m((...o)=>i.modalCode_1_Clicked&&i.modalCode_1_Clicked(...o),["self"]))},[s(" 点击显示/隐藏代码 "),n(g,null,{default:c(()=>[t.show_modalCode_1?(f(),v("div",q,S)):h("v-if",!0)]),_:1})])]),z,N,a("div",B,[n(l,{type:"success",onClick:e[4]||(e[4]=o=>t.modalVisible1=!0)},{default:c(()=>[s("点击打开 Modal")]),_:1}),n(d,{modalVisible:t.modalVisible1,onCloseModal:i.closeModal,title:"甚至可以是Switch组件"},{footer:c(()=>[n(l,{class:"foo",plain:"",onClick:e[6]||(e[6]=o=>t.modalVisible1=!1)},{default:c(()=>[s("取消")]),_:1}),n(l,{type:"success",onClick:e[7]||(e[7]=o=>t.modalVisible1=!1)},{default:c(()=>[s("确定")]),_:1})]),default:c(()=>[n(_,{modelValue:t.active,"onUpdate:modelValue":e[5]||(e[5]=o=>t.active=o),activeColor:"green",inActiveColor:"black"},null,8,["modelValue"])]),_:1},8,["modalVisible","onCloseModal"])]),W,I,A,a("div",D,[n(l,{type:"success",onClick:e[8]||(e[8]=o=>t.modalVisible2=!0)},{default:c(()=>[s("点击打开 Modal")]),_:1}),n(d,{modalVisible:t.modalVisible2,onCloseModal:i.closeModal,closeWrapper:""},{footer:c(()=>[n(l,{class:"foo",plain:"",onClick:e[9]||(e[9]=o=>t.modalVisible2=!1)},{default:c(()=>[s("取消")]),_:1}),n(l,{type:"success",onClick:e[10]||(e[10]=o=>t.modalVisible2=!1)},{default:c(()=>[s("确定")]),_:1})]),default:c(()=>[T]),_:1},8,["modalVisible","onCloseModal"])]),j,E,a("div",Q,[n(l,{type:"success",onClick:e[11]||(e[11]=o=>t.modalVisible3=!0)},{default:c(()=>[s("点击打开 Modal")]),_:1}),n(d,{modalVisible:t.modalVisible3,onCloseModal:i.closeModal},{default:c(()=>[R]),_:1},8,["modalVisible","onCloseModal"])]),U,a("div",F,[n(l,{type:"success",onClick:e[12]||(e[12]=o=>t.modalVisible4=!0)},{default:c(()=>[s("点击打开 Modal")]),_:1}),n(d,{modalVisible:t.modalVisible4,onCloseModal:i.closeModal,title:"记得给width和top带上单位",width:"50%",top:"40vh"},{footer:c(()=>[n(l,{class:"foo",plain:"",onClick:e[13]||(e[13]=o=>t.modalVisible4=!1)},{default:c(()=>[s("取消")]),_:1}),n(l,{type:"success",onClick:e[14]||(e[14]=o=>t.modalVisible4=!1)},{default:c(()=>[s("确定")]),_:1})]),default:c(()=>[G]),_:1},8,["modalVisible","onCloseModal"])]),H,a("div",J,[a("div",null,[n(r,{percentage:22,color:t.customColors,type:"line",line_height:"10"},null,8,["color"]),n(r,{percentage:44,color:t.customColors,type:"line",line_height:"10"},null,8,["color"]),n(r,{percentage:66,color:t.customColors,type:"line",line_height:"10"},null,8,["color"])]),a("div",{class:"code-box",onClick:e[15]||(e[15]=m((...o)=>i.progressCode_1_Clicked&&i.progressCode_1_Clicked(...o),["self"]))},[s(" 点击显示/隐藏代码 "),n(g,null,{default:c(()=>[t.show_progressCode_1?(f(),v("div",K,O)):h("v-if",!0)]),_:1})])]),X,a("div",Y,[n(r,{percentage:t.percentage1,color:t.customColors,type:"line",line_height:"30"},null,8,["percentage","color"]),a("div",null,[n(l,{plain:"",class:"foo fontw",onClick:i.lowerProgress1},{default:c(()=>[s("-")]),_:1},8,["onClick"]),n(l,{plain:"",class:"foo fontw",onClick:i.addProgress1},{default:c(()=>[s("+")]),_:1},8,["onClick"])])]),Z,$,a("div",aa,[n(r,{percentage:22,color:t.customColors,size:"160",type:"circle"},null,8,["color"]),n(r,{percentage:44,color:t.customColors,size:"160",type:"circle"},null,8,["color"]),n(r,{percentage:66,color:t.customColors,size:"160",type:"circle"},null,8,["color"]),n(r,{percentage:88,color:t.customColors,size:"160",type:"circle"},null,8,["color"])]),sa,ta,a("div",na,[n(r,{size:"200",percentage:t.percentage,color:t.customColors,type:"circle"},null,8,["percentage","color"]),a("div",null,[n(l,{plain:"",class:"foo fontw",onClick:i.lowerProgress},{default:c(()=>[s("-")]),_:1},8,["onClick"]),n(l,{plain:"",class:"foo fontw",onClick:i.addProgress},{default:c(()=>[s("+")]),_:1},8,["onClick"])]),n(r,{size:"200",percentage:t.percentage,color:t.customColors,type:"circle",showPercentage:!1},null,8,["percentage","color"])]),ea])}const ia=y(w,[["render",ca],["__scopeId","data-v-c6b8fcbc"],["__file","反馈型组件.html.vue"]]);export{ia as default};
