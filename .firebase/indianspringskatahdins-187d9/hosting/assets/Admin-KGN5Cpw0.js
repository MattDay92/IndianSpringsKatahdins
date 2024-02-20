import{_ as x,f as d,r as p,g as m,e as E,c as o,a as A,h as t,F as u,i as g,w as L,j as v,k as b,o as l,t as f,l as B,p as D,m as S,n as C,s as M,q as F,N as V}from"./index-tLoGf8Wf.js";const n=r=>(D("data-v-3ca9c9bd"),r=r(),S(),r),H={class:"email-div"},T={key:0},j=n(()=>t("h2",null,"Mailing List Emails:",-1)),$={class:"email-list"},q={key:1},z=n(()=>t("p",null,"No data available",-1)),K=[z],O={class:"recipes"},P=n(()=>t("h2",{class:"form-label"},"Add New Recipe",-1)),U=n(()=>t("input",{class:"form-control",name:"RecipeName",placeholder:"Enter Recipe Name"},null,-1)),G=n(()=>t("textarea",{id:"tiny",name:"RecipeBody",placeholder:"Enter Recipe Info"},null,-1)),J=n(()=>t("button",{class:"btn",type:"submit"},"Add Recipe",-1)),Q=[P,U,G,J],W={class:"recipe-div"},X={key:0},Y=n(()=>t("h2",null,"Recipes:",-1)),Z={class:"recipe-list"},ee={class:"card"},te={class:"card-body"},se={class:"card-title"},ie=["innerHTML"],ce=["onClick"],ae={key:1},oe=n(()=>t("p",null,"No data available",-1)),le=[oe],ne={__name:"Admin",setup(r){d(()=>{tinymce.init({selector:"textarea#tiny",menu:{edit:{title:"Edit",items:"undo redo | cut copy paste pastetext | selectall | searchreplace"},view:{title:"View",items:"code | visualaid visualchars visualblocks | preview fullscreen | showcomments"},insert:{title:"Insert",items:"image link media addcomment pageembed template codesample inserttable | charmap hr | pagebreak nonbreaking anchor tableofcontents | insertdatetime"},format:{title:"Format",items:"bold italic underline strikethrough superscript subscript codeformat | styles blocks fontfamily fontsize align lineheight | forecolor backcolor | language | removeformat"},table:{title:"Table",items:"inserttable | cell row column | advtablesort | tableprops deletetable"},help:{title:"Help",items:"help"}},plugins:["advlist","autolink","link","image","lists","anchor","searchreplace","visualblocks","visualchars","code","fullscreen","insertdatetime","media","table","template","help"]})}),document.addEventListener("focusin",e=>{e.target.closest(".tox-tinymce, .tox-tinymce-aux, .moxman-window, .tam-assetmanager-root")!==null&&e.stopImmediatePropagation()});const h=p(m()),s=E({emails:[],recipes:[],recipeIndices:[]}),y=()=>{v(b(h,"emails")).then(e=>{e.exists()?(Object.values(e.val()).forEach(a=>{s.emails.push(a)}),console.log(s.emails)):console.log("No data available")}).catch(e=>{console.error(e)})},k=e=>{e.preventDefault();const a=m(),c=e.target.RecipeName.value,i=tinymce.get("tiny").getContent(),_=p(a,"recipes"),w=C(_);M(w,{recipeName:c,recipeBody:i}).then(()=>{alert("Successfully Added a New Recipe!","success"),e.target.reset(),location.reload()},I=>{console.log("FAILED...",I.text)})},R=()=>{v(b(h,"recipes")).then(e=>{e.exists()?(e.forEach(a=>{const c=a.key,i=a.val();s.recipes.push(i),s.recipeIndices.push(c)}),console.log("Recipes:",s.recipes),console.log("Recipe Indices:",s.recipeIndices)):console.log("No data available")}).catch(e=>{console.error("Error fetching recipes:",e)})},N=e=>{const a=m(),c=p(a,`recipes/${e}`);F(c).then(()=>{console.log("Recipe deleted successfully"),s.recipes=s.recipes.filter(i=>i.key!==e),location.reload()}).catch(i=>{console.error("Error deleting recipe:",i)})};return d(y),d(R),(e,a)=>(l(),o("div",null,[A(V),t("main",null,[t("div",H,[s.emails.length?(l(),o("div",T,[j,t("ul",$,[(l(!0),o(u,null,g(s.emails,(c,i)=>(l(),o("li",{key:i},f(c.emailAddress),1))),128))])])):(l(),o("div",q,[...K]))]),t("div",O,[t("form",{name:"recipe-form",onSubmit:L(k,["prevent"])},[...Q],32),t("div",W,[s.recipes.length?(l(),o("div",X,[Y,t("div",Z,[(l(!0),o(u,null,g(s.recipes,(c,i)=>(l(),o("div",{key:i},[t("div",ee,[B(' <img src="..." class="card-img-top" alt="..."> '),t("div",te,[t("h3",se,f(c.recipeName),1),t("div",{class:"card-text",innerHTML:c.recipeBody},null,8,ie),t("button",{onClick:_=>N(s.recipeIndices[i]),class:"btn btn-sm btn-danger"},"Delete",8,ce)])])]))),128))])])):(l(),o("div",ae,[...le]))])])])]))}},de=x(ne,[["__scopeId","data-v-3ca9c9bd"],["__file","/Users/mattday/Desktop/Coding/IndianSpringsKatahdins/src/views/Admin.vue"]]);export{de as default};