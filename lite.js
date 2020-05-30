var y = 0;
function operate()
{
    if(y == 1)
    {
        add1();
    }
    else if(y == 2)
    {
        sub1();
    }
    else if(y == 3)
    {
        div1();
    }
    else if(y == 4)
    {
        mul1();
    }
}
function add(){
    y = 1;
    document.getElementById("num2").innerHTML = parseInt(document.getElementById("num1").innerHTML);
    document.getElementById("num1").innerHTML = "";
    document.getElementById("op1").innerHTML = "+";

    
}
function sub(){
    y = 2;
    document.getElementById("num2").innerHTML = parseInt(document.getElementById("num1").innerHTML);
    document.getElementById("num1").innerHTML = "";
    document.getElementById("op1").innerHTML = "-";

}

function div(){
    y = 3;
    document.getElementById("num2").innerHTML = parseInt(document.getElementById("num1").innerHTML);
    document.getElementById("num1").innerHTML = "";
    document.getElementById("op1").innerHTML = "/";

}

function mul(){
    y = 4;
    document.getElementById("num2").innerHTML = parseInt(document.getElementById("num1").innerHTML);
    document.getElementById("num1").innerHTML = "";
    document.getElementById("op1").innerHTML = "*";

}

function add1(a,b){
    document.getElementById("result").innerHTML = parseInt(document.getElementById("num1").innerHTML) + parseInt(document.getElementById("num2").innerHTML) ;
}
function sub1(a,b){
    document.getElementById("result").innerHTML = parseInt(document.getElementById("num2").innerHTML) - parseInt(document.getElementById("num1").innerHTML) ;
}
function mul1(a,b){
    document.getElementById("result").innerHTML = parseInt(document.getElementById("num1").innerHTML) * parseInt(document.getElementById("num2").innerHTML) ;
}
function div1(a,b){
    document.getElementById("result").innerHTML = parseInt(document.getElementById("num2").innerHTML) / parseInt(document.getElementById("num1").innerHTML) ;
}

function cancel()
{
    document.getElementById("num1").innerHTML = parseInt(parseInt(document.getElementById("num1").innerHTML) / 10);

}

function refresh()
{
    y = 0;
    document.getElementById("num1").innerHTML = "";
    document.getElementById("num2").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("op1").innerHTML = "";
}



function one(){
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("one").innerHTML
}
function two(){
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("two").innerHTML
}
function three(){
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("three").innerHTML
}
function four(){
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("four").innerHTML
}
function five(){
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("five").innerHTML
}
function six(){
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("six").innerHTML
}
function seven(){
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("seven").innerHTML
}
function eight(){
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("eight").innerHTML
}
function nine(){
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("nine").innerHTML
}
function zero(){
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("zero").innerHTML
}