
function clrDisplay() {
    document.getElementById("calc_display").value = ""; 
}

function display(exp) {

    document.getElementById('calc_display').value += exp;
    return exp;

}


function calculate() {
    
    let x = document.getElementById("calc_display").value;

    result = eval(x)
    
    document.getElementById('calc_display').value = result;
        
    return result;   

    
}

