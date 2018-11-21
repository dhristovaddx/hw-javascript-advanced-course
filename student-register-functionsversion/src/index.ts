import StudentViewCollection from "./student-list-view";

namespace app {

  export const init = ():void => {
      const students$ = document.getElementById('students');
      const input$ = document.getElementById('student-input');
      const addButton$ = document.getElementById('add-student');

      const studentListView =  StudentViewCollection( students$, 'Anna Smith', 'John Doe', 'Peter Davis');
      studentListView.render();

      const validateInput = (value:string):boolean =>{
          return typeof value === 'string' && value.trim().length > 0;
      };

      addButton$.addEventListener('click', ()=>{
          if( validateInput(input$['value'])){
              studentListView.action('add', input$['value']);
              input$['value'] = '';
          }
      });

      input$.addEventListener('keypress', (event)=>{
          if( event['keyCode'] === 13 && validateInput(input$['value'])) {
              studentListView.action('add', input$['value']);
              input$['value'] = '';
          }
      });
  };
}

app.init();
