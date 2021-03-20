function compute() {
    //Get values and calculate interest
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = (principal * years * rate) / 100;
    var futureyear = new Date().getFullYear() + years;
    
    //Show interest text
    document.getElementById("result").innerHTML = 
    "If you deposit <mark>" + principal + "</mark>,<br/>" + 
    "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
    "you will receive an amount of <mark>" + interest + "</mark>,<br/>" +
    "in the year <mark>" + futureyear + "</mark>";
}

//update the interest rate slider
function showSliderValue() {
    document.getElementById("rateRange").innerHTML = document.getElementById("rate").value;
}

//check for positive principal values 
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var greaterThanZero = parseInt(principal) > 0;
    if (!greaterThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }   else {
        compute()
    }

}