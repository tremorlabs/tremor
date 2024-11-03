import{j as e}from"./jsx-runtime-CfatFE5O.js";import{C as X}from"./Card-CcWW2RSf.js";import{R as Y}from"./index-ClcD9ViR.js";import{c as Z}from"./index-CF-iJ_jy.js";import{c as s}from"./cx-CYgzbKIn.js";import"./index-ClVxAquS.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ee=Z({slots:{background:"",circle:""},variants:{variant:{default:{background:"stroke-blue-200 dark:stroke-blue-500/30",circle:"stroke-blue-500 dark:stroke-blue-500"},neutral:{background:"stroke-gray-200 dark:stroke-gray-500/40",circle:"stroke-gray-500 dark:stroke-gray-500"},warning:{background:"stroke-yellow-200 dark:stroke-yellow-500/30",circle:"stroke-yellow-500 dark:stroke-yellow-500"},error:{background:"stroke-red-200 dark:stroke-red-500/30",circle:"stroke-red-500 dark:stroke-red-500"},success:{background:"stroke-emerald-200 dark:stroke-emerald-500/30",circle:"stroke-emerald-500 dark:stroke-emerald-500"}}},defaultVariants:{variant:"default"}}),r=Y.forwardRef(({value:t=0,max:n=100,radius:a=32,strokeWidth:g=6,showAnimation:L=!0,variant:O,className:A,children:B,...F},H)=>{const f=Math.min(n,Math.max(t,0)),v=a-g/2,o=v*2*Math.PI,J=o-f/n*o,{background:Q,circle:U}=ee({variant:O});return e.jsx(e.Fragment,{children:e.jsxs("div",{className:s("relative"),"tremor-id":"tremor-raw",children:[e.jsxs("svg",{ref:H,width:a*2,height:a*2,viewBox:`0 0 ${a*2} ${a*2}`,className:s("-rotate-90 transform",A),role:"progress circle","aria-label":"progress bar","aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":n,"data-max":n,"data-value":f??null,...F,children:[e.jsx("circle",{r:v,cx:a,cy:a,strokeWidth:g,fill:"transparent",stroke:"",strokeLinecap:"round",className:s("transition-colors ease-linear",Q())}),f>=0?e.jsx("circle",{r:v,cx:a,cy:a,strokeWidth:g,strokeDasharray:`${o} ${o}`,strokeDashoffset:J,fill:"transparent",stroke:"",strokeLinecap:"round",className:s("transition-colors ease-linear",U(),L&&"transform-gpu transition-all duration-300 ease-in-out")}):null]}),e.jsx("div",{className:s("absolute inset-0 flex items-center justify-center"),children:B})]})})});r.displayName="ProgressCircle";r.__docgenInfo={description:"",methods:[],displayName:"ProgressCircle",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},showAnimation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},radius:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"32",computed:!1}},strokeWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit","VariantProps"]};const le={title:"visualization/ProgressCircle",component:r,render:t=>e.jsx(r,{...t,"data-testid":"progresscircle"})},c={},l={args:{value:69}},i={args:{value:120}},d={args:{value:40,max:50}},m={render:()=>e.jsxs("div",{className:"flex items-center justify-center gap-x-5",children:[e.jsx(r,{"data-testid":"progresscircle",value:75,children:e.jsx("span",{className:"text-sm font-medium text-gray-700",children:"75%"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium",children:"$340/$450"}),e.jsx("p",{className:"text-tremor-default text-tremor-content dark:text-dark-tremor-content",children:"Spend management control"})]})]})},u={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-6",children:[e.jsx(r,{value:72,radius:16,strokeWidth:4}),e.jsx(r,{value:72,radius:25,strokeWidth:6}),e.jsx(r,{value:72,radius:40,strokeWidth:10}),e.jsx(r,{value:72,radius:45,strokeWidth:5}),e.jsx(r,{value:72,radius:50,strokeWidth:8})]})},x={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-8",children:[e.jsx(r,{variant:"default",value:50}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-gray-50",children:"Default"})]}),e.jsxs("div",{className:"flex items-center space-x-8",children:[e.jsx(r,{variant:"neutral",value:40}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-gray-50",children:"Neutral"})]}),e.jsxs("div",{className:"flex items-center space-x-8",children:[e.jsx(r,{variant:"success",value:40}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-gray-50",children:"Success"})]}),e.jsxs("div",{className:"flex items-center space-x-8",children:[e.jsx(r,{variant:"warning",value:40}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-gray-50",children:"Warning"})]}),e.jsxs("div",{className:"flex items-center space-x-8",children:[e.jsx(r,{variant:"error",value:40}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-gray-50",children:"Error"})]})]})},p={render:()=>e.jsxs(X,{className:"w-96",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-gray-50",children:"Sales Progress"}),e.jsxs("div",{className:"mt-2 flex items-center space-x-2",children:[e.jsx("span",{className:"whitespace-nowrap text-sm text-gray-500",children:"Goal 2023"}),e.jsx(r,{value:54,max:100})]})]})};var k,h,y;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(y=(h=c.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var N,j,b;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 69
  }
}`,...(b=(j=l.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var C,P,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 120
  }
}`,...(w=(P=i.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var W,S,V;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: 40,
    max: 50
  }
}`,...(V=(S=d.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var R,$,q;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-x-5">
      <ProgressCircle data-testid="progresscircle" value={75}>
        <span className="text-sm font-medium text-gray-700">75%</span>
      </ProgressCircle>
      <div>
        <p className="text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
          $340/$450
        </p>
        <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
          Spend management control
        </p>
      </div>
    </div>
}`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var D,T,M;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center justify-center gap-6">
      <ProgressCircle value={72} radius={16} strokeWidth={4} />
      <ProgressCircle value={72} radius={25} strokeWidth={6} />
      <ProgressCircle value={72} radius={40} strokeWidth={10} />
      <ProgressCircle value={72} radius={45} strokeWidth={5} />
      <ProgressCircle value={72} radius={50} strokeWidth={8} />
    </div>
}`,...(M=(T=u.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var z,E,I;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex items-center space-x-8">
        <ProgressCircle variant="default" value={50} />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Default
        </span>
      </div>
      <div className="flex items-center space-x-8">
        <ProgressCircle variant="neutral" value={40} />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Neutral
        </span>
      </div>
      <div className="flex items-center space-x-8">
        <ProgressCircle variant="success" value={40} />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Success
        </span>
      </div>
      <div className="flex items-center space-x-8">
        <ProgressCircle variant="warning" value={40} />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Warning
        </span>
      </div>
      <div className="flex items-center space-x-8">
        <ProgressCircle variant="error" value={40} />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Error
        </span>
      </div>
    </div>
}`,...(I=(E=x.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var _,G,K;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Card className="w-96">
      <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
        Sales Progress
      </p>
      <div className="mt-2 flex items-center space-x-2">
        <span className="whitespace-nowrap text-sm text-gray-500">
          Goal 2023
        </span>
        <ProgressCircle value={54} max={100} />
      </div>
    </Card>
}`,...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};const ie=["Default","WithValue","Value120","WithMax50","WithChildren","Sizes","VariantsComposition","WithKPICard"];export{c as Default,u as Sizes,i as Value120,x as VariantsComposition,m as WithChildren,p as WithKPICard,d as WithMax50,l as WithValue,ie as __namedExportsOrder,le as default};
