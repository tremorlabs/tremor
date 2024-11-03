import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as g}from"./index-ClcD9ViR.js";import{B as w}from"./Button-BKBEGp9E.js";import{a as p}from"./DatePicker-BXF9RHG3.js";import{f as B}from"./Calendar-Bs0M0WIi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ClVxAquS.js";import"./index-BWmfHM-C.js";import"./index-CF-iJ_jy.js";import"./cx-CYgzbKIn.js";import"./focusRing-49zpLVVu.js";import"./index-HOHGevfs.js";import"./index-D-jls2fw.js";import"./index-8isb7LcM.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./Combination-BH2yWiU8.js";import"./index-ZVc5Krty.js";import"./index-a6sp4N9A.js";import"./index-VEzCCWBB.js";import"./index-DSWkTB7Z.js";import"./index-B7xKYiWN.js";import"./index-CkP846ZC.js";import"./focusInput-B1nbZ1LY.js";import"./hasErrorInput-DaEl1nS1.js";const ue={title:"ui/DateRangePicker",component:p,render:a=>e.jsx("div",{className:"w-60",children:e.jsx(p,{...a})})},I=[{label:"Today",dateRange:{from:new Date,to:new Date}},{label:"Last 7 days",dateRange:{from:new Date(new Date().setDate(new Date().getDate()-7)),to:new Date}},{label:"Last 30 days",dateRange:{from:new Date(new Date().setDate(new Date().getDate()-30)),to:new Date}},{label:"Last 3 months",dateRange:{from:new Date(new Date().setMonth(new Date().getMonth()-3)),to:new Date}},{label:"Last 6 months",dateRange:{from:new Date(new Date().setMonth(new Date().getMonth()-6)),to:new Date}},{label:"Month to date",dateRange:{from:new Date(new Date().setDate(1)),to:new Date}},{label:"Year to date",dateRange:{from:new Date(new Date().setFullYear(new Date().getFullYear(),0,1)),to:new Date}}],o={args:{}},s={args:{enableYearNavigation:!0}},l={args:{showTimePicker:!0}},i={args:{presets:I}},c={args:{placeholder:"Choisissez une date",locale:B,translations:{cancel:"Annuler",apply:"Applicer",range:"Intervalle de dates"},presets:[{label:"Aujourd'hui",dateRange:{from:new Date,to:new Date}},{label:"7 derniers jours",dateRange:{from:new Date(new Date().setDate(new Date().getDate()-7)),to:new Date}},{label:"30 derniers jours",dateRange:{from:new Date(new Date().setDate(new Date().getDate()-30)),to:new Date}},{label:"3 derniers mois",dateRange:{from:new Date(new Date().setMonth(new Date().getMonth()-3)),to:new Date}},{label:"6 derniers mois",dateRange:{from:new Date(new Date().setMonth(new Date().getMonth()-6)),to:new Date}},{label:"Mois en cours",dateRange:{from:new Date(new Date().setDate(1)),to:new Date}},{label:"Année en cours",dateRange:{from:new Date(new Date().setFullYear(new Date().getFullYear(),0,1)),to:new Date}}]}},m={args:{align:"end"},parameters:{layout:"centered"}},_=()=>{var r,n;const[a,t]=g.useState(void 0);return g.useEffect(()=>{console.log("Value changed: ",a)},[a]),e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-6 text-gray-500",children:a?`${(r=a.from)==null?void 0:r.toDateString()} – ${(n=a.to)==null?void 0:n.toDateString()}`:"Select a date"}),e.jsxs("div",{className:"flex w-80 gap-2",children:[e.jsx(p,{value:a,onChange:u=>{t(u)}}),e.jsx(w,{variant:"destructive",onClick:()=>t(void 0),children:"Reset"}),e.jsx(w,{variant:"secondary",onClick:()=>t({from:new Date(new Date().setDate(new Date().getDate()-7)),to:new Date}),children:"Week"})]})]})},d={render:()=>e.jsx(_,{})},O=()=>{var r,n;const[a,t]=g.useState(void 0);return g.useEffect(()=>{console.log("Value changed: ",a)},[a]),e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-6 text-gray-500",children:a?`${(r=a.from)==null?void 0:r.toString()} – ${(n=a.to)==null?void 0:n.toString()}`:"Select a date"}),e.jsxs("div",{className:"flex w-80 gap-2",children:[e.jsx(p,{showTimePicker:!0,value:a,onChange:u=>{t(u)}}),e.jsx(w,{variant:"destructive",onClick:()=>t(void 0),children:"Reset"}),e.jsx(w,{variant:"secondary",onClick:()=>t({from:new Date(new Date().setDate(new Date().getDate()-7)),to:new Date}),children:"Week"})]})]})},D={render:()=>e.jsx(O,{})};var h,f,R;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {}
}`,...(R=(f=o.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var b,x,j;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    enableYearNavigation: true
  }
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var v,S,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showTimePicker: true
  }
}`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var M,k,y;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    presets: rangePresets
  }
}`,...(y=(k=i.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var P,Y,A;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: "Choisissez une date",
    locale: fr,
    translations: {
      cancel: "Annuler",
      apply: "Applicer",
      range: "Intervalle de dates"
    },
    presets: [{
      label: "Aujourd'hui",
      dateRange: {
        from: new Date(),
        to: new Date()
      }
    }, {
      label: "7 derniers jours",
      dateRange: {
        from: new Date(new Date().setDate(new Date().getDate() - 7)),
        to: new Date()
      }
    }, {
      label: "30 derniers jours",
      dateRange: {
        from: new Date(new Date().setDate(new Date().getDate() - 30)),
        to: new Date()
      }
    }, {
      label: "3 derniers mois",
      dateRange: {
        from: new Date(new Date().setMonth(new Date().getMonth() - 3)),
        to: new Date()
      }
    }, {
      label: "6 derniers mois",
      dateRange: {
        from: new Date(new Date().setMonth(new Date().getMonth() - 6)),
        to: new Date()
      }
    }, {
      label: "Mois en cours",
      dateRange: {
        from: new Date(new Date().setDate(1)),
        to: new Date()
      }
    }, {
      label: "Année en cours",
      dateRange: {
        from: new Date(new Date().setFullYear(new Date().getFullYear(), 0, 1)),
        to: new Date()
      }
    }]
  }
}`,...(A=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:A.source}}};var T,N,F;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    align: "end"
  },
  parameters: {
    layout: "centered"
  }
}`,...(F=(N=m.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var E,L,W;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <ControlledRangeDemo />
}`,...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var z,V,$;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <ControlledTimeRangeDemo />
}`,...($=(V=D.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};const he=["Range","WithYearNavigation","ShowTimePicker","RangeWithPresets","Localized","AlignEnd","ControlledRange","ControlledTimeRange"];export{m as AlignEnd,d as ControlledRange,D as ControlledTimeRange,c as Localized,o as Range,i as RangeWithPresets,l as ShowTimePicker,s as WithYearNavigation,he as __namedExportsOrder,ue as default};
