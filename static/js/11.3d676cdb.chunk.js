(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[11],{493:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},494:function(e,t,n){"use strict";t.a=n.p+"static/media/social-google.9887eb8e.svg"},497:function(e,t,n){"use strict";t.a=n.p+"static/media/logo.0cdd96fa.svg"},514:function(e,t,n){"use strict";var a=n(29),i=n(168),r=n.n(i),s=n(197),c=n(12),o=n(192),l=n(4),d=n(0),j=n.n(d),m=n(7),b=n(530),u=n(529),p=n(58),h=n(331),g=n(435),x=n(451),O=n(727),f=n(452),w=n(447),v=n(750),y=n(745),k=n(748),C=n(751),N=n(752),S=n(334),I=n(753),B=n(742),W=n(493),E=n(526),z=n.n(E),D=n(527),R=n.n(D),A=n(494),P=n(2),T=Object(h.a)((function(e){return{root:{},redButton:Object(l.a)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[600],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:e.palette.grey[100]+" !important",color:e.palette.grey[900]+"!important",fontWeight:500},margin:{marginTop:e.spacing(3),marginBottom:e.spacing(1)},forgot:{textDecoration:"none",color:e.palette.purple.main},loginIcon:Object(l.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),title:{color:e.palette.grey[600]},login:{backgroundColor:e.palette.purple.main,"&:hover":{backgroundColor:e.palette.purple.dark}},loginput:{marginTop:e.spacing(1),marginBottom:e.spacing(1),"& > label":{top:"23px",left:0,color:e.palette.grey[500],'&[data-shrink="false"]':{top:"5px"}},"& > div > input":{padding:"30.5px 14px 11.5px !important"},"& legend":{display:"none"},"& fieldset":{top:0}},startAdornment:{color:e.palette.grey[500],marginTop:"18px",width:"auto"}}}));t.a=function(e,t){var n=t.className,i=Object(o.a)(t,["className"]),l=T(),d=Object(p.c)((function(e){return e.customization})),h=Object(W.a)(),E=j.a.useState(!1),D=Object(c.a)(E,2),F=D[0],q=D[1],H=j.a.useState(!0),G=Object(c.a)(H,2),J=G[0],M=G[1],U=function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){q(!F)},_=function(e){e.preventDefault()};return Object(P.jsxs)(j.a.Fragment,{children:[Object(P.jsxs)(g.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(P.jsx)(g.a,{item:!0,xs:12,children:Object(P.jsxs)(x.a,{disableElevation:!0,fullWidth:!0,className:l.redButton,onClick:U,size:"large",variant:"contained",children:[Object(P.jsx)("img",{src:A.a,alt:"google",width:"20px",className:l.loginIcon})," Sign in with Google"]})}),Object(P.jsx)(g.a,{item:!0,xs:12,children:Object(P.jsxs)(O.a,{alignItems:"center",display:"flex",children:[Object(P.jsx)(f.a,{className:l.signDivider,orientation:"horizontal"}),Object(P.jsx)(x.a,{variant:"outlined",className:l.signText,sx:{borderRadius:d.borderRadius+"px"},disableRipple:!0,disabled:!0,children:"OR"}),Object(P.jsx)(f.a,{className:l.signDivider,orientation:"horizontal"})]})}),Object(P.jsx)(g.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(P.jsx)(O.a,{mb:2,children:Object(P.jsx)(w.a,{variant:"subtitle1",className:l.title,children:"Sign in with Email address"})})})]}),Object(P.jsx)(u.a,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:b.a().shape({email:b.b().email("Must be a valid email").max(255).required("Email is required"),password:b.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(s.a)(r.a.mark((function e(t,n){var a,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setErrors,i=n.setStatus,s=n.setSubmitting;try{h.current&&(i({success:!0}),s(!1))}catch(t){console.error(t),h.current&&(i({success:!1}),a({submit:t.message}),s(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,r=e.handleBlur,s=e.handleChange,c=e.handleSubmit,o=e.isSubmitting,d=e.touched,b=e.values;return Object(P.jsxs)("form",Object(a.a)(Object(a.a)({noValidate:!0,onSubmit:c,className:Object(m.a)(l.root,n)},i),{},{children:[Object(P.jsxs)(v.a,{fullWidth:!0,error:Boolean(d.email&&t.email),className:l.loginput,variant:"outlined",children:[Object(P.jsx)(y.a,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),Object(P.jsx)(k.a,{id:"outlined-adornment-email-login",type:"email",value:b.email,name:"email",onBlur:r,onChange:s,label:"Email Address / Username",inputProps:{classes:{notchedOutline:l.notchedOutline}}}),d.email&&t.email&&Object(P.jsxs)(C.a,{error:!0,id:"standard-weight-helper-text-email-login",children:[" ",t.email," "]})]}),Object(P.jsxs)(v.a,{fullWidth:!0,error:Boolean(d.password&&t.password),className:l.loginput,variant:"outlined",children:[Object(P.jsx)(y.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(P.jsx)(k.a,{id:"outlined-adornment-password-login",type:F?"text":"password",value:b.password,name:"password",onBlur:r,onChange:s,endAdornment:Object(P.jsx)(N.a,{position:"end",children:Object(P.jsx)(S.a,{"aria-label":"toggle password visibility",onClick:V,onMouseDown:_,edge:"end",children:F?Object(P.jsx)(z.a,{}):Object(P.jsx)(R.a,{})})}),label:"Password",inputProps:{classes:{notchedOutline:l.notchedOutline}}}),d.password&&t.password&&Object(P.jsxs)(C.a,{error:!0,id:"standard-weight-helper-text-password-login",children:[" ",t.password," "]})]}),Object(P.jsxs)(g.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(P.jsx)(g.a,{item:!0,children:Object(P.jsx)(I.a,{control:Object(P.jsx)(B.a,{checked:J,onChange:function(e){return M(e.target.checked)},name:"checked",color:"primary"}),label:Object(P.jsx)(j.a.Fragment,{children:"Keep me logged in"})})}),Object(P.jsx)(g.a,{item:!0,children:Object(P.jsx)(w.a,{variant:"subtitle1",children:"Forgot Password?"})})]}),t.submit&&Object(P.jsx)(O.a,{mt:3,children:Object(P.jsx)(C.a,{error:!0,children:t.submit})}),Object(P.jsx)(O.a,{mt:2,children:Object(P.jsx)(x.a,{disableElevation:!0,disabled:o,fullWidth:!0,size:"large",type:"submit",variant:"contained",className:l.login,children:"Sign in"})})]}))}})]})}},739:function(e,t,n){"use strict";n.r(t);var a=n(4),i=(n(0),n(55)),r=n(331),s=n(40),c=n(405),o=n(435),l=n(448),d=n(450),j=n(447),m=n(452),b=n(446),u=n(514),p=n(497),h=n(2),g=Object(r.a)((function(e){var t;return{root:{backgroundColor:e.palette.primary.light,height:"100%",minHeight:"100vh",width:"100%",maxWidth:"calc(100% + 16px)"},card:(t={margin:e.spacing(0)+" auto",maxWidth:"475px",overflow:"visible",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%"}},Object(a.a)(t,e.breakpoints.down("lg"),{maxWidth:"400px"}),Object(a.a)(t,e.breakpoints.down("sm"),{maxWidth:"80%"}),t),content:Object(a.a)({padding:e.spacing(5)},e.breakpoints.down("lg"),{padding:e.spacing(3)}),title:{color:e.palette.grey[600],textDecoration:"none"}}}));t.default=function(){var e=g(),t=Object(s.a)(),n=Object(c.a)(t.breakpoints.down("sm"));return Object(h.jsx)(o.a,{container:!0,justifyContent:n?"center":"space-between",alignItems:"center",className:e.root,children:Object(h.jsx)(o.a,{item:!0,xs:12,sx:{minHeight:"100vh",height:"100%"},children:Object(h.jsxs)(o.a,{sx:{minHeight:"100vh",height:"100%",p:n?0:"0 80px"},container:!0,direction:"column",alignItems:n?"center":"flex-start",spacing:n?5:6,justifyContent:"space-between",children:[Object(h.jsx)(o.a,{item:!0,xs:12,sx:{mt:"40px",width:"100%",textAlign:"center"},children:Object(h.jsx)(i.b,{to:"#",children:Object(h.jsx)("img",{alt:"Auth method",src:p.a,width:"100"})})}),Object(h.jsx)(o.a,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",children:Object(h.jsx)(l.a,{className:e.card,children:Object(h.jsx)(d.a,{className:e.content,children:Object(h.jsxs)(o.a,{container:!0,direction:"column",spacing:2,justifyContent:"center",children:[Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(o.a,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(h.jsx)(o.a,{item:!0,children:Object(h.jsxs)(o.a,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[Object(h.jsx)(o.a,{item:!0,container:!0,direction:"column",alignItems:"center",children:Object(h.jsx)(o.a,{item:!0,children:Object(h.jsx)(j.a,{color:t.palette.purple.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Hi, Welcome Back"})})}),Object(h.jsx)(o.a,{item:!0,children:Object(h.jsxs)(j.a,{variant:"caption",fontSize:"16px",children:[" ","Enter your credentials to continue"]})})]})})})}),Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(u.a,{login:3})}),Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(m.a,{})}),Object(h.jsx)(o.a,{item:!0,xs:12,children:Object(h.jsx)(o.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(h.jsx)(j.a,{component:i.b,to:"/pages/register/register3",variant:"subtitle1",className:e.title,children:"Don't have an account?"})})})]})})})}),Object(h.jsxs)(o.a,{sx:{mb:"40px"},item:!0,container:!0,justifyContent:n?"center":"space-between",direction:n?"column":"row",alignItems:"center",spacing:n?2:0,children:[Object(h.jsx)(o.a,{item:!0,children:Object(h.jsx)(j.a,{component:b.a,href:"https://berrydashboard.io",target:"_blanks",variant:"subtitle1",color:t.palette.grey[600],children:"www.berrydashboard.io"})}),Object(h.jsx)(o.a,{item:!0,children:Object(h.jsx)(j.a,{component:b.a,href:"https://codedthemes.com",target:"_blanks",variant:"subtitle1",color:t.palette.grey[600],children:"\xa9 codedthemes.com"})})]})]})})})}}}]);
//# sourceMappingURL=11.3d676cdb.chunk.js.map