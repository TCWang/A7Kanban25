import{_,o,c as s,a as e,G as k,F as p,l as u,t as h,Y as b,p as g,e as w,b as x,H as v}from"./BegV2Lhv.js";const M={data(){return{mobileMenuOpen:!1,menuItems:[{name:"交通指南",open:!1,submenu:[{name:"區域公車",link:"/transportation"},{name:"長庚轉運站",link:"/transportation/transfer"},{name:"捷運資訊",link:"/transportation/metro"},{name:"計程車/UBike",link:"/transportation/ubike"}]},{name:"地區資訊",open:!1,submenu:[{name:"A7重劃區資訊",link:"/introduction/a7"},{name:"大林口生活圈",link:"/introduction/linko"},{name:"人口成長趨勢",link:"/introduction/population"}]},{name:"地區建案",open:!1,submenu:[{name:"實價資訊",link:"/market"},{name:"建案匯總",link:"/houses"},{name:"購屋須知",link:"/houses/knowledge"}]},{name:"房屋市場",open:!1,submenu:[{name:"房市行情",link:"/market/charts"},{name:"房價趨勢",link:"/market/trend"},{name:"市場分析",link:"/tbd"}]}]}},methods:{toggleDropdown(n){this.menuItems.forEach((t,l)=>{l===n?t.open=!t.open:t.open=!1})},toggleMobileMenu(){this.mobileMenuOpen=!this.mobileMenuOpen}}},a=n=>(g("data-v-b464659d"),n=n(),w(),n),y={class:"bg-indigo-800 text-white"},B={class:"container mx-auto px-4 md:flex items-center gap-6"},C={class:"flex items-center justify-between md:w-auto w-full"},I=a(()=>e("a",{href:"/",class:"flex items-center py-2 px-1 text-white flex-1"},[e("span",{class:"font-bold"},"A7社區網站-城市探索")],-1)),O={class:"md:hidden flex items-center"},S=a(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("title",null,"bars-3-bottom-left"),e("g",{fill:"none"},[e("path",{d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),j=[S],N=a(()=>e("a",{class:"py-2 px-3 block text-white",href:"/urban"},"都市規劃",-1)),D=["onClick"],V={class:"pointer-events-none"},$=a(()=>e("svg",{class:"w-3 h-3 pointer-events-none",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("title",null,"chevron-down"),e("g",{fill:"none"},[e("path",{d:"M19.5 8.25l-7.5 7.5-7.5-7.5",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1)),z={key:0,class:"dropdown-menu absolute bg-indigo-500 text-white rounded-b-lg pb-2 w-64 z-10"},A=["href"],E=a(()=>e("a",{class:"py-2 px-3 block text-white",href:"/websites"},"社區網站",-1));function F(n,t,l,Y,r,c){return o(),s("nav",y,[e("div",B,[e("div",C,[I,e("div",O,[e("button",{onClick:t[0]||(t[0]=(...i)=>c.toggleMobileMenu&&c.toggleMobileMenu(...i)),class:"mobile-menu-button"},j)])]),e("div",{class:k([{hidden:!r.mobileMenuOpen,block:r.mobileMenuOpen,"md:flex":!0},"md:flex-row flex-col items-center justify-start md:space-x-1 navigation-menu pb-3 md:pb-0"])},[N,(o(!0),s(p,null,u(r.menuItems,(i,m)=>(o(),s("div",{class:"relative",key:m},[e("button",{onClick:d=>c.toggleDropdown(m),class:"dropdown-toggle py-2 px-3 hover:bg-indigo-500 flex items-center gap-2 rounded"},[e("span",V,h(i.name),1),$],8,D),i.open?(o(),s("div",z,[(o(!0),s(p,null,u(i.submenu,(d,f)=>(o(),s("a",{key:f,href:d.link,class:"block pl-4 md:pl-4 pr-2 py-2 hover:bg-indigo-800 text-white"},h(d.name),9,A))),128))])):b("",!0)]))),128)),E],2)])])}const H=_(M,[["render",F],["__scopeId","data-v-b464659d"]]),G={},L={class:"container mx-auto max-w-12xl p-4"};function U(n,t){const l=H;return o(),s("div",L,[x(l),v(n.$slots,"default")])}const J=_(G,[["render",U]]);export{J as default};