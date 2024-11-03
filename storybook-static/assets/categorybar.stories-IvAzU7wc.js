import{j as t}from"./jsx-runtime-CfatFE5O.js";import{R as i}from"./index-ClcD9ViR.js";import{g as C,A as be}from"./chartColors-CTMckKCA.js";import{c as n}from"./cx-CYgzbKIn.js";import{T as fe}from"./Tooltip-DhxHlGr_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-jls2fw.js";import"./index-ClVxAquS.js";import"./index-8isb7LcM.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./index-ZVc5Krty.js";import"./index-a6sp4N9A.js";import"./index-VEzCCWBB.js";import"./index-DSWkTB7Z.js";import"./index-B7xKYiWN.js";import"./index-CkP846ZC.js";import"./index-DXJoflK3.js";const xe=(r,a,e)=>{if(r===void 0)return"";if(r===0){for(let s=0;s<a.length;s++)if(a[s]>0)return C(e[s],"bg")}let o=0;for(let s=0;s<a.length;s++)if(o+=a[s],o>=r)return C(e[s],"bg");return C(e[a.length-1],"bg")},de=(r,a)=>r?r/a*100:0,pe=r=>r.reduce((a,e)=>a+e,0),k=r=>Number.isInteger(r)?r.toString():r.toFixed(1),we=({values:r})=>{const a=i.useMemo(()=>pe(r),[r]);let e=0,o=0;return t.jsxs("div",{className:n("relative mb-2 flex h-5 w-full text-sm font-medium","text-gray-700 dark:text-gray-300"),children:[r.map((s,W)=>{e+=s;const u=(s>=.1*a||o>=.09*a)&&a-e>=.1*a&&e>=.1*a&&e<.9*a;o=u?0:o+=s;const m=de(s,a);return t.jsx("div",{className:"flex items-center justify-end pr-0.5",style:{width:`${m}%`},children:t.jsx("span",{className:n(u?"block":"hidden","translate-x-1/2 text-sm tabular-nums"),children:k(e)})},`item-${W}`)}),t.jsx("div",{className:"absolute bottom-0 left-0 flex items-center",children:"0"}),t.jsx("div",{className:"absolute bottom-0 right-0 flex items-center",children:k(a)})]})},j=i.forwardRef(({values:r=[],colors:a=be,marker:e,showLabels:o=!0,className:s,...W},u)=>{const m=i.useMemo(()=>xe(e==null?void 0:e.value,r,a),[e,r,a]),l=i.useMemo(()=>pe(r),[r]),N=i.useMemo(()=>{if(e!==void 0)return e.value<0?0:e.value>l?l:e.value},[e,l]),ge=i.useMemo(()=>de(N,l),[N,l]);return t.jsxs("div",{ref:u,className:n(s),"aria-label":"category bar","aria-valuenow":e==null?void 0:e.value,"tremor-id":"tremor-raw",...W,children:[o?t.jsx(we,{values:r}):null,t.jsxs("div",{className:"relative flex h-2 w-full items-center",children:[t.jsx("div",{className:"flex h-full flex-1 items-center gap-0.5 overflow-hidden rounded-full",children:r.map((he,S)=>{const ve=a[S]??"gray",V=he/l*100;return t.jsx("div",{className:n("h-full",C(ve,"bg"),V===0&&"hidden"),style:{width:`${V}%`}},`item-${S}`)})}),e!==void 0?t.jsx("div",{className:n("absolute w-2 -translate-x-1/2",e.showAnimation&&"transform-gpu transition-all duration-300 ease-in-out"),style:{left:`${ge}%`},children:e.tooltip?t.jsx(fe,{triggerAsChild:!0,content:e.tooltip,children:t.jsx("div",{"aria-hidden":"true",className:n("relative mx-auto h-4 w-1 rounded-full ring-2","ring-white dark:ring-gray-950",m),children:t.jsx("div",{"aria-hidden":!0,className:"absolute size-7 -translate-x-[45%] -translate-y-[15%]"})})}):t.jsx("div",{className:n("mx-auto h-4 w-1 rounded-full ring-2","ring-white dark:ring-gray-950",m)})}):null]})]})});j.displayName="CategoryBar";j.__docgenInfo={description:"",methods:[],displayName:"CategoryBar",props:{values:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[]",computed:!1}},colors:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"AvailableChartColorsKeys[]"},description:"",defaultValue:{value:`Object.keys(
  chartColors,
)`,computed:!0}},marker:{required:!1,tsType:{name:"signature",type:"object",raw:"{ value: number; tooltip?: string; showAnimation?: boolean }",signature:{properties:[{key:"value",value:{name:"number",required:!0}},{key:"tooltip",value:{name:"string",required:!1}},{key:"showAnimation",value:{name:"boolean",required:!1}}]}},description:""},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const Re={title:"visualization/CategoryBar",render:r=>t.jsx(j,{...r,"data-testid":"CategoryBar"}),component:j},c={args:{values:[70,18,11]}},d={args:{values:[70.1,18.3,11.6]}},p={args:{values:[60,10,15,15],marker:{value:65,tooltip:"65"},showLabels:!0}},g={args:{values:[60,25,15],colors:["pink","amber","emerald"]}},h={args:{values:[0,50,50],marker:{value:0,tooltip:"0"},showLabels:!0}},v={args:{values:[10,25,45,20],colors:["amber","gray","pink","cyan"],marker:{value:50,tooltip:"50%"},showLabels:!0}},b={args:{values:[10,25,50,15],marker:{value:50,tooltip:"50%"},showLabels:!0}},f={args:{values:[400,400,800],marker:{value:1400,tooltip:"50%"},showLabels:!0}},x={args:{values:[8,7,9,8],marker:{value:20,tooltip:"20%"},showLabels:!0}},w={args:{values:[10,5,5,5,5,5,50,15,0],marker:{value:50,tooltip:"50%"},showLabels:!0}},y={args:{values:[5,95],marker:{value:50,tooltip:"50%"},showLabels:!0}},L={args:{values:[0,100]}};var M,A,T;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    values: [70, 18, 11]
  }
}`,...(T=(A=c.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var B,q,$;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    values: [70.1, 18.3, 11.6]
  }
}`,...($=(q=d.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var E,I,O;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    values: [60, 10, 15, 15],
    marker: {
      value: 65,
      tooltip: "65"
    },
    showLabels: true
  }
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var R,_,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    values: [60, 25, 15],
    colors: ["pink", "amber", "emerald"]
  }
}`,...(F=(_=g.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var z,D,P;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    values: [0, 50, 50],
    marker: {
      value: 0,
      tooltip: "0"
    },
    showLabels: true
  }
}`,...(P=(D=h.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var Z,H,K;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    values: [10, 25, 45, 20],
    colors: ["amber", "gray", "pink", "cyan"],
    marker: {
      value: 50,
      tooltip: "50%"
    },
    showLabels: true
  }
}`,...(K=(H=v.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var G,J,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    values: [10, 25, 50, 15],
    marker: {
      value: 50,
      tooltip: "50%"
    },
    showLabels: true
  }
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    values: [400, 400, 800],
    marker: {
      value: 1400,
      tooltip: "50%"
    },
    showLabels: true
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    values: [8, 7, 9, 8],
    marker: {
      value: 20,
      tooltip: "20%"
    },
    showLabels: true
  }
}`,...(ae=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,te,oe;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    values: [10, 5, 5, 5, 5, 5, 50, 15, 0],
    marker: {
      value: 50,
      tooltip: "50%"
    },
    showLabels: true
  }
}`,...(oe=(te=w.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,le,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    values: [5, 95],
    marker: {
      value: 50,
      tooltip: "50%"
    },
    showLabels: true
  }
}`,...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ue,me,ce;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    values: [0, 100]
  }
}`,...(ce=(me=L.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};const _e=["Default","WithFloatingPointValues","WithMarker","WithColors","WithMarkerOnLabel","WithSmallStartValue","WithCloseEndValue","WithValuesMoreThan100","WithValuesLessThan100","WithConsecutiveSmallValues","WithNoLabelsInbetween","WithZero"];export{c as Default,b as WithCloseEndValue,g as WithColors,w as WithConsecutiveSmallValues,d as WithFloatingPointValues,p as WithMarker,h as WithMarkerOnLabel,y as WithNoLabelsInbetween,v as WithSmallStartValue,x as WithValuesLessThan100,f as WithValuesMoreThan100,L as WithZero,_e as __namedExportsOrder,Re as default};
