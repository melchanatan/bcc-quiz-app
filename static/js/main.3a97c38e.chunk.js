(this["webpackJsonpbcc-quiz-app"]=this["webpackJsonpbcc-quiz-app"]||[]).push([[0],{10:function(e,b,a){"use strict";a.r(b);var B=a(1),t=a.n(B),n=a(4),i=a.n(n),E=a(3),s=a(0);var c=function(e){return Object(s.jsx)("button",{className:"quiz__button",onClick:function(){return e.checkAnswer(e.id)},children:e.text})};var r=function(e){var b=e.choices,a="/images/"+e.image;function B(b){e.answerIndex===b?e.updateQuestion():e.removeRetry()}return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"topbar-container",children:[Object(s.jsxs)("h3",{className:"heading-3",children:["Question ",e.questionNumber+1]}),Object(s.jsxs)("h5",{className:"retry-keeper",children:[e.remainingRetry," / ",e.totalRetry]})]}),Object(s.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(s.jsx)("img",{src:a,alt:"image1",className:"quiz__img",height:"100%"})}),Object(s.jsx)("p",{className:"paragraph",children:e.text}),Object(s.jsx)("div",{className:"button-container",children:b.map((function(e,b){return Object(s.jsx)(c,{text:e,id:b,checkAnswer:B},b)}))})]})};var d=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h3",{className:"heading-3",children:"BCC QUIZ GAME"})})};var l=function(){return Object(s.jsx)("footer",{children:Object(s.jsxs)("p",{children:["Design and Built by ",Object(s.jsx)("a",{href:"https://www.instagram.com/melchs_/",children:"Mel chanatan"})]})})},h=[{title:"Is this news heading Real or Fake?",image:"1.jpeg",link:"https://www.antifakenewscenter.com/%e0%b8%ad%e0%b8%a2-%e0%b8%9c%e0%b9%88%e0%b8%ad%e0%b8%99%e0%b8%9c%e0%b8%b1%e0%b8%99-%e0%b9%84%e0%b8%a1%e0%b9%88%e0%b8%95%e0%b9%89%e0%b8%ad%e0%b8%87%e0%b8%9b%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b8%81%e0%b8%b1%e0%b8%8d%e0%b8%8a%e0%b8%b2%e0%b9%83%e0%b8%99%e0%b9%82%e0%b8%a3%e0%b8%87%e0%b8%9b%e0%b8%b4%e0%b8%94-%e0%b8%9e%e0%b8%a3%e0%b9%89%e0%b8%ad%e0%b8%a1%e0%b8%9b%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b8%82%e0%b8%b1%e0%b9%89%e0%b8%99%e0%b8%95%e0%b8%ad%e0%b8%99%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%82%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b8%b8%e0%b8%8d%e0%b8%b2%e0%b8%95%e0%b9%83%e0%b8%ab%e0%b9%89%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%8a%e0%b8%b2%e0%b8%8a%e0%b8%99%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2%e0%b8%96%e0%b8%b6%e0%b8%87%e0%b9%84%e0%b8%94%e0%b9%89%e0%b8%87%e0%b9%88%e0%b8%b2%e0%b8%a2-%e0%b8%88%e0%b8%a3%e0%b8%b4%e0%b8%87%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad/",choices:["Real","Fake"],answer:0},{title:"Is this news heading Real or Fake?",image:"2.jpeg",link:"https://www.antifakenewscenter.com/%e0%b8%ad%e0%b8%a2-%e0%b8%9c%e0%b9%88%e0%b8%ad%e0%b8%99%e0%b8%9c%e0%b8%b1%e0%b8%99-%e0%b9%84%e0%b8%a1%e0%b9%88%e0%b8%95%e0%b9%89%e0%b8%ad%e0%b8%87%e0%b8%9b%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b8%81%e0%b8%b1%e0%b8%8d%e0%b8%8a%e0%b8%b2%e0%b9%83%e0%b8%99%e0%b9%82%e0%b8%a3%e0%b8%87%e0%b8%9b%e0%b8%b4%e0%b8%94-%e0%b8%9e%e0%b8%a3%e0%b9%89%e0%b8%ad%e0%b8%a1%e0%b8%9b%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b8%82%e0%b8%b1%e0%b9%89%e0%b8%99%e0%b8%95%e0%b8%ad%e0%b8%99%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%82%e0%b8%ad%e0%b8%ad%e0%b8%99%e0%b8%b8%e0%b8%8d%e0%b8%b2%e0%b8%95%e0%b9%83%e0%b8%ab%e0%b9%89%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%8a%e0%b8%b2%e0%b8%8a%e0%b8%99%e0%b9%80%e0%b8%82%e0%b9%89%e0%b8%b2%e0%b8%96%e0%b8%b6%e0%b8%87%e0%b9%84%e0%b8%94%e0%b9%89%e0%b8%87%e0%b9%88%e0%b8%b2%e0%b8%a2-%e0%b8%88%e0%b8%a3%e0%b8%b4%e0%b8%87%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad/",choices:["Real","Fake"],answer:1},{title:"Is this news heading Real or Fake?",image:"3.jpeg",link:"https://www.antifakenewscenter.com/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%9B%E0%B8%A5%E0%B8%AD%E0%B8%A1-%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C-%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%9F%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B0%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%82%E0%B8%88%E0%B8%A3-%E0%B8%95%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C-%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B8%88%E0%B8%B2%E0%B8%81%E0%B8%AD%E0%B8%A2-%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%9B%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%84%E0%B8%A7%E0%B8%A3%E0%B8%B1%E0%B8%AA%E0%B9%84%E0%B8%94%E0%B9%89/",choices:["Real","Fake"],answer:1},{title:"Is this news heading Real or Fake?",image:"4.jpeg",link:"https://www.antifakenewscenter.com/%e0%b8%82%e0%b9%88%e0%b8%b2%e0%b8%a7%e0%b8%9b%e0%b8%a5%e0%b8%ad%e0%b8%a1-%e0%b8%ad%e0%b8%a2%e0%b9%88%e0%b8%b2%e0%b9%81%e0%b8%8a%e0%b8%a3%e0%b9%8c-%e0%b8%ab%e0%b8%99%e0%b9%89%e0%b8%b2%e0%b8%81%e0%b8%b2%e0%b8%81%e0%b8%97%e0%b8%b3%e0%b8%88%e0%b8%b2%e0%b8%81%e0%b8%97%e0%b8%ad%e0%b8%87%e0%b9%81%e0%b8%94%e0%b8%87-%e0%b8%86%e0%b9%88%e0%b8%b2%e0%b9%80%e0%b8%8a%e0%b8%b7%e0%b9%89%e0%b8%ad%e0%b9%82%e0%b8%84%e0%b8%a7%e0%b8%b4%e0%b8%94%e0%b9%84%e0%b8%94%e0%b9%89-100-%e0%b9%83%e0%b8%99-30-%e0%b8%99%e0%b8%b2%e0%b8%97%e0%b8%b5/",choices:["Real","Fake"],answer:1},{title:"Is this news heading Real or Fake?",image:"5.jpeg",link:"https://www.antifakenewscenter.com/%e0%b8%95%e0%b8%b0%e0%b8%84%e0%b8%a3%e0%b8%b4%e0%b8%a7%e0%b8%81%e0%b8%a5%e0%b8%b2%e0%b8%87%e0%b8%84%e0%b8%b7%e0%b8%99-%e0%b9%80%e0%b8%9b%e0%b9%87%e0%b8%99%e0%b8%aa%e0%b8%b1%e0%b8%8d%e0%b8%8d%e0%b8%b2%e0%b8%93%e0%b9%80%e0%b8%aa%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b8%87%e0%b8%95%e0%b8%b1%e0%b9%89%e0%b8%87%e0%b8%84%e0%b8%a3%e0%b8%a3%e0%b8%a0%e0%b9%8c-%e0%b8%a0%e0%b8%b2%e0%b8%a7%e0%b8%b0%e0%b8%82%e0%b8%b2%e0%b8%94%e0%b8%99%e0%b9%89%e0%b8%b3-%e0%b9%82%e0%b8%a3%e0%b8%84%e0%b8%9b%e0%b8%a3%e0%b8%b0%e0%b8%aa%e0%b8%b2%e0%b8%97-%e0%b8%81%e0%b8%a5%e0%b9%89%e0%b8%b2%e0%b8%a1%e0%b9%80%e0%b8%99%e0%b8%b7%e0%b9%89%e0%b8%ad-%e0%b8%88%e0%b8%a3%e0%b8%b4%e0%b8%87%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad/",choices:["Real","Fake"],answer:0},{title:"Is this news heading Real or Fake?",image:"6.jpeg",link:"https://thematter.co/brief/157548/157548",choices:["Real","Fake"],answer:0},{title:"Is this news heading Real or Fake?",image:"7.jpeg",link:"https://www.antifakenewscenter.com/%e0%b8%82%e0%b9%88%e0%b8%b2%e0%b8%a7%e0%b8%9b%e0%b8%a5%e0%b8%ad%e0%b8%a1-%e0%b8%ad%e0%b8%a2%e0%b9%88%e0%b8%b2%e0%b9%81%e0%b8%8a%e0%b8%a3%e0%b9%8c-%e0%b8%98-%e0%b8%ad%e0%b8%ad%e0%b8%a1%e0%b8%aa%e0%b8%b4%e0%b8%99-%e0%b9%80%e0%b8%9b%e0%b8%b4%e0%b8%94%e0%b8%aa%e0%b8%b4%e0%b8%99%e0%b9%80%e0%b8%8a%e0%b8%b7%e0%b9%88%e0%b8%ad%e0%b9%83%e0%b8%ab%e0%b9%89%e0%b8%81%e0%b8%b9%e0%b9%89%e0%b8%a2%e0%b8%b7%e0%b8%a1-30000-%e0%b8%9a%e0%b8%b2%e0%b8%97-%e0%b8%97%e0%b8%b8%e0%b8%81%e0%b8%ad%e0%b8%b2%e0%b8%8a%e0%b8%b5%e0%b8%9e-%e0%b8%9c%e0%b9%88%e0%b8%ad%e0%b8%99%e0%b9%80%e0%b8%9e%e0%b8%b5%e0%b8%a2%e0%b8%87-1000-%e0%b8%9a%e0%b8%b2%e0%b8%97/",choices:["Real","Fake"],answer:1},{title:"Is this news heading Real or Fake?",image:"8.jpeg",link:"https://www.antifakenewscenter.com/%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b9%80%e0%b8%a3%e0%b8%b5%e0%b8%a2%e0%b8%99%e0%b8%97%e0%b8%b5%e0%b9%88%e0%b9%84%e0%b8%94%e0%b9%89%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b8%9c%e0%b8%a5%e0%b8%82%e0%b9%89%e0%b8%b2%e0%b8%87%e0%b9%80%e0%b8%84%e0%b8%b5%e0%b8%a2%e0%b8%87%e0%b8%ab%e0%b8%a5%e0%b8%b1%e0%b8%87%e0%b8%89%e0%b8%b5%e0%b8%94%e0%b8%a7%e0%b8%b1%e0%b8%84%e0%b8%8b%e0%b8%b5%e0%b8%99%e0%b9%82%e0%b8%84%e0%b8%a7%e0%b8%b4%e0%b8%94-19-%e0%b8%aa%e0%b8%b2%e0%b8%a1%e0%b8%b2%e0%b8%a3%e0%b8%96%e0%b8%a2%e0%b8%b7%e0%b9%88%e0%b8%99%e0%b9%80%e0%b8%a3%e0%b8%b7%e0%b9%88%e0%b8%ad%e0%b8%87%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b9%80%e0%b8%87%e0%b8%b4%e0%b8%99%e0%b8%8a%e0%b9%88%e0%b8%a7%e0%b8%a2%e0%b9%80%e0%b8%ab%e0%b8%a5%e0%b8%b7%e0%b8%ad%e0%b9%84%e0%b8%94%e0%b9%89-%e0%b8%aa%e0%b8%b9%e0%b8%87%e0%b8%aa%e0%b8%b8%e0%b8%94%e0%b9%84%e0%b8%a1%e0%b9%88%e0%b9%80%e0%b8%81%e0%b8%b4%e0%b8%99-4-%e0%b9%81%e0%b8%aa%e0%b8%99%e0%b8%9a%e0%b8%b2%e0%b8%97-%e0%b8%88%e0%b8%a3%e0%b8%b4%e0%b8%87%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad/",choices:["Real","Fake"],answer:0},{title:"Is this news heading Real or Fake?",image:"9.jpeg",link:"https://www.antifakenewscenter.com/%E0%B8%82%E0%B9%88%E0%B8%B2%E0%B8%A7%E0%B8%9B%E0%B8%A5%E0%B8%AD%E0%B8%A1-%E0%B8%AD%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B9%81%E0%B8%8A%E0%B8%A3%E0%B9%8C-%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%82%E0%B8%B2%E0%B8%A7-%E0%B8%95%E0%B8%A3%E0%B8%B2-bioproud-%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B9%82%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%94-19-%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A5%E0%B8%87%E0%B8%9B%E0%B8%AD%E0%B8%94/",choices:["Real","Fake"],answer:1},{title:"Is this news heading Real or Fake?",image:"10.jpeg",link:"https://www.antifakenewscenter.com/%e0%b8%84%e0%b8%a3%e0%b8%a1-%e0%b8%ad%e0%b8%99%e0%b8%b8%e0%b8%a1%e0%b8%b1%e0%b8%95%e0%b8%b4%e0%b8%8b%e0%b8%b7%e0%b9%89%e0%b8%ad%e0%b8%8a%e0%b8%b8%e0%b8%94%e0%b8%95%e0%b8%a3%e0%b8%a7%e0%b8%88-atk-%e0%b9%83%e0%b8%ab%e0%b9%89%e0%b8%9e%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b8%87%e0%b8%b2%e0%b8%99-%e0%b8%a5%e0%b8%b9%e0%b8%81%e0%b8%88%e0%b9%89%e0%b8%b2%e0%b8%87-%e0%b8%aa%e0%b8%b2%e0%b8%a1%e0%b8%b2%e0%b8%a3%e0%b8%96%e0%b8%99%e0%b8%b3%e0%b8%a1%e0%b8%b2%e0%b8%ab%e0%b8%b1%e0%b8%81%e0%b8%a3%e0%b8%b2%e0%b8%a2%e0%b8%88%e0%b9%88%e0%b8%b2%e0%b8%a2%e0%b9%84%e0%b8%94%e0%b9%89-1-5-%e0%b9%80%e0%b8%97%e0%b9%88%e0%b8%b2-%e0%b8%88%e0%b8%a3%e0%b8%b4%e0%b8%87%e0%b8%ab%e0%b8%a3%e0%b8%b7%e0%b8%ad/",choices:["Real","Fake"],answer:0}],o=0;var j=function(){var e=Object(B.useState)(3),b=Object(E.a)(e,2),a=b[0],t=b[1],n=Object(B.useState)(h[o]),i=Object(E.a)(n,2),c=i[0],j=i[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(d,{}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"app-container",children:a>0&&c?Object(s.jsx)(r,{text:c.title,answerIndex:c.answer,image:c.image,link:c.link,choices:c.choices,questionNumber:o,updateQuestion:function(){o++,j(h[o])},totalRetry:3,remainingRetry:a,removeRetry:function(){t(a-1)}},c.title):Object(s.jsxs)("div",{className:"gameover",children:[Object(s.jsxs)("h3",{className:"heading-4 u-mb-100",children:["You got ",o," / ",h.length," "]}),Object(s.jsx)("h3",{className:"heading-3 u-mb-500",children:a?"You did it\ud83d\udc4d":"Nice try! but you kinda blew it\ud83d\udc14"}),Object(s.jsx)("a",{href:".",className:"btn-link",children:"Play again!"})]})})}),Object(s.jsx)(l,{})]})};i.a.render(Object(s.jsx)(t.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.3a97c38e.chunk.js.map