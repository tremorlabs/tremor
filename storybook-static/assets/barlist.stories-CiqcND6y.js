import{j as e}from"./jsx-runtime-CfatFE5O.js";import{R as m}from"./index-ClcD9ViR.js";import{c as s}from"./cx-CYgzbKIn.js";import{f as w}from"./focusRing-49zpLVVu.js";import"./_commonjsHelpers-Cpj98o6Y.js";function K({data:t=[],valueFormatter:o=S=>S.toString(),showAnimation:i=!1,onValueChange:n,sortOrder:u="descending",className:X,...Y},Z){const S=n?"button":"div",l=m.useMemo(()=>u==="none"?t:[...t].sort((a,r)=>u==="ascending"?a.value-r.value:r.value-a.value),[t,u]),ee=m.useMemo(()=>{const a=Math.max(...l.map(r=>r.value),0);return l.map(r=>r.value===0?0:Math.max(r.value/a*100,2))},[l]),k="h-8";return e.jsxs("div",{ref:Z,className:s("flex justify-between space-x-6",X),"aria-sort":u,"tremor-id":"tremor-raw",...Y,children:[e.jsx("div",{className:"relative w-full space-y-1.5",children:l.map((a,r)=>e.jsx(S,{onClick:()=>{n==null||n(a)},className:s("group w-full rounded",w,n?["!-m-0 cursor-pointer","hover:bg-gray-50 hover:dark:bg-gray-900"]:""),children:e.jsx("div",{className:s("flex items-center rounded transition-all",k,"bg-blue-200 dark:bg-blue-900",n?"group-hover:bg-blue-300 group-hover:dark:bg-blue-800":"",{"mb-0":r===l.length-1,"duration-800":i}),style:{width:`${ee[r]}%`},children:e.jsx("div",{className:s("absolute left-2 flex max-w-full pr-2"),children:a.href?e.jsx("a",{href:a.href,className:s("truncate whitespace-nowrap rounded text-sm","text-gray-900 dark:text-gray-50","hover:underline hover:underline-offset-2",w),target:"_blank",rel:"noreferrer",onClick:ae=>ae.stopPropagation(),children:a.name}):e.jsx("p",{className:s("truncate whitespace-nowrap text-sm","text-gray-900 dark:text-gray-50"),children:a.name})})})},a.key??a.name))}),e.jsx("div",{children:l.map((a,r)=>e.jsx("div",{className:s("flex items-center justify-end",k,r===l.length-1?"mb-0":"mb-1.5"),children:e.jsx("p",{className:s("truncate whitespace-nowrap text-sm leading-none","text-gray-900 dark:text-gray-50"),children:o(a.value)})},a.key??a.name))})]})}K.displayName="BarList";const d=m.forwardRef(K);d.__docgenInfo={description:"",methods:[],displayName:"BarList",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`T & {
  key?: string
  href?: string
  value: number
  name: string
}`,elements:[{name:"T"},{name:"signature",type:"object",raw:`{
  key?: string
  href?: string
  value: number
  name: string
}`,signature:{properties:[{key:"key",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"value",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}]}],raw:"Bar<T>[]"},description:"",defaultValue:{value:"[]",computed:!1}},valueFormatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"",defaultValue:{value:"(value) => value.toString()",computed:!1}},showAnimation:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(payload: Bar<T>) => void",signature:{arguments:[{type:{name:"intersection",raw:`T & {
  key?: string
  href?: string
  value: number
  name: string
}`,elements:[{name:"T"},{name:"signature",type:"object",raw:`{
  key?: string
  href?: string
  value: number
  name: string
}`,signature:{properties:[{key:"key",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!1}},{key:"value",value:{name:"number",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}]},name:"payload"}],return:{name:"void"}}},description:""},sortOrder:{required:!1,tsType:{name:"union",raw:'"ascending" | "descending" | "none"',elements:[{name:"literal",value:'"ascending"'},{name:"literal",value:'"descending"'},{name:"literal",value:'"none"'}]},description:"",defaultValue:{value:'"descending"',computed:!1}}}};const le={title:"visualization/BarList",component:d,render:t=>e.jsx(d,{"data-testid":"barlist",...t})},b=[{name:"/home",value:843},{name:"/imprint",value:46},{name:"/cancellation",value:3},{name:"/blocks",value:108},{name:"/documentation",value:384}],Q=[{name:"/home",value:100},{name:"/imprint",value:100},{name:"/cancellation",value:100},{name:"/blocks",value:100},{name:"/documentation",value:100}],U=[{name:"/home",value:843,href:"https://tremor.so"},{name:"/imprint",value:46,href:"https://tremor.so"},{name:"/cancellation",value:3,href:"https://tremor.so"},{name:"/blocks",value:108,href:"https://tremor.so"},{name:"/documentation",value:384,href:"https://tremor.so"}],c={args:{data:b}},g={args:{data:U,valueFormatter:t=>`${t} Visitors`}},p={args:{data:b,sortOrder:"ascending"}},f={args:{data:b,sortOrder:"none"}},v={args:{data:b},render:t=>{const[o,i]=m.useState("");return e.jsxs("div",{className:"relative flex flex-col gap-3",children:[e.jsx(d,{"data-testid":"barlist-onvaluechange",onValueChange:n=>i(JSON.stringify(n,null,2)),...t}),e.jsx("pre",{className:"w-fit rounded-md bg-gray-100 p-2 font-mono text-sm text-gray-700",children:o===""?"Click on a bar":o})]})}},h={args:{data:U},render:t=>{const[o,i]=m.useState("");return e.jsxs("div",{className:"relative flex flex-col gap-3",children:[e.jsx(d,{"data-testid":"barlist-onvaluechangehref",onValueChange:n=>i(JSON.stringify(n,null,2)),...t}),e.jsx("pre",{className:"w-fit rounded-md bg-gray-100 p-2 font-mono text-sm text-gray-700",children:o===""?"Click on a bar":o})]})}},y={args:{onValueChange:()=>{},data:Q}},x={args:{data:Q}};var N,j,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    data: data
  }
}`,...(O=(j=c.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var I,V,q;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data: dataHref,
    valueFormatter: value => \`\${value} Visitors\`
  }
}`,...(q=(V=g.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var C,W,T;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    data: data,
    sortOrder: "ascending"
  }
}`,...(T=(W=p.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var B,A,H;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    data: data,
    sortOrder: "none"
  }
}`,...(H=(A=f.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var D,L,R;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    data: data
  },
  render: args => {
    const [selectedItem, setSelectedItem] = React.useState("");
    return <div className="relative flex flex-col gap-3">
        <BarList data-testid="barlist-onvaluechange" onValueChange={item => setSelectedItem(JSON.stringify(item, null, 2))} {...args} />
        <pre className="w-fit rounded-md bg-gray-100 p-2 font-mono text-sm text-gray-700">
          {selectedItem === "" ? "Click on a bar" : selectedItem}
        </pre>
      </div>;
  }
}`,...(R=(L=v.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var F,_,J;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    data: dataHref
  },
  render: args => {
    const [selectedItem, setSelectedItem] = React.useState("");
    return <div className="relative flex flex-col gap-3">
        <BarList data-testid="barlist-onvaluechangehref" onValueChange={item => setSelectedItem(JSON.stringify(item, null, 2))} {...args} />
        <pre className="w-fit rounded-md bg-gray-100 p-2 font-mono text-sm text-gray-700">
          {selectedItem === "" ? "Click on a bar" : selectedItem}
        </pre>
      </div>;
  }
}`,...(J=(_=h.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var M,$,E;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    onValueChange: () => {},
    data: dataSame
  }
}`,...(E=($=y.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var z,P,G;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    data: dataSame
  }
}`,...(G=(P=x.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};const ie=["Default","WithHrefAndValueFormatter","WithSortOrderAscending","WithSortOrderNone","WithOnValueChange","WithOnValueChangeAndHref","DataSameWithOnValueChange","DataSame"];export{x as DataSame,y as DataSameWithOnValueChange,c as Default,g as WithHrefAndValueFormatter,v as WithOnValueChange,h as WithOnValueChangeAndHref,p as WithSortOrderAscending,f as WithSortOrderNone,ie as __namedExportsOrder,le as default};
