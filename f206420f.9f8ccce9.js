(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{111:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=(a(0),a(120));const i={slug:"three-release-candidates-and-a-website",title:"Three Release Candidates And A Website",author:"Scott Offen",author_title:"Grapevine Creator",author_url:"https://scottoffen.github.io",author_image_url:"https://avatars1.githubusercontent.com/u/3513626?v=4",tags:["docs"]},o={permalink:"/grapevine/blog/three-release-candidates-and-a-website",editUrl:"https://github.com/scottoffen/grapevine-docs/edit/master/blog/blog/2021-01-05-5.0.0-rc.md",source:"@site/blog\\2021-01-05-5.0.0-rc.md",description:"img",date:"2021-01-05T00:00:00.000Z",tags:[{label:"docs",permalink:"/grapevine/blog/tags/docs"}],title:"Three Release Candidates And A Website",readingTime:1.74,truncated:!0,nextItem:{title:"Grapevine 5.0 Beta 1",permalink:"/grapevine/blog/beta-1"}},c=[{value:"Release Candidate 5.0.0-rc.0",id:"release-candidate-500-rc0",children:[]},{value:"Release Candidate 5.0.0-rc.1",id:"release-candidate-500-rc1",children:[]},{value:"Release Candidate 5.0.0-rc.2",id:"release-candidate-500-rc2",children:[]},{value:"Sample Project Website",id:"sample-project-website",children:[]}],s={toc:c};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:a(136).default})),Object(r.b)("p",null,"Three release candidates dropped in the first 5 days of 2021! I'll tell you what's up with that. Meanwhile, the Sample project gets a website, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scottoffen/grapevine/issues"}),"issues")," are turned on as well as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scottoffen/grapevine/discussions"}),"discussions"),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scottoffen/grapevine/blob/main/CODE_OF_CONDUCT.md"}),"code of conduct")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/scottoffen/grapevine/blob/main/CONTRIBUTING.md"}),"contributing guidelines")," are in place, and so I turn my focus now to documentation."),Object(r.b)("h2",{id:"release-candidate-500-rc0"},"Release Candidate 5.0.0-rc.0"),Object(r.b)("p",null,"The first release candidate saw the first implementation of ",Object(r.b)("inlineCode",{parentName:"p"},"ContentFolder"),", which makes it possible to easily serve static files (e.g. a website) from Grapevine. You will, of course, need to turn on the middleware to make that happen, as the logic for returning files was moved out of the ",Object(r.b)("inlineCode",{parentName:"p"},"RestServer")," and into ",Object(r.b)("inlineCode",{parentName:"p"},"OnRequest")," handlers."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var folderPath = Path.Combine(Directory.GetCurrentDirectory(), "website");\nserver.ContentFolders.Add(new ContentFolder(folderPath));\nserver.UseContentFolders();\n')),Object(r.b)("h2",{id:"release-candidate-500-rc1"},"Release Candidate 5.0.0-rc.1"),Object(r.b)("p",null,"Sadly, the first release candidate was short lived. I realized almost immedietly that I forgot to change the default service lifetime of the route classes to ",Object(r.b)("inlineCode",{parentName:"p"},"Scoped"),", and instead left them at ",Object(r.b)("inlineCode",{parentName:"p"},"Transient"),". Maybe not a big deal, but depending on how granular your routes are, could be huge. Huge. So, I fixed it."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://media.giphy.com/media/9jObH9PkVPTyM/giphy.gif",alt:"img"}))),Object(r.b)("p",null,"I also realized as I was beefing up the Sample project that there was a problem with the way path info was being generated in the route scanner when base paths and regular expression strings were being passed in, so I fixed that, too."),Object(r.b)("h2",{id:"release-candidate-500-rc2"},"Release Candidate 5.0.0-rc.2"),Object(r.b)("p",null,"Being able to match routes based on header values has been on the Grapevine 5 roadmap from the start. I've been kicking around how to implement that with the route scanner for awhile now, and I think I have a suitable solution here. This is the only code change in this release candidate."),Object(r.b)("h2",{id:"sample-project-website"},"Sample Project Website"),Object(r.b)("p",null,"The Samples project is intended to show useage patterns for easy adoption. I've added a nice website to the sample, and a bunch of example routes that you can look at and experiment with. There is even an example of a route that stops the server, invoked from a button on the webpage!"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:a(169).default})),Object(r.b)("p",null,"And with this, I turn my focus to documentation."))}l.isMDXComponent=!0},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=n,h=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return a?r.a.createElement(h,c(c({ref:t},l),{},{components:a})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},136:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/twenty-twenty-one-min-3ece93eee1cd0c4a59216e183b2d775c.jpg"},169:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rc1-website-min-197ce946aca753938bf7c46b8360923a.jpg"}}]);