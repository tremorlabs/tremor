import{j as e}from"./jsx-runtime-CfatFE5O.js";import{R as i}from"./index-ClcD9ViR.js";import{L as za}from"./Label-DAouQbGm.js";import{S as _a}from"./Switch-RRnFbcgf.js";import{b as Ua,r as Qa}from"./index-BWmfHM-C.js";import{C as Za,u as er}from"./useOnWindowResize-V8MZeDGR.js";import{c as ar,g as P,A as Ra}from"./chartColors-CTMckKCA.js";import{c}from"./cx-CYgzbKIn.js";import{X as rr,Y as tr,g as sr}from"./getYAxisDomain-G3OsYyu1.js";import{h as fe}from"./hasOnlyOneValueForKey-CE3xIvgW.js";import{R as nr,p as we,T as or,q as lr,D as Se}from"./generateCategoricalChart-DR9uWRoX.js";import{L as ir}from"./LineChart-BreHMu7Q.js";import{L as Le}from"./Line-BEyJVF29.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BmTwYRFB.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./index-ClVxAquS.js";import"./index-D-jls2fw.js";import"./index-sY83p_TZ.js";import"./index-DSWkTB7Z.js";import"./index-CF-iJ_jy.js";import"./focusRing-49zpLVVu.js";import"./tiny-invariant-CopsF_GD.js";const cr=({name:o,color:s,onClick:n,activeLegend:u})=>{const p=!!n;return e.jsxs("li",{className:c("group inline-flex flex-nowrap items-center gap-1.5 whitespace-nowrap rounded px-2 py-1 transition",p?"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800":"cursor-default"),onClick:f=>{f.stopPropagation(),n==null||n(o,s)},children:[e.jsx("span",{className:c("h-[3px] w-3.5 shrink-0 rounded-full",P(s,"bg"),u&&u!==o?"opacity-40":"opacity-100"),"aria-hidden":!0}),e.jsx("p",{className:c("truncate whitespace-nowrap text-xs","text-gray-700 dark:text-gray-300",p&&"group-hover:text-gray-900 dark:group-hover:text-gray-50",u&&u!==o?"opacity-40":"opacity-100"),children:o})]})},Ne=({icon:o,onClick:s,disabled:n})=>{const u=o,[p,f]=i.useState(!1),h=i.useRef(null);return i.useEffect(()=>(p?h.current=setInterval(()=>{s==null||s()},300):clearInterval(h.current),()=>clearInterval(h.current)),[p,s]),i.useEffect(()=>{n&&(clearInterval(h.current),f(!1))},[n]),e.jsx("button",{type:"button",className:c("group inline-flex size-5 items-center truncate rounded transition",n?"cursor-not-allowed text-gray-400 dark:text-gray-600":"cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-50"),disabled:n,onClick:d=>{d.stopPropagation(),s==null||s()},onMouseDown:d=>{d.stopPropagation(),f(!0)},onMouseUp:d=>{d.stopPropagation(),f(!1)},children:e.jsx(u,{className:"size-full","aria-hidden":"true"})})},Ja=i.forwardRef((o,s)=>{const{categories:n,colors:u=Ra,className:p,onClickLegendItem:f,activeLegend:h,enableLegendSlider:d=!1,...k}=o,g=i.useRef(null),S=i.useRef(null),[l,L]=i.useState(null),[C,j]=i.useState(null),B=i.useRef(null),W=i.useCallback(()=>{const r=g==null?void 0:g.current;if(!r)return;const t=r.scrollLeft>0,T=r.scrollWidth-r.clientWidth>r.scrollLeft;L({left:t,right:T})},[L]),N=i.useCallback(r=>{const t=g==null?void 0:g.current,T=S==null?void 0:S.current,R=(T==null?void 0:T.clientWidth)??0,G=(t==null?void 0:t.clientWidth)??0;t&&d&&(t.scrollTo({left:r==="left"?t.scrollLeft-G+R:t.scrollLeft+G-R,behavior:"smooth"}),setTimeout(()=>{W()},400))},[d,W]);i.useEffect(()=>{const r=t=>{t==="ArrowLeft"?N("left"):t==="ArrowRight"&&N("right")};return C?(r(C),B.current=setInterval(()=>{r(C)},300)):clearInterval(B.current),()=>clearInterval(B.current)},[C,N]);const V=r=>{r.stopPropagation(),(r.key==="ArrowLeft"||r.key==="ArrowRight")&&(r.preventDefault(),j(r.key))},E=r=>{r.stopPropagation(),j(null)};return i.useEffect(()=>{const r=g==null?void 0:g.current;return d&&(W(),r==null||r.addEventListener("keydown",V),r==null||r.addEventListener("keyup",E)),()=>{r==null||r.removeEventListener("keydown",V),r==null||r.removeEventListener("keyup",E)}},[W,d]),e.jsxs("ol",{ref:s,className:c("relative overflow-hidden",p),...k,children:[e.jsx("div",{ref:g,tabIndex:0,className:c("flex h-full",d?l!=null&&l.right||l!=null&&l.left?"snap-mandatory items-center overflow-auto pl-4 pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden":"":"flex-wrap"),children:n.map((r,t)=>e.jsx(cr,{name:r,color:u[t],onClick:f,activeLegend:h},`item-${t}`))}),d&&(l!=null&&l.right||l!=null&&l.left)?e.jsx(e.Fragment,{children:e.jsxs("div",{className:c("absolute bottom-0 right-0 top-0 flex h-full items-center justify-center pr-1","bg-white dark:bg-gray-950"),children:[e.jsx(Ne,{icon:Ua,onClick:()=>{j(null),N("left")},disabled:!(l!=null&&l.left)}),e.jsx(Ne,{icon:Qa,onClick:()=>{j(null),N("right")},disabled:!(l!=null&&l.right)})]})}):null]})});Ja.displayName="Legend";const dr=({payload:o},s,n,u,p,f,h,d)=>{const k=i.useRef(null);er(()=>{var L;n((C=>C?Number(C)+15:60)((L=k.current)==null?void 0:L.clientHeight))});const g=o.filter(l=>l.type!=="none"),S=h==="left"&&d?d-8:0;return e.jsx("div",{ref:k,style:{paddingLeft:S},className:c("flex items-center",{"justify-center":h==="center"},{"justify-start":h==="left"},{"justify-end":h==="right"}),children:e.jsx(Ja,{categories:g.map(l=>l.value),colors:g.map(l=>s.get(l.value)),onClickLegendItem:p,activeLegend:u,enableLegendSlider:f})})},ur=({active:o,payload:s,label:n,valueFormatter:u})=>{if(o&&s&&s.length){const p=s.filter(f=>f.type!=="none");return e.jsxs("div",{className:c("rounded-md border text-sm shadow-md","border-gray-200 dark:border-gray-800","bg-white dark:bg-gray-950"),children:[e.jsx("div",{className:c("border-b border-inherit px-4 py-2"),children:e.jsx("p",{className:c("font-medium","text-gray-900 dark:text-gray-50"),children:n})}),e.jsx("div",{className:c("space-y-1 px-4 py-2"),children:p.map(({value:f,category:h,color:d},k)=>e.jsxs("div",{className:"flex items-center justify-between space-x-8",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("span",{"aria-hidden":"true",className:c("h-[3px] w-3.5 shrink-0 rounded-full",P(d,"bg"))}),e.jsx("p",{className:c("whitespace-nowrap text-right","text-gray-700 dark:text-gray-300"),children:h})]}),e.jsx("p",{className:c("whitespace-nowrap text-right font-medium tabular-nums","text-gray-900 dark:text-gray-50"),children:u(f)})]},`id-${k}`))})]})}return null},I=i.forwardRef((o,s)=>{const{data:n=[],categories:u=[],index:p,colors:f=Ra,valueFormatter:h=a=>a.toString(),startEndOnly:d=!1,showXAxis:k=!0,showYAxis:g=!0,showGridLines:S=!0,yAxisWidth:l=56,intervalType:L="equidistantPreserveStart",showTooltip:C=!0,showLegend:j=!0,autoMinValue:B=!1,minValue:W,maxValue:N,allowDecimals:V=!0,connectNulls:E=!1,className:r,onValueChange:t,enableLegendSlider:T=!1,tickGap:R=5,xAxisLabel:G,yAxisLabel:J,legendPosition:Oa="right",tooltipCallback:xe,customTooltip:Ka,...Ma}=o,ye=Ka,ve=!k&&!g||d&&!g?0:20,[$a,Ya]=i.useState(60),[m,O]=i.useState(void 0),[b,F]=i.useState(void 0),q=ar(u,f),Da=sr(B,W,N),K=!!t,ke=i.useRef(void 0),Ce=i.useRef(void 0);function Ha(a,x){x.stopPropagation(),K&&(a.index===(m==null?void 0:m.index)&&a.dataKey===(m==null?void 0:m.dataKey)||fe(n,a.dataKey)&&b&&b===a.dataKey?(F(void 0),O(void 0),t==null||t(null)):(F(a.dataKey),O({index:a.index,dataKey:a.dataKey}),t==null||t({eventType:"dot",categoryClicked:a.dataKey,...a.payload})))}function be(a){K&&(a===b&&!m||fe(n,a)&&m&&m.dataKey===a?(F(void 0),t==null||t(null)):(F(a),t==null||t({eventType:"category",categoryClicked:a})),O(void 0))}return e.jsx("div",{ref:s,className:c("h-80 w-full",r),"tremor-id":"tremor-raw",...Ma,children:e.jsx(nr,{children:e.jsxs(ir,{data:n,onClick:K&&(b||m)?()=>{O(void 0),F(void 0),t==null||t(null)}:void 0,margin:{bottom:G?30:void 0,left:J?20:void 0,right:J?5:void 0,top:5},children:[S?e.jsx(Za,{className:c("stroke-gray-200 stroke-1 dark:stroke-gray-800"),horizontal:!0,vertical:!1}):null,e.jsx(rr,{padding:{left:ve,right:ve},hide:!k,dataKey:p,interval:d?"preserveStartEnd":L,tick:{transform:"translate(0, 6)"},ticks:d?[n[0][p],n[n.length-1][p]]:void 0,fill:"",stroke:"",className:c("text-xs","fill-gray-500 dark:fill-gray-500"),tickLine:!1,axisLine:!1,minTickGap:R,children:G&&e.jsx(we,{position:"insideBottom",offset:-20,className:"fill-gray-800 text-sm font-medium dark:fill-gray-200",children:G})}),e.jsx(tr,{width:l,hide:!g,axisLine:!1,tickLine:!1,type:"number",domain:Da,tick:{transform:"translate(-3, 0)"},fill:"",stroke:"",className:c("text-xs","fill-gray-500 dark:fill-gray-500"),tickFormatter:h,allowDecimals:V,children:J&&e.jsx(we,{position:"insideLeft",style:{textAnchor:"middle"},angle:-90,offset:-15,className:"fill-gray-800 text-sm font-medium dark:fill-gray-200",children:J})}),e.jsx(or,{wrapperStyle:{outline:"none"},isAnimationActive:!0,animationDuration:100,cursor:{stroke:"#d1d5db",strokeWidth:1},offset:20,position:{y:0},content:({active:a,payload:x,label:y})=>{const w=x?x.map(v=>({category:v.dataKey,value:v.value,index:v.payload[p],color:q.get(v.dataKey),type:v.type,payload:v.payload})):[];return xe&&(a!==ke.current||y!==Ce.current)&&(xe({active:a,payload:w,label:y}),ke.current=a,Ce.current=y),C&&a?ye?e.jsx(ye,{active:a,payload:w,label:y}):e.jsx(ur,{active:a,payload:w,label:y,valueFormatter:h}):null}}),j?e.jsx(lr,{verticalAlign:"top",height:$a,content:({payload:a})=>dr({payload:a},q,Ya,b,K?x=>be(x):void 0,T,Oa,l)}):null,u.map(a=>e.jsx(Le,{className:c(P(q.get(a),"stroke")),strokeOpacity:m||b&&b!==a?.3:1,activeDot:x=>{const{cx:y,cy:w,stroke:v,strokeLinecap:pe,strokeLinejoin:me,strokeWidth:ge,dataKey:he}=x;return e.jsx(Se,{className:c("stroke-white dark:stroke-gray-950",t?"cursor-pointer":"",P(q.get(he),"fill")),cx:y,cy:w,r:5,fill:"",stroke:v,strokeLinecap:pe,strokeLinejoin:me,strokeWidth:ge,onClick:(M,Xa)=>Ha(x,Xa)})},dot:x=>{const{stroke:y,strokeLinecap:w,strokeLinejoin:v,strokeWidth:pe,cx:me,cy:ge,dataKey:he,index:M}=x;return fe(n,a)&&!(m||b&&b!==a)||(m==null?void 0:m.index)===M&&(m==null?void 0:m.dataKey)===a?e.jsx(Se,{cx:me,cy:ge,r:5,stroke:y,fill:"",strokeLinecap:w,strokeLinejoin:v,strokeWidth:pe,className:c("stroke-white dark:stroke-gray-950",t?"cursor-pointer":"",P(q.get(he),"fill"))},M):e.jsx(i.Fragment,{},M)},name:a,type:"linear",dataKey:a,stroke:"",strokeWidth:2,strokeLinejoin:"round",strokeLinecap:"round",isAnimationActive:!1,connectNulls:E},a)),t?u.map(a=>e.jsx(Le,{className:c("cursor-pointer"),strokeOpacity:0,name:a,type:"linear",dataKey:a,stroke:"transparent",fill:"transparent",legendType:"none",tooltipType:"none",strokeWidth:12,connectNulls:E,onClick:(x,y)=>{y.stopPropagation();const{name:w}=x;be(w)}},a)):null]})})})});I.displayName="LineChart";I.__docgenInfo={description:"",methods:[],displayName:"LineChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}],raw:"Record<string, any>[]"},description:""},index:{required:!0,tsType:{name:"string"},description:""},categories:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},colors:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"AvailableChartColorsKeys[]"},description:""},valueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:""},startEndOnly:{required:!1,tsType:{name:"boolean"},description:""},showXAxis:{required:!1,tsType:{name:"boolean"},description:""},showYAxis:{required:!1,tsType:{name:"boolean"},description:""},showGridLines:{required:!1,tsType:{name:"boolean"},description:""},yAxisWidth:{required:!1,tsType:{name:"number"},description:""},intervalType:{required:!1,tsType:{name:"union",raw:'"preserveStartEnd" | "equidistantPreserveStart"',elements:[{name:"literal",value:'"preserveStartEnd"'},{name:"literal",value:'"equidistantPreserveStart"'}]},description:""},showTooltip:{required:!1,tsType:{name:"boolean"},description:""},showLegend:{required:!1,tsType:{name:"boolean"},description:""},autoMinValue:{required:!1,tsType:{name:"boolean"},description:""},minValue:{required:!1,tsType:{name:"number"},description:""},maxValue:{required:!1,tsType:{name:"number"},description:""},allowDecimals:{required:!1,tsType:{name:"boolean"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: LineChartEventProps) => void",signature:{arguments:[{type:{name:"union",raw:"BaseEventProps | null | undefined",elements:[{name:"signature",type:"object",raw:`{
  eventType: "dot" | "category"
  categoryClicked: string
  [key: string]: number | string
}`,signature:{properties:[{key:"eventType",value:{name:"union",raw:'"dot" | "category"',elements:[{name:"literal",value:'"dot"'},{name:"literal",value:'"category"'}],required:!0}},{key:"categoryClicked",value:{name:"string",required:!0}},{key:{name:"string"},value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}}]}},{name:"null"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},enableLegendSlider:{required:!1,tsType:{name:"boolean"},description:""},tickGap:{required:!1,tsType:{name:"number"},description:""},connectNulls:{required:!1,tsType:{name:"boolean"},description:""},xAxisLabel:{required:!1,tsType:{name:"string"},description:""},yAxisLabel:{required:!1,tsType:{name:"string"},description:""},legendPosition:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}]},description:""},tooltipCallback:{required:!1,tsType:{name:"signature",type:"function",raw:"(tooltipCallbackContent: TooltipProps) => void",signature:{arguments:[{type:{name:"Pick",elements:[{name:"ChartTooltipProps"},{name:"union",raw:'"active" | "payload" | "label"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"payload"'},{name:"literal",value:'"label"'}]}],raw:'Pick<ChartTooltipProps, "active" | "payload" | "label">'},name:"tooltipCallbackContent"}],return:{name:"void"}}},description:""},customTooltip:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<TooltipProps>",elements:[{name:"Pick",elements:[{name:"ChartTooltipProps"},{name:"union",raw:'"active" | "payload" | "label"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"payload"'},{name:"literal",value:'"label"'}]}],raw:'Pick<ChartTooltipProps, "active" | "payload" | "label">'}]},description:""}}};const A=[{date:"Jan 23",SolarCells:2890,Glass:2338,Encapsulant:1450,BackSheet:1900,Frame:1500,JunctionBox:1800,Adhesive:-1700,Inverter:2600,Cabling:1400},{date:"Feb 23",SolarCells:2756,Glass:2103,Encapsulant:1200,BackSheet:1850,Frame:1500,JunctionBox:1750,Adhesive:-1650,Inverter:2450,Cabling:1300},{date:"Mar 23",SolarCells:3322,Glass:2194,Encapsulant:1300,BackSheet:2200,Frame:1500,JunctionBox:2e3,Adhesive:-1800,Inverter:2750,Cabling:1450},{date:"Apr 23",SolarCells:3470,Glass:2108,Encapsulant:1400,BackSheet:1600,Frame:1500,JunctionBox:1900,Adhesive:-1950,Inverter:2850,Cabling:1500},{date:"May 23",SolarCells:3475,Glass:1812,Encapsulant:1550,BackSheet:2300,Frame:1500,JunctionBox:2200,Adhesive:-1600,Inverter:2900,Cabling:1550},{date:"Jun 23",SolarCells:3129,Glass:1726,Encapsulant:1350,BackSheet:2100,Frame:1500,JunctionBox:2050,Adhesive:-1700,Inverter:2750,Cabling:1400},{date:"Jul 23",SolarCells:3490,Glass:1982,Encapsulant:1450,BackSheet:1950,Frame:1500,JunctionBox:2300,Adhesive:-1800,Inverter:3050,Cabling:1600},{date:"Aug 23",SolarCells:2903,Glass:2012,Encapsulant:1250,BackSheet:1700,Frame:1500,JunctionBox:2150,Adhesive:-1900,Inverter:2700,Cabling:1450},{date:"Sep 23",SolarCells:2643,Glass:2342,Encapsulant:1400,BackSheet:1600,Frame:1500,JunctionBox:2e3,Adhesive:-3750,Inverter:2550,Cabling:1350},{date:"Oct 23",SolarCells:2837,Glass:2473,Encapsulant:1350,BackSheet:1850,Frame:1500,JunctionBox:2100,Adhesive:-2600,Inverter:2650,Cabling:1400},{date:"Nov 23",SolarCells:2954,Glass:3848,Encapsulant:1200,BackSheet:2e3,Frame:1500,JunctionBox:2400,Adhesive:-2950,Inverter:2750,Cabling:1450},{date:"Dec 23",SolarCells:3239,Glass:3736,Encapsulant:1550,BackSheet:1700,Frame:1500,JunctionBox:2250,Adhesive:-3800,Inverter:2900,Cabling:1500}],Pr={title:"visualization/LineChart",component:I,args:{data:A,index:"date",categories:["SolarCells","Glass"]}},$={render:()=>e.jsx(I,{"data-testid":"line-chart",data:A,index:"date",categories:["SolarCells","Glass"]})},Y={args:{categories:["SolarCells","Adhesive"]}},D={args:{valueFormatter:o=>`$${Intl.NumberFormat("us").format(o).toString()}`}},H={args:{xAxisLabel:"Month of Year",yAxisLabel:"Revenue"}},X={args:{autoMinValue:!0}},z={args:{maxValue:5e3,minValue:-3e3}},_={args:{data:A,index:"date",categories:["SolarCells","Glass","Encapsulant","BackSheet","Frame","JunctionBox","Adhesive","Inverter","Cabling"]}},U={args:{legendPosition:"left"}},Q={args:{legendPosition:"center"}},Z={args:{className:"max-w-md",data:A,index:"date",categories:["SolarCells","Glass","Encapsulant","BackSheet","Frame","JunctionBox","Adhesive"],enableLegendSlider:!0,onValueChange:o=>console.log(o)}},ee={args:{colors:["amber","cyan"]}},ae={args:{data:A.map((o,s)=>{let n=o.Glass;return s>5&&s<8&&(n=null),{date:o.date,Glass:n}}),index:"date",categories:["SolarCells","Glass"],colors:["amber","cyan"],connectNulls:!1}},re={args:{startEndOnly:!0}},te={args:{showXAxis:!1,showYAxis:!1}},se={args:{showGridLines:!1}},ne={args:{showLegend:!1}},oe={args:{showTooltip:!1}},le={args:{onValueChange:o=>console.log(o)}},ie={render:()=>{const[o,s]=i.useState(null),[n,u]=i.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(za,{htmlFor:"a",children:"showTooltip"}),e.jsx(_a,{id:"a",checked:n,onCheckedChange:u})]}),e.jsx(I,{data:A,index:"date",categories:["SolarCells","Glass"],tooltipCallback:p=>s(p),showTooltip:n}),e.jsx("pre",{children:JSON.stringify(o,null,2)})]})}},ce={args:{tickGap:300}},de={args:{data:A.slice(0,1),index:"date",categories:["SolarCells","Glass"],onValueChange:o=>console.log(o)}},ue={args:{categories:["SolarCells"],yAxisWidth:65,customTooltip:o=>{const{payload:s,active:n,label:u}=o;return!n||!s||s.length===0?null:e.jsx("div",{className:"w-56 rounded-md border bg-white p-2 text-sm shadow-sm",children:e.jsxs("div",{className:"flex flex-1 space-x-2.5",children:[e.jsx("div",{className:`flex w-1.5 flex-col bg-${s[0].color}-500 rounded`}),e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"font-medium text-gray-900",children:u}),e.jsxs("div",{className:"flex items-center justify-between space-x-8",children:[e.jsx("p",{className:"whitespace-nowrap text-right text-gray-700",children:s[0].category}),e.jsx("p",{className:"whitespace-nowrap text-right font-medium text-gray-900",children:s[0].value})]})]})]})})}}};var Te,Ae,je;$.parameters={...$.parameters,docs:{...(Te=$.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <LineChart data-testid="line-chart" data={chartdata} index="date" categories={["SolarCells", "Glass"]} />
}`,...(je=(Ae=$.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var We,Ge,Be;Y.parameters={...Y.parameters,docs:{...(We=Y.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    categories: ["SolarCells", "Adhesive"]
  }
}`,...(Be=(Ge=Y.parameters)==null?void 0:Ge.docs)==null?void 0:Be.source}}};var Ee,Fe,qe;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    valueFormatter: v => \`$\${Intl.NumberFormat("us").format(v).toString()}\`
  }
}`,...(qe=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source}}};var Pe,Ie,Ve;H.parameters={...H.parameters,docs:{...(Pe=H.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    xAxisLabel: "Month of Year",
    yAxisLabel: "Revenue"
  }
}`,...(Ve=(Ie=H.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Re,Je,Oe;X.parameters={...X.parameters,docs:{...(Re=X.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    autoMinValue: true
  }
}`,...(Oe=(Je=X.parameters)==null?void 0:Je.docs)==null?void 0:Oe.source}}};var Ke,Me,$e;z.parameters={...z.parameters,docs:{...(Ke=z.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    maxValue: 5000,
    minValue: -3000
  }
}`,...($e=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:$e.source}}};var Ye,De,He;_.parameters={..._.parameters,docs:{...(Ye=_.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    data: chartdata,
    index: "date",
    categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive", "Inverter", "Cabling"]
  }
}`,...(He=(De=_.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var Xe,ze,_e;U.parameters={...U.parameters,docs:{...(Xe=U.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    legendPosition: "left"
  }
}`,...(_e=(ze=U.parameters)==null?void 0:ze.docs)==null?void 0:_e.source}}};var Ue,Qe,Ze;Q.parameters={...Q.parameters,docs:{...(Ue=Q.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    legendPosition: "center"
  }
}`,...(Ze=(Qe=Q.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var ea,aa,ra;Z.parameters={...Z.parameters,docs:{...(ea=Z.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  args: {
    className: "max-w-md",
    data: chartdata,
    index: "date",
    categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"],
    enableLegendSlider: true,
    onValueChange: v => console.log(v)
  }
}`,...(ra=(aa=Z.parameters)==null?void 0:aa.docs)==null?void 0:ra.source}}};var ta,sa,na;ee.parameters={...ee.parameters,docs:{...(ta=ee.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    colors: ["amber", "cyan"]
  }
}`,...(na=(sa=ee.parameters)==null?void 0:sa.docs)==null?void 0:na.source}}};var oa,la,ia;ae.parameters={...ae.parameters,docs:{...(oa=ae.parameters)==null?void 0:oa.docs,source:{originalSource:`{
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
}`,...(ia=(la=ae.parameters)==null?void 0:la.docs)==null?void 0:ia.source}}};var ca,da,ua;re.parameters={...re.parameters,docs:{...(ca=re.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  args: {
    startEndOnly: true
  }
}`,...(ua=(da=re.parameters)==null?void 0:da.docs)==null?void 0:ua.source}}};var pa,ma,ga;te.parameters={...te.parameters,docs:{...(pa=te.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  args: {
    showXAxis: false,
    showYAxis: false
  }
}`,...(ga=(ma=te.parameters)==null?void 0:ma.docs)==null?void 0:ga.source}}};var ha,fa,xa;se.parameters={...se.parameters,docs:{...(ha=se.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  args: {
    showGridLines: false
  }
}`,...(xa=(fa=se.parameters)==null?void 0:fa.docs)==null?void 0:xa.source}}};var ya,va,ka;ne.parameters={...ne.parameters,docs:{...(ya=ne.parameters)==null?void 0:ya.docs,source:{originalSource:`{
  args: {
    showLegend: false
  }
}`,...(ka=(va=ne.parameters)==null?void 0:va.docs)==null?void 0:ka.source}}};var Ca,ba,wa;oe.parameters={...oe.parameters,docs:{...(Ca=oe.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  args: {
    showTooltip: false
  }
}`,...(wa=(ba=oe.parameters)==null?void 0:ba.docs)==null?void 0:wa.source}}};var Sa,La,Na;le.parameters={...le.parameters,docs:{...(Sa=le.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  args: {
    onValueChange: v => console.log(v)
  }
}`,...(Na=(La=le.parameters)==null?void 0:La.docs)==null?void 0:Na.source}}};var Ta,Aa,ja;ie.parameters={...ie.parameters,docs:{...(Ta=ie.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  render: () => {
    const [callback, setCallBack] = React.useState<TooltipProps | null>(null);
    const [checked, setChecked] = React.useState(true);
    return <>
        <div className="flex items-center gap-3">
          <Label htmlFor="a">showTooltip</Label>
          <Switch id="a" checked={checked} onCheckedChange={setChecked} />
        </div>

        <LineChart data={chartdata} index="date" categories={["SolarCells", "Glass"]} tooltipCallback={tooltipContent => setCallBack(tooltipContent)} showTooltip={checked} />
        <pre>{JSON.stringify(callback, null, 2)}</pre>
      </>;
  }
}`,...(ja=(Aa=ie.parameters)==null?void 0:Aa.docs)==null?void 0:ja.source}}};var Wa,Ga,Ba;ce.parameters={...ce.parameters,docs:{...(Wa=ce.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  args: {
    tickGap: 300
  }
}`,...(Ba=(Ga=ce.parameters)==null?void 0:Ga.docs)==null?void 0:Ba.source}}};var Ea,Fa,qa;de.parameters={...de.parameters,docs:{...(Ea=de.parameters)==null?void 0:Ea.docs,source:{originalSource:`{
  args: {
    data: chartdata.slice(0, 1),
    index: "date",
    categories: ["SolarCells", "Glass"],
    onValueChange: v => console.log(v)
  }
}`,...(qa=(Fa=de.parameters)==null?void 0:Fa.docs)==null?void 0:qa.source}}};var Pa,Ia,Va;ue.parameters={...ue.parameters,docs:{...(Pa=ue.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
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
}`,...(Va=(Ia=ue.parameters)==null?void 0:Ia.docs)==null?void 0:Va.source}}};const Ir=["Default","DefaultNegative","WithValueFormatter","WithAxisLabels","WithMinValue","WithMinAndMaxValue","AllColors","WithLegendLeft","WithLegendCenter","WithLegendSlider","ShiftColors","WithConnectNullsFalse","WithStartEndOnly","WithNoAxis","WithNoGridlines","WithNoLegend","WithNoTooltip","WithOnValueChange","WithTooltipCallback","WithLargeTickGap","OneDataValue","CustomTooltip"];export{_ as AllColors,ue as CustomTooltip,$ as Default,Y as DefaultNegative,de as OneDataValue,ee as ShiftColors,H as WithAxisLabels,ae as WithConnectNullsFalse,ce as WithLargeTickGap,Q as WithLegendCenter,U as WithLegendLeft,Z as WithLegendSlider,z as WithMinAndMaxValue,X as WithMinValue,te as WithNoAxis,se as WithNoGridlines,ne as WithNoLegend,oe as WithNoTooltip,le as WithOnValueChange,re as WithStartEndOnly,ie as WithTooltipCallback,D as WithValueFormatter,Ir as __namedExportsOrder,Pr as default};
