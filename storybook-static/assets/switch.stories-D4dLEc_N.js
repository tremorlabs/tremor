import{j as e}from"./jsx-runtime-CfatFE5O.js";import{R as G}from"./index-ClcD9ViR.js";import{B as p}from"./Button-BKBEGp9E.js";import{C as H}from"./Card-CcWW2RSf.js";import{D as J}from"./Divider-m6wgbLLv.js";import{L as W}from"./Label-DAouQbGm.js";import{S as r}from"./Switch-RRnFbcgf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ClVxAquS.js";import"./index-BWmfHM-C.js";import"./index-CF-iJ_jy.js";import"./cx-CYgzbKIn.js";import"./focusRing-49zpLVVu.js";import"./index-BmTwYRFB.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./index-D-jls2fw.js";import"./index-sY83p_TZ.js";import"./index-DSWkTB7Z.js";const de={title:"ui/Switch",component:r},K=_=>{const[n,m]=G.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(H,{className:"w-96",children:e.jsxs("form",{onSubmit:A=>{A.preventDefault(),alert("Submitted")},onReset:()=>m(!1),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(W,{htmlFor:"a",children:"Click the Label"}),e.jsx(r,{id:"a",checked:n,onCheckedChange:m,..._})]}),e.jsx(J,{}),e.jsxs("div",{className:"flex gap-4",children:[e.jsx(p,{type:"submit",className:"mt-2 w-fit",children:"Submit"}),e.jsx(p,{type:"reset",variant:"secondary",className:"mt-2 w-fit",children:"Reset Input"})]})]})}),e.jsxs("p",{className:"text-sm text-gray-500",children:["Switch is:",e.jsx("span",{className:"ml-1 font-semibold text-gray-900 dark:text-gray-50",children:n?"On":"Off"})]})]})},s={},a={args:{size:"default"}},t={args:{size:"small"}},c={render:()=>e.jsx(e.Fragment,{children:e.jsx(r,{id:"label",defaultChecked:!0})})},i={render:()=>e.jsx(e.Fragment,{children:e.jsx(r,{id:"label",disabled:!0})})},o={render:()=>e.jsx(e.Fragment,{children:e.jsx(r,{id:"label",defaultChecked:!0,disabled:!0})})},l={render:()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(W,{htmlFor:"r1",children:"Click this Label check the Switch"}),e.jsx(r,{id:"r1"})]})}),args:{size:"small"}},d={render:K,args:{required:!0}};var u,h,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,S,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "default"
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var g,j,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...(C=(j=t.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var k,w,D;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <>
      <Switch id="label" defaultChecked />
    </>
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var z,N,v;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <>
      <Switch id="label" disabled />
    </>
}`,...(v=(N=i.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var F,L,y;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <>
      <Switch id="label" defaultChecked disabled />
    </>
}`,...(y=(L=o.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var R,I,O;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <>
      <div className="flex items-center space-x-4">
        <Label htmlFor="r1">Click this Label check the Switch</Label>
        <Switch id="r1" />
      </div>
    </>,
  args: {
    size: "small"
  }
}`,...(O=(I=l.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var q,B,E;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: SimpleIdSwitch,
  args: {
    required: true
  }
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const ne=["Default","SizeDefault","SizeSmall","DefaultChecked","Disabled","CheckedDisabled","WithLabel","ControlledForm"];export{o as CheckedDisabled,d as ControlledForm,s as Default,c as DefaultChecked,i as Disabled,a as SizeDefault,t as SizeSmall,l as WithLabel,ne as __namedExportsOrder,de as default};
