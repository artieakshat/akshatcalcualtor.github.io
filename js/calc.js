let string="";
let buttons=document.querySelectorAll(".buttons");
let input=document.querySelector("#input");
let erase=document.getElementById("erase");
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
        string=eval(string);
        input.value=string;
    }
    else if(e.target.innerHTML=="√"){
        string=Math.sqrt(parseFloat(input.value));
        input.value=string;
    }
    else if(e.target.innerHTML=="C"){
         string=input.value.slice(0,-1);
         input.value=string;
    }
    
    else{
    console.log(e.target);
    string=string+e.target.innerHTML;
    input.value=string;
    }
})
})

function eraseAll() {
    Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target==erase)
    string=" ";
    input.value=string;
})
    })
}
function handleWindowSizeChange(){
    Array.from(buttons).forEach((button)=>
    {
        if(window.innerWidth<=576){
      button.classList.remove('col-lg-3');
      button.classList.remove('col-lg-2');
    }
    else {
        // If window width is 576px or more, revert the classes back
        button.classList.remove('col-lg-2');
        button.classList.add('col-lg-2');
    }})
}


// function sqrtRoot(){
//      if(e.target.innerHTML=="√"){
//     string=Math.sqrt(parseFloat(input.value));
//     input.value=string;
// }
// }

// Get the element you want to modify


// Call the function on window load and resize
window.addEventListener('load', handleWindowSizeChange);
window.addEventListener('resize', handleWindowSizeChange);
