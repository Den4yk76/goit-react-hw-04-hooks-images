(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(18),r=n.n(o),s=n(8),i=n(3),u=n(0);function l(e){var t=e.onSearchFormSubmit,n=Object(c.useState)(""),a=Object(i.a)(n,2),o=a[0],r=a[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),r("")):alert("Add your search query")},children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{onChange:function(e){r(e.target.value)},name:"searh",value:o,className:"SearchForm-input",type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos"})]})})}var h=n(19),j=n(20),b=n(21),m=n.n(b),d=function(){function e(){Object(h.a)(this,e),this._searchQuery="",this.page=1}return Object(j.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"searchPage",get:function(){return this.page},set:function(e){return this.page=e}},{key:"resetPage",value:function(){return this.page=1}},{key:"searchPhotos",value:function(){var e="https://pixabay.com/api/"+"?q=".concat(this.searchQuery,"&page=").concat(this.page,"&per_page=12&image_type=photo&orientation=horizontal&key=").concat("23081749-b9f3d38fc4718cbd45a8beed9");return m.a.get(e).then((function(e){return e})).catch((function(e){console.log(e)}))}}]),e}();function g(e){return e.images.map((function(e){var t=e.webformatURL,n=e.id,c=e.tags;return Object(u.jsx)("li",{className:"ImageGalleryItem",children:Object(u.jsx)("img",{id:n,src:t,alt:c,className:"ImageGalleryItem-image"})},n)}))}function f(e){var t=e.onModalOpen,n=e.images;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("ul",{onClick:t,className:"ImageGallery",children:Object(u.jsx)(g,{images:n})})})}function O(e){var t=e.onClick;return Object(u.jsx)("button",{onClick:function(){return t(1)},className:"Button",type:"button",children:"Load More!"})}function p(e){var t=e.onModalCloseByEsc,n=e.onModalClose,a=e.onKeyDown,o=e.largeImg;return Object(c.useEffect)((function(){console.log("addEventListener"),document.addEventListener("keyup",(function(e){27===e.keyCode&&t()}))})),Object(u.jsx)("div",{onClick:n,onKeyDown:a,className:"Overlay",children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{className:"LargeGalleryImage",src:o,alt:""})})})}function y(){return Object(u.jsxs)("div",{className:"lds-ellipsis",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})}n(45);var v=new d;function x(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(1),r=Object(i.a)(o,2),h=r[0],j=r[1],b=Object(c.useState)([]),m=Object(i.a)(b,2),d=m[0],g=m[1],x=Object(c.useState)("init"),S=Object(i.a)(x,2),k=S[0],N=S[1],w=Object(c.useState)(!1),C=Object(i.a)(w,2),I=C[0],E=C[1],M=Object(c.useState)(""),F=Object(i.a)(M,2),P=F[0],L=F[1];Object(c.useEffect)((function(){""!==n&&(window.scrollTo({top:document.documentElement,behavior:"smooth"}),v.resetPage(),N("pending"),j(1),v.searchQuery=n,v.searchPhotos().then((function(e){0!==e.data.hits.length?g(Object(s.a)(e.data.hits)):alert("Nothing to show! Change your search query")})).then(j((function(e){return e+1}))).finally((function(){N("success")})))}),[n]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l,{onSearchFormSubmit:function(e){a(e)}}),Object(u.jsx)(f,{images:d,onModalOpen:function(e){var t=d.find((function(t){return t.id.toString()===e.target.id}));E(!I),L(t.largeImageURL)}}),"pending"===k&&Object(u.jsx)(y,{}),d.length>0&&Object(u.jsx)(O,{onClick:function(e){N("pending"),j(h+1),v.searchPage=h,v.searchPhotos().then((function(e){g((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e.data.hits))}))})).catch((function(e){console.log(e)})).finally((function(){N("success"),window.scrollTo({top:document.documentElement.scrollHeight-1200,behavior:"smooth"})}))}}),I&&Object(u.jsx)(p,{onModalClose:function(e){"Overlay"===e.target.className&&"Overlay"===e.currentTarget.className&&E(!I)},onModalCloseByEsc:function(){E(!1)},largeImg:P})]})}r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c10ba917.chunk.js.map