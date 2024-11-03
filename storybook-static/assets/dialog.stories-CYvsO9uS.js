import{j as e}from"./jsx-runtime-CfatFE5O.js";import{R as j}from"./index-ClcD9ViR.js";import{B as a}from"./Button-BKBEGp9E.js";import{D as t,a as g,b as d,c as D,d as p,e as h,f,g as s}from"./Dialog-CBGKSiKS.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ClVxAquS.js";import"./index-BWmfHM-C.js";import"./index-CF-iJ_jy.js";import"./cx-CYgzbKIn.js";import"./focusRing-49zpLVVu.js";import"./index-C976OFh7.js";import"./index-D-jls2fw.js";import"./index-ZVc5Krty.js";import"./index-8isb7LcM.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./Combination-BH2yWiU8.js";import"./index-B7xKYiWN.js";import"./index-CkP846ZC.js";const z={title:"ui/Dialog",component:t,parameters:{layout:"centered"}},o={render:()=>e.jsx(e.Fragment,{children:e.jsxs(t,{children:[e.jsx(g,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:"Open Dialog"})}),e.jsxs(d,{className:"sm:max-w-lg",children:[e.jsxs(D,{children:[e.jsx(p,{children:"Account Created Successfully"}),e.jsx(h,{className:"mt-1 text-sm/7",children:"Your account has been created successfully. You can now login to your account. For more information, please contact us."})]}),e.jsxs(f,{className:"mt-6",children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{className:"mt-2 w-full sm:mt-0 sm:w-fit",variant:"secondary",children:"Go back"})}),e.jsx(s,{asChild:!0,children:e.jsx(a,{className:"w-full sm:w-fit",children:"Ok, got it!"})})]})]})]})})},n={render:()=>{const[x,C]=j.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs(t,{open:x,onOpenChange:C,children:[e.jsx(g,{asChild:!0,children:e.jsx(a,{variant:"secondary",children:"Open Dialog"})}),e.jsxs(d,{className:"sm:max-w-lg",children:[e.jsxs(D,{children:[e.jsx(p,{children:"Account Created Successfully"}),e.jsx(h,{className:"mt-1 text-sm/7",children:"Your account has been created successfully. You can now login to your account. For more information, please contact us."})]}),e.jsxs(f,{className:"mt-6",children:[e.jsx(s,{asChild:!0,children:e.jsx(a,{className:"mt-2 w-full sm:mt-0 sm:w-fit",variant:"secondary",children:"Go back"})}),e.jsx(s,{asChild:!0,children:e.jsx(a,{className:"w-full sm:w-fit",children:"Ok, got it!"})})]})]})]})})}};var l,r,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Account Created Successfully</DialogTitle>
              <DialogDescription className="mt-1 text-sm/7">
                Your account has been created successfully. You can now login to
                your account. For more information, please contact us.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="secondary">
                  Go back
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button className="w-full sm:w-fit">Ok, got it!</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>;
  }
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,m,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Account Created Successfully</DialogTitle>
              <DialogDescription className="mt-1 text-sm/7">
                Your account has been created successfully. You can now login to
                your account. For more information, please contact us.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-6">
              <DialogClose asChild>
                <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="secondary">
                  Go back
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button className="w-full sm:w-fit">Ok, got it!</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>;
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const I=["Default","Controlled"];export{n as Controlled,o as Default,I as __namedExportsOrder,z as default};
