webpackJsonp([2],Array(23).concat([function(t,e){t.exports={root:"https://raw.githubusercontent.com/imgss/mdblog/master/posts/",about:"这个人很懒，什么都没留下。:-)<a target='_blank' href='https://github.com/imgss/FUN'>fork me on github</a>"}},,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";var a=s(11),n=s(142),r=s(130),i=s.n(r),o=s(132),l=s.n(o),c=s(131),u=s.n(c),v=function(t){return s.e(0).then(function(){var e=[s(147)];t.apply(null,e)}.bind(this)).catch(s.oe)};a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"list",component:l.a},{path:"/posts/",name:"posts",component:i.a},{path:"/article/:id",name:"article",component:v},{path:"/tags",component:i.a},{path:"/resume",component:u.a}]})},function(t,e,s){"use strict";function a(){return JSON.parse(sessionStorage.getItem("state"))}var n=s(81),r=s.n(n),i=s(11),o=s(41);i.a.use(o.a);var l={current:0,colors:[],articles:[],tags:[]},c={nextArticle:function(t){var e=t.current+1;try{return e<t.articles.length?t.articles[e]:t.articles[0]}catch(t){var s=a();return e<s.articles.length?s.articles[e]:s.articles[0]}},prevArticle:function(t){if(0===t.current)try{return t.articles[t.articles.length-1]}catch(t){var e=a();return e.articles[e.articles.length-1]}else try{return t.articles[t.current-1]}catch(t){var s=a();return s.articles[s.current-1]}},currentColor:function(t){try{return t.colors[t.current]||"#"+Math.random().toString(16).slice(2,8)}catch(t){var e=a();return e.colors[e.current]}},dates:function(t){return t.articles.map(function(t){return t.postDate})}},u={},v={saveArticles:function(t,e){t.articles=e,sessionStorage.setItem("state",r()(t))},saveTags:function(t,e){t.tags=e,sessionStorage.setItem("state",r()(t))},saveColors:function(t,e){t.colors=e,sessionStorage.setItem("state",r()(t))},setCurrent:function(t,e){if("number"==typeof e)t.current=e;else for(var s=t.articles||a().articles,n=s.length,i=0;i<n;i++)if(s[i].id===e)return void(t.current=i);sessionStorage.setItem("state",r()(t))}};e.a=new o.a.Store({state:l,getters:c,actions:u,mutations:v})},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){s(122);var a=s(1)(s(73),s(140),null,null);t.exports=a.exports},,,,,,function(t,e,s){s(116);var a=s(1)(s(74),s(134),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(11),n=s(48),r=s.n(n),i=s(42),o=s(43),l=s(24),c=s.n(l),u=s(46),v=(s.n(u),s(47)),d=s.n(v),h=s(45),p=(s.n(h),s(44));s.n(p);a.a.config.productionTip=!1,a.a.prototype.ajax=c.a,new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a},store:o.a}),a.a.directive("view",{inserted:function(t){t.addEventListener("click",function(t){var e=t.target.innerHTML;d()(document.getElementById(e),{time:500,align:{top:.2}})})}}),a.a.directive("top",{inserted:function(t,e){t.addEventListener("click",function(t){console.log("click");var e=document.getElementsByTagName("main")[0];0!==e.scrollTop&&(e.scrollTop=0)})}})},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{transitionName:"xxx"}},watch:{$route:function(t,e){console.log(t.path,e.path),"/"===e.path?this.transitionName="xxx":this.transitionName=""}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:["show"]}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(49),n=s.n(a);e.default={props:["width","height","r"],data:function(){return{speedX:Math.PI/360,speedY:Math.PI/360,textTags:[],CX:138.5,CY:150}},created:function(){for(var t=[],e=this.tags.length,s=0;s<e;s++){var a={},n=(2*(s+1)-1)/e-1,r=Math.acos(n),i=r*Math.sqrt(e*Math.PI);a.text=this.tags[s],a.x=this.CX+this.r*Math.sin(r)*Math.cos(i),a.y=this.CY+this.r*Math.sin(r)*Math.sin(i),a.z=this.r*Math.cos(r),a.href="/tags?tag="+a.text,t.push(a)}this.textTags=t},computed:{tags:function(){return this.$store.state.tags}},mounted:function(){this.CX=parseInt(getComputedStyle(document.querySelector("svg")).width)/2,this.CY=parseInt(getComputedStyle(document.querySelector("svg")).height)/2,this.tags&&(console.log("rotate"),this.rotate())},watch:{textTags:"rotate"},methods:{rotate:function(){var t=this;setInterval(function(){t.rotateX(t.speedX),t.rotateY(t.speedY)},17)},rotateX:function(t){var e=Math.cos(t),s=Math.sin(t),a=!0,r=!1,i=void 0;try{for(var o,l=n()(this.textTags);!(a=(o=l.next()).done);a=!0){var c=o.value,u=(c.y-this.CY)*e-c.z*s+this.CY,v=c.z*e+(c.y-this.CY)*s;c.y=u,c.z=v}}catch(t){r=!0,i=t}finally{try{!a&&l.return&&l.return()}finally{if(r)throw i}}},rotateY:function(t){var e=Math.cos(t),s=Math.sin(t),a=!0,r=!1,i=void 0;try{for(var o,l=n()(this.textTags);!(a=(o=l.next()).done);a=!0){var c=o.value,u=(c.x-this.CX)*e-c.z*s+this.CX,v=c.z*e+(c.x-this.CX)*s;c.x=u,c.z=v}}catch(t){r=!0,i=t}finally{try{!a&&l.return&&l.return()}finally{if(r)throw i}}},listener:function(t){var e=t.clientX-this.CX,s=t.clientY-this.CY;this.speedX=1e-4*e>0?Math.min(2e-5*this.r,1e-4*e):Math.max(2e-5*-this.r,1e-4*e),this.speedY=1e-4*s>0?Math.min(2e-5*this.r,1e-4*s):Math.max(2e-5*-this.r,1e-4*s)},tagClick:function(t){console.log(t.target.innerHTML),this.$emit("tagClick",t.target.innerHTML)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{years:[2017,2016,2015,2014,2013,2012,2011]}},methods:{trigger:function(t){this.$emit("yearClick",t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["dates","index"]}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(83),n=s.n(a),r=s(84),i=s.n(r),o=s(127),l=s.n(o),c=s(41),u=s(129),v=s.n(u),d=s(54),h=s.n(d),p=s(128),_=s.n(p),f=s(23);s.n(f);e.default={data:function(){return{show:!1,menu:!1,index:0,noDelay:!1,about:f.about,reverse:!1,articles:[],colors:[],styles:[],dates:[]}},computed:i()({pixs:function(){return this.styles.map(function(t){return t+"px"})},hasArticles:function(){return!!this.articles.length}},s.i(c.b)(["tags"])),created:function(){n()(this.$route.query).length?this.getPagesOfTag():this.getPages()},beforeMount:function(){this.articles.length||this.$router.push("/")},mounted:function(){var t=this,e=document.querySelector("main"),s=void 0;e.onscroll=function(){clearTimeout(s),s=setTimeout(function(){e.scrollTop>280?t.reverse=!0:e.scrollTop<280&&(t.reverse=!1);var s=Math.floor(e.scrollTop/180);t.index=s>0?s:0},100)}},methods:{removeDelay:function(){this.styles.forEach(function(t){t.transitionDelay="0s"}),this.noDelay=!0},hover:function(t){this.styles[t].transitionDelay="0s";var e=parseInt(this.styles[t].top);this.styles[t].top=e%100==0?e-80+"px":e+80+"px"},getColor:function(){return"#"+Math.random().toString(16).slice(2,8)},getPages:function(){for(var t=this.$store.state.articles,e=0,s=t.length;e<s;e++)this.colors.push(this.getColor()),this.styles.push({transitionDelay:.1*e+"s"});this.$store.commit("saveColors",this.colors),this.articles=t,this.dates=t.map(function(t){return t.postDate}),this.show=!0},getPagesOfTag:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$route.query.tag;!this.noDelay&&this.removeDelay(),this.articles=this.$store.state.articles.filter(function(e){if(-1!==e.tags.indexOf(t))return e}),this.show=!0},getPagesOfYear:function(t){!this.noDelay&&this.removeDelay(),this.articles=this.$store.state.articles.filter(function(e){if(new RegExp(t).test(e.postDate))return e})},setCurrent:function(t){this.$store.commit("setCurrent",t)},toggleMenu:function(){this.menu=!this.menu}},components:{tagcloud:l.a,timeline:_.a,timer:v.a,foot:h.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"resume",data:function(){return{}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(126),n=s.n(a),r=s(23);s.n(r);e.default={name:"hello",data:function(){return{msg:"Welcome to Imgss' Blog"}},created:function(){var t=this;this.ajax.get(r.root+"index.json").then(function(e){var s=e.data;console.log(s),t.$store.commit("saveArticles",s.values),t.$store.commit("saveTags",s.allTags),setTimeout(function(){return t.$router.push({name:"posts"})},2e3)})},mounted:function(){},components:{loading:n.a}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,s){s(121);var a=s(1)(null,s(139),null,null);t.exports=a.exports},function(t,e,s){s(120);var a=s(1)(s(75),s(138),null,null);t.exports=a.exports},function(t,e,s){s(119);var a=s(1)(s(76),s(137),null,null);t.exports=a.exports},function(t,e,s){s(118);var a=s(1)(s(77),s(136),"data-v-7d726ed6",null);t.exports=a.exports},function(t,e,s){s(115);var a=s(1)(s(78),s(133),"data-v-146ad6a2",null);t.exports=a.exports},function(t,e,s){s(123);var a=s(1)(s(79),s(141),"data-v-cfa79e3e",null);t.exports=a.exports},function(t,e,s){s(117);var a=s(1)(s(80),s(135),"data-v-7476cbde",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mdl-layout__container"},[s("div",{staticClass:"menu",on:{click:t.toggleMenu}},[s("i",{staticClass:"material-icons"},[t._v("")]),t._v(" "),t.menu?s("ul",[t._m(0),t._v(" "),s("li",{on:{click:function(e){t.$router.push("/resume")}}},[s("a",[t._v("about")])]),t._v(" "),s("li",{on:{click:function(e){t.$router.push("/reprint")}}},[s("a",[t._v("转载")])])]):t._e()]),t._v(" "),s("div",{staticClass:"demo-blog mdl-layout mdl-js-layout"},[s("main",{staticClass:"mdl-layout__content"},[this.$route.query.tag?s("div",{staticClass:"demo-blog__posts mdl-grid tagWrapper"},[s("div",{staticClass:"mdl-card mdl-cell mdl-cell--8-col mdl-cell--12-col-desktop meta "},[s("h1",[t._v(t._s(this.$route.query.tag))])])]):s("div",{staticClass:"demo-blog__posts mdl-grid tagWrapper",class:t.reverse?"active":""},[s("timeline",{staticClass:"mdl-card mdl-cell mdl-cell--12-col mdl-cell--2-col-desktop",on:{yearClick:t.getPagesOfYear}}),t._v(" "),s("tagcloud",{staticClass:"mdl-card mdl-cell mdl-cell--12-col mdl-cell--4-col-desktop",attrs:{width:"200",height:"200",r:"80",tags:t.tags},on:{tagClick:t.getPagesOfTag}}),t._v(" "),s("div",{staticClass:"mdl-card mdl-cell mdl-cell--12-col mdl-cell--6-col-desktop meta about"},[s("h1",[t._v("about")]),s("div",{domProps:{innerHTML:t._s(t.about)}})])],1),t._v(" "),s("div",{staticClass:"demo-blog__posts mdl-grid"},[t.hasArticles?s("transition-group",{staticStyle:{width:"100%"},attrs:{name:"fade",appear:""},on:{"after-appear":t.removeDelay}},t._l(t.articles,function(e,a){return s("div",{key:a,staticClass:"mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col",style:t.styles[a],on:{mouseenter:function(e){t.hover(a)},mouseleave:function(e){t.hover(a)},click:function(e){t.setCurrent(a)}}},[s("router-link",{attrs:{to:{path:e.id}}},[s("div",{staticClass:"mdl-card__title title mdl-card__media mdl-color-text--grey-50",style:{backgroundColor:t.colors[a]}},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"mdl-card__supporting-text meta mdl-color-text--grey-600"},[t._v(t._s(e.text))]),t._v(" "),s("div",{staticClass:"mdl-card__supporting-text meta mdl-color-text--grey-600"},[s("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#000000",d:"M14,14H7V16H14M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M17,10H7V12H17V10Z"}})]),t._v(t._s(e.postDate.replace("date:",""))+"\n                ")])])],1)})):s("div",{staticClass:"mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col"},[s("div",{staticClass:"mdl-card__title title mdl-card__media mdl-color-text--grey-50",staticStyle:{background:"gray"}},[t._v("你来到了没有知识的荒原!")]),t._v(" "),s("div",{staticClass:"mdl-card__supporting-text meta mdl-color-text--grey-600"},[t._v("404 Not Found")]),t._v(" "),s("div",{staticClass:"mdl-card__supporting-text meta mdl-color-text--grey-600"},[s("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#000000",d:"M14,14H7V16H14M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M17,10H7V12H17V10Z"}})]),t._v("1970-1-1\n                ")])])],1),t._v(" "),s("foot",{attrs:{show:t.show}})],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"/demo",target:"_blank"}},[t._v("demos")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("footer",{staticClass:"mdl-mini-footer centered"},[s("div",{staticClass:"mdl-mini-footer--center-section"},[t._v("\n                powered by Vue, "),s("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"rgb(158,158,158)",d:"M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z"}})]),t._v(" with "),s("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"rgb(158,158,158)",d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C8.17,3 8.82,3.12 9.44,3.33L13,9.35L9,14.35L12,21.35V21.35M16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35L11,14.35L15.5,9.35L12.85,4.27C13.87,3.47 15.17,3 16.5,3Z"}})]),t._v(" by imgss\n    ")])]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("a",[s("router-link",{attrs:{to:{name:"posts"}}},[s("loading"),t._v(" "),s("h6",[t._v(t._s(t.msg))])],1)],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"date"},[s("div",{staticClass:"list",style:{top:30*-t.index+"px"}},t._l(t.dates,function(e){return s("div",{key:e,staticClass:"onedate"},[t._v(t._s(e))])}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timeline"},t._l(t.years,function(e){return s("div",{key:e,class:e%2==0?"foot-left":"foot-right",on:{click:function(s){t.trigger(e)}}},[s("div",{staticClass:"foot"},[s("span",{staticClass:"year"},[t._v(t._s(e))])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"tagCloud"}},[s("svg",{attrs:{width:"100%",height:"100%"},on:{mousemove:function(e){t.listener(e)}}},[s("circle",{staticStyle:{stroke:"#ccc,fill=rgba(0,0,0,0)"},attrs:{x:t.CX,y:t.CY,r:t.r}}),t._v(" "),t._l(t.textTags,function(e){return s("a",{attrs:{href:"javascript:void 0"}},[s("text",{attrs:{x:e.x,y:e.y,"font-size":14,"fill-opacity":(400+e.z)/600},on:{click:function(e){t.tagClick(e)}}},[t._v(t._s(e.text))])])})],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"loading"},[s("span",[t._v("I")]),t._v(" "),s("span",[t._v("M")]),t._v(" "),s("span",[t._v("G")]),t._v(" "),s("span",[t._v("S")]),t._v(" "),s("span",[t._v("S")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[s("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",[s("header",[s("h1",[t._v("郭帅 "),s("span",[t._v("imgss")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://imgss.github.io"}},[t._v("个人博客")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://cnblogs/imgss"}},[t._v("博客园")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/imgss"}},[t._v("Github")])])])]),t._v(" "),s("section",{attrs:{id:"summary"}},[s("h1",[t._v("Summary")]),t._v(" "),s("p",[t._v("我是一个半路出家的前端，之前从事高(ku)大(bi)上的造船业。工作中发现自己喜欢的其实是代码，于是去年6月份(2016)开始从《dive into html》和 hello world 开始看起，大概有半年时间，处于一种痛苦，焦虑，快乐交织在一起的状态。现在在一家创业公司做前端。\n\t")])]),t._v(" "),s("section",{attrs:{id:"work-experience"}},[s("h1",[t._v("Work experience")]),t._v(" "),s("ol",{staticClass:"timeline"},[s("li",[s("p",{staticClass:"date"},[t._v("2015.8-2017.3")]),t._v(" "),s("p",[t._v("在某船厂担任助理工程师")]),t._v(" "),s("p",{staticClass:"note"},[t._v("从事生产计划的编排和跟踪，物料管理相关工作,由于现场跑的比较多，get到了吃苦耐劳的精神")])]),t._v(" "),s("li",[s("p",{staticClass:"date"},[t._v("2017.3-2017.10")]),t._v(" "),s("p",[t._v("前端@薪趣科技")]),t._v(" "),s("p",{staticClass:"note"},[t._v("为一个ERP系统开放前端界面及后台接口，期间完成了一个编辑表格的jQuery插件"),s("a",{attrs:{href:"https://github.com/imgss/table"}},[t._v("jQuery-table")])])]),t._v(" "),s("li",[s("p",{staticClass:"date"},[t._v("2017.12-至今")]),t._v(" "),s("p",[t._v("前端@牛牛成长")]),t._v(" "),s("p",{staticClass:"note"},[t._v("牛牛成长小程序、服务号，公司内部CMS系统维护等")])])])]),t._v(" "),s("section",{attrs:{id:"technical-skills"}},[s("h1",[t._v("Technical skills")]),t._v(" "),s("ul",[s("li",[s("b",[t._v("CSS,CSS3")]),s("p",[t._v("盒模型,常用布局(flex,float,table)，transition，animation")])]),t._v(" "),s("li",[s("b",[t._v("JavaScript (ES5/6), DOM APIs,HTML5相关API")]),t._v(" "),s("p",[t._v("History"),s("b",{staticClass:"space"},[t._v("·")]),t._v("Formdata"),s("b",{staticClass:"space"},[t._v("·")]),t._v("localStorage"),s("b",{staticClass:"space"},[t._v("·")]),t._v("FileReader"),s("b",{staticClass:"space"},[t._v("·")]),t._v("sessionStorage...")])]),t._v(" "),s("li",[s("b",[t._v("jQuery APIs")]),t._v(" "),s("p",[t._v("熟练使用jQuery API")]),t._v(" "),s("p",[t._v("开源一个jQuery插件jQuery-table")])]),t._v(" "),s("li",[s("b",[t._v("Vue")]),t._v(" "),s("p",[t._v("熟练掌握Vue Vue-router VueX Vue-cli")]),t._v(" "),s("p",[t._v("用Vue全家桶完成个人博客FUN")])]),t._v(" "),s("li",[s("b",[t._v("Node.js")]),t._v(" "),s("p",[t._v("掌握node常用原生模块的使用")]),t._v(" "),s("p",[t._v("开源小项目greenDot,技术栈Express，mongoDB，Pug")]),t._v(" "),s("p",[t._v("掌握npm，git")])]),t._v(" "),s("li",[s("b",[t._v("PhotoShop")]),t._v(" "),s("p",[t._v("熟练使用ps进行常用操作")])])])]),t._v(" "),s("section",{attrs:{id:"interests"}},[s("h1",[t._v("Professional interests")]),t._v(" "),s("p",[t._v("爱编程"),s("b",{staticClass:"space"},[t._v("·")]),t._v("\n\t爱拍照"),s("b",{staticClass:"space"},[t._v("·")]),t._v(" 爱电影"),s("b",{staticClass:"space"},[t._v("·")]),t._v("\n\t爱独处")]),t._v(" "),s("p",[t._v("github"),s("b",{staticClass:"space"},[t._v("·")]),t._v("\n\tinstagram"),s("b",{staticClass:"space"},[t._v("·")]),t._v(" douban"),s("b",{staticClass:"space"},[t._v("·")]),t._v("\n\talone")])]),t._v(" "),s("footer",[s("p",[t._v("模板来自"),s("a",{attrs:{href:"http://lea.verou.me/"}},[t._v("http://lea.verou.me/")]),t._v("，"),s("b",[t._v("under building")])])])])}]}},,,,,function(t,e,s){t.exports=s.p+"static/img/foot.d716427.png"}]),[72]);