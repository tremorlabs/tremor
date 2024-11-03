import{j as e}from"./jsx-runtime-CfatFE5O.js";import{R as Y}from"./index-ClcD9ViR.js";import{B as h}from"./Button-BKBEGp9E.js";import{L as a}from"./Label-DAouQbGm.js";import{I as r}from"./Input-BIlNJIYp.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ClVxAquS.js";import"./index-BWmfHM-C.js";import"./index-CF-iJ_jy.js";import"./cx-CYgzbKIn.js";import"./focusRing-49zpLVVu.js";import"./index-BmTwYRFB.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./focusInput-B1nbZ1LY.js";import"./hasErrorInput-DaEl1nS1.js";const he={title:"ui/Input",component:r},s={render:()=>e.jsx(r,{})},t={render:()=>e.jsx(r,{disabled:!0})},n={render:()=>e.jsx(r,{placeholder:"With Placeholder"})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"password",children:"Password"}),e.jsx(r,{placeholder:"Enter password",id:"password",name:"password",type:"password"})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"search",children:"Search"}),e.jsx(r,{disabled:!0,placeholder:"Enter search",id:"search",name:"search",type:"search"})," "]})},c={render:()=>e.jsxs("form",{className:"flex flex-col gap-2",children:[e.jsx("p",{children:"Non capitalized characters only"}),e.jsx(a,{htmlFor:"secret",children:"Secret"}),e.jsx(r,{required:!0,id:"secret",name:"secret",type:"text",placeholder:"Non-capitalized only",pattern:"[a-z]+"}),e.jsx(h,{type:"submit",variant:"secondary",children:"Submit"})]})},d={render:()=>e.jsxs("div",{className:"flex gap-1",children:[e.jsx(r,{id:"upload",name:"upload",type:"file"}),e.jsx(r,{id:"upload",name:"upload"}),e.jsx(r,{id:"upload",name:"upload",type:"password"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"number",children:"Enter Salary"}),e.jsx(r,{id:"number",name:"number",type:"number"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"email",children:"Email"}),e.jsx(r,{hasError:!0,placeholder:"Enter full name",id:"full_name",name:"full_name",type:"text",enableStepper:!0})]})},m={render:()=>e.jsxs("form",{className:"inline-flex items-center gap-1",children:[e.jsx(h,{children:"Submit"}),e.jsx(r,{required:!0,id:"secret",name:"secret",type:"text",placeholder:"Non-capitalized only",pattern:"[a-z]+"}),e.jsx(h,{variant:"secondary",children:"Submit"})]})},u={render:()=>{const[x,V]=Y.useState("");return e.jsxs("form",{className:"flex flex-col gap-2",children:[e.jsx(a,{htmlFor:"File",children:"Search"}),e.jsx(r,{placeholder:"Enter search",id:"search",name:"search",type:"search",value:x,onChange:X=>V(X.target.value)}),e.jsx(h,{type:"submit",variant:"secondary",children:"Submit"}),e.jsx("p",{children:x})]})}};var f,b,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Input />
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,j,g;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Input disabled />
}`,...(g=(j=t.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var v,N,E;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Input placeholder="With Placeholder" />
}`,...(E=(N=n.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var I,w,F;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="password">Password</Label>
      <Input placeholder="Enter password" id="password" name="password" type="password" />
    </div>
}`,...(F=(w=o.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var L,B,z;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="search">Search</Label>
      <Input disabled placeholder="Enter search" id="search" name="search" type="search" />{" "}
    </div>
}`,...(z=(B=l.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var P,T,q;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <form className="flex flex-col gap-2">
      <p>Non capitalized characters only</p>
      <Label htmlFor="secret">Secret</Label>
      <Input required id="secret" name="secret" type="text" placeholder="Non-capitalized only" pattern="[a-z]+" />
      <Button type="submit" variant="secondary">
        Submit
      </Button>
    </form>
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var D,R,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex gap-1">
      <Input id="upload" name="upload" type="file" />
      <Input id="upload" name="upload" />
      <Input id="upload" name="upload" type="password" />
    </div>
}`,...(W=(R=d.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var _,C,A;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="number">Enter Salary</Label>
      <Input id="number" name="number" type="number" />
    </div>
}`,...(A=(C=p.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var H,O,k;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input hasError placeholder="Enter full name" id="full_name" name="full_name" type="text" enableStepper />
    </div>
}`,...(k=(O=i.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <form className="inline-flex items-center gap-1">
      <Button>Submit</Button>
      <Input required id="secret" name="secret" type="text" placeholder="Non-capitalized only" pattern="[a-z]+" />
      <Button variant="secondary">Submit</Button>
    </form>
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = React.useState("");
    return <form className="flex flex-col gap-2">
        <Label htmlFor="File">Search</Label>
        <Input placeholder="Enter search" id="search" name="search" type="search" value={search} onChange={event => setSearch(event.target.value)} />
        <Button type="submit" variant="secondary">
          Submit
        </Button>
        <p>{search}</p>
      </form>;
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const xe=["Default","Disabled","WithPlaceholder","TypePassword","TypeSearchDisabled","RequiredAndPattern","TypeFile","TypeNumber","HasError","InputWithButton","Controlled"];export{u as Controlled,s as Default,t as Disabled,i as HasError,m as InputWithButton,c as RequiredAndPattern,d as TypeFile,p as TypeNumber,o as TypePassword,l as TypeSearchDisabled,n as WithPlaceholder,xe as __namedExportsOrder,he as default};
