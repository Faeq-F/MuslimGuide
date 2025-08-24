import{k as ge,l as M,m as w,p as de,e as j,q as be,s as ye,v as P,x as Ce,y as ce,z as pe,f as y,o as p,w as _,A as I,a as x,g as r,t as R,P as $,B as O,d as b,C as Ie,D as je,E as q,G as ze,H as Ve,I as Ee,J as Me,K as me,L as Re,M as Fe,N as Pe,O as De,Q as $e,R as fe,c as F,S as U,T as C,F as H,r as Be,b as E,i as xe,j as Te,U as we,_ as Oe,V as Ne,h as Ue}from"./9UIRyI57.js";import{_ as He}from"./hemkx8pT.js";import{_ as _e}from"./DlAUqK2U.js";function qe(s){const e=ge({dir:M("ltr")});return w(()=>{var n;return(s==null?void 0:s.value)||((n=e.dir)==null?void 0:n.value)||"ltr"})}const We=["INPUT","TEXTAREA"];function Ke(s,e,n,a={}){if(!e||a.enableIgnoredElement&&We.includes(e.nodeName))return null;const{arrowKeyOptions:d="both",attributeName:v="[data-reka-collection-item]",itemsArray:i=[],loop:o=!0,dir:h="ltr",preventScroll:t=!0,focus:l=!1}=a,[g,z,D,u,c,A]=[s.key==="ArrowRight",s.key==="ArrowLeft",s.key==="ArrowUp",s.key==="ArrowDown",s.key==="Home",s.key==="End"],k=D||u,V=g||z;if(!c&&!A&&(!k&&!V||d==="vertical"&&V||d==="horizontal"&&k))return null;const f=i;if(!f.length)return null;t&&s.preventDefault();let S=null;return V||k?S=Ae(f,e,{goForward:k?u:h==="ltr"?g:z,loop:o}):c?S=f.at(0)||null:A&&(S=f.at(-1)||null),l&&(S==null||S.focus()),S}function Ae(s,e,n,a=s.length){if(--a===0)return null;const d=s.indexOf(e),v=n.goForward?d+1:d-1;if(!n.loop&&(v<0||v>=s.length))return null;const i=(v+s.length)%s.length,o=s[i];return o?o.hasAttribute("disabled")&&o.getAttribute("disabled")!=="false"?Ae(s,o,n,a):o:null}let Le=0;function he(s,e="reka"){const n=ge({useId:void 0});return de?`${e}-${de()}`:n.useId?`${e}-${n.useId()}`:`${e}-${++Le}`}function Ge(){return{ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control",ASTERISK:"*",SPACE_CODE:"Space"}}const Qe={"aria-live":"polite","aria-atomic":"true",role:"status",style:{transform:"translateX(-100%)",position:"absolute",pointerEvents:"none",opacity:0,margin:0}},[W,Xe]=be("StepperRoot"),Je=j({__name:"StepperRoot",props:{defaultValue:{default:1},orientation:{default:"horizontal"},dir:{},modelValue:{},linear:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(s,{emit:e}){const n=s,a=e,{dir:d,orientation:v,linear:i}=ye(n),o=qe(d);P();const h=M(new Set),t=Ce(n,"modelValue",a,{defaultValue:n.defaultValue,passive:n.modelValue===void 0}),l=w(()=>Array.from(h.value)),g=w(()=>t.value===1),z=w(()=>t.value===l.value.length),D=w(()=>h.value.size);function u(f){f>D.value||f<1||h.value.size&&l.value[f]&&l.value[f].getAttribute("disabled")||i.value&&f>(t.value??1)+1||(t.value=f)}const c=M(null),A=M(null),k=w(()=>c.value?c.value.getAttribute("disabled")==="":!0),V=w(()=>A.value?A.value.getAttribute("disabled")==="":!0);return ce(t,async()=>{await pe(()=>{c.value=l.value.length&&t.value<l.value.length?l.value[t.value]:null,A.value=l.value.length&&t.value>1?l.value[t.value-2]:null})}),ce(l,async()=>{await pe(()=>{c.value=l.value.length&&t.value<l.value.length?l.value[t.value]:null,A.value=l.value.length&&t.value>1?l.value[t.value-2]:null})}),Xe({modelValue:t,changeModelValue:f=>{t.value=f},orientation:v,dir:o,linear:i,totalStepperItems:h}),(f,S)=>(p(),y(r($),{role:"group","aria-label":"progress",as:f.as,"as-child":f.asChild,"data-linear":r(i)?"":void 0,"data-orientation":f.orientation},{default:_(()=>[I(f.$slots,"default",{modelValue:r(t),totalSteps:h.value.size,isNextDisabled:k.value,isPrevDisabled:V.value,isFirstStep:g.value,isLastStep:z.value,goToStep:u,nextStep:()=>u((r(t)??1)+1),prevStep:()=>u((r(t)??1)-1)}),x("div",Qe," Step "+R(r(t))+" of "+R(h.value.size),1)]),_:3},8,["as","as-child","data-linear","data-orientation"]))}}),[B,Ye]=be("StepperItem"),Ze=j({__name:"StepperItem",props:{step:{},disabled:{type:Boolean,default:!1},completed:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},setup(s){const e=s,{disabled:n,step:a,completed:d}=ye(e),{forwardRef:v}=P(),i=W(),o=he(void 0,"reka-stepper-item-title"),h=he(void 0,"reka-stepper-item-description"),t=w(()=>d.value?"completed":i.modelValue.value===a.value?"active":i.modelValue.value>a.value?"completed":"inactive"),l=w(()=>n.value?!1:i.linear.value?a.value<=i.modelValue.value||a.value===i.modelValue.value+1:!0);return Ye({titleId:o,descriptionId:h,state:t,disabled:n,step:a,isFocusable:l}),(g,z)=>(p(),y(r($),{ref:r(v),as:g.as,"as-child":g.asChild,"aria-current":t.value==="active"?"true":void 0,"data-state":t.value,disabled:r(n)||!l.value?"":void 0,"data-disabled":r(n)||!l.value?"":void 0,"data-orientation":r(i).orientation.value},{default:_(()=>[I(g.$slots,"default",{state:t.value})]),_:3},8,["as","as-child","aria-current","data-state","disabled","data-disabled","data-orientation"]))}}),ea=j({__name:"StepperDescription",props:{asChild:{type:Boolean},as:{default:"p"}},setup(s){const e=s;P();const n=B();return(a,d)=>(p(),y(r($),O(e,{id:r(n).descriptionId}),{default:_(()=>[I(a.$slots,"default")]),_:3},16,["id"]))}}),aa=j({__name:"StepperIndicator",props:{asChild:{type:Boolean},as:{}},setup(s){const e=s,n=B();return P(),(a,d)=>(p(),y(r($),Ie(je(e)),{default:_(()=>[I(a.$slots,"default",{step:r(n).step.value},()=>[b(" Step "+R(r(n).step.value),1)])]),_:3},16))}}),ta=j({__name:"StepperSeparator",props:{orientation:{},decorative:{type:Boolean},asChild:{type:Boolean},as:{}},setup(s){const e=s,n=W(),a=B();return P(),(d,v)=>(p(),y(r(He),O(e,{decorative:"",orientation:r(n).orientation.value,"data-state":r(a).state.value}),{default:_(()=>[I(d.$slots,"default")]),_:3},16,["orientation","data-state"]))}}),na=j({__name:"StepperTitle",props:{asChild:{type:Boolean},as:{default:"h4"}},setup(s){const e=s,n=B();return P(),(a,d)=>(p(),y(r($),O(e,{id:r(n).titleId}),{default:_(()=>[I(a.$slots,"default")]),_:3},16,["id"]))}}),ra=j({__name:"StepperTrigger",props:{asChild:{type:Boolean},as:{default:"button"}},setup(s){const e=W(),n=B(),a=Ge(),d=w(()=>Array.from(e.totalStepperItems.value));function v(t){if(!n.disabled.value){if(e.linear.value){if((n.step.value<=e.modelValue.value||n.step.value===e.modelValue.value+1)&&t.ctrlKey===!1){e.changeModelValue(n.step.value);return}}else if(t.ctrlKey===!1){e.changeModelValue(n.step.value);return}t.preventDefault()}}function i(t){t.preventDefault(),!n.disabled.value&&((t.key===a.ENTER||t.key===a.SPACE)&&!t.ctrlKey&&!t.shiftKey&&e.changeModelValue(n.step.value),[a.ARROW_LEFT,a.ARROW_RIGHT,a.ARROW_UP,a.ARROW_DOWN].includes(t.key)&&Ke(t,Me(),void 0,{itemsArray:d.value,focus:!0,loop:!1,arrowKeyOptions:e.orientation.value,dir:e.dir.value}))}const{forwardRef:o,currentElement:h}=P();return q(()=>{e.totalStepperItems.value.add(h.value)}),ze(()=>{e.totalStepperItems.value.delete(h.value)}),(t,l)=>(p(),y(r($),{ref:r(o),type:t.as==="button"?"button":void 0,as:t.as,"as-child":t.asChild,"data-state":r(n).state.value,disabled:r(n).disabled.value||!r(n).isFocusable.value?"":void 0,"data-disabled":r(n).disabled.value||!r(n).isFocusable.value?"":void 0,"data-orientation":r(e).orientation.value,tabindex:r(n).isFocusable.value?0:-1,"aria-describedby":r(n).descriptionId,"aria-labelledby":r(n).titleId,onMousedown:Ee(v,["left"]),onKeydown:Ve(i,["enter","space","left","right","up","down"])},{default:_(()=>[I(t.$slots,"default")]),_:3},8,["type","as","as-child","data-state","disabled","data-disabled","data-orientation","tabindex","aria-describedby","aria-labelledby"]))}}),sa={slots:{root:"flex gap-4",header:"flex",item:"group text-center relative w-full",container:"relative",trigger:"rounded-full font-medium text-center align-middle flex items-center justify-center font-semibold group-data-[state=completed]:text-inverted group-data-[state=active]:text-inverted text-muted bg-elevated focus-visible:outline-2 focus-visible:outline-offset-2",indicator:"flex items-center justify-center size-full",icon:"shrink-0",separator:"absolute rounded-full group-data-[disabled]:opacity-75 bg-accented",wrapper:"",title:"font-medium text-default",description:"text-muted text-wrap",content:"size-full"},variants:{orientation:{horizontal:{root:"flex-col",container:"flex justify-center",separator:"top-[calc(50%-2px)] h-0.5",wrapper:"mt-1"},vertical:{header:"flex-col gap-4",item:"flex text-start",separator:"start-[calc(50%-1px)] -bottom-[10px] w-0.5"}},size:{xs:{trigger:"size-6 text-xs",icon:"size-3",title:"text-xs",description:"text-xs",wrapper:"mt-1.5"},sm:{trigger:"size-8 text-sm",icon:"size-4",title:"text-xs",description:"text-xs",wrapper:"mt-2"},md:{trigger:"size-10 text-base",icon:"size-5",title:"text-sm",description:"text-sm",wrapper:"mt-2.5"},lg:{trigger:"size-12 text-lg",icon:"size-6",title:"text-base",description:"text-base",wrapper:"mt-3"},xl:{trigger:"size-14 text-xl",icon:"size-7",title:"text-lg",description:"text-lg",wrapper:"mt-3.5"}},color:{primary:{trigger:"group-data-[state=completed]:bg-primary group-data-[state=active]:bg-primary focus-visible:outline-primary",separator:"group-data-[state=completed]:bg-primary"},secondary:{trigger:"group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary focus-visible:outline-secondary",separator:"group-data-[state=completed]:bg-secondary"},success:{trigger:"group-data-[state=completed]:bg-success group-data-[state=active]:bg-success focus-visible:outline-success",separator:"group-data-[state=completed]:bg-success"},info:{trigger:"group-data-[state=completed]:bg-info group-data-[state=active]:bg-info focus-visible:outline-info",separator:"group-data-[state=completed]:bg-info"},warning:{trigger:"group-data-[state=completed]:bg-warning group-data-[state=active]:bg-warning focus-visible:outline-warning",separator:"group-data-[state=completed]:bg-warning"},error:{trigger:"group-data-[state=completed]:bg-error group-data-[state=active]:bg-error focus-visible:outline-error",separator:"group-data-[state=completed]:bg-error"},neutral:{trigger:"group-data-[state=completed]:bg-inverted group-data-[state=active]:bg-inverted focus-visible:outline-inverted",separator:"group-data-[state=completed]:bg-inverted"}}},compoundVariants:[{orientation:"horizontal",size:"xs",class:{separator:"start-[calc(50%+16px)] end-[calc(-50%+16px)]"}},{orientation:"horizontal",size:"sm",class:{separator:"start-[calc(50%+20px)] end-[calc(-50%+20px)]"}},{orientation:"horizontal",size:"md",class:{separator:"start-[calc(50%+28px)] end-[calc(-50%+28px)]"}},{orientation:"horizontal",size:"lg",class:{separator:"start-[calc(50%+32px)] end-[calc(-50%+32px)]"}},{orientation:"horizontal",size:"xl",class:{separator:"start-[calc(50%+36px)] end-[calc(-50%+36px)]"}},{orientation:"vertical",size:"xs",class:{separator:"top-[30px]",item:"gap-1.5"}},{orientation:"vertical",size:"sm",class:{separator:"top-[38px]",item:"gap-2"}},{orientation:"vertical",size:"md",class:{separator:"top-[46px]",item:"gap-2.5"}},{orientation:"vertical",size:"lg",class:{separator:"top-[54px]",item:"gap-3"}},{orientation:"vertical",size:"xl",class:{separator:"top-[62px]",item:"gap-3.5"}}],defaultVariants:{size:"md",color:"primary"}},ke={__name:"Stepper",props:me({as:{type:null,required:!1},items:{type:Array,required:!0},size:{type:null,required:!1},color:{type:null,required:!1},orientation:{type:null,required:!1,default:"horizontal"},defaultValue:{type:[String,Number],required:!1},disabled:{type:Boolean,required:!1},class:{type:null,required:!1},ui:{type:null,required:!1},linear:{type:Boolean,required:!1,default:!0}},{modelValue:{type:[String,Number]},modelModifiers:{}}),emits:me(["next","prev"],["update:modelValue"]),setup(s,{expose:e,emit:n}){const a=s,d=n,v=Re(),i=Fe(s,"modelValue"),o=Pe(),h=De($e(a,"as","orientation","linear")),t=w(()=>{var u;return fe({extend:fe(sa),...((u=o.ui)==null?void 0:u.stepper)||{}})({orientation:a.orientation,size:a.size,color:a.color})}),l=w({get(){const u=i.value??a.defaultValue;return(typeof u=="string"?a.items.findIndex(c=>c.value===u):u)??0},set(u){var c,A;i.value=((A=(c=a.items)==null?void 0:c[u])==null?void 0:A.value)??u}}),g=w(()=>{var u;return(u=a.items)==null?void 0:u[l.value]}),z=w(()=>{var u;return l.value<((u=a.items)==null?void 0:u.length)-1}),D=w(()=>l.value>0);return e({next(){z.value&&(l.value+=1,d("next",g.value))},prev(){D.value&&(l.value-=1,d("prev",g.value))},hasNext:z,hasPrev:D}),(u,c)=>{var A;return p(),y(r(Je),O(r(h),{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=k=>l.value=k),class:t.value.root({class:[(A=a.ui)==null?void 0:A.root,a.class]})}),{default:_(()=>{var k,V,f,S,N;return[x("div",{class:C(t.value.header({class:(k=a.ui)==null?void 0:k.header}))},[(p(!0),F(H,null,Be(s.items,(m,T)=>{var K,L;return p(),y(r(Ze),{key:m.value??T,step:T,disabled:m.disabled||a.disabled,class:C(t.value.item({class:[(K=a.ui)==null?void 0:K.item,(L=m.ui)==null?void 0:L.item,m.class]}))},{default:_(()=>{var G,Q,X,J,Y,Z,ee,ae,te,ne,re,se;return[x("div",{class:C(t.value.container({class:[(G=a.ui)==null?void 0:G.container,(Q=m.ui)==null?void 0:Q.container]}))},[E(r(ra),{class:C(t.value.trigger({class:[(X=a.ui)==null?void 0:X.trigger,(J=m.ui)==null?void 0:J.trigger]}))},{default:_(()=>{var ie,oe;return[E(r(aa),{class:C(t.value.indicator({class:[(ie=a.ui)==null?void 0:ie.indicator,(oe=m.ui)==null?void 0:oe.indicator]}))},{default:_(()=>[I(u.$slots,"indicator",{item:m},()=>{var le,ue;return[m.icon?(p(),y(xe,{key:0,name:m.icon,class:C(t.value.icon({class:[(le=a.ui)==null?void 0:le.icon,(ue=m.ui)==null?void 0:ue.icon]}))},null,8,["name","class"])):(p(),F(H,{key:1},[b(R(T+1),1)],64))]})]),_:2},1032,["class"])]}),_:2},1032,["class"]),c[1]||(c[1]=b()),T<s.items.length-1?(p(),y(r(ta),{key:0,class:C(t.value.separator({class:[(Y=a.ui)==null?void 0:Y.separator,(Z=m.ui)==null?void 0:Z.separator]}))},null,8,["class"])):U("",!0)],2),c[3]||(c[3]=b()),x("div",{class:C(t.value.wrapper({class:[(ee=a.ui)==null?void 0:ee.wrapper,(ae=m.ui)==null?void 0:ae.wrapper]}))},[E(r(na),{as:"div",class:C(t.value.title({class:[(te=a.ui)==null?void 0:te.title,(ne=m.ui)==null?void 0:ne.title]}))},{default:_(()=>[I(u.$slots,"title",{item:m},()=>[b(R(m.title),1)])]),_:2},1032,["class"]),c[2]||(c[2]=b()),E(r(ea),{as:"div",class:C(t.value.description({class:[(re=a.ui)==null?void 0:re.description,(se=m.ui)==null?void 0:se.description]}))},{default:_(()=>[I(u.$slots,"description",{item:m},()=>[b(R(m.description),1)])]),_:2},1032,["class"])],2)]}),_:2,__:[3]},1032,["step","disabled","class"])}),128))],2),c[4]||(c[4]=b()),(V=g.value)!=null&&V.content||v.content||(f=g.value)!=null&&f.slot?(p(),F("div",{key:0,class:C(t.value.content({class:(S=a.ui)==null?void 0:S.content}))},[I(u.$slots,((N=g.value)==null?void 0:N.slot)||"content",{item:g.value},()=>{var m;return[b(R((m=g.value)==null?void 0:m.content),1)]})],2)):U("",!0)]}),_:3,__:[4]},16,["modelValue","class"])}}},Se=Te("guidesStore",{state:()=>({umrah:[{name:"What is Umrah?"},{name:"Planning"},{name:"Starting Umrah: Intention & Ihram"},{name:"Entering the Masjid Al-Haram"},{name:"Perform - Tawaf x 7"},{name:"Perform Saey (Safa & Marwa)"},{name:"Tahallul (Coming out of the state of ihram)"}],hajj:[{name:"What is Hajj?"},{name:"Planning"},{name:"Preparation and Intention"},{name:"Day 1 / 8th Dhul Hijjah - Enter state of Ihram"},{name:"Day 2 / 9th Dhul Hijjah - Arrive in 'Arafah"},{name:"Stay in Muzdalifah"},{name:"Day 3 / 10th Dhul Hijjah & start of Eid Ul-Adha"},{name:"Perform Tawaaful-Ifaadhah & Saey"},{name:"Day 4 / 11th Dhul-Hijjah"},{name:"Day 5 / 12th Dhul Hijjah - Farewell Tawaf"},{name:"Day 6 / 13th Dhul Hijjah"}]}),actions:{}}),ve=j({__name:"hajj",setup(s){const e=we(),n=Se(),a=M(n.hajj.map((i,o)=>({title:i.name,description:i.description,contentComponent:i.contentComponent,icon:"i-tabler-number-"+o+"-small"}))),d=M(-1);function v(){document.getElementById("stepper")&&Array.from(document.getElementById("stepper").children[0].children).forEach((i,o)=>{i.addEventListener("click",()=>{e.push("/guide/hajj/step"+o)})})}return q(()=>{v()}),(i,o)=>{const h=ke;return p(),F("div",null,[E(h,{orientation:"vertical",class:"h-full pb-4 pl-4 w-full stepper",items:a.value,disabled:"",modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=t=>d.value=t),ui:{separator:"h-7 transition-all ease-in-out duration-200",item:"mt-4 p-1 pr-2 rounded-2xl outline-[#e7edf4] dark:outline-[#223649] outline-2",indicator:"transition-all ease-in-out duration-200",trigger:"transition-all ease-in-out duration-200",icon:"!size-8"},id:"stepper"},null,8,["items","modelValue"])])}}}),ia=j({__name:"umrah",setup(s){const e=Se(),n=M(e.umrah.map((i,o)=>({title:i.name,description:i.description,contentComponent:i.contentComponent,icon:"i-tabler-number-"+o+"-small"}))),a=M(-1),d=we();function v(){document.getElementById("stepper")&&Array.from(document.getElementById("stepper").children[0].children).forEach((i,o)=>{i.addEventListener("click",()=>{d.push("/guide/umrah/step"+o)})})}return q(()=>{v()}),(i,o)=>{const h=ke;return p(),F("div",null,[E(h,{orientation:"vertical",class:"h-full pb-4 pl-4 w-full stepper",id:"stepper",items:n.value,disabled:"",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value=t),ui:{separator:"h-7 transition-all ease-in-out duration-200",item:"mt-4 p-1 pr-2 rounded-2xl outline-[#e7edf4] dark:outline-[#223649] outline-2",indicator:"transition-all ease-in-out duration-200",trigger:"transition-all ease-in-out duration-200",icon:"!size-8"}},null,8,["items","modelValue"])])}}}),oa={},la={class:"flex items-center gap-4 bg-slate-50 dark:bg-[#182634] px-2 min-h-[72px] py-1 border-2 border-[#e7edf4] dark:border-[#223649] rounded-2xl m-4"},ua={class:"text-[#0d141c] dark:text-white flex items-center justify-center rounded-lg bg-[#e7edf4] dark:bg-accented shrink-0 size-14"};function da(s,e){const n=xe,a=Oe;return p(),F(H,null,[e[2]||(e[2]=x("div",{class:"p-4 m-4 border border-[#e7edf4] dark:border-[#223649] rounded-2xl"},[b(`
    A pilgrim visiting Makkah should try to visit the city of the Prophet ﷺ .
    `),x("br"),x("br"),b(`
    It is not a part of 'Umrah or Hajj but since one has traveled from far away,
    pilgrims are recommended to visit the Masjid and pray there.
  `)],-1)),e[3]||(e[3]=b()),E(a,{to:"/guide/masjid-al-nabawi"},{default:_(()=>[x("div",la,[x("div",ua,[E(n,{name:"i-hugeicons-mosque-02",class:"!size-9 stroke-[54px]"})]),e[0]||(e[0]=b()),e[1]||(e[1]=x("div",{class:"flex flex-col justify-center"},[x("p",{class:"text-[#0d141c] dark:text-white text-base font-medium leading-normal"},`
          Masjid Al-Nabawi Guide
        `),b(),x("p",{class:"text-[#49739c] dark:text-[#90adcb] text-sm font-normal leading-normal"},`
          Visit the Masjid & the Prophet's grave
        `)],-1))])]),_:1}),e[4]||(e[4]=b()),e[5]||(e[5]=x("div",{class:"p-4 m-4 border border-[#e7edf4] dark:border-[#223649] rounded-2xl"},[x("div",{class:"font-bold mb-2 underline decoration-1 decoration-[#e7edf4] dark:decoration-[#223649] underline-offset-4"},`
      Visiting Masjid Al-Quba
    `),b(`
    Visiting Masjid Quba has great reward in it because the Messenger of Allah
    ﷺ
    said:
    `),x("div",{class:"mt-2 text-[#0d141c] dark:text-white text-lg font-normal leading-normal pt-1 px-4 text-center"},`
      "Whoever purifies himself in his house, then comes to the mosque of Quba
      and
      prays in it, he will have a reward like the Umrah pilgrimage." (Ibn
      Majah)
    `)],-1))],64)}const ca=_e(oa,[["render",da]]),pa={};function ma(s,e){return e[0]||(e[0]=Ne(`

  Battle of Uhud took place here.

  <br>

  Narrated Anas bin Malik:<br>

  When the mountain of Uhud came in the sight of Allah&#39;s Messenger (صلى الله
  عليه وسلم ) he said. <br>

  &quot;This is a mountain that loves us and is loved by us. O Allah! Abraham made
  Mecca a sanctuary, and I make (the area) in between these two mountains (of
  Medina) a sanctuary.&quot; (Bukhari)

  <br><br>

  Abu Huraira (RA) narrated that the Messenger of Allah صلى الله عليه وسلم said:

  <br>

  &quot;One prayer in this Mosque of mine is better than one thousand prayers offered
  anywhere else except Al-Masjid al Haram.&quot;

  <br>

  - Bukhari, Muslim

  <br><br>

  Visit the Prophet&#39;s Rawdah (grave) to send Salam

  <br>

  As you pass by the graves, there are 3 gold railings.

  <br>

  In the middle railing, it says ‘Huna Rasulallah’ which means here is the
  Prophet’s grave. Then it says, ‘Huna Abu Bakr (RA)’ and then ‘Huna Umar (RA).’

  <br>

  While passing by the Rawda (Grave of the Prophet), you can send Salam in the
  following manner:

  <br>

  --

  <br>

  As-salamu ‘alayka ayu han nabiyu wa rahmatullahi wa barakatuhu wa sallal lahu
  alaika wa ala aalika wa as habika.

  <br>

  Peace be upon you O Messenger of Allah, mercy and blessings of Allah be upon
  you and blessings upon your family and your companions upon you O Messenger of
  Allah.

  <br><br>

  Salam to Abu Bakar RA

  <br><br>

  --

  <br>

  Assalamu ‘alayka ya khalifata l-muslimīna Aba Bakri al-Siddiq.

  <br>

  Peace be upon you O Caliph of the Muslims, Abu Bakr al-Siddiq.

  <br><br>

  Salam to Omar RA

  <br>

  As-salamu ‘alayka ya amira l-mu’minin, ‘Umara bni l-Khattab.

  <br>

  Peace be upon you O Commander of the Faithful, Umar ibn al-Khattab

  <br><br>

  Over 10,000+ Companions of Prophet Muhammad صلى الله عليه وسلم are buried in
  Baqi, including many of the Prophet’s household family members.

  <br>

  Men can follow a funeral and take part in the burial for great reward.

  <br><br>

  --

  <br>

  Assalaamu &#39;alaykum &#39;ahlad-diyaari, minal-mu&#39;mineena walmuslimeena, wa &#39;innaa
  &#39;in shaa&#39; Allaahu bikum laahiqoona [wa yarhamullaahul -mustaqdimeena minnaa
  walmusta&#39;khireena] &#39;as&#39;alullaaha lanaa wa lakumul- &#39;aafiyata.

  <br>

  Oh Muslims residing here, salaams on you, by the will of Allah we will also be
  coming to you. We seek safety for us and you. (Muslim, Ibn Majah)

`,58))}const fa=_e(pa,[["render",ma]]),ba=j({__name:"[name]",setup(s){const e=Ue();return(n,a)=>(p(),F("div",null,[r(e).path=="/guide/hajj"?(p(),y(ve,{key:0})):r(e).path=="/guide/umrah"?(p(),y(ia,{key:1})):r(e).path=="/guide/madinah"?(p(),y(ca,{key:2})):r(e).path=="/guide/hajj"?(p(),y(ve,{key:3})):r(e).path=="/guide/masjid-al-nabawi"?(p(),y(fa,{key:4})):U("",!0)]))}});export{ba as default};
