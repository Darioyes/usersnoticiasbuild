import{a as b}from"./chunk-PT246GS5.js";import{a as v}from"./chunk-LCOLVQFY.js";import"./chunk-UZIZ2SC3.js";import{a as T}from"./chunk-5AEEOLU3.js";import"./chunk-IFK5JYCE.js";import{b as x,c as N}from"./chunk-OCIR5Z6U.js";import"./chunk-SFNPABOD.js";import"./chunk-RDI242HM.js";import{Bb as C,Ea as c,Oa as g,W as r,Wa as d,Xa as u,_ as l,_a as f,ab as m,eb as h,fb as y,gb as w,hb as a,ib as p,jb as o,rb as _}from"./chunk-A2AZSFLI.js";var D=()=>[import("./chunk-CXOYTFUN.js").then(e=>e.TitlePrincipalComponent),import("./chunk-2ON47VNM.js").then(e=>e.SummaryCardComponent),import("./chunk-TTMRAJ7B.js").then(e=>e.ForNewEmptyComponent)];function F(e,t){if(e&1&&o(0,"app-summary-card",5),e&2){let s=t.$implicit;m("newsFeatured",s)}}function S(e,t){e&1&&o(0,"app-for-new-empty")}function M(e,t){if(e&1&&(o(0,"div",1),a(1,"div",2),o(2,"app-title-principal",3),p(),a(3,"div",4),y(4,F,1,1,"app-summary-card",5,h,!1,S,1,0,"app-for-new-empty"),p()),e&2){let s=_();c(2),m("title",s.slug),c(2),w(s.categoryNews().data)}}function O(e,t){e&1&&o(0,"app-spiner")}var A=(()=>{let t=class t{constructor(){this.newsCategories=r(v),this.route=r(b),this.meta=r(x),this.title=r(N),this.categoryNews=g({response:"",message:"",data:[],error:!0})}ngOnInit(){this.route.paramMap.subscribe(i=>{this.id=Number(i.get("id")),this.slug=String(i.get("slug")).replace(/-/g," "),this.getNewsByCategory(this.id)})}ngOnDestroy(){this.subscriptionNews&&this.subscriptionNews.unsubscribe()}getNewsByCategory(i){this.subscriptionNews=this.newsCategories.getNewsByCategory(i).subscribe({next:n=>{this.categoryNews.set(n),this.title.setTitle(this.slug+" - NotiCursos"),this.meta.addTags([{name:"description",content:`Noticias sobre ${this.slug}`},{name:"keywords",content:`${this.slug}, noticias, cursos`},{name:"author",content:"NotiCursos"},{property:"og:title",content:this.slug+" - NotiCursos"},{property:"og:description",content:`Noticias y cursos sobre ${this.slug}`},{property:"og:type",content:"website"},{property:"og:url",content:`http://www.noticursos.com/noticias/${this.id}/${this.slug.replace(/ /g,"-")}`}])},error:n=>{},complete:()=>{}})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l({type:t,selectors:[["app-categories"]],standalone:!0,features:[C],decls:5,vars:0,consts:[[1,"conteiner-categories"],[1,"conteiner-categories__separator"],[1,"conteiner-categories__title"],[3,"title"],[1,"conteiner-categories__categories"],[3,"newsFeatured"]],template:function(n,$){n&1&&(a(0,"div",0),d(1,M,7,2)(2,O,1,0),u(3,1,D,null,2),f(0,-1),p())},dependencies:[T],styles:[".conteiner-categories[_ngcontent-%COMP%]{max-width:1300px;display:flex;justify-content:center;align-items:center;flex-direction:column;background:#f5f5f5;font-size:clamp(12px,2dvw,16px);padding:0;margin:0;gap:20px}.conteiner-categories__separator[_ngcontent-%COMP%]{width:98%;height:4px;margin-top:40px;background-color:#065693}.conteiner-categories__categories[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:row;flex-wrap:wrap;gap:20px}"]});let e=t;return e})();export{A as CategoriesComponent};
