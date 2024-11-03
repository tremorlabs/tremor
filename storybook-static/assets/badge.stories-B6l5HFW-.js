import{j as e}from"./jsx-runtime-CfatFE5O.js";import{c as v}from"./cx-CYgzbKIn.js";import{B as a,b as h}from"./Badge-CRZPK1pY.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CF-iJ_jy.js";const S={title:"ui/Badge",component:a,args:{children:"Badge"},argTypes:{variant:{control:"radio",options:[...Object.keys(h.variants.variant)]}}},r={},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{variant:"neutral",children:"Neutral"}),e.jsx(a,{children:"Default"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"error",children:"Error"}),e.jsx(a,{variant:"warning",children:"Warning"})]})},n={render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:e.jsx("a",{className:v(h({variant:"success"}),"cursor-pointer"),children:"Anchor element"})})},t={render:()=>e.jsxs("div",{className:"flex items-center justify-between gap-8 rounded-md bg-blue-50 py-2.5 pl-2.5 pr-4 text-sm dark:bg-blue-900/50",children:[e.jsxs("div",{className:"flex items-center gap-2 truncate",children:[e.jsx(a,{className:"ring-none dark:ring-none rounded-full bg-blue-800 text-white dark:bg-blue-500 dark:text-white",children:"Export Request"}),e.jsxs("span",{className:"truncate text-blue-800 dark:text-blue-400",children:["Your export is ready for download:"," ",e.jsx("span",{className:"font-semibold",children:"263 transactions"})]})]}),e.jsx("button",{className:"font-semibold text-blue-800 dark:text-blue-400",children:"Download"})]})};var d,o,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,l,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Badge variant="neutral">Neutral</Badge>
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="warning">Warning</Badge>
    </div>
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <a className={cx(badgeVariants({
      variant: "success"
    }), "cursor-pointer")}>
        Anchor element
      </a>
    </div>
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,b,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-between gap-8 rounded-md bg-blue-50 py-2.5 pl-2.5 pr-4 text-sm dark:bg-blue-900/50">
      <div className="flex items-center gap-2 truncate">
        <Badge className="ring-none dark:ring-none rounded-full bg-blue-800 text-white dark:bg-blue-500 dark:text-white">
          Export Request
        </Badge>
        <span className="truncate text-blue-800 dark:text-blue-400">
          Your export is ready for download:{" "}
          <span className="font-semibold">263 transactions</span>
        </span>
      </div>
      <button className="font-semibold text-blue-800 dark:text-blue-400">
        Download
      </button>
    </div>
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const D=["Default","Variants","AnchorWithBadgeVariantsStyle","CustomisedBadge"];export{n as AnchorWithBadgeVariantsStyle,t as CustomisedBadge,r as Default,s as Variants,D as __namedExportsOrder,S as default};
