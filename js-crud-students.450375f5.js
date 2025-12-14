const getStudentsButton=document.querySelector("#get-students-btn"),table=document.querySelector(".students-tbody"),formRef=document.querySelector("#add-student-form");function getStudents(){return fetch("http://localhost:3000/students").then(t=>t.json())}function delStudentApi(t){return fetch(`http://localhost:3000/students/${t}`,{method:"DELETE"}).then(t=>t.json())}function addStudentApi(t){return fetch("http://localhost:3000/students/",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(t=>t.json())}function renderStudents(t){table.innerHTML="";let e=t.map(({id:t,name:e,skills:n,isEnrolled:d,age:u,course:r,email:o})=>{let s=Object.values(n).join("");return`
        <tr id="${t}">
          <td>${t}</td>
          <td>${e}</td>
          <td>${u}</td>
          <td>${r}</td>
          <td>${s}</td>
          <td>${o}</td>
          <td>${d?"Так":"Ні"}</td>
          <td><button class="delete-students" data-action="Delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438} \u{441}\u{442}\u{443}\u{434}\u{435}\u{43D}\u{442}\u{430}</button></td>
        </tr>
      `}).join("");table.insertAdjacentHTML("beforeend",e)}function addStudent(t){}function updateStudent(t){}function deleteStudent(t){console.log(t),delStudentApi(t).then(()=>getStudents()).then(renderStudents)}getStudentsButton.addEventListener("click",t=>(t.textContent="Restart",getStudents().then(renderStudents))),table.addEventListener("click",t=>{if("Delete"===t.target.dataset.action)return deleteStudent(t.target.closest("tr").id)}),formRef.addEventListener("submit",t=>{t.preventDefault();let{name:e,age:n,course:d,skills:u,email:r,isEnrolled:o}=t.target.elements;addStudentApi({name:e.value.trim(),age:Number(n.value.trim()),course:d.value.trim(),skills:u.value.trim(),email:r.value.trim(),isEnrolled:o.value.trim()})});
//# sourceMappingURL=js-crud-students.450375f5.js.map
