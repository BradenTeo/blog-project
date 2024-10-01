(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{292:function(t,e,o){"use strict";o.r(e);var n={props:{open:{type:Boolean,required:!1,default:!1}},data:function(){return{tabOpened:this.open,hoveredButton:!1,hoveredTab:!1}}},r=o(24),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-2 border-4 p-4 rounded-lg border-gray-200 hover:border-slate-600",class:{"border-slate-600":t.tabOpened,"border-gray-200":!t.tabOpened,"bg-orange-100":t.tabOpened,"cursor-pointer":!t.tabOpened},on:{mouseover:function(e){t.hoveredTab=!0},mouseleave:function(e){t.hoveredTab=!1},mousedown:function(e){t.tabOpened=!0,t.hoveredButton=!1}}},[e("div",[e("h1",{staticClass:"sticky top-9 z-50 font-bold w-100 inline-block",class:{"border-slate-600":t.tabOpened,"border-transparent":!t.tabOpened,"border-b-2":t.tabOpened,"border-b-0":!t.tabOpened,"bg-orange-100":t.tabOpened}},[t._t("title")],2),t._v(" "),t.tabOpened?e("button",{staticClass:"sticky top-9 z-50 float-right inline-block border-2 hover:border-slate-600 rounded-lg flex flex-row items-center justify-center p-1",style:{"background-color":t.tabOpened?"slate-600":"transparent"},on:{mouseover:function(e){t.hoveredButton=!0},mouseleave:function(e){t.hoveredButton=!1},click:function(e){e.stopPropagation(),t.tabOpened=!1,t.hoveredTab=!1}}},[e("div",{staticClass:"text-center mr-1",class:{"text-gray-300":!t.hoveredButton,"text-black":t.hoveredButton}},[t._v("\n        Hide\n      ")]),t._v(" "),t.tabOpened&&!t.hoveredButton?e("svg",{staticClass:"w-5 h-5 text-gray-300",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"}})]):t._e(),t._v(" "),t.tabOpened&&t.hoveredButton?e("svg",{staticClass:"w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"}})]):t._e()]):e("svg",{staticClass:"w-6 h-6 sticky top-9 z-50 float-right inline-block",class:{"text-white":!t.hoveredTab,"text-slate-600":t.hoveredTab},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"}})]),t._v(" "),t.tabOpened?e("p",{staticClass:"text-justify block mt-4"},[t._t("content")],2):t._e()])])}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,o){var content=o(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(63).default)("41dd3250",content,!0,{sourceMap:!1})},301:function(t,e,o){t.exports=o.p+"img/success_quote.ab8de8e.jpg"},302:function(t,e,o){"use strict";o(298)},303:function(t,e,o){var n=o(62)((function(i){return i[1]}));n.push([t.i,"a[data-v-e8828c5a]{color:#2b6cb0}",""]),n.locals={},t.exports=n},314:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pb-5 border-b-2"},[t._v("\n      On this page, I've documented the steps I took to build this site in\n      2022, so that you can follow along if you want to. But if you manage to\n      find better ways of creating such a website online, do let me know! :)"),e("br"),t._v("\n      (Tbh, I've been facing some errors when deploying the website recently 😓)\n    ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"pb-3"},[e("ol",{staticClass:"list-decimal list-inside marker:font-bold"},[e("li",[t._v("HTML")]),t._v(" "),e("li",[t._v("CSS")]),t._v(" "),e("li",[t._v("JavaScript (just the surface)")]),t._v(" "),e("li",[t._v("Nuxt.js")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"pb-5"},[e("ul",{staticClass:"list-disc list-inside"},[e("li",[e("a",{attrs:{href:"https://medium.com/hackernoon/create-and-publish-a-nuxt-powered-website-on-github-pages-3e922dfa7372",target:"_blank"}},[t._v("Create and publish a Nuxt powered website on Github Pages")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.youtube.com/watch?v=CBwq_TUL5Fg",target:"_blank"}},[t._v("\n            Setting up a new Vue project\n          ")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://tailwindcss.com/docs/guides/nuxtjs",target:"_blank"}},[t._v("Tailwind CSS guide")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.udemy.com/course/vuejs-2-the-complete-guide/",target:"_blank"}},[t._v("Vue JS 2 - The Complete Guide")])])]),t._v(" "),e("br"),t._v("\n      And for good measure, here's\n      "),e("a",{attrs:{href:"https://github.com/BradenTeo/blog-project",target:"_blank"}},[t._v("\n        my project's repo on Github\n      ")])])},function(){var t=this._self._c;return t("div",{staticClass:"p-5"},[t("img",{staticClass:"h-[240px] mx-auto shadow-2xl",attrs:{src:o(301),alt:"Quote about Success"}})])}],r={name:"BuildProcessPage",components:{ClickableTabVue:o(292).default},layout:"default",data:function(){return{title:"Build Process",hover:!1,showPara:!1}}},l=(o(302),o(24)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("header",[e("Title",{attrs:{title:t.title}})],1),t._v(" "),e("div",{staticClass:"max-w-[680px] mx-auto text-justify py-[24px] px-[24px]"},[e("h2",{staticClass:"font-bold text-xl"},[t._v("What's here?")]),t._v(" "),t._m(0),t._v(" "),e("h2",{staticClass:"font-bold text-xl pt-5"},[t._v("Baby Steps")]),t._v("\n    I studied these various languages step-by-step:\n    "),t._m(1),t._v(" "),e("ClickableTabVue",{staticClass:"pb-5",attrs:{open:!0},nativeOn:{click:function(e){t.showPara=!t.showPara}},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Details of my experience\n      ")]},proxy:!0},{key:"content",fn:function(){return[t._v("\n        Web development probably seems pretty simple and straightforward at\n        first, and well, I think that's not wrong. After all, any average Joe\n        can write a few lines of HTML and CSS to create a simple website.\n        However, I think the hard part comes when you want your app to do\n        more. There's a ton of stuff that you can do with a website, and I\n        think it's fun yet intimidating for beginners like me. Especially when\n        you see roadmaps like\n        "),e("a",{staticClass:"border-2 hover:border-slate-600 border-slate-600 hover:bg-slate-600 hover:text-white rounded-md px-[2px] py-[1px]",attrs:{href:"https://roadmap.sh/frontend",target:"_blank"}},[t._v("this")]),t._v(". Nevertheless, I think if you put in the grind, you'll have a lot of\n        fun building stuff online. :) "),e("br"),e("br"),t._v("\n\n        Personally, I'm still a newbie in all this, but I'm hoping to get a\n        better hang of things as I code more. This website is still very\n        bare-bones, with very little animations and having minimal back-end.\n        No comment section too. I might work on these features more in the\n        future, but don't hold me to it, lol."),e("br"),e("br"),t._v("\n\n        Here's some tips I have though:\n        "),e("ol",{staticClass:"list-decimal list-inside marker:font-bold"},[e("li",[t._v("Take things one step at a time when you are learning")]),t._v(" "),e("li",[t._v("Develop a product while you are learning")]),t._v(" "),e("li",[t._v("Learn from others! -- Udemy, Youtube videos etc.")])])]},proxy:!0}])}),t._v(" "),e("h2",{staticClass:"font-bold text-xl pt-5 border-t-2"},[t._v("Resources I used")]),t._v(" "),t._m(2),t._v(" "),e("ClickableTabVue",{staticClass:"pb-5",attrs:{open:!0},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" How I set up this Project ")]},proxy:!0},{key:"content",fn:function(){return[e("ol",{staticClass:"list-decimal list-inside marker:font-bold"},[e("li",[t._v("Follow the video shown above to the 7:12 min mark")]),t._v(" "),e("li",[t._v("\n            In the guide for publishing on gh pages, follow the steps starting\n            from this line:"),e("br"),t._v(" "),e("div",{staticClass:"bg-slate-300/50 italic ml-4"},[t._v("\n              Update nuxt.config.js to add a base URL (replace my-project by\n              your project name): "),e("br"),t._v("\n              router: { base: '/my-project/' },\n            ")])]),t._v(" "),e("li",[t._v("Follow the guide to setup Tailwind CSS")])])]},proxy:!0}])}),t._v(" "),e("ClickableTabVue",{staticClass:"pb-5",attrs:{open:!0},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Shortcomings ")]},proxy:!0},{key:"content",fn:function(){return[e("ul",{staticClass:"list-disc list-inside marker:font-bold"},[e("li",[t._v("I was not able to get my favicon to show...")]),t._v(" "),e("li",[t._v("\n            Was not able to blur the backdrop for the feedback dialog pop-up\n          ")]),t._v(" "),e("li",[t._v("Some parts of the website looks a bit wonky on my phone.")])])]},proxy:!0}])}),t._v(" "),t._m(3)],1)])}),n,!1,null,"e8828c5a",null);e.default=component.exports}}]);