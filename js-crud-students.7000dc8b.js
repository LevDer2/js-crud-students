const getStudentsButton=document.querySelector("#get-students-btn"),table=document.querySelector(".students-tbody"),formRef=document.querySelector("#add-student-form");let editOrAdd=null;function getStudents(){return fetch("http://localhost:3000/students").then(t=>t.json())}function delStudentApi(t){return fetch(`http://localhost:3000/students/${t}`,{method:"DELETE"}).then(t=>t.json())}function addStudentApi(t){return fetch("http://localhost:3000/students/",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(t=>t.json())}function editStudentApi(t,e){return fetch(`http://localhost:3000/students/${t}`,{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(t=>t.json())}function renderStudents(t){table.innerHTML="";let e=t.map(({id:t,name:e,skills:n,isEnrolled:d,age:u,course:o,email:a})=>{let l=Object.values(n).join("");return`
        <tr id="${t}">
          <td>${t}</td>
          <td data-action="Name">${e}</td>
          <td data-action="Age">${u}</td>
          <td data-action="Course">${o}</td>
          <td data-action="Skills">${l}</td>
          <td data-action="Email">${a}</td>
          <td data-action="CheckBox">${d?"Онлайн":"Офлайн"}</td>
          <td><button class="delete-students" data-action="Delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438} \u{441}\u{442}\u{443}\u{434}\u{435}\u{43D}\u{442}\u{430}</button>\
          <button class="edit-students" data-action="Edit">\u{417}\u{43C}\u{456}\u{43D}\u{438}\u{442}\u{438} \u{434}\u{430}\u{43D}\u{456} \u{441}\u{442}\u{443}\u{434}\u{435}\u{43D}\u{442}\u{430}</button></td>
        </tr>
      `}).join("");table.insertAdjacentHTML("beforeend",e)}function addStudent(t){}function updateStudent(t){}function deleteStudent(t){console.log(t),delStudentApi(t).then(()=>getStudents()).then(renderStudents)}getStudentsButton.addEventListener("click",()=>(getStudentsButton.style.display="none",getStudents().then(renderStudents))),table.addEventListener("click",t=>{if("Delete"===t.target.dataset.action)return deleteStudent(t.target.closest("tr").id);if("Edit"===t.target.dataset.action){let e=t.target.closest("tr");return console.log(e),editOrAdd=void 0,updateStudent(e)}}),formRef.addEventListener("submit",t=>{t.preventDefault();let{name:e,age:n,course:d,skills:u,email:o,isEnrolled:a}=t.target.elements;console.log(e.value),console.log(n.value),console.log(d.value),console.log(u.value),console.log(o.value),console.log(a.checked);let l={name:e.value.trim(),age:Number(n.value.trim()),course:d.value.trim(),skills:u.value.trim(),email:o.value.trim(),isEnrolled:a.checked};null===editOrAdd&&addStudentApi(l).then(()=>getStudents()).then(renderStudents)});
//# sourceMappingURL=js-crud-students.7000dc8b.js.map
