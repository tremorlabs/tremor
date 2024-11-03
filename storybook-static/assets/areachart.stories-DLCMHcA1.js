import{j as e}from"./jsx-runtime-CfatFE5O.js";import{R as i}from"./index-ClcD9ViR.js";import{L as xr}from"./Label-DAouQbGm.js";import{S as yr}from"./Switch-RRnFbcgf.js";import{b as vr,r as kr}from"./index-BWmfHM-C.js";import{C as Cr,u as wr}from"./useOnWindowResize-V8MZeDGR.js";import{c as Sr,g as E,A as rr}from"./chartColors-CTMckKCA.js";import{c}from"./cx-CYgzbKIn.js";import{X as br,Y as Ar,g as Tr}from"./getYAxisDomain-G3OsYyu1.js";import{h as we}from"./hasOnlyOneValueForKey-CE3xIvgW.js";import{R as Nr,p as Le,T as jr,q as Lr,D as We}from"./generateCategoricalChart-DR9uWRoX.js";import{A as Wr}from"./AreaChart-iRocy0Pi.js";import{A as Gr}from"./Area-DJv05xvA.js";import{L as Fr}from"./Line-BEyJVF29.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BmTwYRFB.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./index-ClVxAquS.js";import"./index-D-jls2fw.js";import"./index-sY83p_TZ.js";import"./index-DSWkTB7Z.js";import"./index-CF-iJ_jy.js";import"./focusRing-49zpLVVu.js";import"./tiny-invariant-CopsF_GD.js";const Br=({name:o,color:s,onClick:n,activeLegend:u})=>{const m=!!n;return e.jsxs("li",{className:c("group inline-flex flex-nowrap items-center gap-1.5 whitespace-nowrap rounded px-2 py-1 transition",m?"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800":"cursor-default"),onClick:x=>{x.stopPropagation(),n==null||n(o,s)},children:[e.jsx("span",{className:c("h-[3px] w-3.5 shrink-0 rounded-full",E(s,"bg"),u&&u!==o?"opacity-40":"opacity-100"),"aria-hidden":!0}),e.jsx("p",{className:c("truncate whitespace-nowrap text-xs","text-gray-700 dark:text-gray-300",m&&"group-hover:text-gray-900 dark:group-hover:text-gray-50",u&&u!==o?"opacity-40":"opacity-100"),children:o})]})},Ge=({icon:o,onClick:s,disabled:n})=>{const u=o,[m,x]=i.useState(!1),h=i.useRef(null);return i.useEffect(()=>(m?h.current=setInterval(()=>{s==null||s()},300):clearInterval(h.current),()=>clearInterval(h.current)),[m,s]),i.useEffect(()=>{n&&(clearInterval(h.current),x(!1))},[n]),e.jsx("button",{type:"button",className:c("group inline-flex size-5 items-center truncate rounded transition",n?"cursor-not-allowed text-gray-400 dark:text-gray-600":"cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50"),disabled:n,onClick:d=>{d.stopPropagation(),s==null||s()},onMouseDown:d=>{d.stopPropagation(),x(!0)},onMouseUp:d=>{d.stopPropagation(),x(!1)},children:e.jsx(u,{className:"size-full","aria-hidden":"true"})})},tr=i.forwardRef((o,s)=>{const{categories:n,colors:u=rr,className:m,onClickLegendItem:x,activeLegend:h,enableLegendSlider:d=!1,...b}=o,g=i.useRef(null),A=i.useRef(null),[l,T]=i.useState(null),[w,W]=i.useState(null),q=i.useRef(null),G=i.useCallback(()=>{const r=g==null?void 0:g.current;if(!r)return;const t=r.scrollLeft>0,j=r.scrollWidth-r.clientWidth>r.scrollLeft;T({left:t,right:j})},[T]),N=i.useCallback(r=>{const t=g==null?void 0:g.current,j=A==null?void 0:A.current,O=(j==null?void 0:j.clientWidth)??0,F=(t==null?void 0:t.clientWidth)??0;t&&d&&(t.scrollTo({left:r==="left"?t.scrollLeft-F+O:t.scrollLeft+F-O,behavior:"smooth"}),setTimeout(()=>{G()},400))},[d,G]);i.useEffect(()=>{const r=t=>{t==="ArrowLeft"?N("left"):t==="ArrowRight"&&N("right")};return w?(r(w),q.current=setInterval(()=>{r(w)},300)):clearInterval(q.current),()=>clearInterval(q.current)},[w,N]);const R=r=>{r.stopPropagation(),(r.key==="ArrowLeft"||r.key==="ArrowRight")&&(r.preventDefault(),W(r.key))},P=r=>{r.stopPropagation(),W(null)};return i.useEffect(()=>{const r=g==null?void 0:g.current;return d&&(G(),r==null||r.addEventListener("keydown",R),r==null||r.addEventListener("keyup",P)),()=>{r==null||r.removeEventListener("keydown",R),r==null||r.removeEventListener("keyup",P)}},[G,d]),e.jsxs("ol",{ref:s,className:c("relative overflow-hidden",m),...b,children:[e.jsx("div",{ref:g,tabIndex:0,className:c("flex h-full",d?l!=null&&l.right||l!=null&&l.left?"snap-mandatory items-center overflow-auto pl-4 pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden":"":"flex-wrap"),children:n.map((r,t)=>e.jsx(Br,{name:r,color:u[t],onClick:x,activeLegend:h},`item-${t}`))}),d&&(l!=null&&l.right||l!=null&&l.left)?e.jsx(e.Fragment,{children:e.jsxs("div",{className:c("absolute bottom-0 right-0 top-0 flex h-full items-center justify-center pr-1","bg-white dark:bg-gray-950"),children:[e.jsx(Ge,{icon:vr,onClick:()=>{W(null),N("left")},disabled:!(l!=null&&l.left)}),e.jsx(Ge,{icon:kr,onClick:()=>{W(null),N("right")},disabled:!(l!=null&&l.right)})]})}):null]})});tr.displayName="Legend";const Er=({payload:o},s,n,u,m,x,h,d)=>{const b=i.useRef(null);wr(()=>{var T;n((w=>w?Number(w)+15:60)((T=b.current)==null?void 0:T.clientHeight))});const g=o.filter(l=>l.type!=="none"),A=h==="left"&&d?d-8:0;return e.jsx("div",{ref:b,style:{paddingLeft:A},className:c("flex items-center",{"justify-center":h==="center"},{"justify-start":h==="left"},{"justify-end":h==="right"}),children:e.jsx(tr,{categories:g.map(l=>l.value),colors:g.map(l=>s.get(l.value)),onClickLegendItem:m,activeLegend:u,enableLegendSlider:x})})},qr=({active:o,payload:s,label:n,valueFormatter:u})=>o&&s&&s.length?e.jsxs("div",{className:c("rounded-md border text-sm shadow-md","border-gray-200 dark:border-gray-800","bg-white dark:bg-gray-950"),children:[e.jsx("div",{className:c("border-b border-inherit px-4 py-2"),children:e.jsx("p",{className:c("font-medium","text-gray-900 dark:text-gray-50"),children:n})}),e.jsx("div",{className:c("space-y-1 px-4 py-2"),children:s.map(({value:m,category:x,color:h},d)=>e.jsxs("div",{className:"flex items-center justify-between space-x-8",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{"aria-hidden":"true",className:c("h-[3px] w-3.5 shrink-0 rounded-full",E(h,"bg"))}),e.jsx("p",{className:c("whitespace-nowrap text-right","text-gray-700 dark:text-gray-300"),children:x})]}),e.jsx("p",{className:c("whitespace-nowrap text-right font-medium tabular-nums","text-gray-900 dark:text-gray-50"),children:u(m)})]},`id-${d}`))})]}):null,L=i.forwardRef((o,s)=>{const{data:n=[],categories:u=[],index:m,colors:x=rr,valueFormatter:h=a=>a.toString(),startEndOnly:d=!1,showXAxis:b=!0,showYAxis:g=!0,showGridLines:A=!0,yAxisWidth:l=56,intervalType:T="equidistantPreserveStart",showTooltip:w=!0,showLegend:W=!0,autoMinValue:q=!1,minValue:G,maxValue:N,allowDecimals:R=!0,connectNulls:P=!1,className:r,onValueChange:t,enableLegendSlider:j=!1,tickGap:O=5,xAxisLabel:F,yAxisLabel:J,type:I="default",legendPosition:sr="right",fill:nr="gradient",tooltipCallback:Se,customTooltip:or,...lr}=o,be=or,Ae=!b&&!g||d&&!g?0:20,[ir,cr]=i.useState(60),[p,K]=i.useState(void 0),[C,V]=i.useState(void 0),B=Sr(u,x),dr=Tr(q,G,N),M=!!t,ur=I==="stacked"||I==="percent",pr=i.useId(),Te=i.useRef(void 0),Ne=i.useRef(void 0),mr=({fillType:a,activeDot:y,activeLegend:f,category:k})=>{const v=y||f&&f!==k?.1:.3;switch(a){case"none":return e.jsx("stop",{stopColor:"currentColor",stopOpacity:0});case"gradient":return e.jsxs(e.Fragment,{children:[e.jsx("stop",{offset:"5%",stopColor:"currentColor",stopOpacity:v}),e.jsx("stop",{offset:"95%",stopColor:"currentColor",stopOpacity:0})]});case"solid":default:return e.jsx("stop",{stopColor:"currentColor",stopOpacity:v})}};function gr(a){return`${(a*100).toFixed(0)}%`}function hr(a,y){y.stopPropagation(),M&&(a.index===(p==null?void 0:p.index)&&a.dataKey===(p==null?void 0:p.dataKey)||we(n,a.dataKey)&&C&&C===a.dataKey?(V(void 0),K(void 0),t==null||t(null)):(V(a.dataKey),K({index:a.index,dataKey:a.dataKey}),t==null||t({eventType:"dot",categoryClicked:a.dataKey,...a.payload})))}function je(a){M&&(a===C&&!p||we(n,a)&&p&&p.dataKey===a?(V(void 0),t==null||t(null)):(V(a),t==null||t({eventType:"category",categoryClicked:a})),K(void 0))}return e.jsx("div",{ref:s,className:c("h-80 w-full",r),"tremor-id":"tremor-raw",...lr,children:e.jsx(Nr,{children:e.jsxs(Wr,{data:n,onClick:M&&(C||p)?()=>{K(void 0),V(void 0),t==null||t(null)}:void 0,margin:{bottom:F?30:void 0,left:J?20:void 0,right:J?5:void 0,top:5},stackOffset:I==="percent"?"expand":void 0,children:[A?e.jsx(Cr,{className:c("stroke-gray-200 stroke-1 dark:stroke-gray-800"),horizontal:!0,vertical:!1}):null,e.jsx(br,{padding:{left:Ae,right:Ae},hide:!b,dataKey:m,interval:d?"preserveStartEnd":T,tick:{transform:"translate(0, 6)"},ticks:d?[n[0][m],n[n.length-1][m]]:void 0,fill:"",stroke:"",className:c("text-xs","fill-gray-500 dark:fill-gray-500"),tickLine:!1,axisLine:!1,minTickGap:O,children:F&&e.jsx(Le,{position:"insideBottom",offset:-20,className:"fill-gray-800 text-sm font-medium dark:fill-gray-200",children:F})}),e.jsx(Ar,{width:l,hide:!g,axisLine:!1,tickLine:!1,type:"number",domain:dr,tick:{transform:"translate(-3, 0)"},fill:"",stroke:"",className:c("text-xs","fill-gray-500 dark:fill-gray-500"),tickFormatter:I==="percent"?gr:h,allowDecimals:R,children:J&&e.jsx(Le,{position:"insideLeft",style:{textAnchor:"middle"},angle:-90,offset:-15,className:"fill-gray-800 text-sm font-medium dark:fill-gray-200",children:J})}),e.jsx(jr,{wrapperStyle:{outline:"none"},isAnimationActive:!0,animationDuration:100,cursor:{stroke:"#d1d5db",strokeWidth:1},offset:20,position:{y:0},content:({active:a,payload:y,label:f})=>{const k=y?y.map(v=>({category:v.dataKey,value:v.value,index:v.payload[m],color:B.get(v.dataKey),type:v.type,payload:v.payload})):[];return Se&&(a!==Te.current||f!==Ne.current)&&(Se({active:a,payload:k,label:f}),Te.current=a,Ne.current=f),w&&a?be?e.jsx(be,{active:a,payload:k,label:f}):e.jsx(qr,{active:a,payload:k,label:f,valueFormatter:h}):null}}),W?e.jsx(Lr,{verticalAlign:"top",height:ir,content:({payload:a})=>Er({payload:a},B,cr,C,M?y=>je(y):void 0,j,sr,l)}):null,u.map(a=>{const y=`${pr}-${a.replace(/[^a-zA-Z0-9]/g,"")}`;return e.jsxs(i.Fragment,{children:[e.jsx("defs",{children:e.jsx("linearGradient",{className:c(E(B.get(a),"text")),id:y,x1:"0",y1:"0",x2:"0",y2:"1",children:mr({fillType:nr,activeDot:p,activeLegend:C,category:a})},a)},a),e.jsx(Gr,{className:c(E(B.get(a),"stroke")),strokeOpacity:p||C&&C!==a?.3:1,activeDot:f=>{const{cx:k,cy:v,stroke:xe,strokeLinecap:ye,strokeLinejoin:ve,strokeWidth:ke,dataKey:Ce}=f;return e.jsx(We,{className:c("stroke-white dark:stroke-gray-950",t?"cursor-pointer":"",E(B.get(Ce),"fill")),cx:k,cy:v,r:5,fill:"",stroke:xe,strokeLinecap:ye,strokeLinejoin:ve,strokeWidth:ke,onClick:($,fr)=>hr(f,fr)})},dot:f=>{const{stroke:k,strokeLinecap:v,strokeLinejoin:xe,strokeWidth:ye,cx:ve,cy:ke,dataKey:Ce,index:$}=f;return we(n,a)&&!(p||C&&C!==a)||(p==null?void 0:p.index)===$&&(p==null?void 0:p.dataKey)===a?e.jsx(We,{cx:ve,cy:ke,r:5,stroke:k,fill:"",strokeLinecap:v,strokeLinejoin:xe,strokeWidth:ye,className:c("stroke-white dark:stroke-gray-950",t?"cursor-pointer":"",E(B.get(Ce),"fill"))},$):e.jsx(i.Fragment,{},$)},name:a,type:"linear",dataKey:a,stroke:"",strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",isAnimationActive:!1,connectNulls:P,stackId:ur?"stack":void 0,fill:`url(#${y})`},a)]},a)}),t?u.map(a=>e.jsx(Fr,{className:c("cursor-pointer"),strokeOpacity:0,name:a,type:"linear",dataKey:a,stroke:"transparent",fill:"transparent",legendType:"none",tooltipType:"none",strokeWidth:12,connectNulls:P,onClick:(y,f)=>{f.stopPropagation();const{name:k}=y;je(k)}},a)):null]})})})});L.displayName="AreaChart";L.__docgenInfo={description:"",methods:[],displayName:"AreaChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}],raw:"Record<string, any>[]"},description:""},index:{required:!0,tsType:{name:"string"},description:""},categories:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"AvailableChartColorsKeys[]"},description:""},valueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:""},startEndOnly:{required:!1,tsType:{name:"boolean"},description:""},showXAxis:{required:!1,tsType:{name:"boolean"},description:""},showYAxis:{required:!1,tsType:{name:"boolean"},description:""},showGridLines:{required:!1,tsType:{name:"boolean"},description:""},yAxisWidth:{required:!1,tsType:{name:"number"},description:""},intervalType:{required:!1,tsType:{name:"union",raw:'"preserveStartEnd" | "equidistantPreserveStart"',elements:[{name:"literal",value:'"preserveStartEnd"'},{name:"literal",value:'"equidistantPreserveStart"'}]},description:""},showTooltip:{required:!1,tsType:{name:"boolean"},description:""},showLegend:{required:!1,tsType:{name:"boolean"},description:""},autoMinValue:{required:!1,tsType:{name:"boolean"},description:""},minValue:{required:!1,tsType:{name:"number"},description:""},maxValue:{required:!1,tsType:{name:"number"},description:""},allowDecimals:{required:!1,tsType:{name:"boolean"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: AreaChartEventProps) => void",signature:{arguments:[{type:{name:"union",raw:"BaseEventProps | null | undefined",elements:[{name:"signature",type:"object",raw:`{
  eventType: "dot" | "category"
  categoryClicked: string
  [key: string]: number | string
}`,signature:{properties:[{key:"eventType",value:{name:"union",raw:'"dot" | "category"',elements:[{name:"literal",value:'"dot"'},{name:"literal",value:'"category"'}],required:!0}},{key:"categoryClicked",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}},{name:"null"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},enableLegendSlider:{required:!1,tsType:{name:"boolean"},description:""},tickGap:{required:!1,tsType:{name:"number"},description:""},connectNulls:{required:!1,tsType:{name:"boolean"},description:""},xAxisLabel:{required:!1,tsType:{name:"string"},description:""},yAxisLabel:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "stacked" | "percent"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"stacked"'},{name:"literal",value:'"percent"'}]},description:""},legendPosition:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:""},fill:{required:!1,tsType:{name:"union",raw:'"gradient" | "solid" | "none"',elements:[{name:"literal",value:'"gradient"'},{name:"literal",value:'"solid"'},{name:"literal",value:'"none"'}]},description:""},tooltipCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(tooltipCallbackContent: TooltipProps) => void",signature:{arguments:[{type:{name:"Pick",elements:[{name:"ChartTooltipProps"},{name:"union",raw:'"active" | "payload" | "label"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"payload"'},{name:"literal",value:'"label"'}]}],raw:'Pick<ChartTooltipProps, "active" | "payload" | "label">'},name:"tooltipCallbackContent"}],return:{name:"void"}}},description:""},customTooltip:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<TooltipProps>",elements:[{name:"Pick",elements:[{name:"ChartTooltipProps"},{name:"union",raw:'"active" | "payload" | "label"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"payload"'},{name:"literal",value:'"label"'}]}],raw:'Pick<ChartTooltipProps, "active" | "payload" | "label">'}]},description:""}}};const S=[{date:"Jan 23",SolarCells:2890,Glass:2338,Encapsulant:1450,BackSheet:1900,Frame:1600,JunctionBox:1800,Adhesive:1700},{date:"Feb 23",SolarCells:2756,Glass:2103,Encapsulant:1200,BackSheet:1850,Frame:1700,JunctionBox:1750,Adhesive:1650},{date:"Mar 23",SolarCells:3322,Glass:2194,Encapsulant:1300,BackSheet:2200,Frame:1400,JunctionBox:2e3,Adhesive:800},{date:"Apr 23",SolarCells:3470,Glass:2108,Encapsulant:1400,BackSheet:1600,Frame:1800,JunctionBox:1900,Adhesive:-1950},{date:"May 23",SolarCells:3475,Glass:1812,Encapsulant:1550,BackSheet:2300,Frame:1450,JunctionBox:2200,Adhesive:-1600},{date:"Jun 23",SolarCells:3129,Glass:1726,Encapsulant:1350,BackSheet:2100,Frame:1750,JunctionBox:2050,Adhesive:-1700},{date:"Jul 23",SolarCells:3490,Glass:1982,Encapsulant:1450,BackSheet:1950,Frame:1500,JunctionBox:2300,Adhesive:-1800},{date:"Aug 23",SolarCells:2903,Glass:2012,Encapsulant:1250,BackSheet:1700,Frame:1850,JunctionBox:2150,Adhesive:-1900},{date:"Sep 23",SolarCells:2643,Glass:2342,Encapsulant:1400,BackSheet:1600,Frame:1500,JunctionBox:2e3,Adhesive:-3750},{date:"Oct 23",SolarCells:2837,Glass:2473,Encapsulant:1350,BackSheet:1850,Frame:1900,JunctionBox:2100,Adhesive:-2600},{date:"Nov 23",SolarCells:2954,Glass:3848,Encapsulant:1200,BackSheet:2e3,Frame:1750,JunctionBox:2400,Adhesive:-2950},{date:"Dec 23",SolarCells:3239,Glass:3736,Encapsulant:1550,BackSheet:1700,Frame:1600,JunctionBox:2250,Adhesive:-3800}],lt={title:"visualization/AreaChart",component:L,args:{data:S,index:"date",categories:["SolarCells","Glass"]}},D={render:()=>e.jsx(L,{"data-testid":"area-chart",data:S,index:"date",categories:["SolarCells","Glass"]})},Y={args:{categories:["SolarCells","Adhesive"]}},H={args:{valueFormatter:o=>`$${Intl.NumberFormat("us").format(o).toString()}`}},z={args:{xAxisLabel:"Month of Year",yAxisLabel:"Revenue"}},X={args:{autoMinValue:!0}},_={args:{maxValue:5e3,minValue:-3e3}},U={args:{data:S,index:"date",categories:["SolarCells","Glass","Encapsulant","BackSheet","Frame","JunctionBox","Adhesive"]}},Z={args:{legendPosition:"left"}},Q={args:{legendPosition:"center"}},ee={args:{className:"max-w-md",data:S,index:"date",categories:["SolarCells","Glass","Encapsulant","BackSheet","Frame","JunctionBox","Adhesive"],enableLegendSlider:!0,onValueChange:o=>console.log(o)}},ae={args:{colors:["amber","cyan"]}},re={args:{data:S.map((o,s)=>{let n=o.Glass;return s>5&&s<8&&(n=null),{date:o.date,Glass:n}}),index:"date",categories:["SolarCells","Glass"],colors:["amber","cyan"],connectNulls:!1}},te={args:{startEndOnly:!0}},se={args:{showXAxis:!1,showYAxis:!1}},ne={args:{showGridLines:!1}},oe={args:{showLegend:!1}},le={args:{showTooltip:!1}},ie={args:{onValueChange:o=>console.log(o)}},ce={render:()=>{const[o,s]=i.useState(null),[n,u]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(xr,{htmlFor:"a",children:"showTooltip"}),e.jsx(yr,{id:"a",checked:n,onCheckedChange:u})]}),e.jsx(L,{data:S,index:"date",categories:["SolarCells","Glass"],tooltipCallback:m=>s(m),showTooltip:n}),e.jsx("pre",{children:JSON.stringify(o,null,2)})]})}},de={args:{tickGap:300}},ue={render:()=>e.jsx(L,{data:S,index:"date",categories:["SolarCells","Glass"],type:"percent"})},pe={render:()=>e.jsx(L,{data:S,index:"date",categories:["SolarCells","Glass"],type:"stacked"})},me={args:{data:S.slice(0,1),index:"date",categories:["SolarCells","Glass"],onValueChange:o=>console.log(o)}},ge={args:{fill:"solid"}},he={args:{fill:"none"}},fe={args:{categories:["SolarCells"],yAxisWidth:65,customTooltip:o=>{const{payload:s,active:n,label:u}=o;return!n||!s||s.length===0?null:e.jsx("div",{className:"w-56 rounded-md border bg-white p-2 text-sm shadow-sm",children:e.jsxs("div",{className:"flex flex-1 space-x-2.5",children:[e.jsx("div",{className:`flex w-1.5 flex-col bg-${s[0].color}-500 rounded`}),e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"font-medium text-gray-900",children:u}),e.jsxs("div",{className:"flex items-center justify-between space-x-8",children:[e.jsx("p",{className:"whitespace-nowrap text-right text-gray-700",children:s[0].category}),e.jsx("p",{className:"whitespace-nowrap text-right font-medium text-gray-900",children:s[0].value})]})]})]})})}}};var Fe,Be,Ee;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <AreaChart data-testid="area-chart" data={chartdata} index="date" categories={["SolarCells", "Glass"]} />
}`,...(Ee=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var qe,Pe,Ve;Y.parameters={...Y.parameters,docs:{...(qe=Y.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    categories: ["SolarCells", "Adhesive"]
  }
}`,...(Ve=(Pe=Y.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var Re,Oe,Je;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    valueFormatter: v => \`$\${Intl.NumberFormat("us").format(v).toString()}\`
  }
}`,...(Je=(Oe=H.parameters)==null?void 0:Oe.docs)==null?void 0:Je.source}}};var Ie,Ke,Me;z.parameters={...z.parameters,docs:{...(Ie=z.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    xAxisLabel: "Month of Year",
    yAxisLabel: "Revenue"
  }
}`,...(Me=(Ke=z.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var $e,De,Ye;X.parameters={...X.parameters,docs:{...($e=X.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    autoMinValue: true
  }
}`,...(Ye=(De=X.parameters)==null?void 0:De.docs)==null?void 0:Ye.source}}};var He,ze,Xe;_.parameters={..._.parameters,docs:{...(He=_.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    maxValue: 5000,
    minValue: -3000
  }
}`,...(Xe=(ze=_.parameters)==null?void 0:ze.docs)==null?void 0:Xe.source}}};var _e,Ue,Ze;U.parameters={...U.parameters,docs:{...(_e=U.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    data: chartdata,
    index: "date",
    categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"]
  }
}`,...(Ze=(Ue=U.parameters)==null?void 0:Ue.docs)==null?void 0:Ze.source}}};var Qe,ea,aa;Z.parameters={...Z.parameters,docs:{...(Qe=Z.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    legendPosition: "left"
  }
}`,...(aa=(ea=Z.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ra,ta,sa;Q.parameters={...Q.parameters,docs:{...(ra=Q.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  args: {
    legendPosition: "center"
  }
}`,...(sa=(ta=Q.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};var na,oa,la;ee.parameters={...ee.parameters,docs:{...(na=ee.parameters)==null?void 0:na.docs,source:{originalSource:`{
  args: {
    className: "max-w-md",
    data: chartdata,
    index: "date",
    categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"],
    enableLegendSlider: true,
    onValueChange: v => console.log(v)
  }
}`,...(la=(oa=ee.parameters)==null?void 0:oa.docs)==null?void 0:la.source}}};var ia,ca,da;ae.parameters={...ae.parameters,docs:{...(ia=ae.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  args: {
    colors: ["amber", "cyan"]
  }
}`,...(da=(ca=ae.parameters)==null?void 0:ca.docs)==null?void 0:da.source}}};var ua,pa,ma;re.parameters={...re.parameters,docs:{...(ua=re.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  args: {
    data: chartdata.map((item, index): {
      date: string;
      Glass: number | null;
    } => {
      let glassValue: number | null = item.Glass;
      if (index > 5 && index < 8) {
        glassValue = null;
      }
      return {
        date: item.date,
        Glass: glassValue
      };
    }),
    index: "date",
    categories: ["SolarCells", "Glass"],
    colors: ["amber", "cyan"],
    connectNulls: false
  }
}`,...(ma=(pa=re.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ga,ha,fa;te.parameters={...te.parameters,docs:{...(ga=te.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  args: {
    startEndOnly: true
  }
}`,...(fa=(ha=te.parameters)==null?void 0:ha.docs)==null?void 0:fa.source}}};var xa,ya,va;se.parameters={...se.parameters,docs:{...(xa=se.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  args: {
    showXAxis: false,
    showYAxis: false
  }
}`,...(va=(ya=se.parameters)==null?void 0:ya.docs)==null?void 0:va.source}}};var ka,Ca,wa;ne.parameters={...ne.parameters,docs:{...(ka=ne.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  args: {
    showGridLines: false
  }
}`,...(wa=(Ca=ne.parameters)==null?void 0:Ca.docs)==null?void 0:wa.source}}};var Sa,ba,Aa;oe.parameters={...oe.parameters,docs:{...(Sa=oe.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  args: {
    showLegend: false
  }
}`,...(Aa=(ba=oe.parameters)==null?void 0:ba.docs)==null?void 0:Aa.source}}};var Ta,Na,ja;le.parameters={...le.parameters,docs:{...(Ta=le.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  args: {
    showTooltip: false
  }
}`,...(ja=(Na=le.parameters)==null?void 0:Na.docs)==null?void 0:ja.source}}};var La,Wa,Ga;ie.parameters={...ie.parameters,docs:{...(La=ie.parameters)==null?void 0:La.docs,source:{originalSource:`{
  args: {
    onValueChange: v => console.log(v)
  }
}`,...(Ga=(Wa=ie.parameters)==null?void 0:Wa.docs)==null?void 0:Ga.source}}};var Fa,Ba,Ea;ce.parameters={...ce.parameters,docs:{...(Fa=ce.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
  render: () => {
    const [callback, setCallBack] = React.useState<TooltipProps | null>(null);
    const [checked, setChecked] = React.useState(true);
    return <>
        <div className="flex items-center gap-3">
          <Label htmlFor="a">showTooltip</Label>
          <Switch id="a" checked={checked} onCheckedChange={setChecked} />
        </div>

        <AreaChart data={chartdata} index="date" categories={["SolarCells", "Glass"]} tooltipCallback={cooltipContent => setCallBack(cooltipContent)} showTooltip={checked} />
        <pre>{JSON.stringify(callback, null, 2)}</pre>
      </>;
  }
}`,...(Ea=(Ba=ce.parameters)==null?void 0:Ba.docs)==null?void 0:Ea.source}}};var qa,Pa,Va;de.parameters={...de.parameters,docs:{...(qa=de.parameters)==null?void 0:qa.docs,source:{originalSource:`{
  args: {
    tickGap: 300
  }
}`,...(Va=(Pa=de.parameters)==null?void 0:Pa.docs)==null?void 0:Va.source}}};var Ra,Oa,Ja;ue.parameters={...ue.parameters,docs:{...(Ra=ue.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  render: () => <AreaChart data={chartdata} index="date" categories={["SolarCells", "Glass"]} type="percent" />
}`,...(Ja=(Oa=ue.parameters)==null?void 0:Oa.docs)==null?void 0:Ja.source}}};var Ia,Ka,Ma;pe.parameters={...pe.parameters,docs:{...(Ia=pe.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  render: () => <AreaChart data={chartdata} index="date" categories={["SolarCells", "Glass"]} type="stacked" />
}`,...(Ma=(Ka=pe.parameters)==null?void 0:Ka.docs)==null?void 0:Ma.source}}};var $a,Da,Ya;me.parameters={...me.parameters,docs:{...($a=me.parameters)==null?void 0:$a.docs,source:{originalSource:`{
  args: {
    data: chartdata.slice(0, 1),
    index: "date",
    categories: ["SolarCells", "Glass"],
    onValueChange: v => console.log(v)
  }
}`,...(Ya=(Da=me.parameters)==null?void 0:Da.docs)==null?void 0:Ya.source}}};var Ha,za,Xa;ge.parameters={...ge.parameters,docs:{...(Ha=ge.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  args: {
    fill: "solid"
  }
}`,...(Xa=(za=ge.parameters)==null?void 0:za.docs)==null?void 0:Xa.source}}};var _a,Ua,Za;he.parameters={...he.parameters,docs:{...(_a=he.parameters)==null?void 0:_a.docs,source:{originalSource:`{
  args: {
    fill: "none"
  }
}`,...(Za=(Ua=he.parameters)==null?void 0:Ua.docs)==null?void 0:Za.source}}};var Qa,er,ar;fe.parameters={...fe.parameters,docs:{...(Qa=fe.parameters)==null?void 0:Qa.docs,source:{originalSource:`{
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
}`,...(ar=(er=fe.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};const it=["Default","DefaultNegative","WithValueFormatter","WithAxisLabels","WithMinValue","WithMinAndMaxValue","AllColors","WithLegendLeft","WithLegendCenter","WithLegendSlider","ShiftColors","WithConnectNullsFalse","WithStartEndOnly","WithNoAxis","WithNoGridlines","WithNoLegend","WithNoTooltip","WithOnValueChange","WithTooltipCallback","WithLargeTickGap","WithTypePercent","WithTypeStacked","OneDataValue","WithFillSolid","WithFillNone","CustomTooltip"];export{U as AllColors,fe as CustomTooltip,D as Default,Y as DefaultNegative,me as OneDataValue,ae as ShiftColors,z as WithAxisLabels,re as WithConnectNullsFalse,he as WithFillNone,ge as WithFillSolid,de as WithLargeTickGap,Q as WithLegendCenter,Z as WithLegendLeft,ee as WithLegendSlider,_ as WithMinAndMaxValue,X as WithMinValue,se as WithNoAxis,ne as WithNoGridlines,oe as WithNoLegend,le as WithNoTooltip,ie as WithOnValueChange,te as WithStartEndOnly,ce as WithTooltipCallback,ue as WithTypePercent,pe as WithTypeStacked,H as WithValueFormatter,it as __namedExportsOrder,lt as default};
