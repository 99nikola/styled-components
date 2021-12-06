(this["webpackJsonpstyled-compoenents"]=this["webpackJsonpstyled-compoenents"]||[]).push([[0],{19:function(n,e,r){"use strict";r.r(e);var t,o,i,c,d,a,s,l,x,h,p,b=r(1),u=r.n(b),j=r(8),m=r.n(j),f=r(2),g=r(3),O=f.c.button(t||(t=Object(g.a)(["\n    width: 140px;\n    height: 50px;\n    background-color: ",";\n    border-radius: 100px;\n\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 26px;\n    color: #FFFFFF;\n\n    border: none;\n\n    &:active {\n        border: 1px solid ",";\n    }\n\n    margin: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.border}),(function(n){return n.margin||"0"})),y=f.c.div(o||(o=Object(g.a)(["\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n\n    max-width: 1400px;\n    max-height: 970px;\n"])),(function(n){return n.theme.colors.background})),w=f.c.div(i||(i=Object(g.a)(["\n    display: flex;\n    flex-direction: ",";\n    justify-content: ",";\n    align-items: ",";\n    margin: ",";\n"])),(function(n){return n.direction||"row"}),(function(n){return n.justify||"flex-start"}),(function(n){return n.align||"flex-start"}),(function(n){return n.margin||"0"})),F=Object(f.b)(c||(c=Object(g.a)(["\n    * {\n        font-family: DM Sans, sans-serif;\n    }\n    #root {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        justify-content: center;\n    }\n"]))),k=f.c.h3(d||(d=Object(g.a)(["\n    color: ",";\n    font-weight: 700;\n    font-style: normal;\n    font-size: 42px;\n    line-height: 52px;\n    letter-spacing: -0.4px;\n\n    margin: 10px 0;\n"])),(function(n){return n.theme.colors.heading})),v=f.c.div(a||(a=Object(g.a)(["\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 26px;\n    color: ",";\n    padding: 0 0 30px 0;\n"])),(function(n){return n.theme.colors.text})),E=f.c.input(s||(s=Object(g.a)(["\n    width: ",";\n    height: 50px;\n\n    mix-blend-mode: normal;\n    border: 2px solid ",";\n    box-sizing: border-box;\n    border-radius: 100px;\n\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 26px;\n\n    padding-left: 24px;\n\n    color: rgba(21, 20, 57, 0.4);\n\n    &:focus {\n        outline: 2px solid ",";\n    }\n"])),(function(n){return n.width||"370px"}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.heading})),C=f.c.label(l||(l=Object(g.a)(["\n    color: ",";\n    font-weight: 500;\n    font-size: 18px;\n    cursor: pointer;\n    padding: 5px 0;\n"])),(function(n){return n.theme.colors.heading})),z=Object(f.c)(C)(x||(x=Object(g.a)(["\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 26px;\n\n    letter-spacing: 2px;\n    text-transform: uppercase;\n"]))),D=f.c.div(h||(h=Object(g.a)(["\n    background-color: ",";\n    width: 100%;\n\n    border: 2px solid #EBEAED;\n    box-sizing: border-box;\n    border-radius: 10px;\n\n    display: flex;\n    padding: 30px;\n    margin-bottom: 20px;\n\n    &:focus-within {\n        border-color: ",";\n    }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.primary})),A=f.c.input(p||(p=Object(g.a)(["\n    width: 20px;\n    height: 20px;\n    background-color: ",";\n\n    -webkit-appearance: none;\n    appearance: none;\n\n    font: inherit;\n    border: 2px solid ",';\n    box-sizing: border-box;\n    border-radius: 23px;\n\n    display: grid;\n    place-content: center;\n\n    &::before {\n        content: "";\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        transform: scale(0);\n        transition: 120ms transform ease-in-out;\n        box-shadow: inset 1em 1em var(--form-control-color);\n        background-color: ',";\n        outline: 4px solid #25DAC5;\n    }\n\n    &:checked::before {\n        transform: scale(1);\n    }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.heading})),P=r(0),S=function(){return Object(P.jsxs)(y,{children:[Object(P.jsx)(k,{children:"Choose Your Payment Method"}),Object(P.jsxs)(D,{children:[Object(P.jsx)(A,{type:"radio",name:"payment-method",id:"paypal"}),Object(P.jsxs)(w,{direction:"column",children:[Object(P.jsx)(C,{htmlFor:"paypal",children:"Paypal"}),Object(P.jsx)(v,{children:"Safe payment online. Credit card needed. PayPal account is not necessary."}),Object(P.jsx)(E,{type:"email",placeholder:"Email address"})]})]}),Object(P.jsxs)(D,{children:[Object(P.jsx)(A,{type:"radio",name:"payment-method",id:"credit-card"}),Object(P.jsxs)(w,{direction:"column",children:[Object(P.jsx)(C,{htmlFor:"credit-card",children:"Credit Card"}),Object(P.jsx)(v,{children:"Safe money transfer using your bank account."}),Object(P.jsxs)(w,{children:[Object(P.jsxs)(w,{direction:"column",margin:"20px 20px 20px 0",children:[Object(P.jsx)(z,{htmlFor:"card-number",children:"Credit card number"}),Object(P.jsx)(E,{id:"card-number"})]}),Object(P.jsxs)(w,{direction:"column",margin:"20px 20px 20px 0",children:[Object(P.jsx)(z,{htmlFor:"card-expiration",children:"Expiration"}),Object(P.jsx)(E,{id:"card-expiration"})]})]}),Object(P.jsxs)(w,{children:[Object(P.jsxs)(w,{direction:"column",margin:"20px 20px 20px 0",children:[Object(P.jsx)(z,{htmlFor:"card-holder",children:"Cardholder name"}),Object(P.jsx)(E,{id:"card-holder"})]}),Object(P.jsxs)(w,{align:"flex-end",margin:"20px 20px 20px 0",children:[Object(P.jsxs)(w,{direction:"column",children:[Object(P.jsx)(z,{htmlFor:"card-cvv",children:"Cvv code"}),Object(P.jsx)(E,{id:"card-cvv",width:"100px"})]}),Object(P.jsx)(O,{margin:"0 0 0 20px",children:"Checkout"})]})]})]})]})]})},B={colors:{primary:"#25DAC5",heading:"#1E0E62",text:"rgba(21, 20, 57, 0.4)",background:"#FFFFFF",border:"#EBEAED"}},M=function(){return Object(P.jsxs)(f.a,{theme:B,children:[Object(P.jsx)(F,{}),Object(P.jsx)(S,{})]})};m.a.render(Object(P.jsx)(u.a.StrictMode,{children:Object(P.jsx)(M,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ba4e8d7c.chunk.js.map