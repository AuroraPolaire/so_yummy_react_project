"use strict";(self.webpackChunkso_yummy_react_project=self.webpackChunkso_yummy_react_project||[]).push([[350],{1350:function(n,e,i){i.r(e),i.d(e,{default:function(){return Q}});i(2791);var t,r,a,o,d,p,s,c,l,x,u,h,f,m=i(9434),g=i(1107),w=i(5705),b=i(6727),y=i(168),k=i(7691),j=i(5579),v=i(1815),Z=(0,k.default)(j.r)(t||(t=(0,y.Z)(["\n  position: absolute;\n  top: 16px;\n  left: 17px;\n  right: 0px;\n  width: 15px;\n  height: 12px;\n  /* color: #23262a; */\n  stroke: #fafafa;\n  /* path {\n    stroke: ",";\n  } */\n  @media screen and (min-width: 768px) {\n    width: 20px;\n    height: 16px;\n    left: 20px;\n    top: 21px;\n  }\n"])),(function(n){return n.errorformik?"#E74A3B":"#3CBC81"})),z=(0,k.default)(v.r)(r||(r=(0,y.Z)(["\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  right: 0px;\n  width: 14px;\n  height: 14px;\n  /* color: #23262a; */\n  stroke: #fafafa;\n  /* path {\n    stroke: ",";\n  } */\n  @media screen and (min-width: 768px) {\n    width: 18px;\n    height: 18px;\n    left: 20px;\n    top: 21px;\n  }\n"])),(function(n){return n.errorformik?"#E74A3B":"#3CBC81"})),B=(0,k.default)(w.l0)(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 279px;\n\n  @media screen and (min-width: 768px) {\n    width: 400px;\n  }\n  @media screen and (min-width: 1440px) {\n  }\n"]))),C=k.default.div(o||(o=(0,y.Z)(["\n  position: relative;\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    /* margin: 0 auto; */\n  }\n"]))),S=(0,k.default)(w.gN)(d||(d=(0,y.Z)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n  outline: none;\n  width: 279px;\n  height: 45px;\n\n  border: 1px solid\n    ",";\n\n  /* border: 1px solid #afafaf; */\n  border-radius: 6px;\n  padding-left: 40px;\n  padding-right: 40px;\n  opacity: 0.8;\n  margin-bottom: 12px;\n\n  color: ",";\n\n  /* color: #fafafa; */\n  &:hover,\n  &:focus {\n    border: 1px solid #ffffff;\n  }\n  background-color: transparent;\n  @media (min-width: 768px) {\n    width: 400px;\n    height: 59px;\n    padding-left: 50px;\n    margin-bottom: 24px;\n    font-size: 18px;\n    line-height: 1.5;\n  }\n\n  &::placeholder {\n    font-size: 14px;\n    line-height: 1.5;\n    font-weight: 400;\n    color: ",";\n    opacity: 0.8;\n    @media screen and (min-width: 768px) {\n      font-size: 18px;\n    }\n  }\n"])),(function(n){var e=n.error;return n.touched?e?"#E74A3B":"#3CBC81":"#afafaf"}),(function(n){var e=n.error;return n.touched?e?"#E74A3B":"#3CBC81":"#fafafa"}),(function(n){var e=n.error;return n.touched?e?"#E74A3B":"#3CBC81":"#fafafa"})),A=k.default.button(p||(p=(0,y.Z)(["\n  padding-top: 12px;\n  padding-bottom: 12px;\n  font-family: 'Poppins';\n  border: none;\n  background-color: #8baa36;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fafafa;\n  border-radius: 6px;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.13;\n  width: 282px;\n  margin-top: 16px;\n\n  &:hover,\n  &:focus {\n    color: #22252a;\n  }\n  :disabled {\n    background-color: #2a2c36;\n    color: rgba(250, 250, 250, 0.6);\n    &:hover:disabled,\n    &:focus:disabled {\n      color: initial;\n      cursor: not-allowed;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    padding-top: 18px;\n    padding-bottom: 18px;\n    font-size: 16px;\n    width: 400px;\n    margin-top: 26px;\n  }\n  @media screen and (min-width: 1440px) {\n  }\n"]))),_=k.default.div(s||(s=(0,y.Z)([""]))),q=i(1686),E=i.n(q),R=i(3329),N=b.Ry().shape({email:b.Z_().email("Invalid email address").required("Required"),password:b.Z_().min(4).max(30,"Must be 30 characters or less").required("Required").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Password must contain minimum eight characters, at least one letter and one number.")}),I=function(){var n=(0,m.I0)();return(0,R.jsx)(_,{children:(0,R.jsx)(w.J9,{initialValues:{email:"",password:""},validationSchema:N,onSubmit:function(e,i){var t=i.resetForm;console.log(e),n((0,g.zB)(e)).unwrap().then((function(n){return"Request failed with status code 403"===n.payload?E().Notify.warning("Sorry! Access denied"):"Request failed with status code 404"===n.payload?E().Notify.warning("It`s not your Email"):"Request failed with status code 409"===n.payload?E().Notify.warning("You are already Subscribed. Try a different e-mail address."):void E().Notify.success("Subscribed Successful")})).catch((function(n){console.log(n),E().Notify.failure("Subscription error")})),t({email:"",password:""})},children:function(n){return(0,R.jsxs)(B,{children:[(0,R.jsxs)(C,{children:[(0,R.jsx)(Z,{}),(0,R.jsx)(S,{type:"text",name:"email",placeholder:"Email"}),(0,R.jsx)(w.Bc,{name:"email",render:function(n){return(0,R.jsx)("p",{children:n})}})]}),(0,R.jsxs)(C,{children:[(0,R.jsx)(z,{}),(0,R.jsx)(S,{type:"password",name:"password",placeholder:"Password"}),(0,R.jsx)(w.Bc,{name:"password",render:function(n){return(0,R.jsx)("p",{children:n})}})]}),(0,R.jsx)(A,{type:"submit",children:"Sign Up"})]})}})})},P=i(1087),F=i(8821),J=i(6441),L=i(9402),M=i(8285),O=i(1275),T=i(3813),U=i(4762),V=i(9807),Y=k.default.div(c||(c=(0,y.Z)([""]))),$=k.default.section(l||(l=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  text-decoration: none;\n  /* min-height: 100%;\n  max-height: fit-content;\n  width: 100%; */\n  /* background-size: 100% 490px; */\n  /* background-position: bottom center; */\n  /* height: 100vh; */\n  /* padding: 0 35px; */\n  /* background-attachment: fixed; */\n  height: 100vh;\n  width: 100vw;\n\n  background-image: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0.6) 58.58%,\n      rgba(0, 0, 0, 0.345172) 78.98%,\n      rgba(0, 0, 0, 0) 100%\n    ),\n    url(","), url(",");\n\n  background-repeat: no-repeat;\n  background-size: 285px, 100% 490px;\n  background-position: center 87px, 100% 100%;\n  padding-top: 305px;\n\n  @media screen and (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url(","), url(",");\n  }\n\n  @media screen and (min-width: 768px) {\n    background-image: url(","), url(",");\n    background-size: 409px, 100% 606px;\n    background-position: center 98px, 100% 100%;\n    padding-top: 443px;\n\n    @media screen and (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(","), url(",");\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    background-image: url(","), url(",");\n    background-size: 532px, 100% 325px;\n    background-position: 113px 115px, 100% 100%;\n    display: flex;\n    justify-content: flex-end;\n    padding-top: 122px;\n    padding-right: 180px;\n\n    @media screen and (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url(","), url(",");\n    }\n  }\n"])),U.Z,F,U.Z,J,V.Z,L,V.Z,M,U.Z,O,U.Z,T),D=k.default.div(x||(x=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /* justify-content: center; */\n  text-align: center;\n  /* width: 335px; */\n  margin: 0 auto;\n  width: 315px;\n  /* height: 350px; */\n  @media screen and (min-width: 768px) {\n    width: 500px;\n    /* height: 500px; */\n  }\n  @media screen and (min-width: 1440px) {\n    width: 500px;\n    /* height: 484px; */\n  }\n"]))),G=k.default.div(u||(u=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 335px;\n  height: 315px;\n  margin-bottom: 18px;\n  padding: 32px 28px 40px;\n  background: #2a2c36;\n  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);\n  border-radius: 30px;\n\n  @media screen and (min-width: 768px) {\n    width: 500px;\n    height: 419px;\n    padding: 44px 50px;\n  }\n\n  @media screen and (min-width: 1440px) {\n  }\n"]))),H=k.default.h2(h||(h=(0,y.Z)(["\n  margin-bottom: 40px;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 1.17;\n  letter-spacing: -0.02em;\n\n  color: var(--font-white);\n\n  @media screen and (min-width: 768px) {\n    font-size: 28px;\n    line-height: 1.07;\n    margin-bottom: 50px;\n  }\n\n  @media screen and (min-width: 1440px) {\n  }\n"]))),K=(0,k.default)(P.OL)(f||(f=(0,y.Z)(["\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--font-white);\n  text-align: center;\n  text-decoration: underline;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),Q=function(){return(0,R.jsx)($,{children:(0,R.jsx)(Y,{children:(0,R.jsxs)(D,{children:[(0,R.jsxs)(G,{children:[(0,R.jsx)(H,{children:"Sign In"}),(0,R.jsx)(I,{})]}),(0,R.jsx)(K,{to:"/register",children:"Registration"})]})})})}}}]);
//# sourceMappingURL=350.15423b1c.chunk.js.map