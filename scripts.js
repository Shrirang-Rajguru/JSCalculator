var exp = 0;
let display = document.getElementById("display")
function insert(num){
    exp += num;
    display.innerHTML = exp;
}
function backspaceCal(){
    exp = exp.substring(0,exp.length-1);
    display.innerHTML = exp;
}
function clearCal(){
    exp = 0;
    display.innerHTML = "Result Here!";
}
function evalResult(){
    if(exp){
        display.innerHTML = eval(exp);
    }
}