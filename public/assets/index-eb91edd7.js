import{d as T,u as V,a as j,r as p,b as F,c as G,o as P,e as o,f as r,g as a,h as e,w as c,t as _,F as u,i as d,j as U,n as m,k as O,l as H,m as l,N as J,p as K,q as Q,s as R,v as W,x as h,y as X}from"./index-2a868905.js";import{_ as Y}from"./titleBar.vue_vue_type_script_setup_true_lang-03b2fda6.js";import{I as Z,N as ee,a as D}from"./ImagesOutline-6eadb202.js";import{N as z,a as B,b as se}from"./Tabs-2e12da33.js";import"./utils-7805148d.js";const ae=e("span",{class:"text-[#67c23a]"},"每生成一张图片需要扣除您的一个绘画余额！",-1),le={class:"flex my-5"},te=e("p",{class:"mx-2 text-[#707384] select-none flex-shrink-0"}," Prompt示例： ",-1),ne={class:"text-[#707384]"},oe={class:"mt-5 p-4 bg-[#e7eaf380] dark:bg-[#2c2c32] rounded-lg"},re=e("h4",{class:"text-base mb-2"}," 参数设置 ",-1),ce={class:"flex mt-5"},ie=e("span",{class:"mr-2 inline-block w-16 flex-shrink-0"},"图片尺寸:",-1),ue=["onClick"],de={class:"flex mt-6 pb-8 border-b border-[#000c3f1a]"},pe=e("span",{class:"mr-2 w-16 flex-shrink-0"},"图片张数:",-1),me=["onClick"],ve=e("div",{class:"flex mt-5"},[e("h4",{class:"text-base mr-2 w-20 flex-shrink-0"}," 修饰词参考 "),e("p",{class:"text-[#707384]"}," 您可参考或选用下列各类修饰词丰富您的输入文本，尝试生成更加多样的图像，更多修饰词可参考 Prompt指南 或 自由输入 探索大模型作画更多未知能力 ")],-1),fe={class:"flex mt-5"},be=e("h4",{class:"text-base mr-2 w-20 flex-shrink-0"}," 图像类型 ",-1),_e=["onClick"],he={key:0,class:"mt-8 pb-10"},xe=e("div",{class:"flex justify-center"}," ----------- 正在生成中、图片越大数量越多所需时间越多、预计15S ----------- ",-1),ge={class:"flex flex-wrap mt-8"},ke={key:0,class:"flex flex-wrap mt-8"},ye={key:0,class:"flex flex-wrap mt-8"},Ie=T({__name:"index",setup(we){const{isMobile:v}=V(),I=j(),f=p(0),i=p(!1),b=F(),x=p([]),g=p([]),A=G(()=>I.theme==="dark"),y=["超级逼真的未来世界，真实照片，虚幻引擎","帅哥，二次元，赛博朋克风格，精致脸庞","兔子，可爱，高质量，高品质"],$=[{label:"256x256(小图)",value:"256x256"},{label:"512x512(中图)",value:"512x512"},{label:"1024x1024(大图)",value:"1024x1024"}],E=[{label:"1张",value:1},{label:"2张",value:2},{label:"3张",value:3},{label:"4张",value:4},{label:"5张",value:5},{label:"6张",value:6},{label:"7张",value:7},{label:"8张",value:8},{label:"9张",value:9}],w=["古风","二次元","写实照片","油画","水彩画","油墨画","黑白雕版画","雕塑","3D模型","手绘草图","炭笔画","极简线条画","电影质感","机械杆"],t=p({prompt:"",n:1,size:"256x256"});function M(){f.value=f.value+1>=y.length?0:f.value+1}async function N(){const n=await H({model:"DALL-E2"});n.success&&(x.value=n.data)}async function L(){const n=await O({size:999,rec:1,model:"DALL-E2"});if(!n.success)return b.error(n.message);g.value=n.data.rows}async function S(){if(!t.value.prompt)return b.error("请输入您想要生成的图片描述信息！");try{i.value=!0,await X(t.value),b.success("生成图片成完成、前往我的生成查看图片！"),await N(),i.value=!1}catch{b.error("生成图片失败、请重试！"),i.value=!1}}function q(n){n==="mine"&&N(),n==="all"&&L()}return P(()=>{L()}),(n,C)=>(l(),o("div",{class:m(["main min-h-screen bg-center dark:bg-[#2F2E34]",[a(A)?"darkBg":"lightBg",a(v)?"px-3":"px-10"]])},[r(a(Y),{title:"AI绘画基础版",des:"基础版绘图速度较快、根据关键词生成~大约需要10-30s左右时间、合理使用！",padding:a(v)?2:20},null,8,["padding"]),e("div",{class:m(a(v)?["px-2"]:["px-20"])},[r(a(J),{"show-icon":!1,type:"success",class:"mt-5"},{default:c(()=>[ae]),_:1}),e("div",le,[e("b",{class:"text-primary cursor-pointer select-none flex-shrink-0",onClick:M},"换示例"),te,e("p",ne,_(y[f.value]),1)]),r(a(ee),null,{default:c(()=>[r(a(K),{value:t.value.prompt,"onUpdate:value":C[0]||(C[0]=s=>t.value.prompt=s),size:"large",disabled:i.value,clearable:"",placeholder:"请输入您想要生成的图片描述信息、可以参考上面的示例文字"},null,8,["value","disabled"]),r(a(Q),{type:"success",size:"large",loading:i.value,disabled:i.value,onClick:S},{icon:c(()=>[r(a(R),null,{default:c(()=>[r(a(Z))]),_:1})]),default:c(()=>[W(" 生成图片 ")]),_:1},8,["loading","disabled"])]),_:1}),e("div",oe,[re,e("div",ce,[ie,e("div",null,[(l(),o(u,null,d($,s=>e("span",{key:s.value,class:m(["py-2 px-5 rounded ml-2 select-none cursor-pointer inline-block mb-2",s.value===t.value.size?["text-primary","bg-[#0d6efd1c]"]:["bg-[#bfc4d033]"]]),onClick:k=>t.value.size=s.value},_(s.label),11,ue)),64))])]),e("div",de,[pe,e("div",null,[(l(),o(u,null,d(E,s=>e("span",{key:s.value,class:m(["py-2 px-5 rounded ml-2 select-none cursor-pointer mb-2 inline-block",s.value===t.value.n?["text-primary","bg-[#0d6efd1c]"]:["bg-[#bfc4d033]"]]),onClick:k=>t.value.n=s.value},_(s.label),11,me)),64))])]),ve,e("div",fe,[be,e("div",null,[(l(),o(u,null,d(w,(s,k)=>e("span",{key:s,class:"cursor-pointer hover:text-primary",onClick:Ne=>t.value.prompt+=t.value.prompt?`，${s}`:s},_(`${s} ${k+1===w.length?"":"、"}`),9,_e)),64))])])]),i.value?(l(),o("div",he,[xe,e("div",ge,[(l(!0),o(u,null,d(t.value.n,s=>(l(),o("img",{key:s,class:"w-40 rounded ml-4 mt-4",src:"https://public-1300678944.cos.ap-shanghai.myqcloud.com/blog/16816463869037208e40df8ceb5ff.gif"}))),128))])])):U("",!0),r(a(se),{type:"line",animated:"",class:"mt-5","onUpdate:value":q},{default:c(()=>[r(a(z),{name:"all",tab:"公共生成"},{default:c(()=>[g.value.length?(l(),o("div",ke,[(l(!0),o(u,null,d(g.value,s=>(l(),h(a(D),{key:s.answer,class:"w-40 ml-4 mb-4",src:s.answer},null,8,["src"]))),128))])):(l(),h(a(B),{key:1,size:"huge",class:"mt-20",description:"暂无数据哟~"}))]),_:1}),r(a(z),{name:"mine",tab:"我的生成"},{default:c(()=>[x.value.length?(l(),o("div",ye,[(l(!0),o(u,null,d(x.value,s=>(l(),h(a(D),{key:s.answer,"object-fit":"contain",class:m(["ml-4 mb-4",[a(v)?"w-full":"w-40"]]),src:s.answer},null,8,["class","src"]))),128))])):(l(),h(a(B),{key:1,size:"huge",class:"mt-20",description:"暂无数据哟~"}))]),_:1})]),_:1})],2)],2))}});export{Ie as default};