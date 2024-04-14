const numBtns = document.querySelectorAll(".digit");
const input = document.getElementById("exp");
const ans = document.getElementById("ans");
let expression = "";
numBtns.forEach((btn)=>{
    btn.addEventListener("click",function(){
        input.innerHTML = input.innerHTML + btn.innerHTML;
        expression = expression + btn.innerHTML;
    })
})
document.getElementById("backspace").addEventListener("click",function(){
    let text = input.innerHTML;
    if(text.charAt(text.length-1)=="%") {
        expression = expression.substring(0,expression.length-5);
    }
    else if(expression!="")expression = expression.substring(0,expression.length-1);
    if(text!=""){
        input.innerHTML = text.substring(0,text.length-1);
    }
})
document.getElementById("clear").addEventListener("click",function(){
    if(input.innerHTML!=""){
        input.innerHTML = "";
        expression = "";
    }else {
        ans.innerHTML = "";
    }
})
document.getElementById("addition").addEventListener("click",function(){
    let text = input.innerHTML;
    input.innerHTML = text + "+";
    expression = expression + "+";
})
document.getElementById("subtract").addEventListener("click",function(){
    let text = input.innerHTML;
    input.innerHTML = text + "-";
    expression = expression + "-";
})
document.getElementById("multiply").addEventListener("click",function(){
    let text = input.innerHTML;
    input.innerHTML = text + "X";
    expression = expression + "*";
})
document.getElementById("divide").addEventListener("click",function(){
    let text = input.innerHTML;
    input.innerHTML = text + "&#247;";
    expression = expression + "/";
})

document.getElementById("percentage").addEventListener("click",function(){
    let text = input.innerHTML;
    input.innerHTML = text + "%";
    expression = expression + "/100*"
})
document.getElementById("calculate").addEventListener("click",function(){
    try {
        let answer = eval(expression);
        ans.innerHTML = "="+answer;
        input.innerHTML = "";
        expression = "";
    } catch (error) {
        console.log(error);
        if(error.name=="SyntaxError"){
            ans.innerHTML = "Syntax Error";
            input.innerHTML = "";
            expression = "";
        }
    }
})

