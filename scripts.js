let value,exp;
value = 0;
let display = document.getElementById("display")
function insert(num){
    value += num;
    exp = value.substring(1,value.length);
    display.innerHTML = exp;
}
function clearCal(){
    value = 0;
    exp = 0;
    display.innerHTML = "Result Here!";
}
function evalResult(){
    if(exp){
        display.innerHTML = eval(exp);
    }
}