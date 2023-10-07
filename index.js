const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let output = "";


buttons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        if(event.target.innerText == "="){
            output = String(eval(output))
            screen.value = output;
        }
        else if(event.target.innerText == "AC"){
            output = ""
            screen.value = output;
        }
        else if(event.target.innerText == "+/-"){
            output = String(-eval(output))
            screen.value = output;
        }
        else if(event.target.innerText == "%"){
            output = eval(output) /100;
            screen.value = output;
        }
        else{
            output += event.target.innerText
            screen.value = output;
        }
    })
});