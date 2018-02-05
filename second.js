/*function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    if(x == ""){
        alert("full name must not be empty");
        return false;
    }
   
    
}*/

function valage(){

    var y=document.forms["myForm"]["age"].value;

    if(y == ""){
        alert("age must not be empty");
        return false;
    }
    if(y < 18 || y > 30){
        alert("age should be in range of 18 to 30");
        return false;
    }

    
}

function ran(){
    var a=document.getElementById("range");

    if(!a.checkValidity()){
        document.getElementById("demo").innerHTML=a.validationMessage;
    }
    
    else{
        document.getElementById("demo").innerHTML="valid input";
    }
}

 

    function ran1(){
    var b=document.getElementById("range1");
    var txt="";
    if(b.validity.rangeOverflow){
        txt="too large";
    }
    
    else if(b.validity.rangeUnderflow){
        txt="too small";
    }
    else{
        txt="valid input";
    }
    document.getElementById("demo1").innerHTML=txt;
}