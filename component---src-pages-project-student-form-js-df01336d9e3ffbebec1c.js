"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[486],{1371:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=a(7294);function l(e){let{addStudent:t,students:a}=e;const{0:l,1:s}=(0,n.useState)({id:"",firstName:"",lastName:"",GPA:"",SCPA:"",status:"",monitoredBy:""}),m=e=>{s({...l,[e.target.name]:e.target.value})};return n.createElement("div",null,n.createElement("form",{onSubmit:e=>{e.preventDefault(),console.table(a);a.some((e=>e.id===l.id))?alert("A student with the same ID already exists"):(t({...l}),s({id:"",firstName:"",lastName:"",GPA:"",SCPA:"",status:"",monitoredBy:""}))},className:"form"},n.createElement("input",{type:"text",name:"id",placeholder:"Student ID",value:l.id,onChange:m,className:"form-input"}),n.createElement("input",{type:"text",name:"firstName",placeholder:"First Name",value:l.firstName,onChange:m,className:"form-input"}),n.createElement("input",{type:"text",name:"lastName",placeholder:"Last Name",value:l.lastName,onChange:m,className:"form-input"}),n.createElement("input",{type:"text",name:"GPA",placeholder:"GPA",value:l.GPA,onChange:m,className:"form-input"}),n.createElement("input",{type:"text",name:"SCPA",placeholder:"SCPA",value:l.SCPA,onChange:m,className:"form-input"}),n.createElement("input",{type:"text",name:"status",placeholder:"Status",value:l.status,onChange:m,className:"form-input"}),n.createElement("input",{type:"text",name:"monitoredBy",placeholder:"Monitored By",value:l.monitoredBy,onChange:m,className:"form-input"}),n.createElement("button",{type:"submit",className:"form-button"},"Add Student")))}}}]);
//# sourceMappingURL=component---src-pages-project-student-form-js-df01336d9e3ffbebec1c.js.map