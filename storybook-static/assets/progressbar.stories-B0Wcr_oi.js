import{j as e}from"./jsx-runtime-CfatFE5O.js";import{C as I}from"./Card-CcWW2RSf.js";import{R as G}from"./index-ClcD9ViR.js";import{c as K}from"./index-CF-iJ_jy.js";import{c as t}from"./cx-CYgzbKIn.js";import"./index-ClVxAquS.js";import"./_commonjsHelpers-Cpj98o6Y.js";const $=K({slots:{background:"",bar:""},variants:{variant:{default:{background:"bg-blue-200 dark:bg-blue-500/30",bar:"bg-blue-500 dark:bg-blue-500"},neutral:{background:"bg-gray-200 dark:bg-gray-500/40",bar:"bg-gray-500 dark:bg-gray-500"},warning:{background:"bg-yellow-200 dark:bg-yellow-500/30",bar:"bg-yellow-500 dark:bg-yellow-500"},error:{background:"bg-red-200 dark:bg-red-500/30",bar:"bg-red-500 dark:bg-red-500"},success:{background:"bg-emerald-200 dark:bg-emerald-500/30",bar:"bg-emerald-500 dark:bg-emerald-500"}}},defaultVariants:{variant:"default"}}),a=G.forwardRef(({value:s=0,max:r=100,label:d,showAnimation:D=!1,variant:E,className:M,...R},T)=>{const u=Math.min(r,Math.max(s,0)),{background:W,bar:_}=$({variant:E});return e.jsxs("div",{ref:T,className:t("flex w-full items-center",M),"tremor-id":"tremor-raw",...R,children:[e.jsx("div",{className:t("relative flex h-2 w-full items-center rounded-full",W()),"aria-label":"progress bar","aria-valuenow":s,"aria-valuemax":r,children:e.jsx("div",{className:t("h-full flex-col rounded-full",_(),D&&"transform-gpu transition-all duration-300 ease-in-out"),style:{width:r?`${u/r*100}%`:`${u}%`}})}),d?e.jsx("span",{className:t("ml-2 whitespace-nowrap text-sm font-medium leading-none","text-gray-900 dark:text-gray-50"),children:d}):null]})});a.displayName="ProgressBar";a.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},showAnimation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""}},composes:["VariantProps"]};const Q={title:"visualization/ProgressBar",render:s=>e.jsx(a,{...s,className:"w-96","data-testid":"progressbar"}),component:a},n={args:{value:62,label:"62%"}},l={args:{value:0}},c={args:{value:120}},o={args:{value:40,max:50}},i={render:()=>e.jsxs("div",{className:"w-96 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-3",children:[e.jsx(a,{variant:"default",value:50,className:"w-60"}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-gray-50",children:"Default"})]}),e.jsxs("div",{className:"flex items-center justify-between space-x-3",children:[e.jsx(a,{variant:"neutral",value:40,className:"w-60"}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-gray-50",children:"Neutral"})]}),e.jsxs("div",{className:"flex items-center justify-between space-x-3",children:[e.jsx(a,{variant:"success",value:50,className:"w-60"}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-gray-50",children:"Success"})]}),e.jsxs("div",{className:"flex items-center justify-between space-x-3",children:[e.jsx(a,{variant:"warning",value:20,className:"w-60"}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-gray-50",children:"Warning"})]}),e.jsxs("div",{className:"flex items-center justify-between space-x-3",children:[e.jsx(a,{variant:"error",value:10,className:"w-60"}),e.jsx("span",{className:"text-sm font-semibold text-gray-900 dark:text-gray-50",children:"Error"})]})]})},m={render:()=>e.jsxs(I,{className:"w-96",children:[e.jsx("p",{className:"text-sm font-medium text-gray-900 dark:text-gray-50",children:"Sales Progress"}),e.jsxs("div",{className:"mt-2 flex items-center space-x-2",children:[e.jsx("span",{className:"whitespace-nowrap text-sm text-gray-500",children:"Goal 2023"}),e.jsx(a,{value:54,max:100,label:"54%"})]})]})};var x,p,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 62,
    label: "62%"
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,b,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...(v=(b=l.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var y,N,w;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 120
  }
}`,...(w=(N=c.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var j,h,k;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 40,
    max: 50
  }
}`,...(k=(h=o.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var P,V,B;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="w-96 space-y-4">
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="default" value={50} className="w-60" />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Default
        </span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="neutral" value={40} className="w-60" />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Neutral
        </span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="success" value={50} className="w-60" />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Success
        </span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="warning" value={20} className="w-60" />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Warning
        </span>
      </div>
      <div className="flex items-center justify-between space-x-3">
        <ProgressBar variant="error" value={10} className="w-60" />
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-50">
          Error
        </span>
      </div>
    </div>
}`,...(B=(V=i.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var S,C,q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Card className="w-96">
      <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
        Sales Progress
      </p>
      <div className="mt-2 flex items-center space-x-2">
        <span className="whitespace-nowrap text-sm text-gray-500">
          Goal 2023
        </span>
        <ProgressBar value={54} max={100} label="54%" />
      </div>
    </Card>
}`,...(q=(C=m.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};const U=["Default","Value0","Value120","Max","VariantsComposition","WithKPICard"];export{n as Default,o as Max,l as Value0,c as Value120,i as VariantsComposition,m as WithKPICard,U as __namedExportsOrder,Q as default};
