import{j as e}from"./jsx-runtime-CfatFE5O.js";import{R as D}from"./index-ClcD9ViR.js";import{B as R}from"./Button-BKBEGp9E.js";import{L as i}from"./Label-DAouQbGm.js";import{C as s}from"./Checkbox-DMiJY78R.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ClVxAquS.js";import"./index-BWmfHM-C.js";import"./index-CF-iJ_jy.js";import"./cx-CYgzbKIn.js";import"./focusRing-49zpLVVu.js";import"./index-BmTwYRFB.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./index-D-jls2fw.js";import"./index-sY83p_TZ.js";import"./index-DSWkTB7Z.js";import"./index-CkP846ZC.js";const V={title:"ui/Checkbox",component:s},c={},a={args:{checked:!0}},t={args:{checked:"indeterminate"}},d={render:r=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{...r,checked:!0})," ",e.jsx(i,{disabled:!0,children:"Checked"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{...r,checked:!1})," ",e.jsx(i,{disabled:!0,children:"Unchecked"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{...r,checked:"indeterminate"}),e.jsx(i,{disabled:!0,children:"Indeterminate"})]})]}),args:{disabled:!0}},n={render:()=>e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx(s,{id:"r1"}),e.jsx(i,{htmlFor:"r1",children:"I'd like to be notified by SMS when my order is ready for collection."})]})},o={render:()=>{const[r,l]=D.useState(!0);return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(s,{checked:r,onCheckedChange:()=>l(!r)}),e.jsxs(R,{variant:"secondary",onClick:()=>l(!r),children:["Set ",r?"Unchecked":"Checked"]})]})}};var m,h,p;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(h=c.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var k,u,x;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,f,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: "indeterminate"
  }
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var C,j,v;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox {...args} checked={true} /> <Label disabled>Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox {...args} checked={false} /> <Label disabled>Unchecked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox {...args} checked="indeterminate" />
        <Label disabled>Indeterminate</Label>
      </div>
    </div>,
  args: {
    disabled: true
  }
}`,...(v=(j=d.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var S,L,N;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-center gap-2">
      <Checkbox id="r1" />
      <Label htmlFor="r1">
        I'd like to be notified by SMS when my order is ready for collection.
      </Label>
    </div>
}`,...(N=(L=n.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var y,I,B;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(true);
    return <div className="flex flex-col items-center gap-4">
        <Checkbox checked={checked} onCheckedChange={() => setChecked(!checked)} />
        <Button variant="secondary" onClick={() => setChecked(!checked)}>
          Set {checked ? "Unchecked" : "Checked"}
        </Button>
      </div>;
  }
}`,...(B=(I=o.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};const X=["Default","Checked","Indeterminate","Disabled","WithLabel","Controlled"];export{a as Checked,o as Controlled,c as Default,d as Disabled,t as Indeterminate,n as WithLabel,X as __namedExportsOrder,V as default};
