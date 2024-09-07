(()=>{var t={n:n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},d:(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};(()=>{"use strict";t.r(n),t.d(n,{components:()=>M,extend:()=>z,models:()=>U,utils:()=>R});const r=flarum.core.compat["forum/app"];var e=t.n(r);const o=flarum.core.compat["common/extend"],i=flarum.core.compat["forum/components/HeaderPrimary"];var a=t.n(i);function s(t){return t.slice(0).sort((function(t,n){var r=t.position(),e=n.position();return r>e?1:r<e?-1:0}))}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(t){var n=function(t,n){if("object"!=l(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,"string");if("object"!=l(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==l(n)?n:n+""}function c(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,u(e.key),e)}}function p(t,n){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},p(t,n)}function f(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,p(t,n)}const h=flarum.core.compat["common/components/Link"];var d=t.n(h);const b=flarum.core.compat["common/components/LinkButton"];var y=t.n(b);const k=flarum.core.compat["common/helpers/icon"];var v=t.n(k);const g=flarum.core.compat["common/components/Separator"];var w=t.n(g);const L=flarum.core.compat["common/utils/classList"];var B=t.n(L);const N=flarum.core.compat["common/components/Button"];var O=t.n(N);function S(t){return"en"===e().translator.getLocale()?t.title_english():t.title()}var P=function(t){function n(){for(var n,r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];return(n=t.call.apply(t,[this].concat(e))||this).attrs=void 0,n}f(n,t);var r,o,i=n.prototype;return i.view=function(t){return this.isLabel?this.labelView(t):this.linkView(t)},i.labelView=function(t){var n=this,r=this.attrs.link,e=this.attrs.inDropdown?"span":O();return m("[",null,this.attrs.inDropdown&&m(w(),null),m(e,{class:B()(this.class,"LinksButton--label"),onclick:function(t){n.attrs.inDropdown&&t.stopPropagation()},"data-toggle":this.attrs.isDropdownButton?"dropdown":void 0},this.icon,m("span",{className:"LinksButton-title"},S(r))),this.attrs.inDropdown&&m(w(),null))},i.linkView=function(t){var n=this.attrs.link,r={className:this.class,rel:this.rel,target:this.linkTarget,external:!n.isNewtab()&&!n.isInternal(),href:this.linkHref};return m(d(),r,this.icon,m("span",{className:"LinksButton-title"},S(n)))},r=n,(o=[{key:"isInternal",get:function(){var t=this.attrs.link;return t.isInternal()&&!t.isNewtab()}},{key:"isLabel",get:function(){return 0===this.attrs.link.url().length}},{key:"linkHref",get:function(){var t=this.attrs.link,n=t.url();return n.startsWith("/")&&t.isInternal()?e().forum.attribute("baseUrl")+n:n}},{key:"icon",get:function(){var t=this.attrs.link.icon();return t?v()(t,{className:"Button-icon LinksButton-icon"}):null}},{key:"rel",get:function(){return B()(this.attrs.link.isNewtab()&&"noopener noreferrer",this.attrs.link.useRelMe()&&"me")||void 0}},{key:"class",get:function(){return B()("LinksButton",this.attrs.className||"Button Button--link",{"LinksButton--inDropdown":this.attrs.inDropdown,active:this.isLinkCurrentPage})}},{key:"isLinkCurrentPage",get:function(){if(!this.attrs.link.isInternal())return!1;var t=e().forum.attribute("baseUrl"),n=new URL(m.route.get()||"/",t).href.replace(t,""),r=new URL(this.linkHref,t).href.replace(t,"");return 0===n.indexOf(r)&&("/"===n||"/"!==r)}},{key:"linkTarget",get:function(){var t=this.attrs.link;if(!this.isInternal)return t.isNewtab()?"_blank":void 0}}])&&c(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r}(y());function D(){return D=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},D.apply(null,arguments)}const j=flarum.core.compat["common/components/SplitDropdown"];var _=t.n(j);const I=flarum.core.compat["common/utils/ItemList"];var C=t.n(I),x=function(t){function n(){return t.apply(this,arguments)||this}f(n,t),n.initAttrs=function(n){t.initAttrs.call(this,n),n.className+=" LinkDropdown",n.buttonClassName+=" Button--link"};var r=n.prototype;return r.view=function(n){var r=this.items().toArray();return t.prototype.view.call(this,D({},n,{children:r}))},r.getButton=function(t){var n=this.getFirstChild(t);return n.attrs.className=B()(n.attrs.className,"SplitDropdown-button Button",this.attrs.buttonClassName),n.attrs.isDropdownButton=!0,[n,m("button",{className:B()("Dropdown-toggle","Button","Button--icon",this.attrs.buttonClassName),"data-toggle":"dropdown"},v()("fas fa-caret-down",{className:"Button-caret"}))]},r.items=function(){var t=new(C()),n=this.attrs.link;return t.add("link"+n.id(),P.component({link:n})),s(e().store.all("links")).filter((function(t){return t.parent()===n})).forEach((function(r){t.add("link"+n.id()+"-"+r.id(),P.component({link:r,inDropdown:!0}))})),t},n}(_()),M={LinkDropdown:x,LinkItem:P},R={sortLinks:s};const T=flarum.core.compat["common/Model"];var A=t.n(T),H=function(t){function n(){return t.apply(this,arguments)||this}f(n,t);var r=n.prototype;return r.title=function(){return A().attribute("title").call(this)},r.title_english=function(){return A().attribute("title_english").call(this)},r.icon=function(){return A().attribute("icon").call(this)},r.type=function(){return A().attribute("type").call(this)},r.url=function(){return A().attribute("url").call(this)},r.position=function(){return A().attribute("position").call(this)},r.isInternal=function(){return A().attribute("isInternal").call(this)},r.isNewtab=function(){return A().attribute("isNewtab").call(this)},r.useRelMe=function(){return A().attribute("useRelMe").call(this)},r.isChild=function(){return A().attribute("isChild").call(this)},r.parent=function(){return A().hasOne("parent").call(this)},r.visibility=function(){return A().attribute("visibility").call(this)},n}(A()),U={Link:H};const V=flarum.core.compat["common/extenders"],E=[(new(t.n(V)().Store)).add("links",H)],z=[].concat(E);e().initializers.add("fof-links",(function(){(0,o.extend)(a().prototype,"items",(function(t){s(e().store.all("links").filter((function(t){return!t.isChild()}))).map((function(n){var r=e().store.all("links").some((function(t){return t.parent()==n}));t.add("link"+(null==n?void 0:n.id()),r?x.component({link:n}):P.component({link:n}))}))}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map