"use strict";(self.webpackChunkreact_typescript_webpack_starter=self.webpackChunkreact_typescript_webpack_starter||[]).push([[113],{4113:function(t,e,i){i.r(e),i.d(e,{default:function(){return x}});var a=i(5893),n=i(7294),s=i(9250),r=i(3306),o=i(239),c=i(5007),l=i(9655),d=i(3394);var m=n.memo((({})=>{const t=(0,c.I0)(),{isSuccess:e}=(0,r.ob)(void 0,{pollingInterval:84e4}),{data:i}=(0,r.iI)(o.cy.pass),{cornerButton:s,vocabularyList:m}=(0,c.v9)((t=>t.vocabulary)),[u,h]=(0,n.useState)(0);(0,n.useEffect)((()=>{h(s.index+1)}),[s]);return(0,a.jsxs)("div",{className:"bottom",children:[(0,a.jsx)(l.OL,{to:"/vocabulary",className:"mainFooterBtn",children:"Übermensch"}),(0,a.jsx)(l.OL,{to:"/calendar",className:"mainFooterBtn",children:"Amor fati"}),(0,a.jsx)("div",{className:e?"dotNum dotNumActive":"dotNum",children:i||229}),(0,a.jsx)(l.OL,{to:"/weather",className:"mainFooterBtn",children:"Caelus"}),(0,a.jsxs)("div",{className:s.active?"mainFooterCornerBtn mainFooterCornerBtnActive":"mainFooterCornerBtn",onClick:()=>{m.length>0&&t((0,d.CX)())},children:[(0,a.jsx)("input",{className:s.status?"inputWordRow inputWordRowActive":"inputWordRow",value:u,onClick:t=>t.stopPropagation(),onChange:t=>{h(Number(t.target.value))},onKeyDown:e=>{"Enter"===e.key&&(t((0,d.yX)({index:u-1,scheduleIndex:-1,scheduleVal:""})),e.currentTarget.blur())}}),(0,a.jsx)("div",{className:s.isSetted&&m.length?"cornerDaily cornerDailyActive":"cornerDaily",children:"..."})]})]})})),u=i(2820),h=i(7828),p=function(t,e,i,a){return new(i||(i=Promise))((function(n,s){function r(t){try{c(a.next(t))}catch(t){s(t)}}function o(t){try{c(a.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,o)}c((a=a.apply(t,e||[])).next())}))};var x=n.memo((({children:t})=>{(0,c.I0)();const{showImage:e}=(0,c.v9)((t=>t.calendar)),i={default:o.Hs,new:""},[l,d]=(0,n.useState)(i),[x,v]=(0,n.useState)({image:"",date:"",title:"",attr:"",authorImg:"",authorName:"",authorYear:"",content:""});(0,n.useEffect)((()=>{j(l.default)}),[]);const[g]=(0,r.nb)(),j=t=>p(void 0,void 0,void 0,(function*(){const e=yield g(o.qg+t).unwrap(),i=(new DOMParser).parseFromString(e,"text/html"),a=(0,o.aj)(i,".main-image>img","srcset"),n=(0,o.wf)(i,".main-description__share-date",""),s=(0,o.wf)(i,".main-description__title",""),r=(0,o.wf)(i,".main-description__attr",""),c=(0,o.aj)(i,".main-description__author img","srcset"),m=(0,o.wf)(i,".main-description__author",""),u=(0,o.wf)(i,".main-description__author-years",""),h=i.querySelectorAll(".main-description__text-content p"),p=h.length>0?[...h].map(((t,e)=>`<p>${(null==t?void 0:t.textContent)&&t.textContent.replace(/[\n\r]+|\s{2,}/g," ").trim()}</p>`)).join(""):`<p>${(0,o.wf)(i,".main-description__text-content","")}</p>`;v({image:a.split(/\s\w+\,/)[0],date:n,title:s,attr:r,authorImg:c,authorName:m,authorYear:u,content:p});const x=(0,o.aj)(i,`.also__item:nth-child(${Math.floor(15*Math.random())+1}) a`,"href");d(Object.assign(Object.assign({},l),{new:x}))})),[w,{isLoading:_}]=(0,r.PU)(),f=()=>p(void 0,void 0,void 0,(function*(){const t=yield w("").unwrap();sessionStorage.setItem("accessToken",JSON.stringify(t))}));(0,n.useEffect)((()=>{f();const t=setInterval((()=>{f()}),162e4);return()=>{clearTimeout(t)}}),[]);const[[y,N],b]=(0,n.useState)([!1,!1]);(0,n.useEffect)((()=>{e||b([!0,!1])}),[e]);const C={visible:{width:"calc(50vw - 660px)"},hidden:{width:e?"calc(100vw - 660px)":"calc(50vw - 180px)"},exit:{width:"calc(50vw - 180px)"}},I={start:{x:N?360:-360},enter:{x:0},exit:{x:-360}},k={start:{x:N?"100%":"-100%",scale:0,opacity:0},enter:{x:"0%",scale:1,opacity:1},exit:{x:"-100%",scale:0,opacity:0}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"layoutContainer",children:[(0,a.jsxs)(u.E.div,{className:"mainImageContent",variants:C,initial:"visible",animate:"hidden",exit:"exit",children:[(0,a.jsx)(h.M,{mode:"wait",children:e&&y&&(0,a.jsx)(u.E.img,{className:"mainImage",src:x.image,variants:k,initial:"start",animate:"enter",exit:"exit",transition:{type:"spring",duration:.6}},x.title)}),(0,a.jsx)(u.E.img,{className:"mainImageBlurred",src:x.image,onLoad:()=>b([!0,!0]),animate:{opacity:e?1:0},transition:{type:"spring",duration:.6}}),(0,a.jsx)(h.M,{mode:"wait",children:e&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(u.E.button,{className:"imageRoundBtn imageRoundBtnRight",onClick:()=>{j(l.new),b([!1,!1])},variants:{start:{opacity:0},enter:{opacity:1},exit:{opacity:0}},initial:"start",animate:"enter",exit:"exit",transition:{type:"spring",duration:.6},children:(0,a.jsx)("svg",{width:8,height:14,viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M1.5 1L7.5 7L1.5 13",stroke:"white",strokeLinecap:"square",strokeLinejoin:"round"})})})})})]}),(0,a.jsx)("div",{className:"subContainLeft"}),(0,a.jsxs)("div",{className:"mainOutlet",children:[(0,a.jsx)(s.j3,{}),(0,a.jsx)(m,{})]}),(0,a.jsx)("div",{className:"subContainRight"}),(0,a.jsx)(u.E.div,{className:"mainImageDescriptionContainter",animate:{background:e?"#19191c":"#000"},transition:{type:"spring",duration:.3},children:(0,a.jsx)(h.M,{mode:"wait",children:e&&y&&(0,a.jsxs)(u.E.div,{className:"mainImageDescriptionContent",variants:I,initial:"start",animate:"enter",exit:"exit",transition:{type:"spring",duration:.6},children:[(0,a.jsx)("div",{className:"main-description__share-date",children:x.date}),(0,a.jsx)("h1",{className:"main-description__title",children:x.title}),(0,a.jsx)("div",{className:"main-description__attr",children:x.attr}),(0,a.jsxs)("div",{className:"main-description__authors",children:[(0,a.jsxs)("div",{className:"main-description__author",children:[(0,a.jsx)("img",{srcSet:x.authorImg,alt:"..."}),(0,a.jsx)("span",{children:x.authorName})]}),(0,a.jsx)("div",{className:"main-description__author-years",children:x.authorYear})]}),(0,a.jsx)("div",{className:"main-description__text-content",dangerouslySetInnerHTML:{__html:x.content}})]},x.title)})})]})})}))}}]);