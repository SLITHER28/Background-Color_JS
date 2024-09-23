const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e) //It will give us the type of the event.
    console.log(e.target) //Kis Target se ye Event aaya hai.

    if(e.target.id === 'grey'){
      body.style.backgroundColor = 'grey';
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = 'white';
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'orange'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'deeppink'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'deepskyblue'){
      body.style.backgroundColor = 'deepskyblue';
    }
    if(e.target.id === 'lawngreen'){
      body.style.backgroundColor = 'lawngreen';
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = 'purple';
    }
})
});