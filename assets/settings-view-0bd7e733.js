import{_ as h}from"./base-dropdown.vue_vue_type_script_setup_true_lang-66bbf367.js";import{d as k,u as $,a as I,r as g,s as x,i as S,c as d,h as s,t as n,j as v,f as t,n as A,p as P,F as b,b as B,k as _,e as y,l as E,o as l,C as w,q as F,x as U,_ as N}from"./index-87ee5b82.js";const R=[{text:"English",value:"en"},{text:"Polski",value:"pl"}],H=[{name:"Radio Browser API",homepage:"https://api.radio-browser.info"},{name:"Radiolise API",homepage:"https://gitlab.com/radiolise/radiolise.gitlab.io"},{name:"Free IP API",homepage:"https://freeipapi.com"}],L=i=>(F("data-v-a3f74ea5"),i=i(),U(),i),j={key:0,class:"settings"},D={class:"headline"},O={class:"settings__form"},T={class:"about"},q={class:"about__title"},G={class:"about__text"},M=["href"],Y=L(()=>s("a",{href:"https://github.com/web-radio/web-radio.github.io"},"GitHub",-1)),z={style:{"text-align":"center"}},J=k({__name:"settings-view",setup(i){const r=$(),C=I(),u=g(!1),p=g(!0),m=g(null),{exploreViewCountry:c}=x(r);async function f(){p.value=!0,u.value=!1;try{m.value=(await r.apiClient.getCountries({})).map(e=>({text:`${E(e.code.toUpperCase())} [${e.code.toUpperCase()}] ${e.name}`,value:e.code}))}catch{u.value=!0}p.value=!1}return S(async()=>await f()),(e,o)=>(l(),d(b,null,[!p.value&&!u.value?(l(),d("div",j,[s("p",D,n(e.$t("nav.settings")),1),s("section",O,[v(t(h),{modelValue:t(c),"onUpdate:modelValue":o[0]||(o[0]=a=>A(c)?c.value=a:null),showOptionAll:!0,label:e.$t("settings.countryExploreView"),options:m.value},null,8,["modelValue","label","options"]),v(t(h),{modelValue:t(r).language,"onUpdate:modelValue":o[1]||(o[1]=a=>t(r).language=a),showOptionAll:!1,label:e.$t("settings.applicationLanguage"),options:t(R)},null,8,["modelValue","label","options"]),s("button",{class:"block-button",onClick:o[2]||(o[2]=a=>t(C).clearHistory())},n(e.$t("settings.clearHistory")),1),s("div",T,[s("div",q,n(e.$t("settings.about")),1),s("div",G,[P(n(e.$t("settings.apis"))+": ",1),s("ul",null,[(l(!0),d(b,null,B(t(H),(a,V)=>(l(),d("li",{key:V},[s("a",{href:a.homepage,target:"_blank"},n(a.name),9,M)]))),128))]),Y,s("div",z," 2023 - "+n(new Date().getFullYear()),1)])])])])):_("",!0),p.value?(l(),y(t(w),{key:1,type:"loading"})):_("",!0),u.value?(l(),y(t(w),{key:2,type:"info",icon:"error",text:e.$t("error"),buttonIcon:"refresh",onButtonClick:f},null,8,["text"])):_("",!0)],64))}});const W=N(J,[["__scopeId","data-v-a3f74ea5"]]);export{W as default};
