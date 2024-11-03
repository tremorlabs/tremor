import{r as i}from"./index-ClcD9ViR.js";import{c as G,a as P,b as H}from"./index-D-jls2fw.js";import{u as A,S as K}from"./index-ClVxAquS.js";import{D as $}from"./index-8isb7LcM.js";import{h as U,R as V,u as W,F as Z}from"./Combination-BH2yWiU8.js";import{u as q}from"./index-ZVc5Krty.js";import{c as O,A as _,C as z,a as B,R as J}from"./index-a6sp4N9A.js";import{P as Q}from"./index-B7xKYiWN.js";import{P as E}from"./index-CkP846ZC.js";import{P as w}from"./index-DDVkbYHz.js";import{j as p}from"./jsx-runtime-CfatFE5O.js";var x="Popover",[j,ge]=G(x,[O]),g=O(),[X,d]=j(x),b=e=>{const{__scopePopover:n,children:t,open:s,defaultOpen:o,onOpenChange:r,modal:a=!1}=e,c=g(n),u=i.useRef(null),[l,h]=i.useState(!1),[m=!1,f]=H({prop:s,defaultProp:o,onChange:r});return p.jsx(J,{...c,children:p.jsx(X,{scope:n,contentId:q(),triggerRef:u,open:m,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(C=>!C),[f]),hasCustomAnchor:l,onCustomAnchorAdd:i.useCallback(()=>h(!0),[]),onCustomAnchorRemove:i.useCallback(()=>h(!1),[]),modal:a,children:t})})};b.displayName=x;var F="PopoverAnchor",N=i.forwardRef((e,n)=>{const{__scopePopover:t,...s}=e,o=d(F,t),r=g(t),{onCustomAnchorAdd:a,onCustomAnchorRemove:c}=o;return i.useEffect(()=>(a(),()=>c()),[a,c]),p.jsx(_,{...r,...s,ref:n})});N.displayName=F;var S="PopoverTrigger",y=i.forwardRef((e,n)=>{const{__scopePopover:t,...s}=e,o=d(S,t),r=g(t),a=A(n,o.triggerRef),c=p.jsx(w.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":L(o.open),...s,ref:a,onClick:P(e.onClick,o.onOpenToggle)});return o.hasCustomAnchor?c:p.jsx(_,{asChild:!0,...r,children:c})});y.displayName=S;var R="PopoverPortal",[Y,ee]=j(R,{forceMount:void 0}),D=e=>{const{__scopePopover:n,forceMount:t,children:s,container:o}=e,r=d(R,n);return p.jsx(Y,{scope:n,forceMount:t,children:p.jsx(E,{present:t||r.open,children:p.jsx(Q,{asChild:!0,container:o,children:s})})})};D.displayName=R;var v="PopoverContent",M=i.forwardRef((e,n)=>{const t=ee(v,e.__scopePopover),{forceMount:s=t.forceMount,...o}=e,r=d(v,e.__scopePopover);return p.jsx(E,{present:s||r.open,children:r.modal?p.jsx(oe,{...o,ref:n}):p.jsx(re,{...o,ref:n})})});M.displayName=v;var oe=i.forwardRef((e,n)=>{const t=d(v,e.__scopePopover),s=i.useRef(null),o=A(n,s),r=i.useRef(!1);return i.useEffect(()=>{const a=s.current;if(a)return U(a)},[]),p.jsx(V,{as:K,allowPinchZoom:!0,children:p.jsx(T,{...e,ref:o,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:P(e.onCloseAutoFocus,a=>{var c;a.preventDefault(),r.current||(c=t.triggerRef.current)==null||c.focus()}),onPointerDownOutside:P(e.onPointerDownOutside,a=>{const c=a.detail.originalEvent,u=c.button===0&&c.ctrlKey===!0,l=c.button===2||u;r.current=l},{checkForDefaultPrevented:!1}),onFocusOutside:P(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1})})})}),re=i.forwardRef((e,n)=>{const t=d(v,e.__scopePopover),s=i.useRef(!1),o=i.useRef(!1);return p.jsx(T,{...e,ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var a,c;(a=e.onCloseAutoFocus)==null||a.call(e,r),r.defaultPrevented||(s.current||(c=t.triggerRef.current)==null||c.focus(),r.preventDefault()),s.current=!1,o.current=!1},onInteractOutside:r=>{var u,l;(u=e.onInteractOutside)==null||u.call(e,r),r.defaultPrevented||(s.current=!0,r.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const a=r.target;((l=t.triggerRef.current)==null?void 0:l.contains(a))&&r.preventDefault(),r.detail.originalEvent.type==="focusin"&&o.current&&r.preventDefault()}})}),T=i.forwardRef((e,n)=>{const{__scopePopover:t,trapFocus:s,onOpenAutoFocus:o,onCloseAutoFocus:r,disableOutsidePointerEvents:a,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:l,onInteractOutside:h,...m}=e,f=d(v,t),C=g(t);return W(),p.jsx(Z,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:o,onUnmountAutoFocus:r,children:p.jsx($,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:h,onEscapeKeyDown:c,onPointerDownOutside:u,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),children:p.jsx(z,{"data-state":L(f.open),role:"dialog",id:f.contentId,...C,...m,ref:n,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),k="PopoverClose",I=i.forwardRef((e,n)=>{const{__scopePopover:t,...s}=e,o=d(k,t);return p.jsx(w.button,{type:"button",...s,ref:n,onClick:P(e.onClick,()=>o.onOpenChange(!1))})});I.displayName=k;var te="PopoverArrow",ne=i.forwardRef((e,n)=>{const{__scopePopover:t,...s}=e,o=g(t);return p.jsx(B,{...o,...s,ref:n})});ne.displayName=te;function L(e){return e?"open":"closed"}var he=b,me=N,Ce=y,xe=D,Re=M,Ae=I;export{me as A,Ae as C,xe as P,he as R,Ce as T,Re as a};
