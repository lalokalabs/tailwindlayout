(window.webpackJsonp=window.webpackJsonp||[]).push([[18,2],{249:function(r,e,n){"use strict";n.r(e);var t={props:{slug:{type:String,required:!0},label:{type:String,required:!0},centered:{type:Boolean,default:!0},custom_class:{type:String,default:""}},data:{},computed:{positionClass:function(){return this.centered?"flex justify-center items-center p-2 h-full box-border":this.custom_class}}},o=n(9),component=Object(o.a)(t,(function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("NuxtLink",{staticClass:"\n    base-card\n    flex flex-col\n    justify-start\n    items-center\n    p-4\n    w-32\n    leading-6\n    no-underline\n    box-border\n  ",attrs:{to:{name:"ui-slug",params:{slug:r.slug}}}},[n("div",{staticClass:"\n      w-24\n      h-24\n      leading-6\n      rounded-sm\n      border border-indigo-300 border-solid\n      cursor-pointer\n      box-border\n      shadow-xs\n    "},[n("div",{class:r.positionClass},[r._t("default")],2)]),r._v(" "),n("h4",{staticClass:"\n      pt-2\n      m-0\n      font-normal\n      leading-6\n      text-center text-gray-800\n      cursor-pointer\n      box-border\n    "},[r._v("\n    "+r._s(r.label)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},291:function(r,e,n){"use strict";n.r(e);var t={props:{slug:{type:String,required:!0},label:{type:String,required:!0}}},o=n(9),component=Object(o.a)(t,(function(){var r=this,e=r.$createElement,n=r._self._c||e;return n("base-card",{attrs:{slug:r.slug,label:r.label,centered:!1,custom_class:"h-full"}},[n("div",{staticClass:"h-full flex flex-wrap p-2"},[n("div",{staticClass:"w-1/3 bg-indigo-50 border border-indigo-300 border-r-0 h-8"}),r._v(" "),n("div",{staticClass:"w-1/3 bg-indigo-50 border border-indigo-300 border-r-0 h-8"}),r._v(" "),n("div",{staticClass:"w-1/3 bg-indigo-50 border border-indigo-300 border-r-1 h-8"}),r._v(" "),n("div",{staticClass:"w-1/3 bg-indigo-50 border border-indigo-300 border-r-0 h-8"}),r._v(" "),n("div",{staticClass:"w-1/3 bg-indigo-50 border border-indigo-300 border-r-0 h-8"}),r._v(" "),n("div",{staticClass:"w-1/3 bg-indigo-50 border border-indigo-300 border-r-1 h-8"})])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseCard:n(249).default})}}]);