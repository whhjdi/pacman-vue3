(function(t){function e(e){for(var o,c,s=e[0],a=e[1],p=e[2],f=0,u=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&u.push(i[c][0]),i[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);l&&l(e);while(u.length)u.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var a=n[s];0!==i[a]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},r=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var l=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"10c5":function(t,e,n){"use strict";n("b029")},"758f":function(t,e,n){"use strict";n("bb0f")},7865:function(t,e,n){"use strict";n("d87c")},"838b":function(t,e,n){},8920:function(t,e,n){t.exports=n.p+"media/stop.356f88cf.mp3"},"9cdc":function(t,e,n){"use strict";n("d673")},b029:function(t,e,n){},b20f:function(t,e,n){},b33b:function(t,e,n){},bb0f:function(t,e,n){},cd17:function(t,e,n){t.exports=n.p+"media/start.b662b29c.mp3"},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),i=(n("f5df1"),n("b20f"),{class:"pacman-app"});function r(t,e,n,r,c,s){var a=Object(o["p"])("Header"),p=Object(o["p"])("Scene");return Object(o["k"])(),Object(o["c"])("div",i,[Object(o["e"])(a,{points:t.points},null,8,["points"]),Object(o["e"])(p,{onHandle_points:t.handlePoints},null,8,["onHandle_points"])])}var c={class:"header"},s=Object(o["e"])("span",{class:"title"},"PACMAN",-1),a={class:"score"},p={class:"points"};function l(t,e,n,i,r,l){return Object(o["k"])(),Object(o["c"])("header",c,[s,Object(o["e"])("span",a,[Object(o["d"])("SCORE:"+Object(o["q"])(t.points)+" ",1),Object(o["e"])("span",p,Object(o["q"])(t.playing?"PLAYING":"GAME OVER"),1)])])}n("a9e3");var f=Object(o["f"])({props:{points:{type:Number,default:10}},setup:function(){var t=Object(o["g"])("playing");return{playing:t}}});n("758f");f.render=l;var u=f,d={class:"scene"};function b(t,e,n,i,r,c){var s=Object(o["p"])("Food"),a=Object(o["p"])("Pacman"),p=Object(o["p"])("Ghost");return Object(o["k"])(),Object(o["c"])("main",d,[(Object(o["k"])(!0),Object(o["c"])(o["a"],null,Object(o["o"])(t.positions,(function(t,e){return Object(o["k"])(),Object(o["c"])(s,{key:"food-"+e,top:t.top,left:t.left,ref:"food-"+e},null,8,["top","left"])})),128)),Object(o["e"])(a,{speed:20,ref:"pacmanRef"},null,512),(Object(o["k"])(!0),Object(o["c"])(o["a"],null,Object(o["o"])(t.ghostColors,(function(t,e){return Object(o["k"])(),Object(o["c"])(p,{key:"ghost-"+e,color:t,ref:"ghost-"+e},null,8,["color"])})),128))])}n("96cf");var h=n("1da1");function v(t,e,n,i,r,c){var s=Object(o["p"])("PacmanSVG");return Object(o["k"])(),Object(o["c"])("div",{class:"pacman "+t.looking,style:{left:t.position.left+"px",top:t.position.top+"px"}},[Object(o["e"])(s,{class:"svg"})],6)}n("caad");var O={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 532.3 561.9"},j=Object(o["e"])("path",{class:"svg",d:"M532.3 156.5c-83.6 41.4-167.1 82.7-251.4 124.4 84.1 42.2 167.3 84 250.5 125.9-48.3 100.6-165.6 172-294.4 151.5C98.2 536.2.3 417 0 281.5-.3 149.8 92.2 30.8 228.9 4.9 360.6-19.9 482 51.6 532.3 156.5zm-203.8 3.1c21-.1 37.9-16.4 37.9-36.5s-16.9-36.4-37.9-36.5c-21.2-.1-38.3 16.4-38.1 36.7.1 20.2 17.2 36.4 38.1 36.3z"},null,-1),m=Object(o["e"])("path",{d:"M328.5 159.6c-21 .1-38-16.1-38.1-36.3-.1-20.3 17-36.8 38.1-36.7 21 .1 37.9 16.4 37.9 36.5s-16.9 36.4-37.9 36.5z"},null,-1);function g(t,e,n,i,r,c){return Object(o["k"])(),Object(o["c"])("svg",O,[j,m])}const w={};w.render=g;var y=w,k=20,x=60,M=100,P=Object(o["f"])({components:{PacmanSVG:y},props:{speed:{default:20}},setup:function(t){var e=Object(o["m"])({looking:"right",position:{top:0,left:0}}),n=function(){var n=e.looking,o=e.position,i=o.top,r=o.left,c=r,s=i;"left"==n?e.position.left=Math.max(c-t.speed,0):"right"===n?e.position.left=Math.min(c+t.speed,window.innerWidth-k-x):e.position.top="up"===n?Math.max(s-t.speed,0):Math.min(s+t.speed,window.innerHeight-k-x-M)},i=function(t){e.looking=37===t?"left":38===t?"up":39===t?"right":"down"},r=function(t){var e=t.keyCode,n=[37,38,39,40];n.includes(e)&&i(e)};Object(o["j"])((function(){document.addEventListener("keydown",r),setInterval(n,100)}));var c=Object(o["r"])(e),s=c.looking,a=c.position;return{looking:s,position:a}}});n("7865");P.render=v;var $=P;function S(t,e,n,i,r,c){var s=Object(o["p"])("GhostSvg");return Object(o["k"])(),Object(o["c"])("div",{class:"ghost",style:{top:t.position.top+"px",left:t.position.left+"px"}},[Object(o["e"])(s,{class:t.color},null,8,["class"])],4)}var I={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 129 129.7"},N=Object(o["e"])("path",{class:"svg",d:"M128.1 129.7c-4.9-4.5-8.8-8.1-12.8-11.8-3.4 3.7-6.7 7.3-10.3 11.3-3.4-3.7-6.8-7.4-10.3-11.2-3.5 3.8-6.7 7.3-10.3 11.2-3.5-3.7-6.8-7.2-10.4-11.1-3.3 3.6-6.5 6.9-10 10.7-3.3-3.6-6.4-7-9.8-10.7-3.5 3.7-6.8 7.3-10.6 11.4-3.5-3.8-6.8-7.4-10.4-11.4-3.5 3.7-6.8 7.3-10.6 11.4-3.5-3.8-6.8-7.4-11.2-12.3-3.4 4.3-6.7 8.4-10 12.5-.5-.3-.9-.6-1.4-.9v-6.3c.2-21.7-.2-43.3.7-65C2.1 23.9 33.4-3.7 71.6.4c28.4 3 49.7 21.7 55.8 47.6.9 4 1.5 8.2 1.5 12.3.2 20.5.1 41 .1 61.5-.2 2.2-.6 4.4-.9 7.9zm-89-62.5c6.4-.1 11.3-5.3 11.2-11.7-.1-6.4-5.3-11.3-11.7-11.2-6.4.1-11.3 5.2-11.2 11.6.2 6.5 5.3 11.4 11.7 11.3zm61.2-11.4c0-6.4-5-11.4-11.4-11.4s-11.4 5-11.4 11.4 5 11.4 11.4 11.4c6.3 0 11.4-5 11.4-11.4z"},null,-1);function G(t,e,n,i,r,c){return Object(o["k"])(),Object(o["c"])("svg",I,[N])}const F={};F.render=G;var R=F,_=20,C=60,H=100,V=Object(o["f"])({components:{GhostSvg:R},props:{color:String,speed:{default:20}},setup:function(t){var e=Object(o["m"])({direction:"right",position:{top:200,left:100}}),n=Object(o["n"])(null),i=Object(o["n"])(null),r=function(){var n=e.direction,o=e.position,i=o.top,r=o.left,c=r,s=i;"left"==n?e.position.left=Math.max(c-t.speed,0):"right"===n?e.position.left=Math.min(c+t.speed,window.innerWidth-_-C):e.position.top="up"===n?Math.max(s-t.speed,0):Math.min(s+t.speed,window.innerHeight-_-C-H)},c=function(){var t=["left","right","up","down"],n=Math.floor(4*Math.random()),o=t[n];e.direction=o};Object(o["j"])((function(){n.value=setInterval(c,400),i.value=setInterval(r,100)})),Object(o["i"])((function(){clearInterval(n.value),clearInterval(i.value)}));var s=Object(o["r"])(e),a=s.direction,p=s.position;return{direction:a,position:p}}});n("f587");V.render=S;var Y=V,z=Object(o["e"])("div",{class:"effective-food"},null,-1);function E(t,e,n,i,r,c){return Object(o["k"])(),Object(o["c"])("div",{class:["food",{hidden:!t.foodVisible}],style:{top:t.top+"px",left:t.left+"px"}},[z],6)}var X=Object(o["f"])({props:{top:{type:Number,default:0},left:{type:Number,default:0}},watch:{top:function(){this.position.top=this.top},left:function(){this.position.left=this.left}},data:function(){return{position:{top:0,left:0},foodVisible:!0}},onMounted:function(){this.position.top=this.top,this.position.left=this.left}});n("10c5");X.render=E;var A=X,W=20,q=60,B=100,D=Object(o["f"])({components:{Pacman:$,Ghost:Y,Food:A},data:function(){return{positions:[],timer:null,ghostColors:["green","red","blue","orange"],crashed:!1}},setup:function(){var t=Object(o["g"])("playing");return{playing:t}},mounted:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.renderFood(t.calcFoods()),e.next=3,Object(o["h"])();case 3:t.timer1=setInterval(t.lookForEat,200),t.timer2=setInterval(t.collisionDetection,200);case 5:case"end":return e.stop()}}),e)})))()},beforeUnmount:function(){clearInterval(this.timer1),clearInterval(this.timer2)},methods:{getPacmanPosition:function(){var t=this.$refs.pacmanRef.position.left,e=this.$refs.pacmanRef.position.top,n=this.$refs.pacmanRef.position.left+q/2,o=this.$refs.pacmanRef.position.top+q/2;return{pacmanX:t,pacmanY:e,pacmanNewX:n,pacmanNewY:o}},collisionDetection:function(){for(var t=this.getPacmanPosition(),e=t.pacmanX,n=t.pacmanY,o=t.pacmanNewX,i=t.pacmanNewY,r=0;r<4;r++){var c=this.$refs["ghost-"+r].position.left,s=this.$refs["ghost-"+r].position.top,a=this.$refs["ghost-"+r].position.left+q/2,p=this.$refs["ghost-"+r].position.top+q/2;if((e>=c&&e<=a||o>=c&&o<=a)&&(n>=s&&n<=p||i>=s&&i<=p)&&(this.crashed=!0),this.crashed){clearInterval(this.timer2),this.killGhost(),this.playing=!1;break}}},killGhost:function(){for(var t=0;t<4;t++)this.ghostColors[t]="white"},calcFoods:function(){return Math.floor((window.innerWidth-W-q)*(window.innerHeight-W-B)/(q*q))},renderFood:function(t){for(var e=0,n=0,o=0;o<t;o++){if(e+q>window.innerWidth-W&&(n+=q,e=0),n+q>=window.innerHeight-W-B)break;var i={top:n,left:e};this.positions.push(i),e+=q}},lookForEat:function(){for(var t=this.getPacmanPosition(),e=t.pacmanX,n=t.pacmanY,o=t.pacmanNewX,i=t.pacmanNewY,r=this.calcFoods(),c=0;c<r;c++){var s=this.$refs["food-"+c].left,a=this.$refs["food-"+c].top,p=this.$refs["food-"+c].left+q/2,l=this.$refs["food-"+c].top+q/2;(e>=s&&e<=p||o>=s&&o<=p)&&(n>=a&&n<=l||i>=a&&i<=l)&&this.$refs["food-"+c].foodVisible&&(this.$refs["food-"+c].foodVisible=!1,this.$emit("handle_points"))}}}});n("d6e8");D.render=b;var J=D,L=Object(o["f"])({components:{Header:u,Scene:J},setup:function(){var t=Object(o["n"])(0),e=Object(o["n"])(!0),i=Object(o["m"])(new Audio);Object(o["l"])("playing",e);var r=function(){t.value=t.value+1};return Object(o["j"])((function(){i.src=n("cd17"),i.autoplay=!0,i.preload="metadata",i.play()})),Object(o["s"])(e,(function(t){t.value||(i.src=n("8920"),i.play())})),{points:t,handlePoints:r}}});n("9cdc");L.render=r;var T=L;Object(o["b"])(T).mount("#app")},d673:function(t,e,n){},d6e8:function(t,e,n){"use strict";n("b33b")},d87c:function(t,e,n){},f587:function(t,e,n){"use strict";n("838b")}});
//# sourceMappingURL=app.923d298a.js.map