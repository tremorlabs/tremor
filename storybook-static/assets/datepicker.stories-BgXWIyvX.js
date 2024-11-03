import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as u}from"./index-ClcD9ViR.js";import{B as r}from"./Button-BKBEGp9E.js";import{D as q}from"./Divider-m6wgbLLv.js";import{P as G,a as I,b as J,c as g}from"./Popover-ElcCYz_W.js";import{D as n}from"./DatePicker-BXF9RHG3.js";import{f as K}from"./Calendar-Bs0M0WIi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ClVxAquS.js";import"./index-BWmfHM-C.js";import"./index-CF-iJ_jy.js";import"./cx-CYgzbKIn.js";import"./focusRing-49zpLVVu.js";import"./index-HOHGevfs.js";import"./index-D-jls2fw.js";import"./index-8isb7LcM.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./Combination-BH2yWiU8.js";import"./index-ZVc5Krty.js";import"./index-a6sp4N9A.js";import"./index-VEzCCWBB.js";import"./index-DSWkTB7Z.js";import"./index-B7xKYiWN.js";import"./index-CkP846ZC.js";import"./focusInput-B1nbZ1LY.js";import"./hasErrorInput-DaEl1nS1.js";const Ne={title:"ui/DatePicker",component:n,render:a=>e.jsx("div",{className:"w-60",children:e.jsx(n,{...a})})},Q=[{label:"Today",date:new Date},{label:"Tomorrow",date:new Date(new Date().setDate(new Date().getDate()+1))},{label:"A week from now",date:new Date(new Date().setDate(new Date().getDate()+7))},{label:"A month from now",date:new Date(new Date().setMonth(new Date().getMonth()+1))},{label:"6 months from now",date:new Date(new Date().setMonth(new Date().getMonth()+6))},{label:"A year from now",date:new Date(new Date().setFullYear(new Date().getFullYear()+1))}],s={args:{toDate:new Date}},o={args:{enableYearNavigation:!0}},l={args:{presets:Q}},i={args:{showTimePicker:!0}},d={args:{placeholder:"Choisissez une date",locale:K,translations:{cancel:"Annuler",apply:"Applicer"},presets:[{label:"Aujourd'hui",date:new Date},{label:"Demain",date:new Date(new Date().setDate(new Date().getDate()+1))},{label:"Dans une semaine",date:new Date(new Date().setDate(new Date().getDate()+7))},{label:"Dans un mois",date:new Date(new Date().setMonth(new Date().getMonth()+1))},{label:"Dans un an",date:new Date(new Date().setFullYear(new Date().getFullYear()+1))},{label:"Hier",date:new Date(new Date().setDate(new Date().getDate()-1))},{label:"La semaine dernière",date:new Date(new Date().setDate(new Date().getDate()-7))},{label:"Le mois dernier",date:new Date(new Date().setMonth(new Date().getMonth()-1))},{label:"L'année dernière",date:new Date(new Date().setFullYear(new Date().getFullYear()-1))}]}},U=()=>{const[a,t]=u.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-6 text-gray-500",children:a?a.toString():"Select a date"}),e.jsxs("div",{className:"flex w-80 gap-2",children:[e.jsx(n,{value:a,onChange:w=>{t(w)}}),e.jsx(r,{variant:"destructive",onClick:()=>t(void 0),children:"Reset"}),e.jsx(r,{variant:"secondary",onClick:()=>t(new Date),children:"Today"})]})]})},c={render:()=>e.jsx(U,{})},X=()=>{const[a,t]=u.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-6 text-gray-500",children:a?a.toString():"Select a date"}),e.jsxs("div",{className:"flex w-96 gap-2",children:[e.jsx(n,{className:"w-60",showTimePicker:!0,value:a,onChange:w=>{t(w)}}),e.jsx(r,{variant:"destructive",onClick:()=>t(void 0),children:"Reset"}),e.jsx(r,{variant:"secondary",onClick:()=>t(new Date),children:"Today"})]})]})},m={render:()=>e.jsx(X,{})},Z=({value:a,onChange:t})=>e.jsxs(G,{children:[e.jsx(I,{asChild:!0,children:e.jsx(r,{children:"Open"})}),e.jsxs(J,{children:[e.jsx(n,{value:a,onChange:t}),e.jsx(q,{}),e.jsxs("div",{className:"flex items-center justify-between gap-x-2 px-3 py-2 [&_button]:w-full",children:[e.jsx(g,{asChild:!0,children:e.jsx(r,{variant:"secondary",children:"Clear"})}),e.jsx(g,{asChild:!0,children:e.jsx(r,{children:"Apply"})})]})]})]}),D={args:{align:"end"},parameters:{layout:"centered"}},$=()=>{const[a,t]=u.useState(void 0);return e.jsx("div",{className:"flex w-40 flex-col gap-y-4",children:e.jsx(Z,{value:a,onChange:t})})},p={render:()=>e.jsx($,{})};var h,x,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    toDate: new Date()
  }
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var v,b,C;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    enableYearNavigation: true
  }
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var f,S,P;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    presets
  }
}`,...(P=(S=l.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var y,N,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    showTimePicker: true
  }
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var Y,k,A;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    placeholder: "Choisissez une date",
    locale: fr,
    translations: {
      cancel: "Annuler",
      apply: "Applicer"
    },
    presets: [{
      label: "Aujourd'hui",
      date: new Date()
    }, {
      label: "Demain",
      date: new Date(new Date().setDate(new Date().getDate() + 1))
    }, {
      label: "Dans une semaine",
      date: new Date(new Date().setDate(new Date().getDate() + 7))
    }, {
      label: "Dans un mois",
      date: new Date(new Date().setMonth(new Date().getMonth() + 1))
    }, {
      label: "Dans un an",
      date: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    }, {
      label: "Hier",
      date: new Date(new Date().setDate(new Date().getDate() - 1))
    }, {
      label: "La semaine dernière",
      date: new Date(new Date().setDate(new Date().getDate() - 7))
    }, {
      label: "Le mois dernier",
      date: new Date(new Date().setMonth(new Date().getMonth() - 1))
    }, {
      label: "L'année dernière",
      date: new Date(new Date().setFullYear(new Date().getFullYear() - 1))
    }]
  }
}`,...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var F,M,L;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <ControlledDemo />
}`,...(L=(M=c.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var E,z,W;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ControlledTimeDemo />
}`,...(W=(z=m.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var R,V,_;D.parameters={...D.parameters,docs:{...(R=D.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    align: "end"
  },
  parameters: {
    layout: "centered"
  }
}`,...(_=(V=D.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var B,H,O;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <PopoverNestedDemo />
}`,...(O=(H=p.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const Te=["Single","WithYearNavigation","SingleWithPresets","ShowTimePicker","Localized","Controlled","ControlledTime","AlignEnd","PopoverNestedControlled"];export{D as AlignEnd,c as Controlled,m as ControlledTime,d as Localized,p as PopoverNestedControlled,i as ShowTimePicker,s as Single,l as SingleWithPresets,o as WithYearNavigation,Te as __namedExportsOrder,Ne as default};
