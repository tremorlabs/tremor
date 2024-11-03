import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as h,R as u}from"./index-ClcD9ViR.js";import{n as Qe,o as Ie,t as Se,x as we,M as Te}from"./index-BWmfHM-C.js";import{B as Xe}from"./Badge-CRZPK1pY.js";import{B as Ze}from"./Button-BKBEGp9E.js";import{c as Re,b as H,a as _e,u as en}from"./index-D-jls2fw.js";import{c as nn}from"./index-D_eSFn5K.js";import{u as Pe}from"./index-ClVxAquS.js";import{P as w}from"./index-DDVkbYHz.js";import{P as on}from"./index-CkP846ZC.js";import{u as De}from"./index-ZVc5Krty.js";import{u as tn}from"./index-BCyXaPxf.js";import{c as S}from"./cx-CYgzbKIn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CF-iJ_jy.js";import"./focusRing-49zpLVVu.js";import"./index-VEzCCWBB.js";import"./index-ZuzByk-F.js";var U="Collapsible",[rn,Fe]=Re(U),[an,K]=rn(U),Oe=h.forwardRef((n,r)=>{const{__scopeCollapsible:o,open:t,defaultOpen:s,disabled:a,onOpenChange:d,...m}=n,[g=!1,x]=H({prop:t,defaultProp:s,onChange:d});return e.jsx(an,{scope:o,disabled:a,contentId:De(),open:g,onOpenToggle:h.useCallback(()=>x(f=>!f),[x]),children:e.jsx(w.div,{"data-state":J(g),"data-disabled":a?"":void 0,...m,ref:r})})});Oe.displayName=U;var ze="CollapsibleTrigger",Ye=h.forwardRef((n,r)=>{const{__scopeCollapsible:o,...t}=n,s=K(ze,o);return e.jsx(w.button,{type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":J(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled,...t,ref:r,onClick:_e(n.onClick,s.onOpenToggle)})});Ye.displayName=ze;var G="CollapsibleContent",Ve=h.forwardRef((n,r)=>{const{forceMount:o,...t}=n,s=K(G,n.__scopeCollapsible);return e.jsx(on,{present:o||s.open,children:({present:a})=>e.jsx(sn,{...t,ref:r,present:a})})});Ve.displayName=G;var sn=h.forwardRef((n,r)=>{const{__scopeCollapsible:o,present:t,children:s,...a}=n,d=K(G,o),[m,g]=h.useState(t),x=h.useRef(null),f=Pe(r,x),b=h.useRef(0),k=b.current,v=h.useRef(0),T=v.current,j=d.open||m,C=h.useRef(j),N=h.useRef();return h.useEffect(()=>{const p=requestAnimationFrame(()=>C.current=!1);return()=>cancelAnimationFrame(p)},[]),en(()=>{const p=x.current;if(p){N.current=N.current||{transitionDuration:p.style.transitionDuration,animationName:p.style.animationName},p.style.transitionDuration="0s",p.style.animationName="none";const I=p.getBoundingClientRect();b.current=I.height,v.current=I.width,C.current||(p.style.transitionDuration=N.current.transitionDuration,p.style.animationName=N.current.animationName),g(t)}},[d.open,t]),e.jsx(w.div,{"data-state":J(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!j,...a,ref:f,style:{"--radix-collapsible-content-height":k?`${k}px`:void 0,"--radix-collapsible-content-width":T?`${T}px`:void 0,...n.style},children:j&&s})});function J(n){return n?"open":"closed"}var cn=Oe,ln=Ye,dn=Ve,y="Accordion",pn=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Q,mn,un]=nn(y),[M,qn]=Re(y,[un,Fe]),X=Fe(),Me=u.forwardRef((n,r)=>{const{type:o,...t}=n,s=t,a=t;return e.jsx(Q.Provider,{scope:n.__scopeAccordion,children:o==="multiple"?e.jsx(fn,{...a,ref:r}):e.jsx(hn,{...s,ref:r})})});Me.displayName=y;var[Ee,gn]=M(y),[Be,xn]=M(y,{collapsible:!1}),hn=u.forwardRef((n,r)=>{const{value:o,defaultValue:t,onValueChange:s=()=>{},collapsible:a=!1,...d}=n,[m,g]=H({prop:o,defaultProp:t,onChange:s});return e.jsx(Ee,{scope:n.__scopeAccordion,value:m?[m]:[],onItemOpen:g,onItemClose:u.useCallback(()=>a&&g(""),[a,g]),children:e.jsx(Be,{scope:n.__scopeAccordion,collapsible:a,children:e.jsx(Le,{...d,ref:r})})})}),fn=u.forwardRef((n,r)=>{const{value:o,defaultValue:t,onValueChange:s=()=>{},...a}=n,[d=[],m]=H({prop:o,defaultProp:t,onChange:s}),g=u.useCallback(f=>m((b=[])=>[...b,f]),[m]),x=u.useCallback(f=>m((b=[])=>b.filter(k=>k!==f)),[m]);return e.jsx(Ee,{scope:n.__scopeAccordion,value:d,onItemOpen:g,onItemClose:x,children:e.jsx(Be,{scope:n.__scopeAccordion,collapsible:!0,children:e.jsx(Le,{...a,ref:r})})})}),[bn,E]=M(y),Le=u.forwardRef((n,r)=>{const{__scopeAccordion:o,disabled:t,dir:s,orientation:a="vertical",...d}=n,m=u.useRef(null),g=Pe(m,r),x=mn(o),b=tn(s)==="ltr",k=_e(n.onKeyDown,v=>{var ee;if(!pn.includes(v.key))return;const T=v.target,j=x().filter($=>{var ne;return!((ne=$.ref.current)!=null&&ne.disabled)}),C=j.findIndex($=>$.ref.current===T),N=j.length;if(C===-1)return;v.preventDefault();let p=C;const I=0,B=N-1,L=()=>{p=C+1,p>B&&(p=I)},q=()=>{p=C-1,p<I&&(p=B)};switch(v.key){case"Home":p=I;break;case"End":p=B;break;case"ArrowRight":a==="horizontal"&&(b?L():q());break;case"ArrowDown":a==="vertical"&&L();break;case"ArrowLeft":a==="horizontal"&&(b?q():L());break;case"ArrowUp":a==="vertical"&&q();break}const Je=p%N;(ee=j[Je].ref.current)==null||ee.focus()});return e.jsx(bn,{scope:o,disabled:t,direction:s,orientation:a,children:e.jsx(Q.Slot,{scope:o,children:e.jsx(w.div,{...d,"data-orientation":a,ref:g,onKeyDown:t?void 0:k})})})}),V="AccordionItem",[An,Z]=M(V),qe=u.forwardRef((n,r)=>{const{__scopeAccordion:o,value:t,...s}=n,a=E(V,o),d=gn(V,o),m=X(o),g=De(),x=t&&d.value.includes(t)||!1,f=a.disabled||n.disabled;return e.jsx(An,{scope:o,open:x,disabled:f,triggerId:g,children:e.jsx(cn,{"data-orientation":a.orientation,"data-state":Ge(x),...m,...s,ref:r,disabled:f,open:x,onOpenChange:b=>{b?d.onItemOpen(t):d.onItemClose(t)}})})});qe.displayName=V;var $e="AccordionHeader",We=u.forwardRef((n,r)=>{const{__scopeAccordion:o,...t}=n,s=E(y,o),a=Z($e,o);return e.jsx(w.h3,{"data-orientation":s.orientation,"data-state":Ge(a.open),"data-disabled":a.disabled?"":void 0,...t,ref:r})});We.displayName=$e;var W="AccordionTrigger",He=u.forwardRef((n,r)=>{const{__scopeAccordion:o,...t}=n,s=E(y,o),a=Z(W,o),d=xn(W,o),m=X(o);return e.jsx(Q.ItemSlot,{scope:o,children:e.jsx(ln,{"aria-disabled":a.open&&!d.collapsible||void 0,"data-orientation":s.orientation,id:a.triggerId,...m,...t,ref:r})})});He.displayName=W;var Ue="AccordionContent",Ke=u.forwardRef((n,r)=>{const{__scopeAccordion:o,...t}=n,s=E(y,o),a=Z(Ue,o),d=X(o);return e.jsx(dn,{role:"region","aria-labelledby":a.triggerId,"data-orientation":s.orientation,...d,...t,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...n.style}})});Ke.displayName=Ue;function Ge(n){return n?"open":"closed"}var yn=Me,vn=qe,jn=We,Cn=He,Nn=Ke;const A=yn;A.displayName="AccordionItem";const i=u.forwardRef(({className:n,children:r,...o},t)=>e.jsx(jn,{className:"flex",children:e.jsxs(Cn,{className:S("group flex flex-1 cursor-pointer items-center justify-between py-3 text-left text-sm font-medium leading-none","text-gray-900 dark:text-gray-50","data-[disabled]:cursor-default data-[disabled]:text-gray-400 dark:data-[disabled]:text-gray-600","focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500",n),...o,ref:t,children:[r,e.jsx(Qe,{className:S("size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:-rotate-45","text-gray-400 dark:text-gray-600","group-data-[disabled]:text-gray-300 group-data-[disabled]:dark:text-gray-700"),"aria-hidden":"true",focusable:"false"})]})}));i.displayName="AccordionTrigger";const c=u.forwardRef(({className:n,children:r,...o},t)=>e.jsx(Nn,{ref:t,className:S("transform-gpu data-[state=closed]:animate-accordionClose data-[state=open]:animate-accordionOpen"),...o,children:e.jsx("div",{className:S("overflow-hidden pb-4 text-sm","text-gray-700 dark:text-gray-200",n),children:r})}));c.displayName="AccordionContent";const l=u.forwardRef(({className:n,...r},o)=>e.jsx(vn,{ref:o,className:S("overflow-hidden border-b first:mt-0","border-gray-200 dark:border-gray-800",n),"tremor-id":"tremor-raw",...r}));l.displayName="AccordionItem";c.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};l.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};i.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};const $n={title:"ui/Accordion",component:A},R={render:()=>e.jsxs(A,{type:"single",className:"mx-auto mt-3 max-w-sm",collapsible:!0,children:[e.jsxs(l,{value:"item-1",children:[e.jsx(i,{children:"In the app"}),e.jsx(c,{children:e.jsxs("ol",{className:"flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 1:"})," ","Tap the Inbox icon and then tap Add receipts."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 2:"})," ","Tap the + symbol to attach a photo or PDF of the receipt for our system to match."]})]})})]}),e.jsxs(l,{value:"item-2",children:[e.jsx(i,{children:"Via browser extension"}),e.jsx(c,{children:e.jsxs("ol",{className:"flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 1:"})," ",e.jsx("span",{className:"underline",children:"Download"})," the browser extension for Chrome or Safari. (Firefox support is coming soon.)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 2:"})," ","Click the extension icon at the top of your browser. Under the Receipts tab, upload an image or click Screenshot current tab to automatically attach the receipt to the expense."]})]})})]}),e.jsxs(l,{value:"item-3",disabled:!0,children:[e.jsx(i,{children:"Via email forwarding"}),e.jsx(c,{children:"Yes! You can animate the Accordion with CSS or JavaScript."})]})]})},_={render:()=>e.jsxs("div",{className:"mx-auto max-w-lg",children:[e.jsx("h1",{className:"text-md font-semibold text-gray-900 dark:text-gray-50",children:"Managing Your Booking Online"}),e.jsxs(A,{type:"multiple",className:"mt-3",children:[e.jsxs(l,{value:"item-1",children:[e.jsx(i,{children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(Ie,{className:"size-4 text-blue-500"}),"Access Your Booking"]})}),e.jsx(c,{children:e.jsx("p",{children:'Simply navigate to the "My Trips" section on our website and input your booking reference and last name to view your itinerary details.'})})]}),e.jsxs(l,{value:"item-2",children:[e.jsx(i,{children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(Se,{className:"size-4 text-blue-500"}),"Change Flights"]})}),e.jsx(c,{children:e.jsxs("ol",{className:"flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 1:"})," ",'Within your booking details, select "Change Flights."']}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 2:"})," ","Follow the prompts to select new flight options and confirm the changes."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 3:"})," ","Review your new flight details and any fare differences."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 4:"})," ","Complete the change and receive your updated itinerary via email."]})]})})]}),e.jsxs(l,{value:"item-3",children:[e.jsx(i,{children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(we,{className:"size-4 text-blue-500"}),"Add Special Requests"]})}),e.jsx(c,{children:e.jsx("p",{children:'Look for the "Special Requests" option within your booking to specify any meal preferences, seating arrangements, or assistance services you may require during your flight.'})})]}),e.jsxs(l,{value:"item-4",children:[e.jsx(i,{children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(Te,{className:"size-4 text-blue-500"}),"Check-In Online"]})}),e.jsx(c,{children:e.jsxs("ol",{className:"flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 1:"})," ",'Starting 48 hours before your flight, access the "Check-In" option.']}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 2:"})," ","Confirm your details and select your seats to complete the online check-in process."]})]})})]})]})]})},P={render:()=>e.jsx(A,{type:"single",collapsible:!0,children:e.jsxs(l,{value:"item-1",children:[e.jsx(i,{children:"Can you render only one item?"}),e.jsx(c,{children:"Yes, absolutely!"})]})})},D={render:()=>e.jsxs("div",{className:"mx-auto max-w-lg",children:[e.jsx("h1",{className:"text-md font-semibold text-gray-900 dark:text-gray-50",children:"Managing Your Booking Online"}),e.jsxs(A,{type:"single",defaultValue:"item-1",className:"mt-3",collapsible:!0,children:[e.jsxs(l,{value:"item-1",children:[e.jsx(i,{children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(Ie,{className:"group-data-[disabled]:texdark:t-blue-200 group-data-[disabled]:t8xt-blue-200 size-4 text-blue-500"}),"Access Your Booking"]})}),e.jsx(c,{children:e.jsx("p",{children:'Simply navigate to the "My Trips" section on our website and input your booking reference and last name to view your itinerary details.'})})]}),e.jsxs(l,{value:"item-2",children:[e.jsx(i,{children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(Se,{className:"size-4 text-blue-500 group-data-[disabled]:text-blue-200 dark:group-data-[disabled]:text-blue-900"}),"Change Flights"]})}),e.jsx(c,{children:e.jsxs("ol",{className:"flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 1:"})," ",'Within your booking details, select "Change Flights."']}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 2:"})," ","Follow the prompts to select new flight options and confirm the changes."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 3:"})," ","Review your new flight details and any fare differences."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 4:"})," ","Complete the change and receive your updated itinerary via email."]})]})})]}),e.jsxs(l,{value:"item-3",disabled:!0,children:[e.jsx(i,{children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(we,{className:"size-4 text-blue-500 group-data-[disabled]:text-blue-200 dark:group-data-[disabled]:text-blue-900"}),"Add Special Requests"]})}),e.jsx(c,{children:e.jsx("p",{children:'Look for the "Special Requests" option within your booking to specify any meal preferences, seating arrangements, or assistance services you may require during your flight.'})})]}),e.jsxs(l,{value:"item-4",children:[e.jsx(i,{children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(Te,{className:"size-4 text-blue-500 group-data-[disabled]:text-blue-200 dark:group-data-[disabled]:text-blue-900"}),"Check-In Online"]})}),e.jsx(c,{children:e.jsxs("ol",{className:"flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 1:"})," ",'Starting 48 hours before your flight, access the "Check-In" option.']}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Step 2:"})," ","Confirm your details and select your seats to complete the online check-in process."]})]})})]})]})]})},F={render:()=>e.jsxs(A,{type:"multiple",children:[e.jsxs(l,{value:"item-1",children:[e.jsx(i,{children:"Does NASA provide public access to space data?"}),e.jsx(c,{children:"Absolutely. NASA offers open access to a wealth of space data, including satellite images, mission information, and scientific discoveries through various platforms and APIs, encouraging public engagement and educational use."})]}),e.jsxs(l,{value:"item-2",children:[e.jsx(i,{children:"Are NASA's educational materials available for all age groups?"}),e.jsx(c,{children:"Yes. NASA provides a wide range of educational materials tailored for different age groups, from K-12 to higher education. These resources include lesson plans, interactive activities, and full courses, all designed to inspire and educate the next generation of explorers."})]}),e.jsxs(l,{value:"item-3",children:[e.jsx(i,{children:"Can the public participate in NASA missions?"}),e.jsx(c,{children:"Yes! Through various citizen science projects and initiatives, the public can contribute to NASA missions and scientific research. These opportunities allow individuals to analyze data, contribute to problem-solving, and even participate in the discovery process."})]})]})},O={render:()=>e.jsxs(A,{type:"single",collapsible:!0,disabled:!0,children:[e.jsxs(l,{value:"item-1",children:[e.jsx(i,{children:"Did FutureTravel Corp. offer eco-friendly travel options?"}),e.jsx(c,{children:"Yes. FutureTravel Corp. was dedicated to sustainable travel, offering a range of eco-friendly travel solutions including solar-powered flights and zero-emission accommodations, setting a benchmark for responsible tourism."})]}),e.jsxs(l,{value:"item-2",children:[e.jsx(i,{children:"Was FutureTravel Corp. technology-driven?"}),e.jsx(c,{children:"Absolutely. The company was at the forefront of travel technology, leveraging AI and machine learning to personalize travel experiences, optimize routes, and ensure the highest levels of efficiency and customer satisfaction."})]})]})},z={render:()=>e.jsxs(A,{type:"single",collapsible:!0,children:[e.jsxs(l,{value:"item-1",children:[e.jsx(i,{children:"Is it suitable for all skill levels?"}),e.jsx(c,{children:"Yes. From beginners to experts, Swiss ski resorts offer slopes and facilities for every level."})]}),e.jsxs(l,{value:"item-2",children:[e.jsx(i,{children:"Are ski passes affordable?"}),e.jsx(c,{children:"Ski passes vary, offering options for every budget, including day passes and season-long access."})]}),e.jsxs(l,{value:"item-3",disabled:!0,children:[e.jsx(i,{children:e.jsxs("span",{children:["Is off-piste skiing available?",e.jsx(Xe,{variant:"warning",children:"Currently paused"})]})}),e.jsx(c,{children:"Yes! Adventurous skiers can explore extensive off-piste terrain under proper safety measures."})]})]})},Y={render:()=>{const[n,r]=u.useState("");return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(Ze,{variant:"secondary",className:"w-fit",onClick:()=>r(o=>o==="item-2"?"":"item-2"),children:[n===""?"Open":"Close"," item number two"]}),e.jsxs(A,{type:"single",collapsible:!0,value:n,onValueChange:r,children:[e.jsxs(l,{value:"item-1",children:[e.jsx(i,{children:"In the app"}),e.jsx(c,{children:e.jsxs("ol",{className:"flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800",children:"Step 1:"}),"Tap the Inbox icon and then tap Add receipts."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800",children:"Step 2:"}),"Tap the + symbol to attach a photo or PDF of the receipt for our system to match."]})]})})]}),e.jsxs(l,{value:"item-2",children:[e.jsx(i,{children:"Via browser extension"}),e.jsx(c,{children:e.jsxs("ol",{className:"flex flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800",children:"Step 1:"}),e.jsx("span",{className:"underline",children:"Download"})," the browser extension for Chrome or Safari. (Firefox support is coming soon.)"]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-gray-800",children:"Step 2:"}),"Click the extension icon at the top of your browser. Under the Receipts tab, upload an image or click Screenshot current tab to automatically attach the receipt to the expense."]})]})})]}),e.jsxs(l,{value:"item-3",disabled:!0,children:[e.jsx(i,{children:e.jsx("span",{children:"Via email forwarding"})}),e.jsx(c,{children:"Yes! You can animate the Accordion with CSS or JavaScript."})]})]})]})}};var oe,te,re;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <Accordion type="single" className="mx-auto mt-3 max-w-sm" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>In the app</AccordionTrigger>
        <AccordionContent>
          <ol className="flex flex-col gap-2">
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-50">
                Step 1:
              </span>{" "}
              Tap the Inbox icon and then tap Add receipts.
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-50">
                Step 2:
              </span>{" "}
              Tap the + symbol to attach a photo or PDF of the receipt for our
              system to match.
            </li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Via browser extension</AccordionTrigger>
        <AccordionContent>
          <ol className="flex flex-col gap-2">
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-50">
                Step 1:
              </span>{" "}
              <span className="underline">Download</span> the browser extension
              for Chrome or Safari. (Firefox support is coming soon.)
            </li>
            <li>
              <span className="font-semibold text-gray-900 dark:text-gray-50">
                Step 2:
              </span>{" "}
              Click the extension icon at the top of your browser. Under the
              Receipts tab, upload an image or click Screenshot current tab to
              automatically attach the receipt to the expense.
            </li>
          </ol>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" disabled>
        <AccordionTrigger>Via email forwarding</AccordionTrigger>
        <AccordionContent>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(re=(te=R.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,se,ie;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="mx-auto max-w-lg">
      <h1 className="text-md font-semibold text-gray-900 dark:text-gray-50">
        Managing Your Booking Online
      </h1>
      <Accordion type="multiple" className="mt-3">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiCoupon3Fill className="size-4 text-blue-500" />
              Access Your Booking
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Simply navigate to the "My Trips" section on our website and input
              your booking reference and last name to view your itinerary
              details.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiArrowLeftRightLine className="size-4 text-blue-500" />
              Change Flights
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Within your booking details, select "Change Flights."
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Follow the prompts to select new flight options and confirm the
                changes.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 3:
                </span>{" "}
                Review your new flight details and any fare differences.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 4:
                </span>{" "}
                Complete the change and receive your updated itinerary via
                email.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiAddCircleFill className="size-4 text-blue-500" />
              Add Special Requests
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Look for the "Special Requests" option within your booking to
              specify any meal preferences, seating arrangements, or assistance
              services you may require during your flight.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiCheckboxMultipleFill className="size-4 text-blue-500" />
              Check-In Online
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Starting 48 hours before your flight, access the "Check-In"
                option.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Confirm your details and select your seats to complete the
                online check-in process.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(ie=(se=_.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,le,de;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can you render only one item?</AccordionTrigger>
        <AccordionContent>Yes, absolutely!</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(de=(le=P.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,me,ue;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="mx-auto max-w-lg">
      <h1 className="text-md font-semibold text-gray-900 dark:text-gray-50">
        Managing Your Booking Online
      </h1>
      <Accordion type="single" defaultValue="item-1" className="mt-3" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiCoupon3Fill className="group-data-[disabled]:texdark:t-blue-200 group-data-[disabled]:t8xt-blue-200 size-4 text-blue-500" />
              Access Your Booking
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Simply navigate to the "My Trips" section on our website and input
              your booking reference and last name to view your itinerary
              details.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiArrowLeftRightLine className="size-4 text-blue-500 group-data-[disabled]:text-blue-200 dark:group-data-[disabled]:text-blue-900" />
              Change Flights
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Within your booking details, select "Change Flights."
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Follow the prompts to select new flight options and confirm the
                changes.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 3:
                </span>{" "}
                Review your new flight details and any fare differences.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 4:
                </span>{" "}
                Complete the change and receive your updated itinerary via
                email.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" disabled>
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiAddCircleFill className="size-4 text-blue-500 group-data-[disabled]:text-blue-200 dark:group-data-[disabled]:text-blue-900" />
              Add Special Requests
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Look for the "Special Requests" option within your booking to
              specify any meal preferences, seating arrangements, or assistance
              services you may require during your flight.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <span className="flex items-center gap-2">
              <RiCheckboxMultipleFill className="size-4 text-blue-500 group-data-[disabled]:text-blue-200 dark:group-data-[disabled]:text-blue-900" />
              Check-In Online
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <ol className="flex flex-col gap-2">
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 1:
                </span>{" "}
                Starting 48 hours before your flight, access the "Check-In"
                option.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-gray-50">
                  Step 2:
                </span>{" "}
                Confirm your details and select your seats to complete the
                online check-in process.
              </li>
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
}`,...(ue=(me=D.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ge,xe,he;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Does NASA provide public access to space data?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely. NASA offers open access to a wealth of space data,
          including satellite images, mission information, and scientific
          discoveries through various platforms and APIs, encouraging public
          engagement and educational use.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          Are NASA's educational materials available for all age groups?
        </AccordionTrigger>
        <AccordionContent>
          Yes. NASA provides a wide range of educational materials tailored for
          different age groups, from K-12 to higher education. These resources
          include lesson plans, interactive activities, and full courses, all
          designed to inspire and educate the next generation of explorers.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          Can the public participate in NASA missions?
        </AccordionTrigger>
        <AccordionContent>
          Yes! Through various citizen science projects and initiatives, the
          public can contribute to NASA missions and scientific research. These
          opportunities allow individuals to analyze data, contribute to
          problem-solving, and even participate in the discovery process.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(he=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var fe,be,Ae;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible disabled>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Did FutureTravel Corp. offer eco-friendly travel options?
        </AccordionTrigger>
        <AccordionContent>
          Yes. FutureTravel Corp. was dedicated to sustainable travel, offering
          a range of eco-friendly travel solutions including solar-powered
          flights and zero-emission accommodations, setting a benchmark for
          responsible tourism.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          Was FutureTravel Corp. technology-driven?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely. The company was at the forefront of travel technology,
          leveraging AI and machine learning to personalize travel experiences,
          optimize routes, and ensure the highest levels of efficiency and
          customer satisfaction.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(Ae=(be=O.parameters)==null?void 0:be.docs)==null?void 0:Ae.source}}};var ye,ve,je;z.parameters={...z.parameters,docs:{...(ye=z.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Is it suitable for all skill levels?
        </AccordionTrigger>
        <AccordionContent>
          Yes. From beginners to experts, Swiss ski resorts offer slopes and
          facilities for every level.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Are ski passes affordable?</AccordionTrigger>
        <AccordionContent>
          Ski passes vary, offering options for every budget, including day
          passes and season-long access.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" disabled>
        <AccordionTrigger>
          <span>
            Is off-piste skiing available?
            <Badge variant="warning">Currently paused</Badge>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          Yes! Adventurous skiers can explore extensive off-piste terrain under
          proper safety measures.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(je=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:je.source}}};var Ce,Ne,ke;Y.parameters={...Y.parameters,docs:{...(Ce=Y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState("");
    return <div className="flex flex-col gap-2">
        <Button variant="secondary" className="w-fit" onClick={() => setValue(prevValue => prevValue === "item-2" ? "" : "item-2")} // Updated to use toggle functionality
      >
          {value === "" ? "Open" : "Close"} item number two
        </Button>
        <Accordion type="single" collapsible value={value} onValueChange={setValue}>
          <AccordionItem value="item-1">
            <AccordionTrigger>In the app</AccordionTrigger>
            <AccordionContent>
              <ol className="flex flex-col gap-2">
                <li>
                  <span className="font-semibold text-gray-800">Step 1:</span>
                  Tap the Inbox icon and then tap Add receipts.
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Step 2:</span>
                  Tap the + symbol to attach a photo or PDF of the receipt for
                  our system to match.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Via browser extension</AccordionTrigger>
            <AccordionContent>
              <ol className="flex flex-col gap-2">
                <li>
                  <span className="font-semibold text-gray-800">Step 1:</span>
                  <span className="underline">Download</span> the browser
                  extension for Chrome or Safari. (Firefox support is coming
                  soon.)
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Step 2:</span>
                  Click the extension icon at the top of your browser. Under the
                  Receipts tab, upload an image or click Screenshot current tab
                  to automatically attach the receipt to the expense.
                </li>
              </ol>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" disabled>
            <AccordionTrigger>
              <span>Via email forwarding</span>
            </AccordionTrigger>
            <AccordionContent>
              Yes! You can animate the Accordion with CSS or JavaScript.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>;
  }
}`,...(ke=(Ne=Y.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};const Wn=["Default","WithIcons","OneItem","DefaultValueAndCollapsibleDisabled","TypeMultiple","DisabledAccordion","DisabledAccordionItem","Controlled"];export{Y as Controlled,R as Default,D as DefaultValueAndCollapsibleDisabled,O as DisabledAccordion,z as DisabledAccordionItem,P as OneItem,F as TypeMultiple,_ as WithIcons,Wn as __namedExportsOrder,$n as default};
