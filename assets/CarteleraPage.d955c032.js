var _=Object.defineProperty,b=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var x=(t,s,a)=>s in t?_(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,p=(t,s)=>{for(var a in s||(s={}))y.call(s,a)&&x(t,a,s[a]);if(d)for(var a of d(s))z.call(s,a)&&x(t,a,s[a]);return t},h=(t,s)=>b(t,w(s));import{Q as k}from"./QIcon.48a12e32.js";import{u as C,a as $}from"./use-dark.e7432b45.js";import{c as B}from"./render.df75355a.js";import{c as o,h as q,g as S,_ as Q,q as P,s as D,t as I,B as e,v as f}from"./index.88f62cd6.js";import{Q as N}from"./QPage.f29fdd8e.js";import{_ as E}from"./scan.d784e2c0.js";import{_ as T}from"./surv.095040c5.js";const V={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},r={xs:2,sm:4,md:8,lg:16,xl:24};var F=B({name:"QSeparator",props:h(p({},C),{spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String}),setup(t){const s=S(),a=$(t,s.proxy.$q),l=o(()=>t.vertical===!0?"vertical":"horizontal"),n=o(()=>` q-separator--${l.value}`),m=o(()=>t.inset!==!1?`${n.value}-${V[t.inset]}`:""),u=o(()=>`q-separator${n.value}${m.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(a.value===!0?" q-separator--dark":"")),v=o(()=>{const i={};if(t.size!==void 0&&(i[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const g=t.spaced===!0?`${r.md}px`:t.spaced in r?`${r[t.spaced]}px`:t.spaced,c=t.vertical===!0?["Left","Right"]:["Top","Bottom"];i[`margin${c[0]}`]=i[`margin${c[1]}`]=g}return i});return()=>q("hr",{class:u.value,style:v.value,"aria-orientation":l.value})}}),L="/assets/fondo.d1fbfb59.png",M="/assets/cart-act.2a7365b9.png";const R={},X={style:{width:"270px",height:"584px",overflow:"hidden","z-index":"-1","border-radius":"20px","box-shadow":"5px 5px 5px rgba(0, 0, 0, 0.2)"}},j=e("p",{class:"text-h4",style:{position:"absolute","font-family":"'Baskerville'","margin-left":"15px",top:"32px"}}," Cartelera ",-1),A={class:"search-box",style:{position:"absolute",height:"30px",top:"12%",left:"50%",transform:"translateX(-50%)","border-radius":"50px","box-shadow":"5px 3px 3px rgba(0, 0, 0, 0.2)",transition:"all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",width:"250px","z-index":"9"}},G=e("input",{type:"text",placeholder:"Buscar...",style:{width:"100%",height:"100%",border:"none","border-radius":"50px",background:"#fff",outline:"none",padding:"0 60px 0 20px","font-size":"14px",opacity:"1",transition:"all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},null,-1),H={class:"q-gutter-md",style:{"font-size":"24px",position:"absolute",right:"3px",top:"3px",color:"#707070"}},J=e("div",{class:"header",style:{height:"68px",width:"100%","background-color":"#ffbe00"}},null,-1),K=e("div",{class:"owl-container q-mb-md"},[e("div",{class:"flex row inline",style:{"margin-top":"30px",height:"27px",overflow:"hidden",width:"250%",padding:"0px",background:"white"}},[e("div",{class:"itemx card-1"},[e("h4",null,"Todos")]),e("div",{class:"itemx card-2"},[e("h4",null,"Nuevos")]),e("div",{class:"itemx card-3"},[e("h4",null,"Categor\xEDas")]),e("div",{class:"itemx card-4"},[e("h4",null,"Conpa\xF1\xEDas")]),e("div",{class:"itemx card-5"},[e("h4",null,"Provincias")]),e("div",{class:"itemx card-6"},[e("h4",null,"Fecha")])])],-1),O=e("div",{class:"content"},[e("img",{style:{width:"100%"},src:L,alt:""})],-1),U=e("div",{class:"foot"},[e("div",{class:"row",style:{position:"absolute",top:"91%",left:"50%",width:"246px",height:"50px",transform:"translate(-50%, -50%)","z-index":"999 !important","background-color":"#000",color:"#fff","border-radius":"10px","box-shadow":"5px 5px 5px rgba(0, 0, 0, 0.2)"}},[e("div",{class:"col flex flex-center"},[e("a",{href:"#/Escaner"},[e("img",{style:{width:"20px"},src:E,alt:""})])]),e("div",{class:"col flex flex-center"},[e("a",{href:"#/Inicio"},[e("img",{style:{width:"20px"},src:T,alt:""})])]),e("div",{class:"col flex flex-center"},[e("a",{href:"#/Cartelera"},[e("img",{style:{width:"20px"},src:M,alt:""})])])]),e("div",{class:"row",style:{position:"absolute",top:"93%",left:"50%",width:"246px",height:"5px",transform:"translate(-50%, -50%)","z-index":"999 !important","background-color":"transparent",color:"#fff","font-size":"11px"}},[e("div",{class:"col flex flex-center"},"Sc\xE1ner"),e("div",{class:"col flex flex-center"},"Encuesta"),e("div",{class:"col flex flex-center"},"Cartelera")])],-1);function W(t,s){return P(),D(N,{color:"primary",class:"flex column flex-center"},{default:I(()=>[e("div",X,[j,e("div",A,[G,e("div",H,[f(k,{name:"search",style:{height:"20px"}})])]),J,K,f(F,{fullwidth:""}),O]),U]),_:1})}var re=Q(R,[["render",W]]);export{re as default};
