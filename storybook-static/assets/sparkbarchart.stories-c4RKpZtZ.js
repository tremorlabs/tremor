import{j as u}from"./jsx-runtime-CfatFE5O.js";import{a as d}from"./SparkChart-Dd58rh1M.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chartColors-CTMckKCA.js";import"./cx-CYgzbKIn.js";import"./getYAxisDomain-G3OsYyu1.js";import"./generateCategoricalChart-DR9uWRoX.js";import"./tiny-invariant-CopsF_GD.js";import"./AreaChart-iRocy0Pi.js";import"./Area-DJv05xvA.js";import"./LineChart-BreHMu7Q.js";import"./Line-BEyJVF29.js";import"./BarChart-qGzaN6dC.js";const a=[{date:"Jan 23",SolarCells:2890,Glass:2338,Encapsulant:1450,BackSheet:1900,Frame:1600,JunctionBox:1800,Adhesive:1700},{date:"Feb 23",SolarCells:2756,Glass:2103,Encapsulant:1200,BackSheet:1850,Frame:1700,JunctionBox:1750,Adhesive:1650},{date:"Mar 23",SolarCells:3322,Glass:2194,Encapsulant:1300,BackSheet:2200,Frame:1400,JunctionBox:2e3,Adhesive:800},{date:"Apr 23",SolarCells:3470,Glass:2108,Encapsulant:1400,BackSheet:1600,Frame:1800,JunctionBox:1900,Adhesive:-1950},{date:"May 23",SolarCells:3475,Glass:1812,Encapsulant:1550,BackSheet:2300,Frame:1450,JunctionBox:2200,Adhesive:-1600},{date:"Jun 23",SolarCells:3129,Glass:1726,Encapsulant:1350,BackSheet:2100,Frame:1750,JunctionBox:2050,Adhesive:-1700},{date:"Jul 23",SolarCells:3490,Glass:1982,Encapsulant:1450,BackSheet:1950,Frame:1500,JunctionBox:2300,Adhesive:-1800},{date:"Aug 23",SolarCells:2903,Glass:2012,Encapsulant:1250,BackSheet:1700,Frame:1850,JunctionBox:2150,Adhesive:-1900},{date:"Sep 23",SolarCells:2643,Glass:2342,Encapsulant:1400,BackSheet:1600,Frame:1500,JunctionBox:2e3,Adhesive:-3750},{date:"Oct 23",SolarCells:2837,Glass:2473,Encapsulant:1350,BackSheet:1850,Frame:1900,JunctionBox:2100,Adhesive:-2600},{date:"Nov 23",SolarCells:2954,Glass:3848,Encapsulant:1200,BackSheet:2e3,Frame:1750,JunctionBox:2400,Adhesive:-2950},{date:"Dec 23",SolarCells:3239,Glass:3736,Encapsulant:1550,BackSheet:1700,Frame:1600,JunctionBox:2250,Adhesive:-3800}],sa={title:"visualization/SparkBarChart",component:d,args:{data:a,index:"date",categories:["SolarCells","Glass"]}},e={render:()=>u.jsx(d,{"data-testid":"spark-bar-chart",data:a,index:"date",categories:["SolarCells","Glass"]})},s={args:{categories:["SolarCells","Adhesive"]}},r={args:{autoMinValue:!0}},t={args:{maxValue:5e3,minValue:-3e3}},o={args:{data:a,index:"date",categories:["SolarCells","Glass","Encapsulant","BackSheet","Frame","JunctionBox","Adhesive"]}},n={args:{colors:["amber","cyan"]}},l={args:{data:a.map((p,m)=>{let S=p.Glass;return m>5&&m<8&&(S=null),{date:p.date,Glass:S}}),index:"date",categories:["SolarCells","Glass"],colors:["amber","cyan"]}},c={render:()=>u.jsx(d,{data:a,index:"date",categories:["SolarCells","Glass"],type:"percent"})},i={render:()=>u.jsx(d,{data:a,index:"date",categories:["SolarCells","Glass"],type:"stacked"})};var h,g,x;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <SparkBarChart data-testid="spark-bar-chart" data={chartdata} index="date" categories={["SolarCells", "Glass"]} />
}`,...(x=(g=e.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,B,G;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    categories: ["SolarCells", "Adhesive"]
  }
}`,...(G=(B=s.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var k,A,v;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    autoMinValue: true
  }
}`,...(v=(A=r.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var F,J,E;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    maxValue: 5000,
    minValue: -3000
  }
}`,...(E=(J=t.parameters)==null?void 0:J.docs)==null?void 0:E.source}}};var V,y,f;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    data: chartdata,
    index: "date",
    categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"]
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var M,W,b;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    colors: ["amber", "cyan"]
  }
}`,...(b=(W=n.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var j,D,N;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
    colors: ["amber", "cyan"]
  }
}`,...(N=(D=l.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var T,O,P;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <SparkBarChart data={chartdata} index="date" categories={["SolarCells", "Glass"]} type="percent" />
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var _,z,R;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <SparkBarChart data={chartdata} index="date" categories={["SolarCells", "Glass"]} type="stacked" />
}`,...(R=(z=i.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const ra=["Default","DefaultNegative","WithMinValue","WithMinAndMaxValue","AllColors","ShiftColors","WithConnectNullsFalse","WithTypePercent","WithTypeStacked"];export{o as AllColors,e as Default,s as DefaultNegative,n as ShiftColors,l as WithConnectNullsFalse,t as WithMinAndMaxValue,r as WithMinValue,c as WithTypePercent,i as WithTypeStacked,ra as __namedExportsOrder,sa as default};
