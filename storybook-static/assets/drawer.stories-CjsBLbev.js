import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as n,R as _}from"./index-ClcD9ViR.js";import{B as o}from"./Button-BKBEGp9E.js";import{a as O,b,O as k,C as F,T as R,D as S,R as I,P as Y}from"./index-C976OFh7.js";import{c as A}from"./index-BWmfHM-C.js";import{c as t}from"./cx-CYgzbKIn.js";import{f as H}from"./focusRing-49zpLVVu.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ClVxAquS.js";import"./index-CF-iJ_jy.js";import"./index-D-jls2fw.js";import"./index-ZVc5Krty.js";import"./index-8isb7LcM.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./Combination-BH2yWiU8.js";import"./index-B7xKYiWN.js";import"./index-CkP846ZC.js";const c=r=>e.jsx(I,{"tremor-id":"tremor-raw",...r});c.displayName="Drawer";const m=n.forwardRef(({className:r,...a},s)=>e.jsx(O,{ref:s,className:t(r),...a}));m.displayName="Drawer.Trigger";const i=n.forwardRef(({className:r,...a},s)=>e.jsx(b,{ref:s,className:t(r),...a}));i.displayName="Drawer.Close";const v=Y;v.displayName="DrawerPortal";const B=n.forwardRef(({className:r,...a},s)=>e.jsx(k,{ref:s,className:t("fixed inset-0 z-50 overflow-y-auto","bg-black/30","data-[state=closed]:animate-hide data-[state=open]:animate-dialogOverlayShow",r),...a,style:{animationDuration:"400ms",animationFillMode:"backwards"}}));B.displayName="DrawerOverlay";const w=n.forwardRef(({className:r,...a},s)=>e.jsx(v,{children:e.jsx(B,{children:e.jsx(F,{ref:s,className:t("fixed inset-y-2 mx-auto flex w-[95vw] flex-1 flex-col overflow-y-auto rounded-md border p-4 shadow-lg focus:outline-none max-sm:inset-x-2 sm:inset-y-2 sm:right-2 sm:max-w-lg sm:p-6","border-gray-200 dark:border-gray-900","bg-white dark:bg-[#090E1A]","data-[state=closed]:animate-drawerSlideRightAndFade data-[state=open]:animate-drawerSlideLeftAndFade",H,r),...a})})}));w.displayName="DrawerContent";const u=n.forwardRef(({children:r,className:a,...s},T)=>e.jsxs("div",{ref:T,className:"flex items-start justify-between gap-x-4 border-b border-gray-200 pb-4 dark:border-gray-900",...s,children:[e.jsx("div",{className:t("mt-1 flex flex-col gap-y-1",a),children:r}),e.jsx(b,{asChild:!0,children:e.jsx(o,{variant:"ghost",className:"aspect-square p-1 hover:bg-gray-100 hover:dark:bg-gray-400/10",children:e.jsx(A,{className:"size-6","aria-hidden":"true"})})})]}));u.displayName="Drawer.Header";const p=n.forwardRef(({className:r,...a},s)=>e.jsx(R,{ref:s,className:t("text-base font-semibold","text-gray-900 dark:text-gray-50",r),...a}));p.displayName="DrawerTitle";const f=n.forwardRef(({className:r,...a},s)=>e.jsx("div",{ref:s,className:t("flex-1 py-4",r),...a}));f.displayName="Drawer.Body";const D=n.forwardRef(({className:r,...a},s)=>e.jsx(S,{ref:s,className:t("text-gray-500 dark:text-gray-500",r),...a}));D.displayName="DrawerDescription";const h=({className:r,...a})=>e.jsx("div",{className:t("flex flex-col-reverse border-t border-gray-200 pt-4 sm:flex-row sm:justify-end sm:space-x-2 dark:border-gray-900",r),...a});h.displayName="DrawerFooter";c.__docgenInfo={description:"",methods:[],displayName:"Drawer"};f.__docgenInfo={description:"",methods:[],displayName:"Drawer.Body"};i.__docgenInfo={description:"",methods:[],displayName:"Drawer.Close"};w.__docgenInfo={description:"",methods:[],displayName:"DrawerContent"};D.__docgenInfo={description:"",methods:[],displayName:"DrawerDescription"};h.__docgenInfo={description:"",methods:[],displayName:"DrawerFooter"};u.__docgenInfo={description:"",methods:[],displayName:"Drawer.Header"};p.__docgenInfo={description:"",methods:[],displayName:"DrawerTitle"};m.__docgenInfo={description:"",methods:[],displayName:"Drawer.Trigger"};const ae={title:"ui/Drawer",component:c,parameters:{layout:"centered"}},l={render:()=>e.jsx(e.Fragment,{children:e.jsxs(c,{children:[e.jsx(m,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Open Drawer"})}),e.jsxs(w,{className:"sm:max-w-lg",children:[e.jsxs(u,{children:[e.jsx(p,{children:"Account Created Successfully"}),e.jsx(D,{className:"mt-1 text-sm",children:"Your account has been created successfully. You can now login to your account. For more information, please contact us."})]}),e.jsx(f,{children:"This is they body of the drawer, content goes here."}),e.jsxs(h,{className:"mt-6",children:[e.jsx(i,{asChild:!0,children:e.jsx(o,{className:"mt-2 w-full sm:mt-0 sm:w-fit",variant:"secondary",children:"Go back"})}),e.jsx(i,{asChild:!0,children:e.jsx(o,{className:"w-full sm:w-fit",children:"Ok, got it!"})})]})]})]})})},d={render:()=>{const[r,a]=_.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs(c,{open:r,onOpenChange:a,children:[e.jsx(m,{asChild:!0,children:e.jsx(o,{variant:"secondary",children:"Open Drawer"})}),e.jsxs(w,{className:"sm:max-w-lg",children:[e.jsxs(u,{children:[e.jsx(p,{children:"Account Created Successfully"}),e.jsx(D,{className:"mt-1 text-sm",children:"Your account has been created successfully. You can now login to your account. For more information, please contact us."})]}),e.jsx(f,{children:"This is they body of the drawer, content goes here."}),e.jsxs(h,{className:"mt-6",children:[e.jsx(i,{asChild:!0,children:e.jsx(o,{className:"mt-2 w-full sm:mt-0 sm:w-fit",variant:"secondary",children:"Go back"})}),e.jsx(i,{asChild:!0,children:e.jsx(o,{className:"w-full sm:w-fit",children:"Ok, got it!"})})]})]})]})})}};var x,y,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="secondary">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent className="sm:max-w-lg">
            <DrawerHeader>
              <DrawerTitle>Account Created Successfully</DrawerTitle>
              <DrawerDescription className="mt-1 text-sm">
                Your account has been created successfully. You can now login to
                your account. For more information, please contact us.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              This is they body of the drawer, content goes here.
            </DrawerBody>
            <DrawerFooter className="mt-6">
              <DrawerClose asChild>
                <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="secondary">
                  Go back
                </Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button className="w-full sm:w-fit">Ok, got it!</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>;
  }
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var N,j,C;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="secondary">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent className="sm:max-w-lg">
            <DrawerHeader>
              <DrawerTitle>Account Created Successfully</DrawerTitle>
              <DrawerDescription className="mt-1 text-sm">
                Your account has been created successfully. You can now login to
                your account. For more information, please contact us.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              This is they body of the drawer, content goes here.
            </DrawerBody>
            <DrawerFooter className="mt-6">
              <DrawerClose asChild>
                <Button className="mt-2 w-full sm:mt-0 sm:w-fit" variant="secondary">
                  Go back
                </Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button className="w-full sm:w-fit">Ok, got it!</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>;
  }
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const se=["Default","Controlled"];export{d as Controlled,l as Default,se as __namedExportsOrder,ae as default};
