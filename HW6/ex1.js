let data = "Press CTRL+C again to exit";
let counter = 0;
let timer;
let clicked = false;

const interval = setInterval(()=>{
  console.log(counter++);
},1000);

process.on('SIGINT', ()=>{
    clicked = true;
    console.log(data);
    data = "";
    timer = setTimeout(()=>{
        clicked = false;
        console.log("clicked=",clicked);
    },2000);
    if(clicked){
      process.on('SIGINT', ()=>{
          console.log('You clicked Ctrl+C again');
          process.exit(0);
      })
    } else if (!clicked){
      clearTimeout(timer);
    };
});
