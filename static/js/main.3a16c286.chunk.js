(this["webpackJsonpstyled-compoenents"]=this["webpackJsonpstyled-compoenents"]||[]).push([[0],{28:function(e,n,r){"use strict";r.r(n);var t=r(0),o=r.n(t),c=r(15),i=r.n(c),a=r(2),d=r(8),l=r(5),s=r(7);var u,b,j,h,m,x,p,f,g,O,v,y={required:"Required"},C=Object(l.a)(Object(l.a)({},y),{},{validate:{checkLuhn:function(e){var n=e.trim();if(!function(e){var n=Number.parseInt(e);return Number.isInteger(n)&&n>0}(n))return"Invalid credit card number";for(var r=0,t=(n.length-1)%2,o=n.length-1;o>=0;o--){var c=Number.parseInt(n[o]);o%2===t&&(c*=2)>=10&&(c-=9),r+=c}var i=r%10;return 0===i||"Warning: Next check digit: ".concat(10-i)}}}),w=Object(l.a)(Object(l.a)({},y),{},{pattern:{value:/^(0?[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,message:"Invalid format."}}),k=Object(l.a)(Object(l.a)({},y),{},{pattern:{value:/^[0-9]{3}|[0-9]{4}$/,message:"Inavild format."}}),F=r(4),S=a.c.button(u||(u=Object(F.a)(["\n    width: 140px;\n    height: 50px;\n    background-color: ",";\n    border-radius: 100px;\n\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 26px;\n    color: #FFFFFF;\n\n    border: none;\n\n    &:active {\n        border: 1px solid ",";\n    }\n\n    margin: ",";\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.border}),(function(e){return e.margin||"0"})),E=a.c.div(b||(b=Object(F.a)(["\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n\n    max-width: 1400px;\n    max-height: 970px;\n"])),(function(e){return e.theme.colors.background})),M=a.c.div(j||(j=Object(F.a)(["\n    display: flex;\n    flex-direction: ",";\n    justify-content: ",";\n    align-items: ",";\n    margin: ",";\n    border: ",";\n"])),(function(e){return e.direction||"row"}),(function(e){return e.justify||"flex-start"}),(function(e){return e.align||"flex-start"}),(function(e){return e.margin||"0"}),(function(e){return e.border||"0"})),z=Object(a.b)(h||(h=Object(F.a)(["\n    * {\n        font-family: DM Sans, sans-serif !important;\n    }\n    #root {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        display: flex;\n        justify-content: center;\n    }\n"]))),B=a.c.h3(m||(m=Object(F.a)(["\n    color: ",";\n    font-weight: 700;\n    font-style: normal;\n    font-size: 42px;\n    line-height: 52px;\n    letter-spacing: -0.4px;\n\n    margin: 20px 0;\n"])),(function(e){return e.theme.colors.heading})),P=a.c.div(x||(x=Object(F.a)(["\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 26px;\n    color: ",";\n    padding: 0 0 30px 0;\n"])),(function(e){return e.theme.colors.text})),I=r(19),N=r(1),V=Object(t.forwardRef)((function(e,n){var r=e.errorMessage,t=e.width,o=Object(I.a)(e,["errorMessage","width"]);return Object(N.jsxs)(D,{width:t,children:[Object(N.jsx)("input",Object(l.a)(Object(l.a)({},o),{},{ref:n})),Object(N.jsx)("p",{className:"error-message",children:r})]})})),D=a.c.div(p||(p=Object(F.a)(["\n    & > input {\n        width: ",";\n        height: 50px;\n\n        mix-blend-mode: normal;\n        border: 2px solid ",";\n        box-sizing: border-box;\n        border-radius: 100px;\n\n        font-weight: 500;\n        font-size: 18px;\n        line-height: 26px;\n\n        padding-left: 24px;\n\n        color: rgba(21, 20, 57, 0.4);\n    }\n\n    & > input:focus {\n        outline: 2px solid ",';\n    }\n\n    & > input[aria-invalid="true"] {\n        outline: 2px solid red;\n    }\n\n    & .error-message {\n        color: red;\n        margin: 2px 0 2px 20px;\n    }\n'])),(function(e){return e.width||"370px"}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.heading})),A=V,q=a.c.label(f||(f=Object(F.a)(["\n    color: ",";\n    font-weight: 500;\n    font-size: 18px;\n    cursor: pointer;\n    padding: 5px 0;\n"])),(function(e){return e.theme.colors.heading})),H=Object(a.c)(q)(g||(g=Object(F.a)(["\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 26px;\n\n    letter-spacing: 2px;\n    text-transform: uppercase;\n"]))),J=a.c.label(O||(O=Object(F.a)(["\n    background-color: ",";\n    width: 100%;\n\n    border: 2px solid #EBEAED;\n    box-sizing: border-box;\n    border-radius: 10px;\n\n    display: flex;\n    padding: 30px;\n    margin: 10px 0;\n\n    &:focus-within {\n        border-color: ",";\n    }\n\n    cursor: pointer;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.primary})),R=a.c.input(v||(v=Object(F.a)(["\n    width: 20px;\n    height: 20px;\n    background-color: ",";\n\n    -webkit-appearance: none;\n    appearance: none;\n\n    font: inherit;\n    border: 2px solid ",';\n    box-sizing: border-box;\n    border-radius: 23px;\n\n    display: grid;\n    place-content: center;\n\n    &::before {\n        content: "";\n        width: 12px;\n        height: 12px;\n        border-radius: 50%;\n        transform: scale(0);\n        transition: 120ms transform ease-in-out;\n        box-shadow: inset 1em 1em var(--form-control-color);\n        background-color: ',";\n        outline: 4px solid #25DAC5;\n    }\n\n    &:checked::before {\n        transform: scale(1);\n    }\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.heading})),$=function(e){var n=e.onSubmit,r=e.onError,o=e.handlePaymentChange,c=e.paymentMethod,i=Object(s.b)({mode:"onChange",defaultValues:{cardNumber:"",cardExpiration:"",cardHolder:"",cardCVV:""}}),a=Object(t.useMemo)((function(){return c===G.creditCard&&Object(N.jsx)(S,{margin:"0 0 0 20px",type:"submit",children:"Checkout"})}),[c]);return Object(N.jsxs)(J,{htmlfor:"credit-card",children:[Object(N.jsx)(R,{type:"radio",name:"payment-method",id:"credit-card",defaultChecked:!0,onChange:function(e){e.target.checked&&o(G.creditCard)}}),Object(N.jsxs)(M,{direction:"column",children:[Object(N.jsx)(q,{htmlFor:"credit-card",children:"Credit Card"}),Object(N.jsx)(P,{children:"Safe money transfer using your bank account."}),Object(N.jsxs)("form",{onSubmit:i.handleSubmit(n,r),children:[Object(N.jsxs)(M,{children:[Object(N.jsxs)(M,{direction:"column",margin:"20px 20px 20px 0",children:[Object(N.jsx)(H,{htmlFor:"card-number",children:"Credit card number"}),Object(N.jsx)(s.a,{name:"cardNumber",control:i.control,rules:C,render:function(e){var n,r=e.field,t=e.fieldState;return Object(N.jsx)(A,Object(l.a)(Object(l.a)({},r),{},{id:"card-number","aria-invalid":Boolean(t.error),errorMessage:null===(n=t.error)||void 0===n?void 0:n.message}))}})]}),Object(N.jsxs)(M,{direction:"column",margin:"20px 20px 20px 0",children:[Object(N.jsx)(H,{htmlFor:"card-expiration",children:"Expiration"}),Object(N.jsx)(s.a,{name:"cardExpiration",control:i.control,rules:w,render:function(e){var n,r=e.field,t=e.fieldState;return Object(N.jsx)(A,Object(l.a)(Object(l.a)({},r),{},{id:"card-expiration","aria-invalid":Boolean(t.error),errorMessage:null===(n=t.error)||void 0===n?void 0:n.message}))}})]})]}),Object(N.jsxs)(M,{children:[Object(N.jsxs)(M,{direction:"column",margin:"20px 20px 20px 0",children:[Object(N.jsx)(H,{htmlFor:"card-holder",children:"Cardholder name"}),Object(N.jsx)(s.a,{name:"cardHolder",control:i.control,rules:y,render:function(e){var n,r=e.field,t=e.fieldState;return Object(N.jsx)(A,Object(l.a)(Object(l.a)({},r),{},{id:"card-holder","aria-invalid":Boolean(t.error),errorMessage:null===(n=t.error)||void 0===n?void 0:n.message}))}})]}),Object(N.jsxs)(M,{align:"flex-start",margin:"20px 20px 20px 0",children:[Object(N.jsxs)(M,{direction:"column",children:[Object(N.jsx)(H,{htmlFor:"card-cvv",children:"Cvv code"}),Object(N.jsx)(s.a,{name:"cardCVV",control:i.control,rules:k,render:function(e){var n,r=e.field,t=e.fieldState;return Object(N.jsx)(A,Object(l.a)(Object(l.a)({},r),{},{id:"card-cvv",width:"100px","aria-invalid":Boolean(t.error),errorMessage:null===(n=t.error)||void 0===n?void 0:n.message}))}})]}),Object(N.jsx)(M,{margin:"33px 0 0 0",children:a})]})]})]})]})]})},L=Object(t.memo)($),W=function(e){var n=e.onSubmit,r=e.onError,o=e.handlePaymentChange,c=e.paymentMethod,i=Object(s.b)({mode:"onChange",defaultValues:{email:""}}),a=Object(t.useMemo)((function(){return c===G.paypal&&Object(N.jsx)(S,{margin:"0 0 0 20px",type:"submit",children:"Checkout"})}),[c]);return Object(N.jsxs)(J,{htmlFor:"paypal",children:[Object(N.jsx)(R,{type:"radio",name:"payment-method",id:"paypal",onChange:function(e){e.target.checked&&o(G.paypal)}}),Object(N.jsx)(M,{direction:"column",children:Object(N.jsxs)("form",{onSubmit:i.handleSubmit(n,r),children:[Object(N.jsx)(q,{htmlFor:"paypal",children:"Paypal"}),Object(N.jsx)(P,{children:"Safe payment online. Credit card needed. PayPal account is not necessary."}),Object(N.jsxs)(M,{direction:"row",children:[Object(N.jsx)(s.a,{name:"email",control:i.control,rules:y,render:function(e){var n,r=e.field,t=e.fieldState;return Object(N.jsx)(A,Object(l.a)(Object(l.a)({},r),{},{type:"email",placeholder:"Email address","aria-invalid":Boolean(t.error),errorMessage:null===(n=t.error)||void 0===n?void 0:n.message}))}}),a]})]})})]})},Y=Object(t.memo)(W),G={paypal:0,creditCard:1},K=function(e){console.log("Success: ",e)},Q=function(e){console.log("Error: ",e)},T=function(){var e=Object(t.useState)(G.creditCard),n=Object(d.a)(e,2),r=n[0],o=n[1],c=Object(t.useCallback)((function(e){o(e)}),[]);return Object(N.jsxs)(E,{children:[Object(N.jsx)(B,{children:"Choose Your Payment Method"}),Object(N.jsx)(Y,{onSubmit:K,onError:Q,handlePaymentChange:c,paymentMethod:r}),Object(N.jsx)(L,{onSubmit:K,onError:Q,handlePaymentChange:c,paymentMethod:r})]})},U={colors:{primary:"#25DAC5",heading:"#1E0E62",text:"rgba(21, 20, 57, 0.4)",background:"#FFFFFF",border:"#EBEAED"}},X=function(){return Object(N.jsxs)(a.a,{theme:U,children:[Object(N.jsx)(z,{}),Object(N.jsx)(T,{})]})};i.a.render(Object(N.jsx)(o.a.StrictMode,{children:Object(N.jsx)(X,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3a16c286.chunk.js.map