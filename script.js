function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0)
    {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = (principal * years * rate /100).toFixed(2);
    var year = new Date().getFullYear()+parseInt(years);
    var amount=parseFloat(interest)+parseFloat(principal);
    //var val=document.getElementById("result");
    //val.innerHTML="If you deposit "+"<mark>"+principal+"</mark>"+",<br>at an interest rate of "+"<mark>"+rate+"</mark>"+"%<br>You will receive an amount of "+"<mark>"+interest+"</mark>"+",<br>in the year "+"<mark>"+year+"</mark>"+"<br>";
    document.getElementById("int_result").innerHTML="Interest Amount: "+"<b>"+"<mark>" +interest+"</mark>" +"</b>";
    document.getElementById("result").innerHTML="If you deposit <b>"+"<mark>" +principal+"</mark>" +"</b>,<br>at an interest rate of <b>"+"<mark>" +rate+"</mark>" +"</b>%<br>You will receive an amount of <b>"+"<mark>" +interest+"</mark>" +"</b>,<br>in the year <b>"+"<mark>" +year+"</mark>" +"</b><br>";
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
