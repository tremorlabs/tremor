import{j as r}from"./jsx-runtime-CfatFE5O.js";import{r as S}from"./index-ClcD9ViR.js";import{C as P,f as V}from"./Calendar-Bs0M0WIi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BWmfHM-C.js";import"./cx-CYgzbKIn.js";import"./focusRing-49zpLVVu.js";const X=({mode:e,...D})=>{var b,y;const[a,t]=S.useState(void 0),[n,Q]=S.useState(void 0);return r.jsxs("div",{className:"flex flex-col items-center gap-y-4",children:[r.jsx(P,{"data-testid":"react-day-picker-calendar",mode:e,selected:e==="single"?a:n,onSelect:e==="single"?t:Q,...D}),e==="single"&&r.jsxs("p",{className:"rounded bg-gray-100 p-2 text-gray-500 dark:bg-gray-800 dark:text-gray-300",children:["Selected Date: ",a?a.toDateString():"None"]}),e==="range"&&r.jsxs("p",{className:"rounded bg-gray-100 p-2 text-gray-500 dark:bg-gray-800 dark:text-gray-300",children:["Selected Range:"," ",n?`${(b=n.from)==null?void 0:b.toDateString()} – ${((y=n.to)==null?void 0:y.toDateString())??""}`:"None"]})]})},oe={title:"ui/Calendar",component:P,render:X},s={args:{mode:"single"}},o={args:{mode:"single",enableYearNavigation:!0}},i={args:{mode:"single",enableYearNavigation:!0,disableNavigation:!0}},g={args:{mode:"single",numberOfMonths:2}},d={args:{mode:"single",numberOfMonths:2,enableYearNavigation:!0}},c={args:{mode:"range"}},l={args:{mode:"range",numberOfMonths:2}},m={args:{mode:"single",locale:V}},u={args:{mode:"single",disabled:(()=>{const e=new Date,D=(8-e.getDay())%7,a=new Date(e.getFullYear(),e.getMonth(),e.getDate()+D);e.getDay()===0&&a.setDate(e.getDate()+1);const t=new Date(a.getFullYear(),a.getMonth(),a.getDate()),n=new Date(t.getFullYear(),t.getMonth(),t.getDate()+6);return[{from:t,to:n}]})()}},p={args:{mode:"single",enableYearNavigation:!0,toDate:new Date}};var N,h,M;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    mode: "single"
  }
}`,...(M=(h=s.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var x,v,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    mode: "single",
    enableYearNavigation: true
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var Y,w,R;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    mode: "single",
    enableYearNavigation: true,
    disableNavigation: true
  }
}`,...(R=(w=i.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var W,k,O;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    mode: "single",
    numberOfMonths: 2
  }
}`,...(O=(k=g.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var j,E,F;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    mode: "single",
    numberOfMonths: 2,
    enableYearNavigation: true
  }
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var T,L,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    mode: "range"
  }
}`,...(C=(L=c.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var U,_,$;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    mode: "range",
    numberOfMonths: 2
  }
}`,...($=(_=l.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var q,z,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    mode: "single",
    locale: fr
  }
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,G,H;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    mode: "single",
    disabled: (() => {
      const today = new Date();
      const daysUntilNextMonday = (8 - today.getDay()) % 7;
      const nextMonday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysUntilNextMonday);
      if (today.getDay() === 0) {
        nextMonday.setDate(today.getDate() + 1);
      }
      const disableStart = new Date(nextMonday.getFullYear(), nextMonday.getMonth(), nextMonday.getDate());
      const disableEnd = new Date(disableStart.getFullYear(), disableStart.getMonth(), disableStart.getDate() + 6);
      return [{
        from: disableStart,
        to: disableEnd
      }];
    })()
  }
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    mode: "single",
    enableYearNavigation: true,
    toDate: new Date()
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ie=["Single","SingleWithYearNavigation","SingleDisableNavigation","SingleTwoMonth","SingleTwoMonthWithYearNavigation","Range","RangeTwoMonth","Locale","DisabledNextWeek","WithYearNavigationLimited"];export{u as DisabledNextWeek,m as Locale,c as Range,l as RangeTwoMonth,s as Single,i as SingleDisableNavigation,g as SingleTwoMonth,d as SingleTwoMonthWithYearNavigation,o as SingleWithYearNavigation,p as WithYearNavigationLimited,ie as __namedExportsOrder,oe as default};
