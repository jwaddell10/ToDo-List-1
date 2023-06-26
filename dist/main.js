(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([e.id,"body {\n    background-color: #192734;\n}\n\nh3 {\n    color: white;\n}\n\nh4 {\n    color: white;\n}\n\nbody > div.wrapper > div.sidebar > h3 > img {\n    height: 1.25rem;\n    width: 1.25rem;\n}\n\n.sidebar {\n    height: 100%;\n    background-color: #15202b;\n}\n\n.form-popup {\n    display: none;\n}\n\n.title {\n    display: flex;\n    justify-content: center;\n    font-size: x-large;\n    color: white;\n    border-bottom: solid #1f8d4d;\n}\n\ndiv.form > h1 {\npadding-left: 1rem;\npadding-top: 1rem;\npadding-bottom: 1rem;\ncolor: white;\ndisplay: flex;\nbackground-color: #1f8d4d;\n}\n\nbody > div.title > img {\n    height: 2rem;\n    width: 2rem;\n}\n\n.wrapper {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n}\n\n#popUpForm {\n   -webkit-box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n   box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n   position: fixed;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   border: 1px solid black;\n   border-radius: 10px;\n   z-index: 10;\n   background-color: white;\n   width: 500px;\n   max-width: 80%;\n   padding: 45px;\n   box-sizing: border-box;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n}\n\n.popuptext {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: xx-large;\n}\n\ninput {\n    font-size: x-large;\n}\n\nselect {\n    font-size: x-large;\n}\n\n#buttoncontainer {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#addBtn {\n    font-size: x-large;\n    border-radius: 10px;\n    background-color: green;\n    color: white;\n    margin-top: 8px;\n    height: 2rem;\n    width: 8rem;\n}\n\n#x {\n    position: absolute;\n    background: red;\n    color: white;\n    top: -10px;\n    right: -10px;\n}\n\n#taskx {\n    position: absolute;\n    background: red;\n    color: white;\n    top: -10px;\n    right: -10px;\n}\n\n#cancelBtn {\n    font-size: x-large;\n    border-radius: 10px;\n    background-color: red;\n    color: white;\n    margin-top: 8px;\n    height: 2rem;\n    width: 8rem;\n}\n\n#taskitemformpopup {\n    -webkit-box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n   box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n   position: fixed;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   border: 1px solid black;\n   border-radius: 10px;\n   z-index: 10;\n   background-color: white;\n   width: 500px;\n   max-width: 80%;\n   padding: 45px;\n   box-sizing: border-box;\n}\n\n.kdqolitemcontainer {\n    -webkit-box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n    box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: 1px solid black;\n    border-radius: 10px;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    max-width: 80%;\n    padding: 45px;\n    box-sizing: border-box;\n}\n\n#kdqoltaskformpopup {\n   display: none;\n}\n\n\n.phq9itemcontainer {\n    -webkit-box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n    box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: 1px solid black;\n    border-radius: 10px;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    max-width: 80%;\n    padding: 45px;\n    box-sizing: border-box;\n}\n\n#phq9taskformpopup {\n    display: none;\n }\n \n .assessmentitemcontainer {\n    -webkit-box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n    box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: 1px solid black;\n    border-radius: 10px;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    max-width: 80%;\n    padding: 45px;\n    box-sizing: border-box;\n}\n\n#assessmentformpopup {\n   display: none;\n}\n\n.otheritemcontainer {\n    -webkit-box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n    box-shadow:  0px 0px 0px 9999px rgba(0, 0, 0, 0.5);\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: 1px solid black;\n    border-radius: 10px;\n    z-index: 10;\n    background-color: white;\n    width: 500px;\n    max-width: 80%;\n    padding: 45px;\n    box-sizing: border-box;\n}\n\n#othertaskformpopup {\n   display: none;\n}",""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var x=r(m,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:x,references:1})}a.push(p)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=o(e,r),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),x={};x.styleTagTransform=u(),x.setAttributes=c(),x.insert=a().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=l(),n()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals;const f={popUpForm:document.querySelector(".add-to-list"),newTitle:document.querySelector("#title"),newDescription:document.querySelector("#description"),newDueDate:document.querySelector("#due-date"),newPriorityLevel:document.querySelector("#priority-level"),addToListBtn:document.querySelector("#addBtn"),form:document.querySelector(".form"),newToDoItems:document.querySelector(".todoitems"),cancelBtn:document.querySelector("#x"),selectTaskBtn:document.querySelector(".selecttask"),$form:document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault()}))},b={taskPopUpForm:document.querySelector(".selecttask"),kdqolButton:document.querySelector(".kdqolbutton"),kdqolTitle:document.querySelector(".kdqoltitle"),phq9Button:document.querySelector(".phq9"),phq9Title:document.querySelector(".phq9title"),assessmentButton:document.querySelector(".assessments"),assessmentTitle:document.querySelector(".assessmentstitle"),otherButton:document.querySelector(".other"),selectTaskBtn:document.querySelector(".selecttask"),cancelTaskBtn:document.querySelector("#taskx")},y=(()=>{function e(){document.querySelector("#popUpForm").style.display="block"}function n(){document.querySelector("#popUpForm").style.display="none"}return f.popUpForm.addEventListener("click",(()=>{e()})),f.cancelBtn.addEventListener("click",(()=>{n()})),{displayGoalsForm:e,cancelForm:n,newGoalDom:f}})(),h=(()=>{function e(){document.querySelector("#taskitemformpopup").style.display="block"}function n(){document.querySelector("#taskitemformpopup").style.display="none"}return b.taskPopUpForm.addEventListener("click",(()=>{e()})),b.cancelTaskBtn.addEventListener("click",(()=>{n()})),{displayTasksForm:e,cancelTasksForm:n,newTaskDom:b}})(),k=(()=>{function e(){document.querySelector(".kdqolitemcontainer").style.display="block"}function n(){document.querySelector("#taskitemformpopup").style.display="none"}return b.kdqolButton.addEventListener("click",(()=>{e()})),b.cancelTaskBtn.addEventListener("click",(()=>{n()})),{displayKdqolTasksForm:e,cancelTasksForm:n,newTaskDom:b}})(),v=(()=>{function e(){document.querySelector(".phq9itemcontainer").style.display="block"}function n(){document.querySelector("#taskitemformpopup").style.display="none"}return b.phq9Button.addEventListener("click",(()=>{console.log("is this running"),e()})),b.cancelTaskBtn.addEventListener("click",(()=>{n()})),{displayPhq9TasksForm:e,cancelTasksForm:n,newTaskDom:b}})(),g=(()=>{function e(){document.querySelector(".assessmentitemcontainer").style.display="block"}function n(){document.querySelector("#taskitemformpopup").style.display="none"}return b.assessmentButton.addEventListener("click",(()=>{console.log("is this running"),e()})),b.cancelTaskBtn.addEventListener("click",(()=>{n()})),{displayAssessmentTasksForm:e,cancelTasksForm:n,newTaskDom:b}})(),w=(()=>{function e(){document.querySelector(".otheritemcontainer").style.display="block"}function n(){document.querySelector("#taskitemformpopup").style.display="none"}return b.otherButton.addEventListener("click",(()=>{console.log("is this running"),e()})),b.cancelTaskBtn.addEventListener("click",(()=>{n()})),{displayOtherTasksForm:e,cancelTasksForm:n,newTaskDom:b}})(),q=[];console.log(q),y();const T=(h(),k(),v(),g(),w(),{taskFunctionality:T}),S={title:undefined,description:undefined,dueDate:undefined,priority:undefined,addToList(){const e=f.newTitle.value,n=f.newDescription.value,t=f.newDueDate.value,o=f.newPriorityLevel.value;""!==e&&""!==n&&q.push(e,n,t,o)},addToDOM(){const e=f.newToDoItems;for(let n=0;n<1;n++){const n=document.createElement("div");if(n.textContent=`${f.newTitle.value} ${f.newDescription.value} ${f.newDueDate.value} ${f.newPriorityLevel.value}`,""==`${f.newTitle.value}`||""==`${f.newDescription.value}`)return;e.appendChild(n)}}};f.addToListBtn.addEventListener("click",(()=>{S.addToList(),S.addToDOM(),""!=`${f.newTitle.value}`&&""!=`${f.newDescription.value}`&&(f.newTitle.value="",f.newDescription.value="",f.newDueDate.value="",f.newPriorityLevel.value="",document.querySelector(".form-popup").style.display="none"),console.log(S),console.log(q)}))})()})();