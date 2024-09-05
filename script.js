const cal = {
    val1 : "",
    val2 : "",
    oparator : "",
    sum : "",
    step : 1
}

function number(n){

    const display = document.querySelector('.display');

    let val = "";
    
    if(cal.step == 1){
        if((cal.val1 == '' && n == 0)|| String(cal.val1).length > 10){return}
        if(n == "." && cal.val1.indexOf('.') !== -1){return;}
        cal.val1 += n;
        val = cal.val1;
    }else{
        if((cal.val2 == '' && n == 0) || String(cal.val2).length > 10){return}
        if(n == "." && cal.val2.indexOf('.') !== -1){return;}
        cal.val2 += n;
        val = cal.val2;
    }
    
    display.innerHTML = val;
}

function remove(){
    const display = document.querySelector('.display');
    let val = "";
    if(cal.step == 1){
        val = cal.val1.slice(0,cal.val1.length - 1)
        cal.val1 = val;
    }else{
        val = cal.val2.slice(0,cal.val2.length - 1)
        cal.val2 = val;
    }
    if(val == ""){val = 0}
    display.innerHTML = val
}

function operator(op,element){
    if(document.querySelector('.btn-operator.active')){
        const operatorActive = document.querySelector('.btn-operator.active');
        operatorActive.classList.remove('active');
    }
    
    element.classList.add('active');
    cal.step = 2
    cal.oparator = op;
}

function sum(){
    let sum = document.querySelector('.display').innerHTML;
    if(document.querySelector('.btn-operator.active')){
        const operatorActive = document.querySelector('.btn-operator.active');
        operatorActive.classList.remove('active');
    }
    if(cal.val1 !== "" && cal.val2 !== "" && cal.oparator !== ""){
        let calcurator = cal.val1 + cal.oparator + cal.val2
        sum = eval(calcurator)
    }

    const display = document.querySelector('.display');
    cal.sum = sum
    display.innerHTML = sum;
    cal.val1 = String(sum);
    cal.val2 = "";
    cal.oparator = "";
    cal.step = 1;
}

function resetCal(){
    const display = document.querySelector('.display');
    display.innerHTML = "0";
    if(document.querySelector('.btn-operator.active')){
        const operatorActive = document.querySelector('.btn-operator.active');
        operatorActive.classList.remove('active');
    }
    cal.val1 = "";
    cal.val2 = "";
    cal.oparator = "";
    cal.sum = "";
    cal.step = 1;
}