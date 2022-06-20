function buttonClick(val)
{
    document.getElementById("screen").value+=val
    
}
function evalClick(val)
{
    value1 = parseInt(document.getElementById("screen").value)
    operator = val
    document.getElementById("screen").value = ""

}


function clearDisplay()
{
    document.getElementById("screen").value = ""
}


function equalClick()
{
   value2 = parseInt(document.getElementById("screen").value)
   switch(operator){
    case '+':
        // result = value1 + value2;
        document.getElementById("screen").value=value1 + value2;
        break;
    case '-':
        // result = value1 - value2
        document.getElementById("screen").value=value1 - value2;
        break;
    case '*':
        // result = value1 * value2
        document.getElementById("screen").value=value1 * value2;
        break;
    case '/':
        // result = value1 / value2
        document.getElementById("screen").value=value1 / value2;
        break;
    
   }

}