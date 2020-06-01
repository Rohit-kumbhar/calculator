var y = 0;
var ini = 0;
var pass = 0;
var can = 0;
var bul = 0;
var bul1 = 0;

function operate()
{
    can = 1;
    bul = 1;
    if(document.getElementById("num1").innerHTML != "")
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
    else
    {
        alert('insuficient data');
        bul = 0;
        can = 0;
    }
}
function add(){
    if(ini != 1)
    {
        alert('first enter a number');
    }
    else
    {   if(pass == 0)
        {
            pass = 1;
            
            document.getElementById("num2").innerHTML = parseInt(document.getElementById("num1").innerHTML);
            document.getElementById("num1").innerHTML = "";
            
        }
        if(bul1 == 0)
        {
        y = 1;
        document.getElementById("op1").innerHTML = "+";
        }
    }

    
}
function sub(){

    if(ini != 1)
    {
        alert('first enter a number');
    }
    else
    {
        if(pass == 0)
        {
            pass = 1;
           
            document.getElementById("num2").innerHTML = parseInt(document.getElementById("num1").innerHTML);
            document.getElementById("num1").innerHTML = "";
            
        }
        if(bul1 == 0)
        {
        y = 2;
        document.getElementById("op1").innerHTML = "-";
        }
    }

}

function div(){

    if(ini != 1)
    {
        alert('first enter a number');
    }
    else
    {
        if(pass == 0)
        {
            pass = 1;
           
            document.getElementById("num2").innerHTML = parseInt(document.getElementById("num1").innerHTML);
            document.getElementById("num1").innerHTML = "";
           
        }
        if(bul1 == 0)
        {
        y = 3;
        document.getElementById("op1").innerHTML = "/";
        }
    }

}

function mul(){
    if(ini != 1)
    {
        alert('first enter a number');
    }
    else
    {
        if(pass == 0)
        {
            pass = 1;
            document.getElementById("num2").innerHTML = parseInt(document.getElementById("num1").innerHTML);
            document.getElementById("num1").innerHTML = "";
        }
        if(bul1 == 0)
        {
        y = 4;
        
        document.getElementById("op1").innerHTML = "*";
        }
    }

}

function add1(a,b){
    if(bul1 == 0)
    {
    document.getElementById("result").innerHTML = parseInt(document.getElementById("num1").innerHTML) + parseInt(document.getElementById("num2").innerHTML) ;
    bul1 = 1
    }
}
function sub1(a,b){
    if(bul1 == 0)
    {
    document.getElementById("result").innerHTML = parseInt(document.getElementById("num2").innerHTML) - parseInt(document.getElementById("num1").innerHTML) ;
    bul1 = 1
    }
}
function mul1(a,b){
    if(bul1 == 0)
    {
    document.getElementById("result").innerHTML = parseInt(document.getElementById("num1").innerHTML) * parseInt(document.getElementById("num2").innerHTML) ;
    bul1 = 1
    }
}
function div1(a,b){
    if(bul1 == 0)
    {
    if(parseInt(document.getElementById("num1").innerHTML) == 0)
    {
        alert('division by zero')
    }
    else{
        document.getElementById("result").innerHTML = parseInt(document.getElementById("num2").innerHTML) / parseInt(document.getElementById("num1").innerHTML) ;
    }
    bul1 = 1
    }
}

function cancel()
{
    if(document.getElementById("num1").innerHTML != '' && can == 0)
    {
        document.getElementById("num1").innerHTML = parseInt(parseInt(document.getElementById("num1").innerHTML) / 10);

    } 
}

function refresh()
{
    y = 0;
    can = 0;
    ini = 0;
    pass = 0;
    bul = 0;
    bul1 = 0;
    document.getElementById("num1").innerHTML = "";
    document.getElementById("num2").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("op1").innerHTML = "";
}



function one(){
    if(bul == 0)
    {
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("one").innerHTML
    ini = 1;
    }
}
function two(){
    if(bul == 0)
    {
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("two").innerHTML
    ini = 1;
    }
}
function three(){
    if(bul == 0)
    {
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("three").innerHTML
    ini = 1;
    }
}
function four(){
    if(bul == 0)
    {
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("four").innerHTML
    ini = 1;
    }
}
function five(){
    if(bul == 0)
    {
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("five").innerHTML
    ini = 1;
    }
}
function six(){
    if(bul == 0)
    {
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("six").innerHTML
    ini = 1;
    }
}
function seven(){
    if(bul == 0)
    {
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("seven").innerHTML
    ini = 1;
    }
}
function eight(){
    if(bul == 0)
    {
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("eight").innerHTML
    ini = 1;
    }
}
function nine(){
    if(bul == 0)
    {
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("nine").innerHTML
    ini = 1;
    }
}
function zero(){
    if(bul == 0)
    {
    document.getElementById("num1").innerHTML = document.getElementById("num1").innerHTML + document.getElementById("zero").innerHTML
    ini = 1;
    }
}
