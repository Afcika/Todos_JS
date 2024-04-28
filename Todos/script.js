

const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  todo();

})


function todo(){
  const todotext = input.value;

  if(todotext){
  
    const todoEl = document.createElement("li");
    const todoSpan = document.createElement("span")
    const todoElX = document.createElement("i");
    todoElX.innerText = 'X';

    todoSpan.innerText =todotext;
    todoEl.appendChild(todoSpan);
    todoEl.appendChild(todoElX);


    todoEl.addEventListener('click', ()=>{
      todoSpan.classList.toggle("completed");
    })
    todoElX.addEventListener('click', ()=>{
      todoEl.remove();
    })


    todos.appendChild(todoEl);
    input.value='';


  }


}