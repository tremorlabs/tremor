import{j as e}from"./jsx-runtime-CfatFE5O.js";import{f as O,q as Y}from"./index-BWmfHM-C.js";import{R as U}from"./index-ClcD9ViR.js";import{c as z}from"./index-CF-iJ_jy.js";import{c as r}from"./cx-CYgzbKIn.js";import"./_commonjsHelpers-Cpj98o6Y.js";const I=z({base:"flex flex-col overflow-hidden rounded-md p-4 text-sm",variants:{variant:{default:["text-blue-900 dark:text-blue-400","bg-blue-50 dark:bg-blue-950/70"],success:["text-emerald-900 dark:text-emerald-500","bg-emerald-50 dark:bg-emerald-950/70"],error:["text-red-900 dark:text-red-500","bg-red-50 dark:bg-red-950/70"],warning:["text-yellow-900 dark:text-yellow-500","bg-yellow-50 dark:bg-yellow-950/70"],neutral:["text-gray-900 dark:text-gray-400","bg-gray-100 dark:bg-gray-800/70"]}},defaultVariants:{variant:"default"}}),l=U.forwardRef(({title:q,icon:a,className:D,variant:P,children:m,..._},F)=>e.jsxs("div",{ref:F,className:r(I({variant:P}),D),"tremor-id":"tremor-raw",..._,children:[e.jsxs("div",{className:r("flex items-start"),children:[a&&typeof a=="function"?e.jsx(a,{className:r("mr-1.5 h-5 w-5 shrink-0"),"aria-hidden":"true"}):a,e.jsx("span",{className:r("font-semibold"),children:q})]}),e.jsx("div",{className:r("overflow-y-auto",m?"mt-2":""),children:m})]}));l.displayName="Callout";l.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{title:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"union",raw:"React.ElementType | React.ReactElement",elements:[{name:"ReactElementType",raw:"React.ElementType"},{name:"ReactReactElement",raw:"React.ReactElement"}]},description:""}},composes:["VariantProps"]};const M={title:"ui/Callout",component:l,args:{title:"Sales Performance",children:"System Update: Enhanced Salesforce and Dynamics 365 integration now delivers key sales performance metrics directly to your dashboard for improved target achievement."},argTypes:{variant:{control:"radio",options:[...Object.keys(I.variants.variant)]}}},t={},s={args:{variant:"success"}},o={args:{variant:"error"}},n={args:{variant:"warning"}},i={args:{variant:"neutral"}},c={args:{icon:O,title:"AWS Credit Alert",children:"Warning: Your AWS credits are nearly depleted. Please review your usage and consider adding more credits to avoid service interruptions. Visit your account dashboard for details."}},d={args:{icon:e.jsx(Y,{className:"mr-1.5 h-5 w-5 shrink-0"}),title:"Information",children:"Visit your account dashboard for details."}};var u,p,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,y,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "success"
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,x,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: "error"
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,S,k;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "warning"
  }
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var R,E,W;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "neutral"
  }
}`,...(W=(E=i.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var N,j,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    icon: RiErrorWarningFill,
    title: "AWS Credit Alert",
    children: "Warning: Your AWS credits are nearly depleted. Please review your usage and consider adding more credits to avoid service interruptions. Visit your account dashboard for details."
  }
}`,...(V=(j=c.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var A,C,T;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    icon: <RiInformation2Fill className="mr-1.5 h-5 w-5 shrink-0" />,
    title: "Information",
    children: "Visit your account dashboard for details."
  }
}`,...(T=(C=d.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const Q=["Default","Success","Error","Warning","Neutral","WithIcon","WithIconElement"];export{t as Default,o as Error,i as Neutral,s as Success,n as Warning,c as WithIcon,d as WithIconElement,Q as __namedExportsOrder,M as default};
