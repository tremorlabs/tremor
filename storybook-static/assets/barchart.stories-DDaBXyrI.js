import{j as e}from"./jsx-runtime-CfatFE5O.js";import{R as u}from"./index-ClcD9ViR.js";import{L as mt}from"./Label-DAouQbGm.js";import{S as gt}from"./Switch-RRnFbcgf.js";import{b as ht,r as yt}from"./index-BWmfHM-C.js";import{C as ft,u as xt}from"./useOnWindowResize-V8MZeDGR.js";import{c as vt,g as fe,A as rt}from"./chartColors-CTMckKCA.js";import{c as p}from"./cx-CYgzbKIn.js";import{X as kt,Y as wt,g as St}from"./getYAxisDomain-G3OsYyu1.js";import{R as bt,p as Ne,T as Ct,q as Tt,B as At}from"./generateCategoricalChart-DR9uWRoX.js";import{B as Lt}from"./BarChart-qGzaN6dC.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BmTwYRFB.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./index-ClVxAquS.js";import"./index-D-jls2fw.js";import"./index-sY83p_TZ.js";import"./index-DSWkTB7Z.js";import"./index-CF-iJ_jy.js";import"./focusRing-49zpLVVu.js";import"./tiny-invariant-CopsF_GD.js";function xe(r,t){if(r===t)return!0;if(typeof r!="object"||typeof t!="object"||r===null||t===null)return!1;const n=Object.keys(r),l=Object.keys(t);if(n.length!==l.length)return!1;for(const i of n)if(!l.includes(i)||!xe(r[i],t[i]))return!1;return!0}const Nt=(r,t,n,l)=>{const{fillOpacity:i,name:h,payload:m,value:c}=r;let{x:f,width:d,y:x,height:s}=r;return l==="horizontal"&&s<0?(x+=s,s=Math.abs(s)):l==="vertical"&&d<0&&(f+=d,d=Math.abs(d)),e.jsx("rect",{x:f,y:x,width:d,height:s,opacity:t||n&&n!==h?xe(t,{...m,value:c})?i:.3:i})},jt=({name:r,color:t,onClick:n,activeLegend:l})=>{const i=!!n;return e.jsxs("li",{className:p("group inline-flex flex-nowrap items-center gap-1.5 whitespace-nowrap rounded px-2 py-1 transition",i?"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800":"cursor-default"),onClick:h=>{h.stopPropagation(),n==null||n(r,t)},children:[e.jsx("span",{className:p("size-2 shrink-0 rounded-sm",fe(t,"bg"),l&&l!==r?"opacity-40":"opacity-100"),"aria-hidden":!0}),e.jsx("p",{className:p("truncate whitespace-nowrap text-xs","text-gray-700 dark:text-gray-300",i&&"group-hover:text-gray-900 dark:group-hover:text-gray-50",l&&l!==r?"opacity-40":"opacity-100"),children:r})]})},je=({icon:r,onClick:t,disabled:n})=>{const l=r,[i,h]=u.useState(!1),m=u.useRef(null);return u.useEffect(()=>(i?m.current=setInterval(()=>{t==null||t()},300):clearInterval(m.current),()=>clearInterval(m.current)),[i,t]),u.useEffect(()=>{n&&(clearInterval(m.current),h(!1))},[n]),e.jsx("button",{type:"button",className:p("group inline-flex size-5 items-center truncate rounded transition",n?"cursor-not-allowed text-gray-400 dark:text-gray-600":"cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50"),disabled:n,onClick:c=>{c.stopPropagation(),t==null||t()},onMouseDown:c=>{c.stopPropagation(),h(!0)},onMouseUp:c=>{c.stopPropagation(),h(!1)},children:e.jsx(l,{className:"size-full","aria-hidden":"true"})})},st=u.forwardRef((r,t)=>{const{categories:n,colors:l=rt,className:i,onClickLegendItem:h,activeLegend:m,enableLegendSlider:c=!1,...f}=r,d=u.useRef(null),x=u.useRef(null),[s,w]=u.useState(null),[v,A]=u.useState(null),W=u.useRef(null),L=u.useCallback(()=>{const a=d==null?void 0:d.current;if(!a)return;const g=a.scrollLeft>0,b=a.scrollWidth-a.clientWidth>a.scrollLeft;w({left:g,right:b})},[w]),S=u.useCallback(a=>{const g=d==null?void 0:d.current,b=x==null?void 0:x.current,V=(b==null?void 0:b.clientWidth)??0,N=(g==null?void 0:g.clientWidth)??0;g&&c&&(g.scrollTo({left:a==="left"?g.scrollLeft-N+V:g.scrollLeft+N-V,behavior:"smooth"}),setTimeout(()=>{L()},400))},[c,L]);u.useEffect(()=>{const a=g=>{g==="ArrowLeft"?S("left"):g==="ArrowRight"&&S("right")};return v?(a(v),W.current=setInterval(()=>{a(v)},300)):clearInterval(W.current),()=>clearInterval(W.current)},[v,S]);const G=a=>{a.stopPropagation(),(a.key==="ArrowLeft"||a.key==="ArrowRight")&&(a.preventDefault(),A(a.key))},F=a=>{a.stopPropagation(),A(null)};return u.useEffect(()=>{const a=d==null?void 0:d.current;return c&&(L(),a==null||a.addEventListener("keydown",G),a==null||a.addEventListener("keyup",F)),()=>{a==null||a.removeEventListener("keydown",G),a==null||a.removeEventListener("keyup",F)}},[L,c]),e.jsxs("ol",{ref:t,className:p("relative overflow-hidden",i),...f,children:[e.jsx("div",{ref:d,tabIndex:0,className:p("flex h-full",c?s!=null&&s.right||s!=null&&s.left?"snap-mandatory items-center overflow-auto pl-4 pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden":"":"flex-wrap"),children:n.map((a,g)=>e.jsx(jt,{name:a,color:l[g],onClick:h,activeLegend:m},`item-${g}`))}),c&&(s!=null&&s.right||s!=null&&s.left)?e.jsx(e.Fragment,{children:e.jsxs("div",{className:p("absolute bottom-0 right-0 top-0 flex h-full items-center justify-center pr-1","bg-white dark:bg-gray-950"),children:[e.jsx(je,{icon:ht,onClick:()=>{A(null),S("left")},disabled:!(s!=null&&s.left)}),e.jsx(je,{icon:yt,onClick:()=>{A(null),S("right")},disabled:!(s!=null&&s.right)})]})}):null]})});st.displayName="Legend";const Bt=({payload:r},t,n,l,i,h,m,c)=>{const f=u.useRef(null);xt(()=>{var w;n((v=>v?Number(v)+15:60)((w=f.current)==null?void 0:w.clientHeight))});const d=r.filter(s=>s.type!=="none"),x=m==="left"&&c?c-8:0;return e.jsx("div",{style:{paddingLeft:x},ref:f,className:p("flex items-center",{"justify-center":m==="center"},{"justify-start":m==="left"},{"justify-end":m==="right"}),children:e.jsx(st,{categories:d.map(s=>s.value),colors:d.map(s=>t.get(s.value)),onClickLegendItem:i,activeLegend:l,enableLegendSlider:h})})},Wt=({active:r,payload:t,label:n,valueFormatter:l})=>r&&t&&t.length?e.jsxs("div",{className:p("rounded-md border text-sm shadow-md","border-gray-200 dark:border-gray-800","bg-white dark:bg-gray-950"),children:[e.jsx("div",{className:p("border-b border-inherit px-4 py-2"),children:e.jsx("p",{className:p("font-medium","text-gray-900 dark:text-gray-50"),children:n})}),e.jsx("div",{className:p("space-y-1 px-4 py-2"),children:t.map(({value:i,category:h,color:m},c)=>e.jsxs("div",{className:"flex items-center justify-between space-x-8",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{"aria-hidden":"true",className:p("size-2 shrink-0 rounded-sm",fe(m,"bg"))}),e.jsx("p",{className:p("whitespace-nowrap text-right","text-gray-700 dark:text-gray-300"),children:h})]}),e.jsx("p",{className:p("whitespace-nowrap text-right font-medium tabular-nums","text-gray-900 dark:text-gray-50"),children:l(i)})]},`id-${c}`))})]}):null,q=u.forwardRef((r,t)=>{const{data:n=[],categories:l=[],index:i,colors:h=rt,valueFormatter:m=o=>o.toString(),startEndOnly:c=!1,showXAxis:f=!0,showYAxis:d=!0,showGridLines:x=!0,yAxisWidth:s=56,intervalType:w="equidistantPreserveStart",showTooltip:v=!0,showLegend:A=!0,autoMinValue:W=!1,minValue:L,maxValue:S,allowDecimals:G=!0,className:F,onValueChange:a,enableLegendSlider:g=!1,barCategoryGap:b,tickGap:V=5,xAxisLabel:N,yAxisLabel:R,layout:y="horizontal",type:P="default",legendPosition:nt="right",tooltipCallback:ve,customTooltip:ot,...it}=r,ke=ot,we=!f&&!d||c&&!d?0:20,[lt,ct]=u.useState(60),[J,E]=u.useState(void 0),he=vt(l,h),[O,D]=u.useState(void 0),Se=St(W,L,S),ye=!!a,dt=P==="stacked"||P==="percent",be=u.useRef(void 0),Ce=u.useRef(void 0);function Te(o){return`${(o*100).toFixed(0)}%`}function ut(o,C,T){var j,k,Ae,Le;T.stopPropagation(),a&&(xe(O,{...o.payload,value:o.value})?(E(void 0),D(void 0),a==null||a(null)):(E((k=(j=o.tooltipPayload)==null?void 0:j[0])==null?void 0:k.dataKey),D({...o.payload,value:o.value}),a==null||a({eventType:"bar",categoryClicked:(Le=(Ae=o.tooltipPayload)==null?void 0:Ae[0])==null?void 0:Le.dataKey,...o.payload})))}function pt(o){ye&&(o===J&&!O?(E(void 0),a==null||a(null)):(E(o),a==null||a({eventType:"category",categoryClicked:o})),D(void 0))}return e.jsx("div",{ref:t,className:p("h-80 w-full",F),"tremor-id":"tremor-raw",...it,children:e.jsx(bt,{children:e.jsxs(Lt,{data:n,onClick:ye&&(J||O)?()=>{D(void 0),E(void 0),a==null||a(null)}:void 0,margin:{bottom:N?30:void 0,left:R?20:void 0,right:R?5:void 0,top:5},stackOffset:P==="percent"?"expand":void 0,layout:y,barCategoryGap:b,children:[x?e.jsx(ft,{className:p("stroke-gray-200 stroke-1 dark:stroke-gray-800"),horizontal:y!=="vertical",vertical:y==="vertical"}):null,e.jsx(kt,{hide:!f,tick:{transform:y!=="vertical"?"translate(0, 6)":void 0},fill:"",stroke:"",className:p("text-xs","fill-gray-500 dark:fill-gray-500",{"mt-4":y!=="vertical"}),tickLine:!1,axisLine:!1,minTickGap:V,...y!=="vertical"?{padding:{left:we,right:we},dataKey:i,interval:c?"preserveStartEnd":w,ticks:c?[n[0][i],n[n.length-1][i]]:void 0}:{type:"number",domain:Se,tickFormatter:P==="percent"?Te:m,allowDecimals:G},children:N&&e.jsx(Ne,{position:"insideBottom",offset:-20,className:"fill-gray-800 text-sm font-medium dark:fill-gray-200",children:N})}),e.jsx(wt,{width:s,hide:!d,axisLine:!1,tickLine:!1,fill:"",stroke:"",className:p("text-xs","fill-gray-500 dark:fill-gray-500"),tick:{transform:y!=="vertical"?"translate(-3, 0)":"translate(0, 0)"},...y!=="vertical"?{type:"number",domain:Se,tickFormatter:P==="percent"?Te:m,allowDecimals:G}:{dataKey:i,ticks:c?[n[0][i],n[n.length-1][i]]:void 0,type:"category",interval:"equidistantPreserveStart"},children:R&&e.jsx(Ne,{position:"insideLeft",style:{textAnchor:"middle"},angle:-90,offset:-15,className:"fill-gray-800 text-sm font-medium dark:fill-gray-200",children:R})}),e.jsx(Ct,{wrapperStyle:{outline:"none"},isAnimationActive:!0,animationDuration:100,cursor:{fill:"#d1d5db",opacity:"0.15"},offset:20,position:{y:y==="horizontal"?0:void 0,x:y==="horizontal"?void 0:s+20},content:({active:o,payload:C,label:T})=>{const j=C?C.map(k=>({category:k.dataKey,value:k.value,index:k.payload[i],color:he.get(k.dataKey),type:k.type,payload:k.payload})):[];return ve&&(o!==be.current||T!==Ce.current)&&(ve({active:o,payload:j,label:T}),be.current=o,Ce.current=T),v&&o?ke?e.jsx(ke,{active:o,payload:j,label:T}):e.jsx(Wt,{active:o,payload:j,label:T,valueFormatter:m}):null}}),A?e.jsx(Tt,{verticalAlign:"top",height:lt,content:({payload:o})=>Bt({payload:o},he,ct,J,ye?C=>pt(C):void 0,g,nt,s)}):null,l.map(o=>e.jsx(At,{className:p(fe(he.get(o),"fill"),a?"cursor-pointer":""),name:o,type:"linear",dataKey:o,stackId:dt?"stack":void 0,isAnimationActive:!1,fill:"",shape:C=>Nt(C,O,J,y),onClick:ut},o))]})})})});q.displayName="BarChart";q.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}],raw:"Record<string, any>[]"},description:""},index:{required:!0,tsType:{name:"string"},description:""},categories:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"AvailableChartColorsKeys[]"},description:""},valueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:""},startEndOnly:{required:!1,tsType:{name:"boolean"},description:""},showXAxis:{required:!1,tsType:{name:"boolean"},description:""},showYAxis:{required:!1,tsType:{name:"boolean"},description:""},showGridLines:{required:!1,tsType:{name:"boolean"},description:""},yAxisWidth:{required:!1,tsType:{name:"number"},description:""},intervalType:{required:!1,tsType:{name:"union",raw:'"preserveStartEnd" | "equidistantPreserveStart"',elements:[{name:"literal",value:'"preserveStartEnd"'},{name:"literal",value:'"equidistantPreserveStart"'}]},description:""},showTooltip:{required:!1,tsType:{name:"boolean"},description:""},showLegend:{required:!1,tsType:{name:"boolean"},description:""},autoMinValue:{required:!1,tsType:{name:"boolean"},description:""},minValue:{required:!1,tsType:{name:"number"},description:""},maxValue:{required:!1,tsType:{name:"number"},description:""},allowDecimals:{required:!1,tsType:{name:"boolean"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: BarChartEventProps) => void",signature:{arguments:[{type:{name:"union",raw:"BaseEventProps | null | undefined",elements:[{name:"signature",type:"object",raw:`{
  eventType: "category" | "bar"
  categoryClicked: string
  [key: string]: number | string
}`,signature:{properties:[{key:"eventType",value:{name:"union",raw:'"category" | "bar"',elements:[{name:"literal",value:'"category"'},{name:"literal",value:'"bar"'}],required:!0}},{key:"categoryClicked",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}},{name:"null"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},enableLegendSlider:{required:!1,tsType:{name:"boolean"},description:""},tickGap:{required:!1,tsType:{name:"number"},description:""},barCategoryGap:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},xAxisLabel:{required:!1,tsType:{name:"string"},description:""},yAxisLabel:{required:!1,tsType:{name:"string"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "stacked" | "percent"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"stacked"'},{name:"literal",value:'"percent"'}]},description:""},legendPosition:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:""},tooltipCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(tooltipCallbackContent: TooltipProps) => void",signature:{arguments:[{type:{name:"Pick",elements:[{name:"ChartTooltipProps"},{name:"union",raw:'"active" | "payload" | "label"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"payload"'},{name:"literal",value:'"label"'}]}],raw:'Pick<ChartTooltipProps, "active" | "payload" | "label">'},name:"tooltipCallbackContent"}],return:{name:"void"}}},description:""},customTooltip:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<TooltipProps>",elements:[{name:"Pick",elements:[{name:"ChartTooltipProps"},{name:"union",raw:'"active" | "payload" | "label"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"payload"'},{name:"literal",value:'"label"'}]}],raw:'Pick<ChartTooltipProps, "active" | "payload" | "label">'}]},description:""}}};const B=[{date:"Jan 23",SolarCells:2890,Glass:2338,Encapsulant:1450,BackSheet:1900,Frame:1600,JunctionBox:1800,Adhesive:1700},{date:"Feb 23",SolarCells:2756,Glass:2103,Encapsulant:1200,BackSheet:1850,Frame:1700,JunctionBox:1750,Adhesive:1650},{date:"Mar 23",SolarCells:3322,Glass:2194,Encapsulant:1300,BackSheet:2200,Frame:1400,JunctionBox:2e3,Adhesive:800},{date:"Apr 23",SolarCells:3470,Glass:2108,Encapsulant:1400,BackSheet:1600,Frame:1800,JunctionBox:1900,Adhesive:-1950},{date:"May 23",SolarCells:3475,Glass:1812,Encapsulant:1550,BackSheet:2300,Frame:1450,JunctionBox:2200,Adhesive:-1600},{date:"Jun 23",SolarCells:3129,Glass:1726,Encapsulant:1350,BackSheet:2100,Frame:1750,JunctionBox:2050,Adhesive:-1700},{date:"Jul 23",SolarCells:3490,Glass:1982,Encapsulant:1450,BackSheet:1950,Frame:1500,JunctionBox:2300,Adhesive:-1800},{date:"Aug 23",SolarCells:2903,Glass:2012,Encapsulant:1250,BackSheet:1700,Frame:1850,JunctionBox:2150,Adhesive:-1900},{date:"Sep 23",SolarCells:2643,Glass:2342,Encapsulant:1400,BackSheet:1600,Frame:1500,JunctionBox:2e3,Adhesive:-3750},{date:"Oct 23",SolarCells:2837,Glass:2473,Encapsulant:1350,BackSheet:1850,Frame:1900,JunctionBox:2100,Adhesive:-2600},{date:"Nov 23",SolarCells:2954,Glass:3848,Encapsulant:1200,BackSheet:2e3,Frame:1750,JunctionBox:2400,Adhesive:-2950},{date:"Dec 23",SolarCells:3239,Glass:3736,Encapsulant:1550,BackSheet:1700,Frame:1600,JunctionBox:2250,Adhesive:-3800}],er={title:"visualization/BarChart",component:q,args:{data:B,index:"date",categories:["SolarCells","Glass"]}},I={render:()=>e.jsx(q,{"data-testid":"bar-chart",data:B,index:"date",categories:["SolarCells","Glass"]})},M={args:{categories:["SolarCells","Adhesive"]}},z={args:{valueFormatter:r=>`$${Intl.NumberFormat("us").format(r).toString()}`}},$={args:{xAxisLabel:"Month of Year",yAxisLabel:"Revenue"}},Y={args:{autoMinValue:!0}},K={args:{maxValue:5e3,minValue:-3e3}},H={args:{data:B,index:"date",categories:["SolarCells","Glass","Encapsulant","BackSheet","Frame","JunctionBox","Adhesive"]}},X={args:{legendPosition:"left"}},_={args:{legendPosition:"center"}},U={args:{className:"max-w-md",data:B,index:"date",categories:["SolarCells","Glass","Encapsulant","BackSheet","Frame","JunctionBox","Adhesive"],enableLegendSlider:!0,onValueChange:r=>console.log(r)}},Q={args:{colors:["amber","cyan"]}},Z={args:{startEndOnly:!0}},ee={args:{showXAxis:!1,showYAxis:!1}},ae={args:{showGridLines:!1}},te={args:{showLegend:!1}},re={args:{showTooltip:!1}},se={args:{onValueChange:r=>console.log(r)}},ne={render:()=>{const[r,t]=u.useState(null),[n,l]=u.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(mt,{htmlFor:"a",children:"showTooltip"}),e.jsx(gt,{id:"a",checked:n,onCheckedChange:l})]}),e.jsx(q,{data:B,index:"date",categories:["SolarCells","Glass"],tooltipCallback:i=>t(i),showTooltip:n}),e.jsx("pre",{children:JSON.stringify(r,null,2)})]})}},oe={args:{tickGap:300}},ie={args:{barCategoryGap:"30%"}},le={args:{categories:["SolarCells"],layout:"vertical"}},ce={args:{type:"percent"}},de={args:{layout:"vertical",type:"percent"}},ue={args:{type:"stacked"}},pe={args:{layout:"vertical",type:"stacked"}},me={args:{data:B.slice(0,1),index:"date",categories:["SolarCells","Glass"],onValueChange:r=>console.log(r)}},ge={args:{categories:["SolarCells"],yAxisWidth:65,customTooltip:r=>{const{payload:t,active:n,label:l}=r;return!n||!t||t.length===0?null:e.jsx("div",{className:"w-56 rounded-md border bg-white p-2 text-sm shadow-sm",children:e.jsxs("div",{className:"flex flex-1 space-x-2.5",children:[e.jsx("div",{className:`flex w-1.5 flex-col bg-${t[0].color}-500 rounded`}),e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"font-medium text-gray-900",children:l}),e.jsxs("div",{className:"flex items-center justify-between space-x-8",children:[e.jsx("p",{className:"whitespace-nowrap text-right text-gray-700",children:t[0].category}),e.jsx("p",{className:"whitespace-nowrap text-right font-medium text-gray-900",children:t[0].value})]})]})]})})}}};var Be,We,Ge;I.parameters={...I.parameters,docs:{...(Be=I.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <BarChart data-testid="bar-chart" data={chartdata} index="date" categories={["SolarCells", "Glass"]} />
}`,...(Ge=(We=I.parameters)==null?void 0:We.docs)==null?void 0:Ge.source}}};var Pe,Ee,qe;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    categories: ["SolarCells", "Adhesive"]
  }
}`,...(qe=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:qe.source}}};var Fe,Ve,Re;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    valueFormatter: v => \`$\${Intl.NumberFormat("us").format(v).toString()}\`
  }
}`,...(Re=(Ve=z.parameters)==null?void 0:Ve.docs)==null?void 0:Re.source}}};var Je,Oe,De;$.parameters={...$.parameters,docs:{...(Je=$.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    xAxisLabel: "Month of Year",
    yAxisLabel: "Revenue"
  }
}`,...(De=(Oe=$.parameters)==null?void 0:Oe.docs)==null?void 0:De.source}}};var Ie,Me,ze;Y.parameters={...Y.parameters,docs:{...(Ie=Y.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    autoMinValue: true
  }
}`,...(ze=(Me=Y.parameters)==null?void 0:Me.docs)==null?void 0:ze.source}}};var $e,Ye,Ke;K.parameters={...K.parameters,docs:{...($e=K.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    maxValue: 5000,
    minValue: -3000
  }
}`,...(Ke=(Ye=K.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source}}};var He,Xe,_e;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    data: chartdata,
    index: "date",
    categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"]
  }
}`,...(_e=(Xe=H.parameters)==null?void 0:Xe.docs)==null?void 0:_e.source}}};var Ue,Qe,Ze;X.parameters={...X.parameters,docs:{...(Ue=X.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    legendPosition: "left"
  }
}`,...(Ze=(Qe=X.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;_.parameters={..._.parameters,docs:{...(ea=_.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  args: {
    legendPosition: "center"
  }
}`,...(ta=(aa=_.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var ra,sa,na;U.parameters={...U.parameters,docs:{...(ra=U.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  args: {
    className: "max-w-md",
    data: chartdata,
    index: "date",
    categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"],
    enableLegendSlider: true,
    onValueChange: v => console.log(v)
  }
}`,...(na=(sa=U.parameters)==null?void 0:sa.docs)==null?void 0:na.source}}};var oa,ia,la;Q.parameters={...Q.parameters,docs:{...(oa=Q.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  args: {
    colors: ["amber", "cyan"]
  }
}`,...(la=(ia=Q.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var ca,da,ua;Z.parameters={...Z.parameters,docs:{...(ca=Z.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  args: {
    startEndOnly: true
  }
}`,...(ua=(da=Z.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var pa,ma,ga;ee.parameters={...ee.parameters,docs:{...(pa=ee.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  args: {
    showXAxis: false,
    showYAxis: false
  }
}`,...(ga=(ma=ee.parameters)==null?void 0:ma.docs)==null?void 0:ga.source}}};var ha,ya,fa;ae.parameters={...ae.parameters,docs:{...(ha=ae.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  args: {
    showGridLines: false
  }
}`,...(fa=(ya=ae.parameters)==null?void 0:ya.docs)==null?void 0:fa.source}}};var xa,va,ka;te.parameters={...te.parameters,docs:{...(xa=te.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  args: {
    showLegend: false
  }
}`,...(ka=(va=te.parameters)==null?void 0:va.docs)==null?void 0:ka.source}}};var wa,Sa,ba;re.parameters={...re.parameters,docs:{...(wa=re.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  args: {
    showTooltip: false
  }
}`,...(ba=(Sa=re.parameters)==null?void 0:Sa.docs)==null?void 0:ba.source}}};var Ca,Ta,Aa;se.parameters={...se.parameters,docs:{...(Ca=se.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  args: {
    onValueChange: v => console.log(v)
  }
}`,...(Aa=(Ta=se.parameters)==null?void 0:Ta.docs)==null?void 0:Aa.source}}};var La,Na,ja;ne.parameters={...ne.parameters,docs:{...(La=ne.parameters)==null?void 0:La.docs,source:{originalSource:`{
  render: () => {
    const [callback, setCallBack] = React.useState<TooltipProps | null>(null);
    const [checked, setChecked] = React.useState(true);
    return <>
        <div className="flex items-center gap-3">
          <Label htmlFor="a">showTooltip</Label>
          <Switch id="a" checked={checked} onCheckedChange={setChecked} />
        </div>

        <BarChart data={chartdata} index="date" categories={["SolarCells", "Glass"]} tooltipCallback={tooltipContent => setCallBack(tooltipContent)} showTooltip={checked} />
        <pre>{JSON.stringify(callback, null, 2)}</pre>
      </>;
  }
}`,...(ja=(Na=ne.parameters)==null?void 0:Na.docs)==null?void 0:ja.source}}};var Ba,Wa,Ga;oe.parameters={...oe.parameters,docs:{...(Ba=oe.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  args: {
    tickGap: 300
  }
}`,...(Ga=(Wa=oe.parameters)==null?void 0:Wa.docs)==null?void 0:Ga.source}}};var Pa,Ea,qa;ie.parameters={...ie.parameters,docs:{...(Pa=ie.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  args: {
    barCategoryGap: "30%"
  }
}`,...(qa=(Ea=ie.parameters)==null?void 0:Ea.docs)==null?void 0:qa.source}}};var Fa,Va,Ra;le.parameters={...le.parameters,docs:{...(Fa=le.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
  args: {
    categories: ["SolarCells"],
    layout: "vertical"
  }
}`,...(Ra=(Va=le.parameters)==null?void 0:Va.docs)==null?void 0:Ra.source}}};var Ja,Oa,Da;ce.parameters={...ce.parameters,docs:{...(Ja=ce.parameters)==null?void 0:Ja.docs,source:{originalSource:`{
  args: {
    type: "percent"
  }
}`,...(Da=(Oa=ce.parameters)==null?void 0:Oa.docs)==null?void 0:Da.source}}};var Ia,Ma,za;de.parameters={...de.parameters,docs:{...(Ia=de.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  args: {
    layout: "vertical",
    type: "percent"
  }
}`,...(za=(Ma=de.parameters)==null?void 0:Ma.docs)==null?void 0:za.source}}};var $a,Ya,Ka;ue.parameters={...ue.parameters,docs:{...($a=ue.parameters)==null?void 0:$a.docs,source:{originalSource:`{
  args: {
    type: "stacked"
  }
}`,...(Ka=(Ya=ue.parameters)==null?void 0:Ya.docs)==null?void 0:Ka.source}}};var Ha,Xa,_a;pe.parameters={...pe.parameters,docs:{...(Ha=pe.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  args: {
    layout: "vertical",
    type: "stacked"
  }
}`,...(_a=(Xa=pe.parameters)==null?void 0:Xa.docs)==null?void 0:_a.source}}};var Ua,Qa,Za;me.parameters={...me.parameters,docs:{...(Ua=me.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  args: {
    data: chartdata.slice(0, 1),
    index: "date",
    categories: ["SolarCells", "Glass"],
    onValueChange: v => console.log(v)
  }
}`,...(Za=(Qa=me.parameters)==null?void 0:Qa.docs)==null?void 0:Za.source}}};var et,at,tt;ge.parameters={...ge.parameters,docs:{...(et=ge.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    categories: ["SolarCells"],
    yAxisWidth: 65,
    customTooltip: (props: TooltipProps) => {
      const {
        payload,
        active,
        label
      } = props;
      if (!active || !payload || payload.length === 0) return null;
      return <div className="w-56 rounded-md border bg-white p-2 text-sm shadow-sm">
          <div className="flex flex-1 space-x-2.5">
            <div className={\`flex w-1.5 flex-col bg-\${payload[0].color}-500 rounded\`} />
            <div className="w-full">
              <p className="font-medium text-gray-900">{label}</p>
              <div className="flex items-center justify-between space-x-8">
                <p className="whitespace-nowrap text-right text-gray-700">
                  {payload[0].category}
                </p>
                <p className="whitespace-nowrap text-right font-medium text-gray-900">
                  {payload[0].value}
                </p>
              </div>
            </div>
          </div>
        </div>;
    }
  }
}`,...(tt=(at=ge.parameters)==null?void 0:at.docs)==null?void 0:tt.source}}};const ar=["Default","DefaultNegative","WithValueFormatter","WithAxisLabels","WithMinValue","WithMinAndMaxValue","AllColors","WithLegendLeft","WithLegendCenter","WithLegendSlider","ShiftColors","WithStartEndOnly","WithNoAxis","WithNoGridlines","WithNoLegend","WithNoTooltip","WithOnValueChange","WithTooltipCallback","WithLargeTickGap","WithBarCategoryGap","WithLayoutVertical","WithTypePercent","WithTypePercentVertical","Stacked","WithTypeStackedVertical","OneDataValue","CustomTooltip"];export{H as AllColors,ge as CustomTooltip,I as Default,M as DefaultNegative,me as OneDataValue,Q as ShiftColors,ue as Stacked,$ as WithAxisLabels,ie as WithBarCategoryGap,oe as WithLargeTickGap,le as WithLayoutVertical,_ as WithLegendCenter,X as WithLegendLeft,U as WithLegendSlider,K as WithMinAndMaxValue,Y as WithMinValue,ee as WithNoAxis,ae as WithNoGridlines,te as WithNoLegend,re as WithNoTooltip,se as WithOnValueChange,Z as WithStartEndOnly,ne as WithTooltipCallback,ce as WithTypePercent,de as WithTypePercentVertical,pe as WithTypeStackedVertical,z as WithValueFormatter,ar as __namedExportsOrder,er as default};
