import{_,o,c as s,a as e,H as f,F as p,r as u,t as h,Z as g,p as k,e as w,b as x,I as v}from"./eGRjiwZT.js";const M={data(){return{mobileMenuOpen:!1,menuItems:[{name:"地區資訊",open:!1,submenu:[{name:"A7重劃區",link:"/introduction"},{name:"大林口生活圈",link:"/tbd"},{name:"人口成長趨勢",link:"/tbd"},{name:"生活環境",link:"/tbd"}]},{name:"交通指南",open:!1,submenu:[{name:"區域公車",link:"/transportation"},{name:"長庚轉運站",link:"/tbd"},{name:"捷運資訊",link:"/tbd"},{name:"UBike",link:"/tbd"}]},{name:"地區建案",open:!1,submenu:[{name:"最近熱銷",link:"/tbd"},{name:"建案匯總",link:"/houses"}]},{name:"房屋市場",open:!1,submenu:[{name:"房市行情",link:"/market"},{name:"房價趨勢",link:"/tbd"},{name:"市場分析",link:"/tbd"}]}]}},methods:{toggleDropdown(n){this.menuItems.forEach((t,a)=>{a===n?t.open=!t.open:t.open=!1})},toggleMobileMenu(){this.mobileMenuOpen=!this.mobileMenuOpen}}},i=n=>(k("data-v-2fcc90ad"),n=n(),w(),n),y={class:"bg-indigo-800 text-white"},I={class:"container mx-auto px-4 md:flex items-center gap-6"},B={class:"flex items-center justify-between md:w-auto w-full"},C=i(()=>e("a",{href:"/",class:"flex items-center py-2 px-1 text-white flex-1"},[e("span",{class:"font-bold"},"A7社區網站-城市探索")],-1)),O={class:"md:hidden flex items-center"},S=i(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("title",null,"bars-3-bottom-left"),e("g",{fill:"none"},[e("path",{d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),j=[S],N=i(()=>e("a",{class:"py-2 px-3 block text-white",href:"/urban"},"都市規劃",-1)),D=["onClick"],V={class:"pointer-events-none"},$=i(()=>e("svg",{class:"w-3 h-3 pointer-events-none",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("title",null,"chevron-down"),e("g",{fill:"none"},[e("path",{d:"M19.5 8.25l-7.5 7.5-7.5-7.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),z={key:0,class:"dropdown-menu absolute bg-indigo-500 text-white rounded-b-lg pb-2 w-64 z-10"},A=["href"],E=i(()=>e("a",{class:"py-2 px-3 block text-white",href:"/websites"},"社區網站",-1));function F(n,t,a,q,r,d){return o(),s("nav",y,[e("div",I,[e("div",B,[C,e("div",O,[e("button",{onClick:t[0]||(t[0]=(...l)=>d.toggleMobileMenu&&d.toggleMobileMenu(...l)),class:"mobile-menu-button"},j)])]),e("div",{class:f([{hidden:!r.mobileMenuOpen,block:r.mobileMenuOpen,"md:flex":!0},"md:flex-row flex-col items-center justify-start md:space-x-1 navigation-menu pb-3 md:pb-0"])},[N,(o(!0),s(p,null,u(r.menuItems,(l,m)=>(o(),s("div",{class:"relative",key:m},[e("button",{onClick:c=>d.toggleDropdown(m),class:"dropdown-toggle py-2 px-3 hover:bg-indigo-500 flex items-center gap-2 rounded"},[e("span",V,h(l.name),1),$],8,D),l.open?(o(),s("div",z,[(o(!0),s(p,null,u(l.submenu,(c,b)=>(o(),s("a",{key:b,href:c.link,class:"block pl-4 md:pl-4 pr-2 py-2 hover:bg-indigo-800 text-white"},h(c.name),9,A))),128))])):g("",!0)]))),128)),E],2)])])}const H=_(M,[["render",F],["__scopeId","data-v-2fcc90ad"]]),L={},U={class:"container mx-auto max-w-6xl p-4"};function Z(n,t){const a=H;return o(),s("div",U,[x(a),v(n.$slots,"default")])}const J=_(L,[["render",Z]]);export{J as default};