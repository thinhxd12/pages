"use strict";(self.webpackChunkreact_typescript_webpack_starter=self.webpackChunkreact_typescript_webpack_starter||[]).push([[344],{5344:function(e,t,a){a.r(t);var i=a(5893),n=a(7294),s=a(9250),r=a(3306),c=a(239),m=function(e,t,a,i){return new(a||(a=Promise))((function(n,s){function r(e){try{m(i.next(e))}catch(e){s(e)}}function c(e){try{m(i.throw(e))}catch(e){s(e)}}function m(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,c)}m((i=i.apply(e,t||[])).next())}))};t.default=n.memo((({})=>{const[e,t]=(0,n.useState)({default:"https://www.getdailyart.com/en/21/paul-signac/the-red-buoy-saint-tropez",new:""}),[a,o]=(0,n.useState)(c.Hs),[d,l]=(0,n.useState)({image:"",date:"",title:"",attr:"",authorImg:"",authorName:"",authorYear:"",content:""});(0,n.useEffect)((()=>{h(e.default)}),[]);const[u]=(0,r.nb)(),h=a=>m(void 0,void 0,void 0,(function*(){const i=yield u(c.qg+a).unwrap(),n=(new DOMParser).parseFromString(i,"text/html"),s=(0,c.aj)(n,".main-image>img","srcset"),r=(0,c.wf)(n,".main-description__share-date",""),m=(0,c.wf)(n,".main-description__title",""),o=(0,c.wf)(n,".main-description__attr",""),d=(0,c.aj)(n,".main-description__author img","srcset"),h=(0,c.wf)(n,".main-description__author",""),x=(0,c.wf)(n,".main-description__author-years",""),g=(0,c.wf)(n,".main-description__text-content","");l({image:s,date:r,title:m,attr:o,authorImg:d,authorName:h,authorYear:x,content:g});const j=(0,c.aj)(n,".also__item:nth-child(3) a","href");t(Object.assign(Object.assign({},e),{new:j}))})),[x,g]=(0,n.useState)(window.innerWidth);return(0,n.useEffect)((()=>{const e=()=>g(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,i.jsx)(i.Fragment,{children:x>768?(0,i.jsxs)("div",{className:"layoutContainer",children:[(0,i.jsxs)("div",{className:"mainImageContent",children:[d.image?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{className:"mainImage",srcSet:d.image||""}),(0,i.jsx)("img",{className:"mainImageBlurred",srcSet:d.image||""})]}):(0,i.jsx)("div",{className:"mainImageBackground"}),(0,i.jsx)("div",{className:"mainImageBackground"}),(0,i.jsx)("button",{className:"imageRoundBtn imageRoundBtnLeft",onClick:()=>{h(e.new)},children:(0,i.jsx)("i",{className:"bx bx-infinite"})}),(0,i.jsx)("button",{className:"imageRoundBtn imageRoundBtnRight",onClick:()=>{h(e.new)},children:(0,i.jsx)("i",{className:"bx bx-infinite"})})]}),(0,i.jsx)("div",{className:"mainOutlet",children:(0,i.jsx)(s.j3,{})}),(0,i.jsxs)("div",{className:"mainImageDescriptionContainter",children:[(0,i.jsxs)("div",{className:"mainImageDescriptionContent",children:[(0,i.jsx)("div",{className:"main-description__share-date",children:d.date}),(0,i.jsx)("h1",{className:"main-description__title",children:d.title}),(0,i.jsx)("div",{className:"main-description__attr",children:d.attr}),(0,i.jsxs)("div",{className:"main-description__authors",children:[(0,i.jsxs)("div",{className:"main-description__author",children:[(0,i.jsx)("img",{srcSet:d.authorImg,alt:"..."}),(0,i.jsx)("span",{children:d.authorName})]}),(0,i.jsx)("div",{className:"main-description__author-years",children:d.authorYear})]}),(0,i.jsx)("div",{className:"main-description__text-content",children:d.content})]}),(0,i.jsx)("div",{className:"mainImageDescriptionFooter"})]})]}):(0,i.jsxs)("div",{className:"mainImageContent",children:[(0,i.jsx)("div",{className:"subOutletLeft"}),(0,i.jsx)("div",{className:"mainOutlet",children:(0,i.jsx)(s.j3,{})}),(0,i.jsx)("div",{className:"subOutletRight"})]})})}))}}]);