import{_ as F,c as T,a as b,h as o,w as R,F as V,o as H,N as E,d as I,p as K,m as B,b as N}from"./index-gm9Mze-8.js";const P="/assets/ContactISK-6ItL9oOa.png",r={origin:"https://api.emailjs.com",blockHeadless:!1},f=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},O=(e,t="https://api.emailjs.com")=>{if(!e)return;const s=f(e);r.publicKey=s.publicKey,r.blockHeadless=s.blockHeadless,r.blockList=s.blockList,r.limitRate=s.limitRate,r.origin=s.origin||t};class l{constructor(t=0,s="Network Error"){this.status=t,this.text=s}}const _=async(e,t,s={})=>{const a=await fetch(r.origin+e,{method:"POST",headers:s,body:t}),i=await a.text(),n=new l(a.status,i);if(a.ok)return n;throw n},v=(e,t,s)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s||typeof s!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},x=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},w=e=>e.webdriver||!e.languages||e.languages.length===0,y=()=>new l(451,"Unavailable For Headless Browser"),q=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},A=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},C=(e,t)=>e instanceof FormData?e.get(t):e[t],k=(e,t)=>{if(A(e))return!1;q(e.list,e.watchVariable);const s=C(t,e.watchVariable);return typeof s!="string"?!1:e.list.includes(s)},S=()=>new l(403,"Forbidden"),M=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},D=(e,t,s)=>{const a=Number(s.getItem(e)||0);return t-Date.now()+a},g=(e,t,s)=>{setTimeout(()=>{s.removeItem(e)},t)},j=(e,t,s)=>{if(!s.throttle)return!1;M(s.throttle,s.id);const a=s.id||t,i=D(a,s.throttle,e);return i>0?(g(a,i,e),!0):(e.setItem(a,Date.now().toString()),g(a,s.throttle,e),!1)},L=()=>new l(429,"Too Many Requests"),J=(e,t,s,a)=>{const i=f(a),n=i.publicKey||r.publicKey,d=i.blockHeadless||r.blockHeadless,m={...r.blockList,...i.blockList},u={...r.limitRate,...i.limitRate};return d&&w(navigator)?Promise.reject(y()):(v(n,e,t),x(s),s&&k(m,s)?Promise.reject(S()):j(localStorage,location.pathname,u)?Promise.reject(L()):_("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:n,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"}))},U=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},W=e=>typeof e=="string"?document.querySelector(e):e,$=(e,t,s,a)=>{const i=f(a),n=i.publicKey||r.publicKey,d=i.blockHeadless||r.blockHeadless,m={...r.blockList,...i.blockList},u={...r.limitRate,...i.limitRate};if(d&&w(navigator))return Promise.reject(y());const h=W(s);v(n,e,t),U(h);const c=new FormData(h);return k(m,c)?Promise.reject(S()):j(localStorage,location.pathname,u)?Promise.reject(L()):(c.append("lib_version","4.1.0"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n),_("/api/v1.0/email/send-form",c))},G={init:O,send:J,sendForm:$},p=e=>(K("data-v-77280cd0"),e=e(),B(),e),z=p(()=>o("div",{id:"liveAlertPlaceholder"},null,-1)),Q=p(()=>o("div",{class:"img-div"},[o("img",{alt:"Contact Indian Springs Katahdins",src:P})],-1)),X={class:"contact-content"},Y={class:"form-div"},Z=N('<input type="hidden" value="Indian Springs Katahdins" name="to_name" data-v-77280cd0><label data-v-77280cd0>Name</label><input class="form-control" type="text" name="from_name" data-v-77280cd0><label data-v-77280cd0>Email</label><input class="form-control" type="email" name="from_name" data-v-77280cd0><label data-v-77280cd0>Message</label><textarea class="form-control" name="message" data-v-77280cd0></textarea><input class="btn" type="submit" id="liveAlertBtn" value="Send" data-v-77280cd0>',8),ee=[Z],te=p(()=>o("div",{class:"contact-direct-div"},[o("h2",null,"Address"),o("p",{class:"mb-0"},"6709 S 200 W"),o("p",null,"Trafalgar, IN 46181"),o("h2",null,"Direct Inquiries"),o("p",null,"Indian.Springs.Katahdins@gmail.com"),o("h2",null,"Follow us on Facebook!"),o("a",{href:"https://www.facebook.com/profile.php?id=61555159784777",target:"_blank"},[o("i",{alt:"Facebook",class:"fa-brands fa-square-facebook"})])],-1)),se={methods:{sendEmail(){G.sendForm("service_f0jmayd","contact_form",this.$refs.form,{publicKey:"H4LdO0FDSGyj6mW27"}).then(()=>{console.log("SUCCESS!"),this.resetForm(),alert("Message sent successfully!","success")},e=>{console.log("FAILED...",e.text)})},resetForm(){this.$refs.form.reset()}}},ae=Object.assign(se,{__name:"ContactView",setup(e){return document.getElementById("liveAlertPlaceholder"),(t,s)=>(H(),T(V,null,[b(E),o("main",null,[z,Q,o("div",X,[o("div",Y,[o("form",{class:"form",name:"contact-form",ref:"form",onSubmit:s[0]||(s[0]=R((...a)=>t.sendEmail&&t.sendEmail(...a),["prevent"]))},ee,544)]),te])]),b(I)],64))}}),ie=F(ae,[["__scopeId","data-v-77280cd0"]]);export{ie as default};
