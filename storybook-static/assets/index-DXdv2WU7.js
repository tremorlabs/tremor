import{r as i}from"./index-ClcD9ViR.js";import{c as P,a as x,b as F}from"./index-D-jls2fw.js";import{u as E}from"./index-ClVxAquS.js";import{P as y}from"./index-DDVkbYHz.js";import{c as I,R as L,I as q}from"./index-CgiNqS2a.js";import{u as K}from"./index-BCyXaPxf.js";import{u as V}from"./index-DSWkTB7Z.js";import{u as T}from"./index-sY83p_TZ.js";import{P as U}from"./index-CkP846ZC.js";import{j as c}from"./jsx-runtime-CfatFE5O.js";var k="Radio",[z,w]=P(k),[B,H]=z(k),G=i.forwardRef((t,d)=>{const{__scopeRadio:e,name:s,checked:o=!1,required:r,disabled:a,value:l="on",onCheck:u,form:f,...v}=t,[p,m]=i.useState(null),n=E(d,b=>m(b)),R=i.useRef(!1),h=p?f||!!p.closest("form"):!0;return c.jsxs(B,{scope:e,checked:o,disabled:a,children:[c.jsx(y.button,{type:"button",role:"radio","aria-checked":o,"data-state":_(o),"data-disabled":a?"":void 0,disabled:a,value:l,...v,ref:n,onClick:x(t.onClick,b=>{o||u==null||u(),h&&(R.current=b.isPropagationStopped(),R.current||b.stopPropagation())})}),h&&c.jsx(W,{control:p,bubbles:!R.current,name:s,value:l,checked:o,required:r,disabled:a,form:f,style:{transform:"translateX(-100%)"}})]})});G.displayName=k;var S="RadioIndicator",g=i.forwardRef((t,d)=>{const{__scopeRadio:e,forceMount:s,...o}=t,r=H(S,e);return c.jsx(U,{present:s||r.checked,children:c.jsx(y.span,{"data-state":_(r.checked),"data-disabled":r.disabled?"":void 0,...o,ref:d})})});g.displayName=S;var W=t=>{const{control:d,checked:e,bubbles:s=!0,...o}=t,r=i.useRef(null),a=T(e),l=V(d);return i.useEffect(()=>{const u=r.current,f=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(f,"checked").set;if(a!==e&&p){const m=new Event("click",{bubbles:s});p.call(u,e),u.dispatchEvent(m)}},[a,e,s]),c.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:e,...o,tabIndex:-1,ref:r,style:{...t.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function _(t){return t?"checked":"unchecked"}var X=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],C="RadioGroup",[Y,de]=P(C,[I,w]),j=I(),A=w(),[J,Q]=Y(C),N=i.forwardRef((t,d)=>{const{__scopeRadioGroup:e,name:s,defaultValue:o,value:r,required:a=!1,disabled:l=!1,orientation:u,dir:f,loop:v=!0,onValueChange:p,...m}=t,n=j(e),R=K(f),[h,b]=F({prop:r,defaultProp:o,onChange:p});return c.jsx(J,{scope:e,name:s,required:a,disabled:l,value:h,onValueChange:b,children:c.jsx(L,{asChild:!0,...n,orientation:u,dir:R,loop:v,children:c.jsx(y.div,{role:"radiogroup","aria-required":a,"aria-orientation":u,"data-disabled":l?"":void 0,dir:R,...m,ref:d})})})});N.displayName=C;var D="RadioGroupItem",M=i.forwardRef((t,d)=>{const{__scopeRadioGroup:e,disabled:s,...o}=t,r=Q(D,e),a=r.disabled||s,l=j(e),u=A(e),f=i.useRef(null),v=E(d,f),p=r.value===o.value,m=i.useRef(!1);return i.useEffect(()=>{const n=h=>{X.includes(h.key)&&(m.current=!0)},R=()=>m.current=!1;return document.addEventListener("keydown",n),document.addEventListener("keyup",R),()=>{document.removeEventListener("keydown",n),document.removeEventListener("keyup",R)}},[]),c.jsx(q,{asChild:!0,...l,focusable:!a,active:p,children:c.jsx(G,{disabled:a,required:r.required,checked:p,...u,...o,name:r.name,ref:v,onCheck:()=>r.onValueChange(o.value),onKeyDown:x(n=>{n.key==="Enter"&&n.preventDefault()}),onFocus:x(o.onFocus,()=>{var n;m.current&&((n=f.current)==null||n.click())})})})});M.displayName=D;var Z="RadioGroupIndicator",O=i.forwardRef((t,d)=>{const{__scopeRadioGroup:e,...s}=t,o=A(e);return c.jsx(g,{...o,...s,ref:d})});O.displayName=Z;var ue=N,pe=M,le=O;export{le as I,ue as R,pe as a};
