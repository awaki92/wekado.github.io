function myAgeInDays(myAge) {
    return myAge * 365;
}

var daysCalc = myAgeInDays(27);

document.getElementById("age").innerHTML = "your age in days =" + daysCalc;