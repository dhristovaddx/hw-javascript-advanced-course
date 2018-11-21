import StudentCollection from './student-collection';
import StudentView from './student-view';

const studentViewCollection = (el$, ...students:string[]) => {

  let studentCollection = StudentCollection(...students);

  const render = ():void =>{
      const list$ = studentCollection.get().map( (student)=>{
          return `<tr class="row-student">${StudentView(student).render()}</tr>`;
      }).join('');
      el$.innerHTML = `<tr id="main">
                          <th>ID</th>
                          <th>Name</th>
                          <th>Status</th>
                          <th>&nbsp</th>
                        </tr>
                        ${list$}`;
      attachEvents();
  };

  const attachEvents = ():void =>{
      const students$ = el$.querySelectorAll('.row-student');

      students$.forEach( (student$)=>{
          const id = parseInt(student$.getAttribute('data-id'));
          const checkbox$ = student$.querySelector('.toggleStatus');
          const removeButton$ = student$.querySelector('.remove');

          checkbox$.addEventListener('click', ()=>{
              console.log("id:", id);
              action('toggleStatus', id);
          });

          removeButton$.addEventListener('click', ()=>{
            console.log("id:", id);

            action('remove',id);
          });
      });
  };

  const action = (type:string, ...params:any[]):void=>{
      studentCollection[type](...params);
      render();
  };

  return {
      render,
      action
  };
};

export default studentViewCollection;
