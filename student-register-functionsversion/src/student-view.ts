const studentView = (student) => {

  const render = ()=>{
        const {studentId, name, status} = student;

        let student$ = `<span class="w-75 text-truncate">${name}</span>`;
        return `<tr class="row-student" data-id=${studentId}>
                  <td>${studentId}</td>
                  <td>${student$}</td>
                  <td><input type="checkbox" class="toggleStatus" ${status?"checked":""}/>${status? "Not active":"Active"}</td>
                  <td><button class="remove close text-danger">&times;</button></td>
                </tr>`;
      };

      return {
          render
      };
  };

  export default studentView;
