(this["webpackJsonpmusic-player-app"]=this["webpackJsonpmusic-player-app"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(2),o=c.n(n),r=c(8),i=c.n(r),s=c(3),l=(c(16),c(5)),p=c(4),u=c(9),d=function(e){var t=e.songs,c=e.currentSong,o=e.setCurrentSong,r=e.setPlay,i=e.play,d=Object(n.useState)({currentTime:0,duration:0,animationPercentage:0}),b=Object(s.a)(d,2),h=b[0],j=b[1];Object(n.useEffect)((function(){v()}),[c]);var m=function(e){var c=t.findIndex((function(e){return 1==e.active}))+e;c>t.length-1&&(c=0),c<0&&(c=t.length-1),t.forEach((function(e){e.active=!1,e===t[c]&&(e.active=!0,o([e]))}))},f=Object(n.useRef)(null),v=function(){r(!0),f.current.play()},O=function(e){var t=e.target.duration,c=e.target.currentTime,a=Math.round(100*c/t);j(Object(l.a)(Object(l.a)({},h),{},{currentTime:c,duration:t,animationPercentage:a}))},g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},x={transform:"translateX(".concat(h.animationPercentage,"%)")};return Object(a.jsxs)("div",{className:"player-container",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:g(h.currentTime)}),Object(a.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(c[0].color[0],", ").concat(c[0].color[1],")")},className:"track",children:[Object(a.jsx)("input",{value:h.currentTime,min:0,max:h.duration||0,type:"range",onChange:function(e){j(Object(l.a)(Object(l.a)({},h),{},{currentTime:e.target.value})),f.current.currentTime=e.target.value,h.duration===h.currentTime&&m(1)}}),Object(a.jsx)("div",{style:x,className:"animate-track"})]}),Object(a.jsx)("p",{children:g(h.duration)})]}),Object(a.jsxs)("div",{className:"player-control",children:[Object(a.jsx)(p.a,{onClick:function(){return m(-1)},className:"player-control_icons"}),Object(a.jsx)(p.d,{style:i?{display:"none"}:{display:"inline-block"},onClick:v,className:"player-control_icons"}),Object(a.jsx)(p.c,{onClick:function(){r(!1),f.current.pause()},style:i?{display:"inline-block"}:{display:"none"},className:"player-control_icons"}),Object(a.jsx)(p.b,{onClick:function(){return m(1)},className:"player-control_icons"}),Object(a.jsx)(u.a,{onClick:function(e){var t=f.current;t.hasAttribute("loop")?(t.removeAttribute("loop"),e.target.classList.remove("selected-btn")):(t.setAttribute("loop","loop"),e.target.classList.add("selected-btn"))},className:"player-control_icons"})]}),Object(a.jsx)("audio",{ref:f,src:c[0].audio,onTimeUpdate:O,onLoadedMetadata:O,onEnded:function(){return m(1)}})]})},b=c(18),h=function(e){var t=e.currentSong;return Object(a.jsx)(a.Fragment,{children:t.map((function(e){return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{src:e.cover,alt:""}),Object(a.jsx)("h3",{children:e.name}),Object(a.jsx)("p",{children:e.artist})]},Object(b.a)())}))})},j=function(e){var t=e.song,c=e.songs,n=(e.currentSong,e.setCurrentSong);return Object(a.jsxs)("div",{id:Object(b.a)(),className:"library-song-container ".concat(t.active?"selected":""),onClick:function(e){var a=t;c.map((function(e){e.id===a.id?e.active=!0:e.active=!1})),n(c.filter((function(e){return 1==e.active})));e.target.attributes.id.value},children:[Object(a.jsx)("img",{src:t.cover,alt:""}),Object(a.jsxs)("div",{className:"song-detail",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{children:t.artist})]})]},Object(b.a)())},m=function(e){var t=e.songs,c=e.currentSong,n=e.setCurrentSong,o=e.libraryRef;return Object(a.jsx)("div",{className:"library-container",ref:o,children:t.map((function(e){return Object(a.jsx)(j,{song:e,songs:t,setCurrentSong:n,currentSong:c})}))})},f=c(10),v=function(e){var t=e.libraryRef;return Object(a.jsx)("div",{className:"menu",children:Object(a.jsxs)("button",{onClick:function(){t.current.classList.toggle("onDisplay")},children:[" Library ",Object(a.jsx)(f.a,{}),"  "]})})},O=function(){return[{name:"Inside",cover:"https://chillhop.com/wp-content/uploads/2020/07/edaf1202cf33c7a2a122b7494a7e4d3e643af45f-1024x1024.jpg",artist:"Misc\xe9l",audio:"https://mp3.chillhop.com/serve.php/?mp3=9322",color:["#da9681","#ae4a6e"],id:Object(b.a)(),active:!1},{name:"There and Back",cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",artist:"Shopan",audio:"https://mp3.chillhop.com/serve.php/?mp3=10311",color:["#d6a5ba","#c4acc6"],id:Object(b.a)(),active:!1},{name:"Need Someone",cover:"https://chillhop.com/wp-content/uploads/2020/07/edaf1202cf33c7a2a122b7494a7e4d3e643af45f-1024x1024.jpg",artist:"Misc\xe9l",audio:"https://mp3.chillhop.com/serve.php/?mp3=9305",color:["#da9681","#ae4a6e"],id:Object(b.a)(),active:!1},{name:"5 am",cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",artist:" Ruck P, Shuko ",audio:"https://mp3.chillhop.com/serve.php/?mp3=10309",color:["#d6a5ba","#c4acc6"],id:Object(b.a)(),active:!1},{name:"Wake Up",cover:"https://chillhop.com/wp-content/uploads/2020/07/edaf1202cf33c7a2a122b7494a7e4d3e643af45f-1024x1024.jpg",artist:"Misc\xe9l",audio:"https://mp3.chillhop.com/serve.php/?mp3=9320",color:["#da9681","#ae4a6e"],id:Object(b.a)(),active:!1},{name:"Snowland Sunset",cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",artist:"Stan Forebee, The Field Tapes, Josh Jacobson, Kennebec",audio:"https://mp3.chillhop.com/serve.php/?mp3=10279",color:["#d6a5ba","#c4acc6"],id:Object(b.a)(),active:!1},{name:"Hau Nalu",cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",artist:"FloFilz, Kostral One",audio:"https://mp3.chillhop.com/serve.php/?mp3=10334",color:["#d6a5ba","#c4acc6"],id:Object(b.a)(),active:!1},{name:"Pen Anubis",cover:"https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg",artist:"B-Side",audio:"https://mp3.chillhop.com/serve.php/?mp3=8686",color:["#d0d5d0","#7594a9"],id:Object(b.a)(),active:!1},{name:"Wavey",cover:"https://chillhop.com/wp-content/uploads/2020/07/d9cef192a40176c391f027231b399322ce91197d-1024x1024.jpg",artist:"Dontcry, Nokiaa, Deauxnuts, Azec",audio:"https://mp3.chillhop.com/serve.php/?mp3=8166",color:["#ec8654","#c75c3b"],id:Object(b.a)(),active:!0},{name:"Funkaholic",cover:"https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg",artist:"Flitz&Suppe",audio:"https://mp3.chillhop.com/serve.php/?mp3=8242",color:["#d0d5d0","#7594a9"],id:Object(b.a)(),active:!1}]};var g=function(){var e=Object(n.useState)(O()),t=Object(s.a)(e,2),c=t[0],o=(t[1],Object(n.useState)(c.filter((function(e){return 1==e.active})))),r=Object(s.a)(o,2),i=r[0],l=r[1],p=Object(n.useState)(!1),u=Object(s.a)(p,2),b=u[0],j=u[1],f=Object(n.useRef)(null);return Object(n.useEffect)((function(){j(!1)}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(v,{libraryRef:f}),Object(a.jsx)(h,{currentSong:i}),Object(a.jsx)(d,{songs:c,currentSong:i,setCurrentSong:l,play:b,setPlay:j}),Object(a.jsx)(m,{libraryRef:f,songs:c,currentSong:i,setCurrentSong:l})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),o(e),r(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.d2a4d235.chunk.js.map