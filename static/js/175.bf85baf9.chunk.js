"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[175],{8400:function(e,a,n){n.d(a,{t:function(){return v},Py:function(){return g},H4:function(){return f}});var t=n(4942),s=n(1413),r=n(8152),c=n(2791),o="Form_form__e1yzW",l="Form_label__8nx+5",i="Form_input__FTtTw",u="Form_btn__0ebGo",m="Form_link__fzlRv",d=n(6249),p=n(3504),h=n(184),f=function(e){var a=e.onSubmit,n=e.isSignup,f=n?{name:"",email:"",password:""}:{email:"",password:""},b=(0,c.useState)((0,s.Z)({},f)),x=(0,r.Z)(b,2),v=x[0],N=x[1],g=v.name,j=v.email,y=v.password,Z=function(e){var a=e.target,n=a.name,r=a.value;N((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,t.Z)({},n,r))}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault(),a(v),N((0,s.Z)({},f))},children:[n&&(0,h.jsxs)("label",{className:l,children:["Name",(0,h.jsx)("input",{className:i,value:g,onChange:Z,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]}),(0,h.jsxs)("label",{className:l,children:["Email",(0,h.jsx)("input",{className:i,value:j,onChange:Z,type:"email",name:"email"})]}),(0,h.jsxs)("label",{className:l,children:["Password",(0,h.jsx)("input",{className:i,value:y,onChange:Z,type:"password",name:"password"})]}),(0,h.jsx)("button",{className:i+" "+u,type:"submit",children:n?"Sign up":"Log In"})]}),(0,h.jsx)(p.rU,{to:n?d._.login:d._.signup,className:m,children:n?"Already have an account? Log in":"Do not have an account yet? Sign up"})]})},b=n(9434),x=n(24),v=function(){var e=(0,c.useState)(""),a=(0,r.Z)(e,2),n=a[0],t=a[1],s=(0,c.useState)(""),m=(0,r.Z)(s,2),d=m[0],p=m[1],f=(0,b.I0)(),v=(0,b.v9)((function(e){return e.contacts.contacts})),N=function(e){var a=e.currentTarget,n=a.name,s=a.value;switch(n){case"name":t(s);break;case"phone":p(s);break;default:return}},g=function(){t(""),p("")};return(0,h.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault();var a=v.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})),t=v.find((function(e){return e.number===d})),s={name:n,number:d};a?alert("".concat(n," is already in contacts with phone ").concat(a.number)):t?alert("".concat(d," is already in contacts as ").concat(t.name)):n&&d?f(x.m.addContact(s)):alert("\u0421omplete all fields"),g()},children:[(0,h.jsxs)("label",{className:l,children:["Name",(0,h.jsx)("input",{className:i,value:n,onChange:N,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]}),(0,h.jsxs)("label",{className:l,children:["phone",(0,h.jsx)("input",{className:i,value:d,onChange:N,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]}),(0,h.jsx)("button",{className:i+" "+u,type:"submit",children:"Add contact"})]})},N=n(6052),g=function(e){var a=e.contactToEdit,n=e.closeModal,t=(0,c.useState)(a),m=(0,r.Z)(t,2),d=m[0],p=m[1],f=d.name,x=d.number,v=(0,b.I0)(),g=(0,c.useState)(""),j=(0,r.Z)(g,2),y=j[0],Z=j[1],_=function(e){var a=e.currentTarget,n=a.name,t=a.value;switch(n){case"name":p((function(e){return(0,s.Z)((0,s.Z)({},e),{},{name:t})}));break;case"number":p((function(e){return(0,s.Z)((0,s.Z)({},e),{},{number:t})}));break;default:return}};return(0,h.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault(),f&&x?(Z(""),v((0,N.editContact)(d)),n()):Z("\u0421omplete all fields")},children:[(0,h.jsxs)("label",{className:l,children:["Name",(0,h.jsx)("input",{className:i,value:f,onChange:_,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})]}),(0,h.jsxs)("label",{className:l,children:["phone",(0,h.jsx)("input",{className:i,value:x,onChange:_,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})]}),y&&(0,h.jsx)("p",{style:{color:"red"},children:y}),(0,h.jsx)("button",{className:i+" "+u,type:"submit",children:"Confirm changes"})]})}},7175:function(e,a,n){n.r(a),n.d(a,{default:function(){return o}});var t=n(9434),s=n(5822),r=n(8400),c=n(184),o=function(){var e=(0,t.I0)();return(0,c.jsx)(r.H4,{onSubmit:function(a){e((0,s.x4)(a))}})}},24:function(e,a,n){n.d(a,{m:function(){return t}});var t=n(6052)}}]);
//# sourceMappingURL=175.bf85baf9.chunk.js.map