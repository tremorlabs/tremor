import{j as m}from"./jsx-runtime-CfatFE5O.js";import{S as p}from"./SparkChart-Dd58rh1M.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chartColors-CTMckKCA.js";import"./cx-CYgzbKIn.js";import"./getYAxisDomain-G3OsYyu1.js";import"./generateCategoricalChart-DR9uWRoX.js";import"./tiny-invariant-CopsF_GD.js";import"./AreaChart-iRocy0Pi.js";import"./Area-DJv05xvA.js";import"./LineChart-BreHMu7Q.js";import"./Line-BEyJVF29.js";import"./BarChart-qGzaN6dC.js";const a=[{date:"Jan 23",SolarCells:2890,Glass:2338,Encapsulant:1450,BackSheet:1900,Frame:1600,JunctionBox:1800,Adhesive:1700},{date:"Feb 23",SolarCells:2756,Glass:2103,Encapsulant:1200,BackSheet:1850,Frame:1700,JunctionBox:1750,Adhesive:1650},{date:"Mar 23",SolarCells:3322,Glass:2194,Encapsulant:1300,BackSheet:2200,Frame:1400,JunctionBox:2e3,Adhesive:800},{date:"Apr 23",SolarCells:3470,Glass:2108,Encapsulant:1400,BackSheet:1600,Frame:1800,JunctionBox:1900,Adhesive:-1950},{date:"May 23",SolarCells:3475,Glass:1812,Encapsulant:1550,BackSheet:2300,Frame:1450,JunctionBox:2200,Adhesive:-1600},{date:"Jun 23",SolarCells:3129,Glass:1726,Encapsulant:1350,BackSheet:2100,Frame:1750,JunctionBox:2050,Adhesive:-1700},{date:"Jul 23",SolarCells:3490,Glass:1982,Encapsulant:1450,BackSheet:1950,Frame:1500,JunctionBox:2300,Adhesive:-1800},{date:"Aug 23",SolarCells:2903,Glass:2012,Encapsulant:1250,BackSheet:1700,Frame:1850,JunctionBox:2150,Adhesive:-1900},{date:"Sep 23",SolarCells:2643,Glass:2342,Encapsulant:1400,BackSheet:1600,Frame:1500,JunctionBox:2e3,Adhesive:-3750},{date:"Oct 23",SolarCells:2837,Glass:2473,Encapsulant:1350,BackSheet:1850,Frame:1900,JunctionBox:2100,Adhesive:-2600},{date:"Nov 23",SolarCells:2954,Glass:3848,Encapsulant:1200,BackSheet:2e3,Frame:1750,JunctionBox:2400,Adhesive:-2950},{date:"Dec 23",SolarCells:3239,Glass:3736,Encapsulant:1550,BackSheet:1700,Frame:1600,JunctionBox:2250,Adhesive:-3800}],da={title:"visualization/SparkAreaChart",component:p,args:{data:a,index:"date",categories:["SolarCells","Glass"]}},e={render:()=>m.jsx(p,{"data-testid":"spark-area-chart",data:a,index:"date",categories:["SolarCells","Glass"]})},s={args:{categories:["SolarCells","Adhesive"]}},r={args:{fill:"solid"}},t={args:{fill:"none"}},o={args:{autoMinValue:!0}},l={args:{maxValue:5e3,minValue:-3e3}},n={args:{data:a,index:"date",categories:["SolarCells","Glass","Encapsulant","BackSheet","Frame","JunctionBox","Adhesive"]}},c={args:{colors:["amber","cyan"]}},i={args:{data:a.map((S,h)=>{let g=S.Glass;return h>5&&h<8&&(g=null),{date:S.date,Glass:g}}),index:"date",categories:["SolarCells","Glass"],colors:["amber","cyan"],connectNulls:!1}},d={render:()=>m.jsx(p,{data:a,index:"date",categories:["SolarCells","Glass"],type:"percent"})},u={render:()=>m.jsx(p,{data:a,index:"date",categories:["SolarCells","Glass"],type:"stacked"})};var x,C,B;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <SparkAreaChart data-testid="spark-area-chart" data={chartdata} index="date" categories={["SolarCells", "Glass"]} />
}`,...(B=(C=e.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var G,A,k;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    categories: ["SolarCells", "Adhesive"]
  }
}`,...(k=(A=s.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var F,v,f;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    fill: "solid"
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var J,E,V;t.parameters={...t.parameters,docs:{...(J=t.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    fill: "none"
  }
}`,...(V=(E=t.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var W,y,M;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    autoMinValue: true
  }
}`,...(M=(y=o.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var N,b,j;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    maxValue: 5000,
    minValue: -3000
  }
}`,...(j=(b=l.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var D,T,O;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: chartdata,
    index: "date",
    categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"]
  }
}`,...(O=(T=n.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var P,_,z;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    colors: ["amber", "cyan"]
  }
}`,...(z=(_=c.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var R,q,w;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(w=(q=i.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var H,I,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <SparkAreaChart data={chartdata} index="date" categories={["SolarCells", "Glass"]} type="percent" />
}`,...(K=(I=d.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var L,Q,U;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <SparkAreaChart data={chartdata} index="date" categories={["SolarCells", "Glass"]} type="stacked" />
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ua=["Default","DefaultNegative","WithFillSolid","WithFillNone","WithMinValue","WithMinAndMaxValue","AllColors","ShiftColors","WithConnectNullsFalse","WithTypePercent","WithTypeStacked"];export{n as AllColors,e as Default,s as DefaultNegative,c as ShiftColors,i as WithConnectNullsFalse,t as WithFillNone,r as WithFillSolid,l as WithMinAndMaxValue,o as WithMinValue,d as WithTypePercent,u as WithTypeStacked,ua as __namedExportsOrder,da as default};
