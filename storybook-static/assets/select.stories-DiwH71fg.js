import{j as e}from"./jsx-runtime-CfatFE5O.js";import{R as Y}from"./index-ClcD9ViR.js";import{A as $,g as ee,L as le,h as ae}from"./index-BWmfHM-C.js";import{B as j}from"./Button-BKBEGp9E.js";import{D as te,a as ne,b as re,c as se,d as ce,e as ie,f as oe,g as I}from"./Dialog-CBGKSiKS.js";import{S as n,a as c,b as i,c as o,d as l,e as r,f as s}from"./Select-DCEvDUH3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-ClVxAquS.js";import"./index-CF-iJ_jy.js";import"./cx-CYgzbKIn.js";import"./focusRing-49zpLVVu.js";import"./index-C976OFh7.js";import"./index-D-jls2fw.js";import"./index-ZVc5Krty.js";import"./index-8isb7LcM.js";import"./index-DDVkbYHz.js";import"./index-ZuzByk-F.js";import"./Combination-BH2yWiU8.js";import"./index-B7xKYiWN.js";import"./index-CkP846ZC.js";import"./index-BdQq_4o_.js";import"./index-D_eSFn5K.js";import"./index-VEzCCWBB.js";import"./index-BCyXaPxf.js";import"./index-a6sp4N9A.js";import"./index-DSWkTB7Z.js";import"./index-sY83p_TZ.js";import"./index-DXJoflK3.js";import"./focusInput-B1nbZ1LY.js";import"./hasErrorInput-DaEl1nS1.js";const ze={title:"ui/Select",component:n,parameters:{layout:"centered"}},U=[{value:"dress-shirt-striped",label:"Striped Dress Shirt"},{value:"relaxed-button-down",label:"Relaxed Fit Button Down"},{value:"slim-button-down",label:"Slim Fit Button Down"},{value:"dress-shirt-solid",label:"Solid Dress Shirt",disabled:!0},{value:"dress-shirt-check",label:"Check Dress Shirt"}],de=[{value:"striped-dress-shirt",label:"Striped Dress Shirt",icon:$},{value:"relaxed-fit-shirt",label:"Relaxed Fit Shirt Classic",icon:ee},{value:"relaxed-fit-shirt-vneck",label:"Relaxed Fit Shirt V-Neck",icon:le},{value:"sport-active-solid",label:"Sport Active Shirt",icon:ae}],g=[{label:"Shirts",items:[{value:"dress-shirt-striped",label:"Striped Dress Shirt"},{value:"relaxed-button-down",label:"Relaxed Fit Button Down"},{value:"slim-button-down",label:"Slim Fit Button Down"},{value:"dress-shirt-solid",label:"Solid Dress Shirt"},{value:"dress-shirt-check",label:"Check Dress Shirt"}]},{label:"T-Shirts",items:[{value:"v-neck",label:"V-Neck"},{value:"crew-neck",label:"Crew Neck"},{value:"henley",label:"Henley"},{value:"polo",label:"Polo"},{value:"mock-neck",label:"Mock Neck"},{value:"turtleneck",label:"Turtleneck"},{value:"scoop-neck",label:"Scoop Neck"}]}],d={render:()=>e.jsxs(n,{children:[e.jsx(c,{className:"w-96",children:e.jsx(i,{placeholder:"Select"})}),e.jsx(o,{children:U.map(a=>e.jsx(l,{value:a.value,children:a.label},a.value))})]})},m={render:()=>e.jsx("div",{className:"w-[250px]",children:e.jsxs(n,{children:[e.jsx(c,{children:e.jsx(i,{placeholder:"Select"})}),e.jsx(o,{children:de.map(a=>e.jsx(l,{value:a.value,children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(a.icon,{className:"size-4 shrink-0","aria-hidden":"true"})," ",a.label]})},a.value))})]})})},u={render:()=>e.jsx("div",{className:"w-[250px]",children:e.jsxs(n,{children:[e.jsx(c,{children:e.jsx(i,{placeholder:"Select"})}),e.jsx(o,{children:g.map(a=>e.jsxs(r,{children:[e.jsx(s,{children:a.label}),a.items.map(t=>e.jsx(l,{value:t.value,children:t.label},t.value))]},a.label))})]})})},S={render:()=>e.jsx("div",{className:"w-[250px]",children:e.jsxs(n,{children:[e.jsx(c,{disabled:!0,children:e.jsx(i,{placeholder:"Select"})}),e.jsx(o,{children:g.map(a=>e.jsxs(r,{children:[e.jsx(s,{children:a.label}),a.items.map(t=>e.jsx(l,{value:t.value,children:t.label},t.value))]},a.label))})]})})},p={render:()=>e.jsxs(n,{children:[e.jsx(c,{children:e.jsx(i,{placeholder:"Select"})}),e.jsx(o,{children:U.map(a=>e.jsx(l,{value:a.value,disabled:a.disabled,children:a.label},a.value))})]})},h={render:()=>e.jsx("div",{className:"w-[250px]",children:e.jsxs(n,{children:[e.jsx(c,{hasError:!0,children:e.jsx(i,{placeholder:"Select"})}),e.jsx(o,{children:g.map(a=>e.jsxs(r,{children:[e.jsx(s,{children:a.label}),a.items.map(t=>e.jsx(l,{value:t.value,children:t.label},t.value))]},a.label))})]})})},v={render:()=>e.jsxs(n,{children:[e.jsx(c,{className:"w-[280px]",children:e.jsx(i,{placeholder:"Select a timezone"})}),e.jsxs(o,{children:[e.jsxs(r,{children:[e.jsx(s,{children:"North America"}),e.jsx(l,{value:"est",children:"Eastern Standard Time (EST)"}),e.jsx(l,{value:"cst",children:"Central Standard Time (CST)"}),e.jsx(l,{value:"mst",children:"Mountain Standard Time (MST)"}),e.jsx(l,{value:"pst",children:"Pacific Standard Time (PST)"}),e.jsx(l,{value:"akst",children:"Alaska Standard Time (AKST)"}),e.jsx(l,{value:"hst",children:"Hawaii Standard Time (HST)"})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Europe & Africa"}),e.jsx(l,{value:"gmt",children:"Greenwich Mean Time (GMT)"}),e.jsx(l,{value:"cet",children:"Central European Time (CET)"}),e.jsx(l,{value:"eet",children:"Eastern European Time (EET)"}),e.jsx(l,{value:"west",children:"Western European Summer Time (WEST)"}),e.jsx(l,{value:"cat",children:"Central Africa Time (CAT)"}),e.jsx(l,{value:"eat",children:"East Africa Time (EAT)"})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Asia"}),e.jsx(l,{value:"msk",children:"Moscow Time (MSK)"}),e.jsx(l,{value:"ist",children:"India Standard Time (IST)"}),e.jsx(l,{value:"cst_china",children:"China Standard Time (CST)"}),e.jsx(l,{value:"jst",children:"Japan Standard Time (JST)"}),e.jsx(l,{value:"kst",children:"Korea Standard Time (KST)"}),e.jsx(l,{value:"ist_indonesia",children:"Indonesia Central Standard Time (WITA)"})]}),e.jsxs(r,{children:[e.jsx(s,{children:"Australia & Pacific"}),e.jsx(l,{value:"awst",children:"Australian Western Standard Time (AWST)"}),e.jsx(l,{value:"acst",children:"Australian Central Standard Time (ACST)"}),e.jsx(l,{value:"aest",children:"Australian Eastern Standard Time (AEST)"}),e.jsx(l,{value:"nzst",children:"New Zealand Standard Time (NZST)"}),e.jsx(l,{value:"fjt",children:"Fiji Time (FJT)"})]}),e.jsxs(r,{children:[e.jsx(s,{children:"South America"}),e.jsx(l,{value:"art",children:"Argentina Time (ART)"}),e.jsx(l,{value:"bot",children:"Bolivia Time (BOT)"}),e.jsx(l,{value:"brt",children:"Brasilia Time (BRT)"}),e.jsx(l,{value:"clt",children:"Chile Standard Time (CLT)"})]})]})]})},x={render:()=>e.jsx(e.Fragment,{children:e.jsxs(te,{children:[e.jsx(ne,{asChild:!0,children:e.jsx(j,{children:"Open Dialog"})}),e.jsxs(re,{className:"sm:max-w-sm",children:[e.jsxs(se,{children:[e.jsx(ce,{children:"Select shirt size"}),e.jsx(ie,{className:"text-sm leading-7",children:"Shirt type"}),e.jsxs(n,{children:[e.jsx(c,{children:e.jsx(i,{placeholder:"Select"})}),e.jsx(o,{children:g.map(a=>e.jsxs(r,{children:[e.jsx(s,{children:a.label}),a.items.map(t=>e.jsx(l,{value:t.value,children:t.label},t.value))]},a.label))})]})]}),e.jsxs(oe,{className:"mt-6",children:[e.jsx(I,{asChild:!0,children:e.jsx(j,{className:"mt-2 w-full sm:mt-0 sm:w-fit",variant:"secondary",children:"Go back"})}),e.jsx(I,{asChild:!0,children:e.jsx(j,{className:"w-full sm:w-fit",children:"Ok, got it!"})})]})]})]})})},T={render:()=>{const[a,t]=Y.useState(""),X=[{value:"chocolate",label:"🍫 Schoggi"},{value:"cheese",label:"🧀 Chäs"},{value:"fondue",label:"🫕 Fondü"},{value:"Milk",label:"🥛 Melch"}];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex gap-1",children:[e.jsxs(n,{value:a,onValueChange:t,children:[e.jsx(c,{className:"mx-auto",children:e.jsx(i,{placeholder:"Select","aria-label":a})}),e.jsx(o,{children:X.map(b=>e.jsx(l,{value:b.value,children:e.jsx("span",{className:"flex items-center gap-x-2",children:b.label})},b.value))})]}),e.jsx(j,{className:"whitespace-nowrap",variant:"secondary",onClick:()=>t(""),children:"Reset selection"})]}),e.jsxs("p",{className:"mt-2 text-sm text-gray-500",children:["Selected key: ",a]})]})}};var C,D,k;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    return <Select>
        <SelectTrigger className="w-96">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {data1.map(item => <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>)}
        </SelectContent>
      </Select>;
  }
}`,...(k=(D=d.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var w,N,G;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-[250px]">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {data2.map(item => <SelectItem key={item.value} value={item.value}>
                <span className="flex items-center gap-2">
                  <item.icon className="size-4 shrink-0" aria-hidden="true" />{" "}
                  {item.label}
                </span>
              </SelectItem>)}
          </SelectContent>
        </Select>
      </div>;
  }
}`,...(G=(N=m.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var A,f,E;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-[250px]">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {data3.map(group => <SelectGroup key={group.label}>
                <SelectGroupLabel>{group.label}</SelectGroupLabel>
                {group.items.map(item => <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>)}
              </SelectGroup>)}
          </SelectContent>
        </Select>
      </div>;
  }
}`,...(E=(f=u.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var y,L,B;S.parameters={...S.parameters,docs:{...(y=S.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-[250px]">
        <Select>
          <SelectTrigger disabled={true}>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {data3.map(group => <SelectGroup key={group.label}>
                <SelectGroupLabel>{group.label}</SelectGroupLabel>
                {group.items.map(item => <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>)}
              </SelectGroup>)}
          </SelectContent>
        </Select>
      </div>;
  }
}`,...(B=(L=S.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var V,F,M;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    return <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          {data1.map(item => <SelectItem key={item.value} value={item.value} disabled={item.disabled}>
              {item.label}
            </SelectItem>)}
        </SelectContent>
      </Select>;
  }
}`,...(M=(F=p.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var R,W,H;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-[250px]">
        <Select>
          <SelectTrigger hasError>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {data3.map(group => <SelectGroup key={group.label}>
                <SelectGroupLabel>{group.label}</SelectGroupLabel>
                {group.items.map(item => <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>)}
              </SelectGroup>)}
          </SelectContent>
        </Select>
      </div>;
  }
}`,...(H=(W=h.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var z,K,O;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    return <Select>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectGroupLabel>North America</SelectGroupLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
            <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
            <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectGroupLabel>Europe & Africa</SelectGroupLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
            <SelectItem value="west">
              Western European Summer Time (WEST)
            </SelectItem>
            <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
            <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectGroupLabel>Asia</SelectGroupLabel>
            <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
            <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
            <SelectItem value="ist_indonesia">
              Indonesia Central Standard Time (WITA)
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectGroupLabel>Australia & Pacific</SelectGroupLabel>
            <SelectItem value="awst">
              Australian Western Standard Time (AWST)
            </SelectItem>
            <SelectItem value="acst">
              Australian Central Standard Time (ACST)
            </SelectItem>
            <SelectItem value="aest">
              Australian Eastern Standard Time (AEST)
            </SelectItem>
            <SelectItem value="nzst">
              New Zealand Standard Time (NZST)
            </SelectItem>
            <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectGroupLabel>South America</SelectGroupLabel>
            <SelectItem value="art">Argentina Time (ART)</SelectItem>
            <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
            <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
            <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>;
  }
}`,...(O=(K=v.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var P,J,_;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Select shirt size</DialogTitle>
              <DialogDescription className="text-sm leading-7">
                Shirt type
              </DialogDescription>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {data3.map(group => <SelectGroup key={group.label}>
                      <SelectGroupLabel>{group.label}</SelectGroupLabel>
                      {group.items.map(item => <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>)}
                    </SelectGroup>)}
                </SelectContent>
              </Select>
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
}`,...(_=(J=x.parameters)==null?void 0:J.docs)==null?void 0:_.source}}};var Z,q,Q;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("");
    const data = [{
      value: "chocolate",
      label: "🍫 Schoggi"
    }, {
      value: "cheese",
      label: "🧀 Chäs"
    }, {
      value: "fondue",
      label: "🫕 Fondü"
    }, {
      value: "Milk",
      label: "🥛 Melch"
    }];
    return <>
        <div className="flex gap-1">
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger className="mx-auto">
              <SelectValue placeholder="Select" aria-label={value} />
            </SelectTrigger>
            <SelectContent>
              {data.map(item => <SelectItem key={item.value} value={item.value}>
                  <span className="flex items-center gap-x-2">
                    {item.label}
                  </span>
                </SelectItem>)}
            </SelectContent>
          </Select>
          <Button className="whitespace-nowrap" variant="secondary" onClick={() => setValue("")}>
            Reset selection
          </Button>
        </div>
        <p className="mt-2 text-sm text-gray-500">Selected key: {value}</p>
      </>;
  }
}`,...(Q=(q=T.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};const Ke=["Default","WithIcons","WithGroups","Disabled","DisabledItem","HasError","Scrollable","SelectInDialog","Controlled"];export{T as Controlled,d as Default,S as Disabled,p as DisabledItem,h as HasError,v as Scrollable,x as SelectInDialog,u as WithGroups,m as WithIcons,Ke as __namedExportsOrder,ze as default};
