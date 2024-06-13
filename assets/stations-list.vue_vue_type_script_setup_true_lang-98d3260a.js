import{_ as L,o as t,c as o,h as s,F as I,b as N,aH as V,q as P,x as R,d as j,bO as q,a as H,r as b,bI as K,t as r,p,f as i,l as W,k as c,aF as $,u as G,bz as F,aJ as Q,aI as X,aM as Y,e as w,C as O,bP as J}from"./index-87ee5b82.js";const Z={},B=_=>(P("data-v-6ecf2595"),_=_(),R(),_),x={class:"skeleton-loader"},aa=B(()=>s("div",{class:"skeleton-loader__image"},null,-1)),ta=B(()=>s("div",{class:"skeleton-loader__name"},null,-1)),sa={class:"skeleton-loader__details"},ea=B(()=>s("div",{class:"skeleton-loader__actions"},[s("div",{class:"skeleton-loader__actions-button"}),s("div",{class:"skeleton-loader__actions-button"}),s("div",{class:"skeleton-loader__actions-button"})],-1));function oa(_,d){return t(),o("div",x,[aa,ta,s("div",sa,[(t(),o(I,null,N([68,120,56,78,95,43,56],(l,u)=>s("div",{class:"skeleton-loader__details-chip",key:u,style:V({width:l+"px"})},null,4)),64))]),ea])}const na=L(Z,[["render",oa],["__scopeId","data-v-6ecf2595"]]),h=_=>(P("data-v-4c5d1789"),_=_(),R(),_),ia={class:"card__background"},la=["src"],da={key:1,class:"material-symbols-rounded card__station-icon"},ra={class:"card__name"},ca={class:"card__details"},ua={key:0,class:"card__details-chip"},_a={key:1,class:"card__details-chip"},va=h(()=>s("span",{class:"material-symbols-rounded"},"translate",-1)),pa={key:2,class:"card__details-chip"},ma=h(()=>s("span",{class:"material-symbols-rounded"},"verified",-1)),ha={class:"card__details-chip"},Ua=h(()=>s("span",{class:"material-symbols-rounded"},"visibility",-1)),ya={class:"card__details-chip"},fa=h(()=>s("span",{class:"material-symbols-rounded"},"thumb_up",-1)),ka={key:3,class:"card__details-chip"},ba={class:"material-symbols-rounded"},Ia={key:4,class:"card__details-chip"},ga=h(()=>s("span",{class:"material-symbols-rounded"},"album",-1)),Da={key:5,class:"card__details-chip"},Sa=h(()=>s("span",{class:"material-symbols-rounded"},"speed",-1)),Ca={class:"card__actions"},$a=h(()=>s("span",{class:"material-symbols-rounded",style:{"font-size":"20px"}},"info",-1)),wa=[$a],Na=["disabled"],Ba=h(()=>s("span",{class:"material-symbols-rounded",style:{"font-size":"20px"}},"thumb_up",-1)),Ta=[Ba],Ma={key:0,class:"material-symbols-rounded"},za={key:1,class:"spinner spinner--small"},Aa={key:2,class:"material-symbols-rounded"},Ea={key:3,class:"material-symbols-rounded"},Fa=j({__name:"station-card",props:{data:{}},setup(_){const d=q(),l=H(),u=b(!1);return(a,e)=>{var U,y,m,D,g,k,n,f;return t(),o("div",{class:$(["card",{card__active:((U=i(l).station)==null?void 0:U.stationUUID)==a.data.stationUUID}]),style:V({"background-image":((y=i(l).station)==null?void 0:y.stationUUID)==a.data.stationUUID&&a.data.faviconUrl?`url(${a.data.faviconUrl})`:""})},[s("div",ia,[!u.value&&a.data.faviconUrl?(t(),o("img",{key:0,ref:"stationLogo",class:"card__image",src:a.data.faviconUrl,onError:e[0]||(e[0]=K(v=>u.value=!0,["prevent"]))},null,40,la)):(t(),o("div",da," radio ")),s("div",ra,r(a.data.name.trim()?a.data.name.trim():a.$t("withoutName")),1),s("div",ca,[a.data.countryCode?(t(),o("div",ua,[p(r(i(W)(a.data.countryCode))+" "+r(a.data.countryName.length<=20?a.data.countryName:a.data.countryCode),1),a.data.state?(t(),o(I,{key:0},[p(", "+r(a.data.state),1)],64)):c("",!0)])):c("",!0),a.data.languageNames?(t(),o("div",_a,[va,p(" "+r(a.data.languageNames.length<=20||!a.data.languageCodes?a.data.languageNames:a.data.languageCodes),1)])):c("",!0),a.data.hasExtendedInfo?(t(),o("div",pa,[ma,p(" "+r(a.$t("station.verified")),1)])):c("",!0),s("div",ha,[Ua,p(" "+r(a.data.clickCount)+" (24h) ",1)]),s("div",ya,[fa,p(" "+r(a.data.votes),1)]),a.data.clickTrend!==0?(t(),o("div",ka,[s("span",ba,r(a.data.clickTrend>0?"trending_up":"trending_down"),1),a.data.clickTrend>0?(t(),o(I,{key:0},[p("+")],64)):c("",!0),p(r(a.data.clickTrend),1)])):c("",!0),a.data.codec!=="UNKNOWN"?(t(),o("div",Ia,[ga,p(" "+r(a.data.codec),1)])):c("",!0),a.data.bitrate?(t(),o("div",Da,[Sa,p(" "+r(a.data.bitrate)+" kbps ",1)])):c("",!0),(t(!0),o(I,null,N(a.data.tags.filter(v=>v&&v.length<=25),(v,S)=>(t(),o("div",{class:"card__details-chip",key:S},r(v),1))),128))]),s("div",Ca,[s("button",{class:$(["icon-button icon-button--small",{"icon-button--active":((m=i(l).station)==null?void 0:m.stationUUID)===a.data.stationUUID}]),onClick:e[1]||(e[1]=v=>i(d).push(`/s/${a.data.stationUUID}`))},wa,2),s("button",{class:$(["icon-button icon-button--small",{"icon-button--active":i(l).votedStations.includes(a.data.stationUUID)||((D=i(l).station)==null?void 0:D.stationUUID)===a.data.stationUUID,"icon-button--filled-icon":i(l).votedStations.includes(a.data.stationUUID)}]),onClick:e[2]||(e[2]=v=>i(l).voteForStation(a.data)),disabled:i(l).votedStations.includes(a.data.stationUUID)},Ta,10,Na),s("button",{class:$(["icon-button icon-button--small",{"icon-button--active":((g=i(l).station)==null?void 0:g.stationUUID)===a.data.stationUUID}]),onClick:e[3]||(e[3]=v=>i(l).play(a.data))},[((k=i(l).station)==null?void 0:k.stationUUID)===a.data.stationUUID&&i(l).audio.error?(t(),o("span",Ma," error ")):((n=i(l).station)==null?void 0:n.stationUUID)===a.data.stationUUID&&i(l).audio.waiting?(t(),o("div",za)):((f=i(l).station)==null?void 0:f.stationUUID)!==a.data.stationUUID||i(l).audio.paused?(t(),o("span",Aa," play_arrow ")):(t(),o("span",Ea," pause "))],2)])])],6)}}}),Oa=L(Fa,[["__scopeId","data-v-4c5d1789"]]),Ja={class:"stations-list"},La={key:0,class:"headline"},Va={key:1,class:"stations-list__cards"},Ra=j({__name:"stations-list",props:{name:{},params:{},showMoreButton:{type:Boolean},stationsUUIDs:{},noStationsIcon:{},noStationsText:{}},setup(_){const d=_,l=G(),u=b(!0),a=b(!1),e=b(null),U=b(!1),y=b(!0);async function m(){e.value=null,u.value=!0,a.value=!1;try{const n=await g();e.value=d.stationsUUIDs?J(d.stationsUUIDs,n):n}catch{a.value=!0}u.value=!1}async function D(){u.value=!0;try{const n=await g();e.value=Array.isArray(e.value)?e.value.concat(n):n}catch{}u.value=!1}async function g(){var n;return d.stationsUUIDs?await l.apiClient.getStationsByUUIDs({stationUUIDs:d.stationsUUIDs}):await l.apiClient.searchStations({offset:(n=e.value)==null?void 0:n.length,...d.params})}let k=null;return F(()=>d.params,(n,f)=>{JSON.stringify(n)!=JSON.stringify(f)&&(k&&clearTimeout(k),k=setTimeout(async()=>{y.value?await m():U.value=!0},750))}),F(()=>d.stationsUUIDs,()=>{d.stationsUUIDs&&(e.value&&d.stationsUUIDs.every(n=>e.value.find(f=>f.stationUUID===n))?e.value=J(d.stationsUUIDs,e.value):y.value?m():U.value=!0)}),Q(async()=>{await m()}),X(async()=>{y.value=!0,U.value&&await m(),U.value=!1}),Y(()=>{y.value=!1}),(n,f)=>{var v,S,T,M,z,A,E;return t(),o("div",Ja,[n.name?(t(),o("p",La,r(n.name),1)):c("",!0),(v=e.value)!=null&&v.length||u.value?(t(),o("div",Va,[(S=e.value)!=null&&S.length?(t(!0),o(I,{key:0},N(e.value,C=>(t(),w(i(Oa),{key:C.stationUUID,data:C},null,8,["data"]))),128)):c("",!0),u.value?(t(!0),o(I,{key:1},N(((T=d.params)==null?void 0:T.limit)??((M=d.stationsUUIDs)==null?void 0:M.length)??20,C=>(t(),w(i(na),{key:C}))),128)):c("",!0)])):c("",!0),a.value?(t(),w(i(O),{key:2,type:"info",icon:"error",text:n.$t("error"),"button-icon":"refresh",onButtonClick:m},null,8,["text"])):c("",!0),((z=e.value)==null?void 0:z.length)===0&&!u.value&&!a.value?(t(),w(i(O),{key:3,type:"info",icon:n.noStationsIcon,text:n.noStationsText},null,8,["icon","text"])):c("",!0),!u.value&&d.params&&((A=e.value)!=null&&A.length)&&((E=e.value)==null?void 0:E.length)%d.params.limit===0&&n.showMoreButton?(t(),o("button",{key:4,class:"block-button",style:{"margin-top":"40px"},onClick:D},r(n.$t("moreResults")),1)):c("",!0)])}}});export{Ra as _};
