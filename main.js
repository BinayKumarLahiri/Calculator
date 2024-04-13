const numBtns = document.querySelectorAll(".digit");
const input = document.getElementById("exp");
numBtns.forEach((btn)=>{
    btn.addEventListener("click",function(){
        input.value = input.value + btn.innerHTML;
    })
})
document.getElementById("backspace").addEventListener("click",function(){
    let text = input.value;
    if(text!=""){
        input.value = text.substring(0,text.length-1);
    }
})
document.getElementById("clear").addEventListener("click",function(){
    input.value = "";
})
document.getElementById("addition").addEventListener("click",function(){
    let text = input.value;
    input.value = text + "+";
})
document.getElementById("subtract").addEventListener("click",function(){
    let text = input.value;
    input.value = text + "-";
})
document.getElementById("multiply").addEventListener("click",function(){
    let text = input.value;
    input.value = text + "*";
})
document.getElementById("divide").addEventListener("click",function(){
    let text = input.value;
    input.value = text + "/";
})
document.getElementById("calculate").addEventListener("click",function(){
    let text = input.value;
    input.value = eval(text);
})

