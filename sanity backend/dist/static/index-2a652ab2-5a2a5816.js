import{s as _,aH as g,A as j,P as w,cz as B,p as a,ar as L,cy as O,an as T,aV as S,as as A,u as z,ad as D,ab as H}from"./desk-eb7b3548-97128869.js";import{P as W}from"./PaneItem-59fdbcf0-727389eb.js";import{useDeskTool as C}from"./index-66ec8894-4c658a6a.js";import"./index-52809b41.js";var r;function G(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}const E=_.hr(r||(r=G([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function V(n){const{childItemId:t,index:l,isActive:d,isSelected:p,pane:u,paneKey:f}=n,{features:h}=C(),{collapsed:y}=g(),{defaultLayout:m,displayOptions:c,items:i,menuItems:v,menuItemGroups:I,title:b}=u,P=c==null?void 0:c.showIcons,k=e=>{var o;const s=(o=e.displayOptions)==null?void 0:o.showIcon;return typeof s<"u"?s!==!1:P!==!1};return j(w,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane",id:f,maxWidth:640,minWidth:320,selected:p,children:[B,a(L,{actions:a(O,{menuItems:v,menuItemGroups:I}),backButton:h.backButton&&l>0&&a(T,{as:S,"data-as":"a",icon:A,mode:"bleed"}),title:b}),a(z,{overflow:y?void 0:"auto",children:a(D,{padding:2,space:1,children:i&&i.map((e,o)=>{if(e.type==="divider")return a(H,{paddingY:1,children:a(E,{})},"divider-".concat(o));const s=!d&&t===e.id,x=d&&t===e.id;return a(W,{icon:k(e)?e.icon:!1,id:e.id,layout:m,pressed:s,schemaType:e.schemaType,selected:x,title:e.title,value:e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0},e.id)})})})]})}export{V as default};
