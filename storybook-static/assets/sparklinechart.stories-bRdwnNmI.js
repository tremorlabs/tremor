import{j as y}from"./jsx-runtime-CfatFE5O.js";import{b as W}from"./SparkChart-Dd58rh1M.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chartColors-CTMckKCA.js";import"./cx-CYgzbKIn.js";import"./getYAxisDomain-G3OsYyu1.js";import"./generateCategoricalChart-DR9uWRoX.js";import"./tiny-invariant-CopsF_GD.js";import"./AreaChart-iRocy0Pi.js";import"./Area-DJv05xvA.js";import"./LineChart-BreHMu7Q.js";import"./Line-BEyJVF29.js";import"./BarChart-qGzaN6dC.js";const o=[{date:"Jan 23",SolarCells:2890,Glass:2338,Encapsulant:1450,BackSheet:1900,Frame:1600,JunctionBox:1800,Adhesive:1700},{date:"Feb 23",SolarCells:2756,Glass:2103,Encapsulant:1200,BackSheet:1850,Frame:1700,JunctionBox:1750,Adhesive:1650},{date:"Mar 23",SolarCells:3322,Glass:2194,Encapsulant:1300,BackSheet:2200,Frame:1400,JunctionBox:2e3,Adhesive:800},{date:"Apr 23",SolarCells:3470,Glass:2108,Encapsulant:1400,BackSheet:1600,Frame:1800,JunctionBox:1900,Adhesive:-1950},{date:"May 23",SolarCells:3475,Glass:1812,Encapsulant:1550,BackSheet:2300,Frame:1450,JunctionBox:2200,Adhesive:-1600},{date:"Jun 23",SolarCells:3129,Glass:1726,Encapsulant:1350,BackSheet:2100,Frame:1750,JunctionBox:2050,Adhesive:-1700},{date:"Jul 23",SolarCells:3490,Glass:1982,Encapsulant:1450,BackSheet:1950,Frame:1500,JunctionBox:2300,Adhesive:-1800},{date:"Aug 23",SolarCells:2903,Glass:2012,Encapsulant:1250,BackSheet:1700,Frame:1850,JunctionBox:2150,Adhesive:-1900},{date:"Sep 23",SolarCells:2643,Glass:2342,Encapsulant:1400,BackSheet:1600,Frame:1500,JunctionBox:2e3,Adhesive:-3750},{date:"Oct 23",SolarCells:2837,Glass:2473,Encapsulant:1350,BackSheet:1850,Frame:1900,JunctionBox:2100,Adhesive:-2600},{date:"Nov 23",SolarCells:2954,Glass:3848,Encapsulant:1200,BackSheet:2e3,Frame:1750,JunctionBox:2400,Adhesive:-2950},{date:"Dec 23",SolarCells:3239,Glass:3736,Encapsulant:1550,BackSheet:1700,Frame:1600,JunctionBox:2250,Adhesive:-3800}],T={title:"visualization/SparkLineChart",component:W,args:{data:o,index:"date",categories:["SolarCells","Glass"]}},a={render:()=>y.jsx(W,{"data-testid":"spark-line-chart",data:o,index:"date",categories:["SolarCells","Glass"]})},e={args:{categories:["SolarCells","Adhesive"]}},s={args:{autoMinValue:!0}},r={args:{maxValue:5e3,minValue:-3e3}},t={args:{data:o,index:"date",categories:["SolarCells","Glass","Encapsulant","BackSheet","Frame","JunctionBox","Adhesive"]}},n={args:{colors:["amber","cyan"]}},l={args:{data:o.map((c,i)=>{let d=c.Glass;return i>5&&i<8&&(d=null),{date:c.date,Glass:d}}),index:"date",categories:["SolarCells","Glass"],colors:["amber","cyan"],connectNulls:!1}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <SparkLineChart data-testid="spark-line-chart" data={chartdata} index="date" categories={["SolarCells", "Glass"]} />
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var S,h,g;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    categories: ["SolarCells", "Adhesive"]
  }
}`,...(g=(h=e.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,C,B;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    autoMinValue: true
  }
}`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var G,A,v;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    maxValue: 5000,
    minValue: -3000
  }
}`,...(v=(A=r.parameters)==null?void 0:A.docs)==null?void 0:v.source}}};var k,F,J;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    data: chartdata,
    index: "date",
    categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"]
  }
}`,...(J=(F=t.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var E,V,f;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    colors: ["amber", "cyan"]
  }
}`,...(f=(V=n.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var M,b,N;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(b=l.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};const U=["Default","DefaultNegative","WithMinValue","WithMinAndMaxValue","AllColors","ShiftColors","WithConnectNullsFalse"];export{t as AllColors,a as Default,e as DefaultNegative,n as ShiftColors,l as WithConnectNullsFalse,r as WithMinAndMaxValue,s as WithMinValue,U as __namedExportsOrder,T as default};
