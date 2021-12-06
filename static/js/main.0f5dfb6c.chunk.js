(this["webpackJsonpstyled-compoenents"]=this["webpackJsonpstyled-compoenents"]||[]).push([[0],{24:function(n,e,r){"use strict";r.r(e);var t,o,c,i,a,d,l,s,x,b,u,j=r(0),h=r.n(j),p=r(12),m=r.n(p),f=r(2),g=r(5),O=r(7),y=r(4),w=f.c.button(t||(t=Object(y.a)(["\n    width: 140px;\n    height: 50px;\n    background-color: ",";\n    border-radius: 100px;\n\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 26px;\n    color: #FFFFFF;\n\n    border: none;\n\n    &:active {\n        border: 1px solid ",";\n    }\n\n    margin: ",";\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.border}),(function(n){return n.margin||"0"})),v=f.c.div(o||(o=Object(y.a)(["\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n\n    max-width: 1400px;\n    max-height: 970px;\n"])),(function(n){return n.theme.colors.background})),F=f.c.div(c||(c=Object(y.a)(["\n    display: flex;\n    flex-direction: ",";\n    justify-content: ",";\n    align-items: ",";\n    margin: ",";\n"])),(function(n){return n.direction||"row"}),(function(n){return n.justify||"flex-start"}),(function(n){return n.align||"flex-start"}),(function(n){return n.margin||"0"})),k=Object(f.b)(i||(i=Object(y.a)(["\n    * {\n        font-family: DM Sans, sans-serif !important;\n    }\n    #root {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        justify-content: center;\n    }\n"]))),C=f.c.h3(a||(a=Object(y.a)(["\n    color: ",";\n    font-weight: 700;\n    font-style: normal;\n    font-size: 42px;\n    line-height: 52px;\n    letter-spacing: -0.4px;\n\n    margin: 20px 0;\n"])),(function(n){return n.theme.colors.heading})),E=f.c.div(d||(d=Object(y.a)(["\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 26px;\n    color: ",";\n    padding: 0 0 30px 0;\n"])),(function(n){return n.theme.colors.text})),z=f.c.input(l||(l=Object(y.a)(["\n    width: ",";\n    height: 50px;\n\n    mix-blend-mode: normal;\n    border: 2px solid ",";\n    box-sizing: border-box;\n    border-radius: 100px;\n\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 26px;\n\n    padding-left: 24px;\n\n    color: rgba(21, 20, 57, 0.4);\n\n    &:focus {\n        outline: 2px solid ",";\n    }\n"])),(function(n){return n.width||"370px"}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.heading})),S=f.c.label(s||(s=Object(y.a)(["\n    color: ",";\n    font-weight: 500;\n    font-size: 18px;\n    cursor: pointer;\n    padding: 5px 0;\n"])),(function(n){return n.theme.colors.heading})),D=Object(f.c)(S)(x||(x=Object(y.a)(["\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 26px;\n\n    letter-spacing: 2px;\n    text-transform: uppercase;\n"]))),V=f.c.div(b||(b=Object(y.a)(["\n    background-color: ",";\n    width: 100%;\n\n    border: 2px solid #EBEAED;\n    box-sizing: border-box;\n    border-radius: 10px;\n\n    display: flex;\n    padding: 30px;\n    margin: 10px 0;\n\n    &:focus-within {\n        border-color: ",";\n    }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.primary})),A=f.c.input(u||(u=Object(y.a)(["\n    width: 20px;\n    height: 20px;\n    background-color: ",";\n\n    -webkit-appearance: none;\n    appearance: none;\n\n    font: inherit;\n    border: 2px solid ",';\n    box-sizing: border-box;\n    border-radius: 23px;\n\n    display: grid;\n    place-content: center;\n\n    &::before {\n        content: "";\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        transform: scale(0);\n        transition: 120ms transform ease-in-out;\n        box-shadow: inset 1em 1em var(--form-control-color);\n        background-color: ',";\n        outline: 4px solid #25DAC5;\n    }\n\n    &:checked::before {\n        transform: scale(1);\n    }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.heading})),P=r(1),B=function(){var n=Object(O.b)({mode:"onChange",defaultValues:{email:"",cardNumber:"",cardExpiration:"",cardHolder:"",cardCVV:""}});return Object(P.jsx)("form",{onSubmit:n.handleSubmit((function(n){console.log("Success: ",n)}),(function(n){console.log("Error: ",n)})),children:Object(P.jsxs)(v,{children:[Object(P.jsx)(C,{children:"Choose Your Payment Method"}),Object(P.jsxs)(V,{children:[Object(P.jsx)(A,{type:"radio",name:"payment-method",id:"paypal",onChange:function(n){console.log(n)}}),Object(P.jsxs)(F,{direction:"column",children:[Object(P.jsx)(S,{htmlFor:"paypal",children:"Paypal"}),Object(P.jsx)(E,{children:"Safe payment online. Credit card needed. PayPal account is not necessary."}),Object(P.jsx)(O.a,{name:"email",control:n.control,render:function(n){var e=n.field;n.fieldState;return Object(P.jsx)(z,Object(g.a)(Object(g.a)({},e),{},{type:"email",placeholder:"Email address"}))}})]})]}),Object(P.jsxs)(V,{children:[Object(P.jsx)(A,{type:"radio",name:"payment-method",id:"credit-card"}),Object(P.jsxs)(F,{direction:"column",children:[Object(P.jsx)(S,{htmlFor:"credit-card",children:"Credit Card"}),Object(P.jsx)(E,{children:"Safe money transfer using your bank account."}),Object(P.jsxs)(F,{children:[Object(P.jsxs)(F,{direction:"column",margin:"20px 20px 20px 0",children:[Object(P.jsx)(D,{htmlFor:"card-number",children:"Credit card number"}),Object(P.jsx)(O.a,{name:"cardNumber",control:n.control,render:function(n){var e=n.field;n.fieldState;return Object(P.jsx)(z,Object(g.a)(Object(g.a)({},e),{},{id:"card-number"}))}})]}),Object(P.jsxs)(F,{direction:"column",margin:"20px 20px 20px 0",children:[Object(P.jsx)(D,{htmlFor:"card-expiration",children:"Expiration"}),Object(P.jsx)(O.a,{name:"cardExpiration",control:n.control,render:function(n){var e=n.field;return Object(P.jsx)(z,Object(g.a)(Object(g.a)({},e),{},{id:"card-expiration"}))}})]})]}),Object(P.jsxs)(F,{children:[Object(P.jsxs)(F,{direction:"column",margin:"20px 20px 20px 0",children:[Object(P.jsx)(D,{htmlFor:"card-holder",children:"Cardholder name"}),Object(P.jsx)(O.a,{name:"cardHolder",control:n.control,render:function(n){var e=n.field;return Object(P.jsx)(z,Object(g.a)(Object(g.a)({},e),{},{id:"card-holder"}))}})]}),Object(P.jsxs)(F,{align:"flex-end",margin:"20px 20px 20px 0",children:[Object(P.jsxs)(F,{direction:"column",children:[Object(P.jsx)(D,{htmlFor:"card-cvv",children:"Cvv code"}),Object(P.jsx)(O.a,{name:"cardCVV",control:n.control,render:function(n){var e=n.field;return Object(P.jsx)(z,Object(g.a)(Object(g.a)({},e),{},{id:"card-cvv",width:"100px"}))}})]}),Object(P.jsx)(w,{margin:"0 0 0 20px",type:"submit",children:"Checkout"})]})]})]})]})]})})},M={colors:{primary:"#25DAC5",heading:"#1E0E62",text:"rgba(21, 20, 57, 0.4)",background:"#FFFFFF",border:"#EBEAED"}},H=function(){return Object(P.jsxs)(f.a,{theme:M,children:[Object(P.jsx)(k,{}),Object(P.jsx)(B,{})]})};m.a.render(Object(P.jsx)(h.a.StrictMode,{children:Object(P.jsx)(H,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0f5dfb6c.chunk.js.map