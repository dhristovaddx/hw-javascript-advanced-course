const studentView = (student) => {

  const render = ()=>{
        const {studentId, name, status } = student;

        let student$ = `<span class="w-75 text-truncate">${name}</span>`;
        return `<td data-id=${studentId}>${studentId+1}</td>
                <td>${student$}</td>
                <td><input type="checkbox" class="toggleStatus" ${status?"checked":""}/>Active</td>
                <td><button class="remove close text-danger">&times;</button></td>`;
      };

      return {
          render
      };
  };

  export default studentView;
