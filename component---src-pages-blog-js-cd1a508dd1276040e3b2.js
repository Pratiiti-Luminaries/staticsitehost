(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{YjYS:function(e){e.exports=JSON.parse('[{"id":"1","columnName":"First Name","fieldName":"firstName","isReadOnly":false,"placeHolder":"Enter First Name","autocomplete":"off","fieldType":"text","required":true},{"id":"2","columnName":"Last Name","fieldName":"lastName","isReadOnly":false,"placeHolder":"Enter Last Name","autocomplete":"off","fieldType":"text","required":true},{"id":"3","columnName":"Email Address","fieldName":"emailAddress","isReadOnly":false,"placeHolder":"Enter Email Address","autocomplete":"off","fieldType":"text","required":true},{"id":"4","columnName":"Phone Number","fieldName":"phoneNumber","isReadOnly":false,"placeHolder":"Enter Phone Number","autocomplete":"off","fieldType":"text","required":true},{"id":"5","columnName":"Enter Query","fieldName":"query","isReadOnly":false,"placeHolder":"Enter Query","autocomplete":"off","fieldType":"multiline","required":true},{"id":"6","fieldName":"captcha","fieldType":"captcha","default":true}]')},jOeb:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="https://storage.googleapis.com/production-asset-bucket/pratiiti-website-assets/images/"},tcyQ:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a("q1tI"),l=a.n(n),i=a("jkUL"),r=a.n(i),o=a("Z3vd"),s=a("tRbT"),c=a("/DZg"),m=a("D9v/"),u=a("R/WZ"),d=a("r9w1"),f=Object(u.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"100%"}}}}));function p(e){var t=f();return l.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},l.a.createElement("div",{style:{backgroundColor:"#fffff"}},l.a.createElement(d.a,{style:{backgroundColor:"#fffff"},required:!0,id:"outlined-multiline-static",label:e.fieldConfiguration.columnName,multiline:!0,rows:"5",value:e.value,onChange:function(t){"'"!==t.target.value.charAt(t.target.value.length-1)&&e.onClickFunction(e.fieldConfiguration.fieldName,t.target.value)},variant:"outlined"})))}var h=a("1qCm"),g=a("YjYS");var y=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).setStateValueOnClick=function(e,t){var n,l;"query"===e?"'"===t.charAt(t.length-1)||a.setState(((n={})[e]=t,n)):a.setState(((l={})[e]=t,l))},a.changePage=function(e,t){e.push(t)},a.setButtonVisible=function(e){a.setState({isButtonVisible:e})},a.getTableContent=function(){return l.a.createElement(s.a,{xs:12,sm:12,md:12},g.map((function(e,t){return l.a.createElement(s.a,{xs:11,sm:11,md:11},function(e){switch(e.fieldType){case"text":return l.a.createElement(m.a,{value:a.state[e.fieldName],fieldConfiguration:e,disableReadonly:a.props.disableReadonly,onClickFunction:a.setStateValueOnClick});case"multiline":return l.a.createElement(p,{value:a.state[e.fieldName],fieldConfiguration:e,onClickFunction:a.setStateValueOnClick});case"captcha":return l.a.createElement("div",{style:{marginLeft:10}},l.a.createElement(c.a,{onClickFunction:a.setStateValueOnClick}));default:return null}}(e))})))},a.state={modalTitle:"",modalBody:"",loader:!1,open:!1},a.sendMail=a.sendMail.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentWillMount=function(){var e=this;g.map((function(t){var a;e.setState(((a={})[t.fieldName]=t.default?t.default:"",a))}))},i.sendMail=function(){var e=this;this.setState({loader:!0}),null!==this.state.firstName&&null!==this.state.emailAddress&&null!==this.state.query&&null!==this.state.phoneNumber&&this.state.firstName.trim().length>0&&this.state.emailAddress.trim().length>0&&this.state.query.trim().length>0&&this.state.phoneNumber.trim().length>0?fetch("https://www.api.pratiiti.com/public/sendMail",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({firstName:this.state.firstName,lastName:this.state.lastName,emailAddress:this.state.emailAddress,query:this.state.query,phoneNumber:this.state.phoneNumber})}).then((function(e){return e.json()})).then((function(t){"Success"===t.status?e.setState({open:!0,loader:!1,captcha:!1,modalTitle:"Success",modalBody:"Thank you for contacting us. We will reach you shortly."}):"Fail"===t.status&&e.setState({open:!0,loader:!1,captcha:!1,modalTitle:"Failure",modalBody:"Something went wrong."})})).catch((function(t){try{t.json().then((function(e){console.log(e),console.log("message = "+e.message)}))}catch(a){}finally{e.setState({open:!0,loader:!1,captcha:!1,modalTitle:"Failure",modalBody:"Something went wrong."})}})):this.setState({open:!0,loader:!1,captcha:!1,modalTitle:"Failure",modalBody:"First Name, Email ID, Phone Number or Query cannot be empty."})},i.render=function(){var e=this,t=this.getTableContent(g);return l.a.createElement("div",null,l.a.createElement("div",{className:"mainContainerContact"},l.a.createElement("div",{className:"header"}),l.a.createElement("div",{className:"contactFormBody"},t,l.a.createElement("div",{style:{marginLeft:10}},this.state.loader?l.a.createElement(r.a,{type:"Circles",color:"#f7941e",height:30,width:30}):l.a.createElement(o.a,{onClick:function(){return e.sendMail()},disabled:this.state.captcha,className:this.state.captcha?"buttonDisabled":"",style:{marginTop:20,color:"#ffffff",backgroundColor:"#f7941e",fontSize:16}},"Submit")))),l.a.createElement(h.a,{modalTitle:this.state.modalTitle,modalBody:this.state.modalBody,open:this.state.open,onClickFunction:this.setStateValueOnClick}))},n}(l.a.Component),N=a("e8De");function E(){var e=l.a.useState(),t=e[0],a=e[1];return l.a.createElement("div",null,t?l.a.createElement("div",null,l.a.createElement("div",{className:"floatingContactForm"},l.a.createElement("div",{className:"width100 mgbt40"},l.a.createElement(y,null)))):l.a.createElement("div",null),l.a.createElement("div",{className:"floatingQueryFormButton"},l.a.createElement(N.a,{type:"floatingIcon",badgeContent:"Contact-us",handleFloatingContactForm:function(e){a(e)},floatingContactForm:t})))}},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"AllBlogsQuery",(function(){return d}));var n=a("q1tI"),l=a.n(n),i=a("tRbT"),r=a("Wbzz"),o=function(e){var t=e.title,a=e.author,n=e.date,o=e.description,s=e.path,c=e.imagesrc;return l.a.createElement(i.a,{container:!0,style:{justifyContent:"center"}},l.a.createElement(i.a,{xs:12,sm:6,md:5,style:{marginRight:20,marginLeft:20,marginBottom:40}},l.a.createElement("div",null,l.a.createElement("div",{className:"blogTitle"},l.a.createElement(r.Link,{to:s,className:"blogTitle"},t)),l.a.createElement("div",{className:"createdDate"},n),l.a.createElement("p",{className:"blogDescriptionP"},o),l.a.createElement("div",{className:"authorComponent"},l.a.createElement("div",{className:"authorName"},"Posted by "+a)))),l.a.createElement(i.a,{xs:12,sm:6,md:4,style:{marginRight:20,marginLeft:20,marginBottom:40}},l.a.createElement("img",{className:"imageBorder",src:c,alt:t})))},s=a("Bl7J"),c=a("vrFN"),m=a("tcyQ"),u=a("jOeb"),d="4020060616";t.default=function(e){var t=e.data;return l.a.createElement(s.a,null,l.a.createElement(c.a,{title:"Blog",description:"Blog Page",canonical:"https://www.pratiiti.com/blog",url:"https://www.pratiiti.com/blog"}),l.a.createElement("div",{className:"blogLogo"},l.a.createElement("img",{src:u.a+"Blog/Logo.png",alt:"blog logo"})),l.a.createElement(i.a,{container:!0,className:"mainBlogPageContainer"},l.a.createElement(i.a,{item:!0,xs:12,sm:12,md:12},l.a.createElement("div",{className:"blogPageHeading"},"Latest Blogs"))),t.allMarkdownRemark.edges.map((function(e){var t=e.node.frontmatter,a=t.title,n=t.author,i=t.date,r=t.description,s=t.path,c=t.imagesrc;return l.a.createElement(o,{title:a,author:n,date:i,description:r,key:i+"__"+a,path:s,imagesrc:c})})),l.a.createElement(m.a,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-cd1a508dd1276040e3b2.js.map