import{j as e}from"./jsx-runtime-CfatFE5O.js";import{k as y}from"./index-BWmfHM-C.js";import{B as N}from"./Badge-CRZPK1pY.js";import{R as r}from"./index-ClcD9ViR.js";import{c as d}from"./cx-CYgzbKIn.js";import"./index-CF-iJ_jy.js";import"./_commonjsHelpers-Cpj98o6Y.js";const m=r.forwardRef(({className:t,children:a,...s},f)=>e.jsx("div",{ref:f,children:e.jsx("div",{className:d("w-full overflow-auto whitespace-nowrap",t),...s,children:a})}));m.displayName="TableRoot";const c=r.forwardRef(({className:t,...a},s)=>e.jsx("table",{ref:s,"tremor-id":"tremor-raw",className:d("w-full caption-bottom border-b","border-gray-200 dark:border-gray-800",t),...a}));c.displayName="Table";const b=r.forwardRef(({className:t,...a},s)=>e.jsx("thead",{ref:s,className:d(t),...a}));b.displayName="TableHead";const l=r.forwardRef(({className:t,...a},s)=>e.jsx("th",{ref:s,className:d("border-b px-4 py-3.5 text-left text-sm font-semibold","text-gray-900 dark:text-gray-50","border-gray-200 dark:border-gray-800",t),...a}));l.displayName="TableHeaderCell";const p=r.forwardRef(({className:t,...a},s)=>e.jsx("tbody",{ref:s,className:d("divide-y","divide-gray-200 dark:divide-gray-800",t),...a}));p.displayName="TableBody";const n=r.forwardRef(({className:t,...a},s)=>e.jsx("tr",{ref:s,className:d("[&_td:last-child]:pr-4 [&_th:last-child]:pr-4","[&_td:first-child]:pl-4 [&_th:first-child]:pl-4",t),...a}));n.displayName="TableRow";const o=r.forwardRef(({className:t,...a},s)=>e.jsx("td",{ref:s,className:d("p-4 text-sm","text-gray-600 dark:text-gray-400",t),...a}));o.displayName="TableCell";const u=r.forwardRef(({className:t,...a},s)=>e.jsx("tfoot",{ref:s,className:d("border-t text-left font-medium","text-gray-900 dark:text-gray-50","border-gray-200 dark:border-gray-800",t),...a}));u.displayName="TableFoot";const g=r.forwardRef(({className:t,...a},s)=>e.jsx("caption",{ref:s,className:d("mt-3 px-3 text-center text-sm","text-gray-500 dark:text-gray-500",t),...a}));g.displayName="TableCaption";c.__docgenInfo={description:"",methods:[],displayName:"Table"};p.__docgenInfo={description:"",methods:[],displayName:"TableBody"};g.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};o.__docgenInfo={description:"",methods:[],displayName:"TableCell"};u.__docgenInfo={description:"",methods:[],displayName:"TableFoot"};b.__docgenInfo={description:"",methods:[],displayName:"TableHead"};l.__docgenInfo={description:"",methods:[],displayName:"TableHeaderCell"};m.__docgenInfo={description:"",methods:[],displayName:"TableRoot"};n.__docgenInfo={description:"",methods:[],displayName:"TableRow"};const D={title:"ui/Table",component:c},C=[{id:1,name:"Peter Doe",sales:"1.000.000",region:"Region A",status:"overperforming",deltaType:"moderateIncrease",hours:100,databaseStatus:"success"},{id:2,name:"Jon Doe",sales:"2.202.000",region:"Region B",status:"overperforming",deltaType:"moderateIncrease",hours:110,databaseStatus:"success"},{id:3,name:"Peter Doe",sales:"1.505.000",region:"Region C",status:"underperforming",deltaType:"moderateDecrease",hours:90,databaseStatus:"success"},{id:4,name:"Employee 4",sales:"500000",region:"Region D",status:"overperforming",deltaType:"moderateDecrease",hours:92,databaseStatus:"error"},{id:5,name:"Employee 5",sales:"600000",region:"Region E",status:"underperforming",deltaType:"moderateDecrease",hours:95,databaseStatus:"warning"},{id:6,name:"Employee 6",sales:"700000",region:"Region F",status:"overperforming",deltaType:"moderateIncrease",hours:98,databaseStatus:"warning"},{id:7,name:"Employee 7",sales:"800000",region:"Region G",status:"underperforming",deltaType:"moderateDecrease",hours:101,databaseStatus:"success"},{id:8,name:"Employee 8",sales:"900000",region:"Region H",status:"overperforming",deltaType:"moderateDecrease",hours:104,databaseStatus:"success"},{id:9,name:"Employee 9",sales:"1000000",region:"Region I",status:"underperforming",deltaType:"moderateIncrease",hours:107,databaseStatus:"success"},{id:10,name:"Employee 10",sales:"1100000",region:"Region J",status:"overperforming",deltaType:"moderateDecrease",hours:110,databaseStatus:"success"},{id:11,name:"Employee 11",sales:"1200000",region:"Region K",status:"underperforming",deltaType:"moderateDecrease",hours:113,databaseStatus:"success"},{id:12,name:"Employee 12",sales:"1300000",region:"Region L",status:"overperforming",deltaType:"moderateIncrease",hours:116,databaseStatus:"default"},{id:13,name:"Employee 13",sales:"1400000",region:"Region M",status:"underperforming",deltaType:"moderateDecrease",hours:119,databaseStatus:"default"}],i={render:t=>e.jsx(m,{"data-testid":"table-root",children:e.jsxs(c,{...t,"data-testid":"table",children:[e.jsx(g,{"data-testid":"table-caption",children:"A list of your recent invoices."}),e.jsx(b,{"data-testid":"table-head",children:e.jsxs(n,{"data-testid":"table-row",children:[e.jsx(l,{"data-testid":"table-header-cell",children:"Name"}),e.jsx(l,{className:"text-right",children:"Sales ($)"}),e.jsx(l,{children:"Region"}),e.jsx(l,{children:"Status"}),e.jsx(l,{className:"text-right",children:"Working Hours (h)"}),e.jsx(l,{className:"text-right",children:"Database Status"})]})}),e.jsx(p,{"data-testid":"table-body",children:C.map(a=>e.jsxs(n,{children:[e.jsx(o,{"data-testid":"table-cell",children:a.name}),e.jsx(o,{className:"text-right",children:a.sales}),e.jsx(o,{children:a.region}),e.jsx(o,{children:a.status}),e.jsx(o,{className:"text-right",children:a.hours}),e.jsx(o,{className:"text-right",children:e.jsxs(N,{variant:a.databaseStatus,className:"max-w-36",children:[a.databaseStatus==="default"&&e.jsx(y,{className:"size-4 shrink-0 animate-spin"}),e.jsxs("span",{className:"truncate",children:[a.databaseStatus==="default"?"Calculation Pending":null,a.databaseStatus==="warning"?"Not validated":null,a.databaseStatus==="error"?"Failed":null,a.databaseStatus==="success"?"Completed":null]})]})})]},a.id))}),e.jsx(u,{"data-testid":"table-foot",children:e.jsxs(n,{children:[e.jsx(l,{colSpan:2,scope:"row",className:"text-right",children:"4642"}),e.jsx(l,{colSpan:3,scope:"row",className:"text-right",children:"15h"}),e.jsx(l,{colSpan:1,scope:"row",className:"text-right",children:"n/a"})]})})]})})};var T,h,x;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <TableRoot data-testid="table-root">
      <Table {...args} data-testid="table">
        <TableCaption data-testid="table-caption">
          A list of your recent invoices.
        </TableCaption>
        <TableHead data-testid="table-head">
          <TableRow data-testid="table-row">
            <TableHeaderCell data-testid="table-header-cell">
              Name
            </TableHeaderCell>
            <TableHeaderCell className="text-right">Sales ($)</TableHeaderCell>
            <TableHeaderCell>Region</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Working Hours (h)
            </TableHeaderCell>
            <TableHeaderCell className="text-right">
              Database Status
            </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody data-testid="table-body">
          {data.map(item => <TableRow key={item.id}>
              <TableCell data-testid="table-cell">{item.name}</TableCell>
              <TableCell className="text-right">{item.sales}</TableCell>
              <TableCell>{item.region}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell className="text-right">{item.hours}</TableCell>
              <TableCell className="text-right">
                <Badge variant={item.databaseStatus} className="max-w-36">
                  {item.databaseStatus === "default" && <RiLoader3Line className="size-4 shrink-0 animate-spin" />}
                  <span className="truncate">
                    {item.databaseStatus === "default" ? "Calculation Pending" : null}
                    {item.databaseStatus === "warning" ? "Not validated" : null}
                    {item.databaseStatus === "error" ? "Failed" : null}
                    {item.databaseStatus === "success" ? "Completed" : null}
                  </span>
                </Badge>
              </TableCell>
            </TableRow>)}
        </TableBody>
        <TableFoot data-testid="table-foot">
          <TableRow>
            <TableHeaderCell colSpan={2} scope="row" className="text-right">
              4642
            </TableHeaderCell>
            <TableHeaderCell colSpan={3} scope="row" className="text-right">
              15h
            </TableHeaderCell>
            <TableHeaderCell colSpan={1} scope="row" className="text-right">
              n/a
            </TableHeaderCell>
          </TableRow>
        </TableFoot>
      </Table>
    </TableRoot>
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const I=["Default"];export{i as Default,I as __namedExportsOrder,D as default};
