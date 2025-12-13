const getStudentsButton=document.querySelector("#get-students-btn"),table=document.querySelector(".students-table");function getStudents(){return fetch("http://localhost:3000/students").then(t=>t.json())}function renderStudents(t){table.innerHTML="";let e=t.map(({id:t,name:e,skills:n,isEnrolled:d,age:u,course:o,email:s})=>{let c=Object.values(n);return`
          <td>${t}</td>
          <td>${e}</td>
           <td>${u}</td>
           <td>${o}</td>
         <td> ${c.map(t=>`${t}, `).join("")}</td>
          <td>${s}</td>
          <td>${d}</td>
 `}).join("");table.insertAdjacentHTML("beforeend",e)}function addStudent(t){}function updateStudent(t){}function deleteStudent(t){}getStudents().then(t=>console.log(t)),getStudentsButton.addEventListener("click",t=>getStudents().then(renderStudents));
//# sourceMappingURL=js-crud-students.29f5b9c2.js.map
