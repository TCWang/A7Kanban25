import{C as b,p as c,a as p,b as g,B as _,c as u,L as y,d as h,P as C,e as x,f as A}from"./CNudrN3J.js";import{_ as m,r as k,o as l,c as s,d as B,b as e,a,u as D}from"./Dd7r_-VY.js";b.register(c,p,g,_,u,y,h,C);const I={name:"MixBarChartTeamplate",components:{Bar:x,Line:A},data(){return{chartData:{labels:["2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023","2024"],datasets:[{yAxisID:"A",label:"八德區-成交量",data:[,6,11,39,40,295,234,12,708,1038,1501,1094],backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1,type:"bar"},{yAxisID:"B",label:"八德區-每坪單價",data:[,22.11,20.6,23.85,19.91,20.98,20.55,20.85,26.79,31.41,33.49,37.63],backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1,type:"line"},{yAxisID:"A",label:"中壢區-成交量",data:[801,201,146,133,341,1022,1341,729,2629,3549,4278,1508],backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1,type:"bar"},{yAxisID:"B",label:"中壢區-每坪單價",data:[29.94,31.15,25.59,20.88,18.89,23.75,23.36,32.53,37.3,40.68,41.05,42.41],backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1,type:"line"},{yAxisID:"A",label:"桃園區-成交量",data:[94,11,39,93,309,751,683,1064,2290,2647,2366,1408],backgroundColor:["rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255, 206, 86, 1)"],borderWidth:1,type:"bar"},{yAxisID:"B",label:"桃園區-每坪單價",data:[35.85,34.51,34.01,29.14,26.41,22.6,25.07,28.49,34.64,39.13,42.49,46.76],backgroundColor:["rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255, 206, 86, 1)"],borderWidth:1,type:"line"},{yAxisID:"A",label:"龜山區-成交量",data:[,,48,29,386,955,1398,1039,2708,2389,4379,1645],backgroundColor:["rgba(153, 102, 255, 0.2)"],borderColor:["rgba(153, 102, 255, 1)"],borderWidth:1,type:"bar"},{yAxisID:"B",label:"龜山區-每坪單價",data:[,,32.31,29.27,30.03,27.11,26.15,24.42,29.72,36.03,38.75,43.26],backgroundColor:["rgba(153, 102, 255, 0.2)"],borderColor:["rgba(153, 102, 255, 1)"],borderWidth:1,type:"line"}]},chartOptions:{responsive:!0,indexAxis:"x",scales:{A:{type:"linear",position:"left",ticks:{beginAtZero:!0,color:"blue"},grid:{display:!1},title:{display:!0,text:"成交量"}},B:{type:"linear",position:"right",ticks:{beginAtZero:!1,color:"red",min:20,max:50},grid:{display:!1},title:{display:!0,text:"平均每坪(萬元)"}}}}}}},W={class:"m-4"},$=a("h3",null,"桃園主要預售屋 區域行情",-1),v=a("p",{class:"text-red-600"},"可點擊圖中項目, 獲得該項數值顯示",-1);function E(i,n,d,o,r,f){const t=k("Bar");return l(),s("div",W,[$,B(" 八德區, 中壢區, 桃園區 及 龜山區 房屋市場行情比較: 龜山區於2024年平均每坪價超越中壢區, 2023年起龜山區成交量也成為桃園第一。 "),v,e(t,{id:"myChart",options:r.chartOptions,data:r.chartData},null,8,["options","data"])])}const L=m(I,[["render",E]]);b.register(c,p,g,_,u,y,h,C);const O={name:"MixBarChartTeamplate2",components:{Bar:x,Line:A},data(){return{chartData:{labels:["2017","2018","2019","2020","2021","2022","2023","2024"],datasets:[{yAxisID:"A",label:"一房-成交量",data:[,136,169,43,29,27,148,15],backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1,type:"bar"},{yAxisID:"B",label:"一房-總價",data:[,6.73,6.45,5.94,7.4,8.48,7.56,9.97],backgroundColor:["rgba(54, 162, 235, 0.2)"],borderColor:["rgba(54, 162, 235, 1)"],borderWidth:1,type:"line"},{yAxisID:"A",label:"兩房-成交量",data:[385,613,521,203,965,1032,2080,694],backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1,type:"bar"},{yAxisID:"B",label:"兩房-總價",data:[11.55,10.92,7.84,7.93,9.46,10.79,11.13,12.66],backgroundColor:["rgba(255, 99, 132, 0.2)"],borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1,type:"line"},{yAxisID:"A",label:"三房-成交量",data:[,188,594,437,965,692,1282,673],backgroundColor:["rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255, 206, 86, 1)"],borderWidth:1,type:"bar"},{yAxisID:"B",label:"三房-總價",data:[,9.79,9.9,10.16,12.06,14.45,14.77,17.11],backgroundColor:["rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255, 206, 86, 1)"],borderWidth:1,type:"line"},{yAxisID:"A",label:"四房-成交量",data:[,,22,13,67,28,66,56],backgroundColor:["rgba(153, 102, 255, 0.2)"],borderColor:["rgba(153, 102, 255, 1)"],borderWidth:1,type:"bar"},{yAxisID:"B",label:"四房-總價",data:[,,11.37,10.89,15.6,17.57,18.57,22.51],backgroundColor:["rgba(153, 102, 255, 0.2)"],borderColor:["rgba(153, 102, 255, 1)"],borderWidth:1,type:"line"}]},chartOptions:{responsive:!0,indexAxis:"x",scales:{A:{type:"linear",position:"left",ticks:{beginAtZero:!0,color:"blue"},grid:{display:!1},title:{display:!0,text:"成交量"}},B:{type:"linear",position:"right",ticks:{beginAtZero:!1,color:"red",min:5,max:25},grid:{display:!1},title:{display:!0,text:"總價(百萬元)"}}}}}}},Z={class:"m-4"},N=a("h3",null,"A7重劃區預售屋 臥房數及房屋總價趨勢",-1),T=a("p",{class:"text-red-600"},"可點擊圖中項目, 獲得該項數值顯示",-1);function V(i,n,d,o,r,f){const t=k("Bar");return l(),s("div",Z,[N,B(" 依據 臥房數 的銷售成交量及總價比較: 兩房及三房是區域市場主力。尤其近年來平均單價高漲後，首購族往往只能購買小坪數為主的二房。 2020 一千萬能買的三房 到 2024 只能買一房了！ "),T,e(t,{id:"myChart2",options:r.chartOptions,data:r.chartData},null,8,["options","data"])])}const M=m(O,[["render",V]]),P=a("h2",{class:"mt-4"},"房屋市場 - 市場分析看板",-1),j={__name:"analysis",setup(i){return D({title:"房屋市場 - 市場分析"}),(n,d)=>{const o=L,r=M;return l(),s("div",null,[P,e(o),e(r)])}}};export{j as default};