var he=Object.defineProperty,ge=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var xe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var se=(e,t,i)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,q=(e,t)=>{for(var i in t||(t={}))xe.call(t,i)&&se(e,i,t[i]);if(ne)for(var i of ne(t))_e.call(t,i)&&se(e,i,t[i]);return e},$=(e,t)=>ge(e,me(t));import{u as te,a as oe}from"./use-dark.e7432b45.js";import{b as ye,a as be}from"./QIcon.48a12e32.js";import{c as V,a as pe,h as F,b as we,d as ke}from"./render.df75355a.js";import{c,h,g as K,P as Ce,J as R,n as qe,K as Se,D as G,L as J,G as ie,I as Z,E as ee,r as U,w as N,T as Pe,M as $e,j as je,N as Be,o as fe,d as ve,O as re,Q as Ie,_ as Ae,q as ze,s as Te,t as s,B as o,v as n}from"./index.88f62cd6.js";import{g as Ee,v as Ne,Q as X}from"./QBtn.1fec2ae8.js";import{Q as Xe}from"./QPage.f29fdd8e.js";import{_ as Ve}from"./scan.d784e2c0.js";import{_ as Fe}from"./surv-act.0c4820d2.js";import{_ as Qe}from"./cart.13bc29aa.js";import"./dom.a9cbf5b9.js";const De={xs:2,sm:4,md:6,lg:10,xl:14};function le(e,t,i){return{transform:t===!0?`translateX(${i.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Le=V({name:"QLinearProgress",props:$(q(q({},te),ye),{value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean}),setup(e,{slots:t}){const{proxy:i}=K(),d=oe(e,i.$q),u=be(e,De),a=c(()=>e.indeterminate===!0||e.query===!0),l=c(()=>e.reverse!==e.query),p=c(()=>$(q({},u.value!==null?u.value:{}),{"--q-linear-progress-speed":`${e.animationSpeed}ms`})),w=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),k=c(()=>le(e.buffer!==void 0?e.buffer:1,l.value,i.$q)),f=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),y=c(()=>le(a.value===!0?1:e.value,l.value,i.$q)),g=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${a.value===!0?"in":""}determinate`),C=c(()=>({width:`${e.value*100}%`})),P=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const j=[h("div",{class:f.value,style:k.value}),h("div",{class:g.value,style:y.value})];return e.stripe===!0&&a.value===!1&&j.push(h("div",{class:P.value,style:C.value})),h("div",{class:w.value,style:p.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},pe(t.default,j))}}}),x=V({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const i=c(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>h(e.tag,{class:i.value},F(t.default))}}),_=V({name:"QCard",props:$(q({},te),{tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean}),setup(e,{slots:t}){const i=K(),d=oe(e,i.proxy.$q),u=c(()=>"q-card"+(d.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>h(e.tag,{class:u.value},F(t.default))}});const ae={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Me=Object.keys(ae);ae.all=!0;function ue(e){const t={};for(const i of Me)e[i]===!0&&(t[i]=!0);return Object.keys(t).length===0?ae:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function de(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Re(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Ce.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Oe(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,d)=>{const u=parseFloat(i);u&&(t[d]=u)}),t}var Ue=we({name:"touch-swipe",beforeMount(e,{value:t,arg:i,modifiers:d}){if(d.mouse!==!0&&R.has.touch!==!0)return;const u=d.mouseCapture===!0?"Capture":"",a={handler:t,sensitivity:Oe(i),direction:ue(d),noop:qe,mouseStart(l){de(l,a)&&Se(l)&&(G(a,"temp",[[document,"mousemove","move",`notPassive${u}`],[document,"mouseup","end","notPassiveCapture"]]),a.start(l,!0))},touchStart(l){if(de(l,a)){const p=l.target;G(a,"temp",[[p,"touchmove","move","notPassiveCapture"],[p,"touchcancel","end","notPassiveCapture"],[p,"touchend","end","notPassiveCapture"]]),a.start(l)}},start(l,p){R.is.firefox===!0&&J(e,!0);const w=ie(l);a.event={x:w.left,y:w.top,time:Date.now(),mouse:p===!0,dir:!1}},move(l){if(a.event===void 0)return;if(a.event.dir!==!1){Z(l);return}const p=Date.now()-a.event.time;if(p===0)return;const w=ie(l),k=w.left-a.event.x,f=Math.abs(k),y=w.top-a.event.y,g=Math.abs(y);if(a.event.mouse!==!0){if(f<a.sensitivity[1]&&g<a.sensitivity[1]){a.end(l);return}}else if(f<a.sensitivity[2]&&g<a.sensitivity[2])return;const C=f/p,P=g/p;a.direction.vertical===!0&&f<g&&f<100&&P>a.sensitivity[0]&&(a.event.dir=y<0?"up":"down"),a.direction.horizontal===!0&&f>g&&g<100&&C>a.sensitivity[0]&&(a.event.dir=k<0?"left":"right"),a.direction.up===!0&&f<g&&y<0&&f<100&&P>a.sensitivity[0]&&(a.event.dir="up"),a.direction.down===!0&&f<g&&y>0&&f<100&&P>a.sensitivity[0]&&(a.event.dir="down"),a.direction.left===!0&&f>g&&k<0&&g<100&&C>a.sensitivity[0]&&(a.event.dir="left"),a.direction.right===!0&&f>g&&k>0&&g<100&&C>a.sensitivity[0]&&(a.event.dir="right"),a.event.dir!==!1?(Z(l),a.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Re(),a.styleCleanup=j=>{a.styleCleanup=void 0,document.body.classList.remove("non-selectable");const B=()=>{document.body.classList.remove("no-pointer-events--children")};j===!0?setTimeout(B,50):B()}),a.handler({evt:l,touch:a.event.mouse!==!0,mouse:a.event.mouse,direction:a.event.dir,duration:p,distance:{x:f,y:g}})):a.end(l)},end(l){a.event!==void 0&&(ee(a,"temp"),R.is.firefox===!0&&J(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(!0),l!==void 0&&a.event.dir!==!1&&Z(l),a.event=void 0)}};e.__qtouchswipe=a,d.mouse===!0&&G(a,"main",[[e,"mousedown","mouseStart",`passive${u}`]]),R.has.touch===!0&&G(a,"main",[[e,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const i=e.__qtouchswipe;i!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&i.end(),i.handler=t.value),i.direction=ue(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(ee(t,"main"),ee(t,"temp"),R.is.firefox===!0&&J(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function Ke(){const e=new Map;return{getCache:function(t,i){return e[t]===void 0?e[t]=i:e[t]},getCacheWithFn:function(t,i){return e[t]===void 0?e[t]=i():e[t]}}}const We={name:{required:!0},disable:Boolean},ce={setup(e,{slots:t}){return()=>h("div",{class:"q-panel scroll",role:"tabpanel"},F(t.default))}},Ye={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},He=["update:modelValue","before-transition","transition"];function Ge(){const{props:e,emit:t,proxy:i}=K(),{getCacheWithFn:d}=Ke();let u,a;const l=U(null),p=U(null);function w(r){const v=e.vertical===!0?"up":"left";I((i.$q.lang.rtl===!0?-1:1)*(r.direction===v?1:-1))}const k=c(()=>[[Ue,w,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),f=c(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),y=c(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),g=c(()=>`--q-transition-duration: ${e.transitionDuration}ms`),C=c(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),P=c(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),j=c(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);N(()=>e.modelValue,(r,v)=>{const S=A(r)===!0?D(r):-1;a!==!0&&E(S===-1?0:S<D(v)?-1:1),l.value!==S&&(l.value=S,t("before-transition",r,v),je(()=>{t("transition",r,v)}))});function B(){I(1)}function W(){I(-1)}Object.assign(i,{next:B,previous:W,goTo:Q});function Q(r){t("update:modelValue",r)}function A(r){return r!=null&&r!==""}function D(r){return u.findIndex(v=>v.props.name===r&&v.props.disable!==""&&v.props.disable!==!0)}function Y(){return u.filter(r=>r.props.disable!==""&&r.props.disable!==!0)}function E(r){const v=r!==0&&e.animated===!0&&l.value!==-1?"q-transition--"+(r===-1?f.value:y.value):null;p.value!==v&&(p.value=v)}function I(r,v=l.value){let S=v+r;for(;S>-1&&S<u.length;){const T=u[S];if(T!==void 0&&T.props.disable!==""&&T.props.disable!==!0){E(r),a=!0,t("update:modelValue",T.props.name),setTimeout(()=>{a=!1});return}S+=r}e.infinite===!0&&u.length>0&&v!==-1&&v!==u.length&&I(r,r===-1?u.length:-1)}function L(){const r=D(e.modelValue);return l.value!==r&&(l.value=r),!0}function H(){const r=A(e.modelValue)===!0&&L()&&u[l.value];return e.keepAlive===!0?[h($e,P.value,[h(j.value===!0?d(C.value,()=>$(q({},ce),{name:C.value})):ce,{key:C.value,style:g.value},()=>r)])]:[h("div",{class:"q-panel scroll",style:g.value,key:C.value,role:"tabpanel"},[r])]}function m(){if(u.length!==0)return e.animated===!0?[h(Pe,{name:p.value},H)]:H()}function z(r){return u=Ee(F(r.default,[])).filter(v=>v.props!==null&&v.props.slot===void 0&&A(v.props.name)===!0),u.length}function M(){return u}return{panelIndex:l,panelDirectives:k,updatePanelsList:z,updatePanelIndex:L,getPanelContent:m,getEnabledPanels:Y,getPanels:M,isValidPanelName:A,keepAliveProps:P,needsUniqueKeepAliveWrapper:j,goToPanelByOffset:I,goToPanel:Q,nextPanel:B,previousPanel:W}}var b=V({name:"QCarouselSlide",props:$(q({},We),{imgSrc:String}),setup(e,{slots:t}){const i=c(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>h("div",{class:"q-carousel__slide",style:i.value},F(t.default))}}),Je=V({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:t}){const i=c(()=>`q-carousel__control absolute absolute-${e.position}`),d=c(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>h("div",{class:i.value,style:d.value},F(t.default))}});let O=0;const Ze={fullscreen:Boolean,noRouteFullscreenExit:Boolean},et=["update:fullscreen","fullscreen"];function tt(){const e=K(),{props:t,emit:i,proxy:d}=e;let u,a,l;const p=U(!1);Ne(e)===!0&&N(()=>d.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&f()}),N(()=>t.fullscreen,y=>{p.value!==y&&w()}),N(p,y=>{i("update:fullscreen",y),i("fullscreen",y)});function w(){p.value===!0?f():k()}function k(){p.value!==!0&&(p.value=!0,l=d.$el.parentNode,l.replaceChild(a,d.$el),document.body.appendChild(d.$el),O++,O===1&&document.body.classList.add("q-body--fullscreen-mixin"),u={handler:f},re.add(u))}function f(){p.value===!0&&(u!==void 0&&(re.remove(u),u=void 0),l.replaceChild(d.$el,a),p.value=!1,O=Math.max(0,O-1),O===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return Be(()=>{a=document.createElement("span")}),fe(()=>{t.fullscreen===!0&&k()}),ve(f),Object.assign(d,{toggleFullscreen:w,setFullscreen:k,exitFullscreen:f}),{inFullscreen:p,toggleFullscreen:w}}const ot=["top","right","bottom","left"],at=["regular","flat","outline","push","unelevated"];var nt=V({name:"QCarousel",props:$(q(q(q({},te),Ye),Ze),{transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>at.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>ot.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean}),emits:[...et,...He],setup(e,{slots:t}){const{proxy:{$q:i}}=K(),d=oe(e,i);let u,a;const{updatePanelsList:l,getPanelContent:p,panelDirectives:w,goToPanel:k,previousPanel:f,nextPanel:y,getEnabledPanels:g,panelIndex:C}=Ge(),{inFullscreen:P}=tt(),j=c(()=>P.value!==!0&&e.height!==void 0?{height:e.height}:{}),B=c(()=>e.vertical===!0?"vertical":"horizontal"),W=c(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(P.value===!0?" fullscreen":"")+(d.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${B.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${Y.value}`:"")),Q=c(()=>{const m=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?m.reverse():m}),A=c(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),D=c(()=>e.navigationActiveIcon||A.value),Y=c(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),E=c(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));N(()=>e.modelValue,()=>{e.autoplay&&(clearInterval(u),I())}),N(()=>e.autoplay,m=>{m?I():clearInterval(u)});function I(){const m=Ie(e.autoplay)===!0?e.autoplay:5e3;u=setTimeout(m>=0?y:f,Math.abs(m))}fe(()=>{e.autoplay&&I()}),ve(()=>{clearInterval(u)});function L(m,z){return h("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${m} q-carousel__navigation--${Y.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[h("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},g().map(z))])}function H(){const m=[];if(e.navigation===!0){const z=t["navigation-icon"]!==void 0?t["navigation-icon"]:r=>h(X,$(q({key:"nav"+r.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${r.active===!0?"":"in"}active`},r.btnProps),{onClick:r.onClick})),M=a-1;m.push(L("buttons",(r,v)=>{const S=r.props.name,T=C.value===v;return z({index:v,maxIndex:M,name:S,active:T,btnProps:q({icon:T===!0?D.value:A.value,size:"sm"},E.value),onClick:()=>{k(S)}})}))}else if(e.thumbnails===!0){const z=e.controlColor!==void 0?` text-${e.controlColor}`:"";m.push(L("thumbnails",M=>{const r=M.props;return h("img",{key:"tmb#"+r.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${r.name===e.modelValue?"":"in"}active`+z,src:r.imgSrc||r["img-src"],onClick:()=>{k(r.name)}})}))}return e.arrows===!0&&C.value>=0&&((e.infinite===!0||C.value>0)&&m.push(h("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${B.value} absolute flex flex-center`},[h(X,$(q({icon:Q.value[0]},E.value),{onClick:f}))])),(e.infinite===!0||C.value<a-1)&&m.push(h("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${B.value} absolute flex flex-center`},[h(X,$(q({icon:Q.value[1]},E.value),{onClick:y}))]))),pe(t.control,m)}return()=>(a=l(t),h("div",{class:W.value,style:j.value},[ke("div",{class:"q-carousel__slides-container"},p(),"sl-cont",e.swipeable,()=>w.value)].concat(H())))}}),st="/assets/01.870a3845.png",it="/assets/02.cc24fa9b.png",rt="/assets/03.e64fa899.png",lt="/assets/04.1.c0769832.png",ut="/assets/04.2.85754a7b.png",dt="/assets/04.3.fd8864fa.png",ct="/assets/04.4.3caea48c.png",pt="/assets/05.13b80590.png",ft="/assets/06.30456e53.png",vt="/assets/07.a85e1a92.png",ht="/assets/08.52ba9264.png",gt="/assets/09.03c43b3a.png",mt="/assets/10.ba0959fd.png",xt="/assets/11.c3d23d8a.png",_t="/assets/12.44b308f6.png",yt="/assets/13.f0156856.png",bt="/assets/14.0c59c124.png";const wt={setup(){return{progress1:.0666,slide:U(1),autoplay:U(!1)}}},kt={class:"superContainer",style:{width:"270px",height:"584px","background-color":"white","border-radius":"20px","box-shadow":"5px 5px 5px rgba(0, 0, 0, 0.2)"}},Ct=o("p",{class:"text-h4",style:{position:"absolute","font-family":"'Baskerville'","z-index":"9999","margin-left":"35px",top:"62px"}}," Encuesta ",-1),qt={class:"cabecera flex justify-end",style:{position:"absolute","background-color":"#ffbe00",width:"270px",height:"120px","border-radius":"20px"}},St={class:"capsula flex items-end justify-end",style:{height:"47px"}},Pt=o("div",{class:"pagination flex justify-end",style:{width:"40px",margin:"0px 10px"}},[o("div",{class:"p-actual",id:"box01"},[o("span")]),o("div",null,"/"),o("div",{class:"p-total",id:"box02"},"15")],-1),$t={class:"car-container",style:{position:"absolute",width:"270px",height:"584px !important","/*top":"40%","*/\n          /*margin-left":"15px","*/\n          background-color":"blue !important"}},jt=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"01"})],-1),Bt={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},It=o("img",{src:st,alt:"",style:{width:"100%"}},null,-1),At=o("img",{src:it,alt:"",style:{width:"100%"}},null,-1),zt=o("div",{class:"captionContainer",style:{position:"fixed",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"02"})],-1),Tt={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},Et=o("img",{src:rt,alt:"",style:{width:"100%"}},null,-1),Nt=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"03"})],-1),Xt={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},Vt=o("img",{src:lt,alt:"",style:{width:"100%"}},null,-1),Ft=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"04"})],-1),Qt={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},Dt=o("img",{src:ut,alt:"",style:{width:"100%"}},null,-1),Lt=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"05"})],-1),Mt={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},Rt=o("img",{src:dt,alt:"",style:{width:"100%"}},null,-1),Ot=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"06"})],-1),Ut={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},Kt=o("img",{src:ct,alt:"",style:{width:"100%"}},null,-1),Wt=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"07"})],-1),Yt={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},Ht=o("img",{src:pt,alt:"",style:{width:"100%"}},null,-1),Gt=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"08"})],-1),Jt={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},Zt=o("img",{src:ft,alt:"",style:{width:"100%"}},null,-1),eo=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"09"})],-1),to={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},oo=o("img",{src:vt,alt:"",style:{width:"100%"}},null,-1),ao=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"10"})],-1),no={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},so=o("img",{src:ht,alt:"",style:{width:"100%"}},null,-1),io=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"11"})],-1),ro={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},lo=o("img",{src:gt,alt:"",style:{width:"100%"}},null,-1),uo=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"12"})],-1),co={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},po=o("img",{src:mt,alt:"",style:{width:"100%"}},null,-1),fo=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"13"})],-1),vo={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},ho=o("img",{src:xt,alt:"",style:{width:"100%"}},null,-1),go=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"14"})],-1),mo={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},xo=o("img",{src:_t,alt:"",style:{width:"100%"}},null,-1),_o=o("div",{class:"captionContainer",style:{position:"absolute",float:"right",width:"15px",height:"15px",right:"20px",top:"26px",overflow:"hidden"}},[o("div",{class:"caption","data-count":"15"})],-1),yo={style:{position:"absolute",top:"15%"},class:"column no-wrap justify-between"},bo=o("img",{src:yt,alt:"",style:{width:"100%"}},null,-1),wo={style:{position:"absolute"},class:"column no-wrap justify-between"},ko=o("img",{src:bt,alt:"",style:{width:"100%"}},null,-1),Co=o("div",{class:"foot"},[o("div",{class:"row",style:{position:"absolute",top:"91%",left:"50%",width:"246px",height:"50px",transform:"translate(-50%, -50%)","z-index":"999 !important","background-color":"#000",color:"#fff","border-radius":"10px"}},[o("div",{class:"col flex flex-center"},[o("a",{href:"#/Escaner"},[o("img",{style:{width:"20px"},src:Ve,alt:""})])]),o("div",{class:"col flex flex-center"},[o("a",{href:"#/Encuesta"},[o("img",{style:{width:"20px"},src:Fe,alt:""})])]),o("div",{class:"col flex flex-center"},[o("a",{href:"#/Cartelera"},[o("img",{style:{width:"20px"},src:Qe,alt:""})])])]),o("div",{class:"row",style:{position:"absolute",top:"93%",left:"50%",width:"246px",height:"5px",transform:"translate(-50%, -50%)","z-index":"999 !important","background-color":"transparent",color:"#fff","font-size":"11px"}},[o("div",{class:"col flex flex-center"},"Sc\xE1ner"),o("div",{class:"col flex flex-center"},"Encuesta"),o("div",{class:"col flex flex-center"},"Cartelera")])],-1);function qo(e,t,i,d,u,a){return ze(),Te(Xe,{class:"flex column flex-center"},{default:s(()=>[o("div",kt,[Ct,o("div",qt,[o("div",St,[n(Le,{size:"7px",value:d.progress1,"track-color":"white",color:"secondary",style:{"background-color":"#fff !important",width:"84px","border-radius":"2px"},class:"q-mb-sm"},null,8,["value"]),Pt])]),o("div",$t,[n(nt,{modelValue:d.slide,"onUpdate:modelValue":t[2]||(t[2]=l=>d.slide=l),"transition-prev":"slide-right","transition-next":"slide-left",animated:"",ref:"carousel",style:{"background-color":"transparent !important",height:"584px !important",padding:"0px"}},{control:s(()=>[n(Je,{position:"bottom-left",class:"q-gutter-xs"},{default:s(()=>[n(X,{flat:"",round:"","text-color":"black",icon:"chevron_left",onClick:t[0]||(t[0]=l=>(e.$refs.carousel.previous(),d.progress1-=.0666)),style:{position:"absolute",float:"left",left:"-40px",top:"-500px","font-size":"24px"}}),n(X,{flat:"",round:"",class:"next","text-color":"black",icon:"chevron_right",style:{"font-size":"24px",left:"190px",top:"-230px",opacity:"0.4"},onClick:t[1]||(t[1]=l=>(e.$refs.carousel.next(),d.progress1+=.0666))})]),_:1})]),default:s(()=>[n(b,{name:1,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[jt,o("div",Bt,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"198px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[It]),_:1})]),_:1}),n(_,{class:"card02",style:{"border-radius":"35px","margin-top":"20px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"206px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[At]),_:1})]),_:1})])]),_:1}),n(b,{name:2,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[zt,o("div",Tt,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"388px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[Et]),_:1})]),_:1})])]),_:1}),n(b,{name:3,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[Nt,o("div",Xt,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"386px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[Vt]),_:1})]),_:1})])]),_:1}),n(b,{name:4,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[Ft,o("div",Qt,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"415px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[Dt]),_:1})]),_:1})])]),_:1}),n(b,{name:5,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[Lt,o("div",Mt,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"415px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[Rt]),_:1})]),_:1})])]),_:1}),n(b,{name:6,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[Ot,o("div",Ut,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"413px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[Kt]),_:1})]),_:1})])]),_:1}),n(b,{name:7,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[Wt,o("div",Yt,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"414px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[Ht]),_:1})]),_:1})])]),_:1}),n(b,{name:8,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[Gt,o("div",Jt,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"406px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[Zt]),_:1})]),_:1})])]),_:1}),n(b,{name:9,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[eo,o("div",to,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"332px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[oo]),_:1})]),_:1})])]),_:1}),n(b,{name:10,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[ao,o("div",no,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"423px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[so]),_:1})]),_:1})])]),_:1}),n(b,{name:11,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[io,o("div",ro,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"413px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[lo]),_:1})]),_:1})])]),_:1}),n(b,{name:12,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[uo,o("div",co,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"413px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[po]),_:1})]),_:1})])]),_:1}),n(b,{name:13,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[fo,o("div",vo,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"269px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[ho]),_:1})]),_:1})])]),_:1}),n(b,{name:14,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[go,o("div",mo,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"389px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[xo]),_:1})]),_:1})])]),_:1}),n(b,{name:15,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"240px",padding:"0px"}},{default:s(()=>[_o,o("div",yo,[n(_,{class:"my-card",style:{"border-radius":"35px"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"385px","border-radius":"35px",overflow:"hidden","background-color":"#f8f4f4"}},{default:s(()=>[bo]),_:1})]),_:1})])]),_:1}),n(b,{name:16,class:"column no-wrap justify-between",style:{position:"relative",left:"50%",transform:"translateX(-50%)","background-color":"transparent !important",width:"100%",padding:"0px",overflow:"hidden"}},{default:s(()=>[o("div",wo,[n(_,{class:"my-card",style:{overflow:"hidden"}},{default:s(()=>[n(x,{style:{padding:"0px",height:"100%","/*border-radius":"35px","*/\n                    overflow":"hidden","background-color":"#f8f4f4"}},{default:s(()=>[n(X,{to:"Inicio",rounded:"",label:"Terminar",style:{position:"absolute","background-color":"#ffbe00",left:"50%",transform:"translateX(-50%)",top:"420px"}}),ko]),_:1})]),_:1})])]),_:1})]),_:1},8,["modelValue"])])]),Co]),_:1})}var Xo=Ae(wt,[["render",qo]]);export{Xo as default};
