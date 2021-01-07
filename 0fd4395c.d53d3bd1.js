(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(120));const o={slug:"beta-0",title:"Grapevine 5.0 Beta 0",author:"Scott Offen",author_title:"Grapevine Creator",author_url:"https://scottoffen.github.io",author_image_url:"https://avatars1.githubusercontent.com/u/3513626?v=4",tags:["5.0.0-beta.0"]},i={permalink:"/grapevine/blog/beta-0",editUrl:"https://github.com/scottoffen/grapevine-docs/edit/master/blog/blog/2020-12-25-beta-0.md",source:"@site/blog\\2020-12-25-beta-0.md",description:"The first beta version of Grapevine 5.0 was uploaded to NuGet.org today, December 25, 2020.",date:"2020-12-25T00:00:00.000Z",tags:[{label:"5.0.0-beta.0",permalink:"/grapevine/blog/tags/5-0-0-beta-0"}],title:"Grapevine 5.0 Beta 0",readingTime:2.52,truncated:!0,prevItem:{title:"Grapevine Docs",permalink:"/grapevine/blog/docusaurus"}},s=[{value:"A Complete Rewrite",id:"a-complete-rewrite",children:[]},{value:"Things To Know",id:"things-to-know",children:[]},{value:"Code Sample",id:"code-sample",children:[]}],c={toc:s};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The first beta version of Grapevine 5.0 was uploaded to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nuget.org/"}),"NuGet.org")," today, December 25, 2020."),Object(a.b)("h2",{id:"a-complete-rewrite"},"A Complete Rewrite"),Object(a.b)("p",null,"A huge thank you to everyone who has downloaded and used Grapevine over the years, and especially those who have provided feedback and code to make the project better."),Object(a.b)("p",null,"That said, Grapevine 5 is a complete rewrite from top to bottom. The primary goal has always been that it must be simple to implement, without compromising on functionality or performance. The new Grapevine 5 is async from the receipt of the request to the sending of the response, which makes it blazing fast. It has a cleaner and more flexible logging mechanism, and supports dependency injection in routes. It can be easily extended to meet specific needs, and you can even wholesale replace any part with your own implementation."),Object(a.b)("h2",{id:"things-to-know"},"Things To Know"),Object(a.b)("p",null,"A new major version naturally brings with it breaking changes. In the case of Grapevine 5, it (as ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=-LrZ01A6Q_M"}),"Jonathan Coulton")," might say) breaks everything in the nicest way."),Object(a.b)("p",null,"If you have used a previous version of Grapevine, here is a quick summary of some thing you should know going in, in no particular order."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Target Frameworks: netstandard2.0, netstandard 2.1, and net5.0"),Object(a.b)("li",{parentName:"ul"},"Symbols package is also up on NuGet, for easier debugging during development"),Object(a.b)("li",{parentName:"ul"},"I've removed the Grapevine.Client, at least for now (recommend using ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/dotnet/architecture/microservices/implement-resilient-applications/use-httpclientfactory-to-implement-resilient-http-requests"}),Object(a.b)("inlineCode",{parentName:"a"},"IHttpClientFactory")),")"),Object(a.b)("li",{parentName:"ul"},"The single URI restriction has been removed, so you can listen on multiple ports!"),Object(a.b)("li",{parentName:"ul"},"Everything you need in the library is now in the Grapevine namespace"),Object(a.b)("li",{parentName:"ul"},"Grapevine is async all the way through the stack"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"This")," beta does not contain an ",Object(a.b)("inlineCode",{parentName:"li"},"IContentFolder")," (formerly ",Object(a.b)("inlineCode",{parentName:"li"},"IPublicFolder"),") implementation"),Object(a.b)("li",{parentName:"ul"},"There are built in extension for adding CORS (",Object(a.b)("inlineCode",{parentName:"li"},"IRestServer.UseCorsPolicy()"),") and correlation ids (",Object(a.b)("inlineCode",{parentName:"li"},"IRestServer.UseCorrelationId()"),")"),Object(a.b)("li",{parentName:"ul"},"Standards based dependency injection (using ",Object(a.b)("inlineCode",{parentName:"li"},"Microsoft.Extensions.DependencyInjection"),") and logging (using ",Object(a.b)("inlineCode",{parentName:"li"},"Microsoft.Extensions.Logging"),")"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"RestResource")," attributed classes are no longer required to have parameterless constructor (see above)")),Object(a.b)("h2",{id:"code-sample"},"Code Sample"),Object(a.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"RestServer.DeveloperConfiguration")," extension method used on line 12 is only available in this beta. It will be replaced with more elegant solution for start up and configuration."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp",metastring:'{12} title="Program.cs"',"{12}":!0,title:'"Program.cs"'}),'using System;\nusing System.Linq;\nusing Grapevine;\n\nnamespace MyConsoleApp\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            Console.WriteLine("Starting Grapevine Server");\n            using (var server = RestServer.DeveloperConfiguration((services) =>\n            {\n                // If your resources need dependencies injected, register those classes here\n            }, true))\n            {\n                Console.WriteLine($"Server will listen on {string.Join(", ", server.Prefixes)}");\n                server.Start();\n\n                Console.WriteLine("Press any key to stop the sample server.");\n                Console.ReadLine();\n            }\n        }\n    }\n}\n')),Object(a.b)("p",null,"Of course, you'll need some routes to go along with that..."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp",metastring:'title="MyResource.cs"',title:'"MyResource.cs"'}),'using System.Threading.Tasks;\nusing Grapevine;\nusing Microsoft.Extensions.Logging;\n\nnamespace MyConsoleApp\n{\n    [RestResource]\n    public class MyResource\n    {\n        private readonly ILogger<MyResource> _logger;\n\n        public MyResource(ILogger<MyResource> logger)\n        {\n            _logger = logger;\n        }\n\n        [RestRoute("Get", "/hello", Name = "Test Route", Description = "Just a route to test stuff with.", Enabled = true)]\n        public async Task HelloWorld(IHttpContext context)\n        {\n            await context.Response.SendResponseAsync("Hello, world!");\n        }\n\n        [RestRoute]\n        public async Task CathcAll(IHttpContext context)\n        {\n            _logger.LogTrace($"{context.Request.HttpMethod} {context.Request.PathInfo} : Catch All Method");\n            await context.Response.SendResponseAsync(HttpStatusCode.Ok);\n        }\n    }\n}\n')))}l.isMDXComponent=!0}}]);