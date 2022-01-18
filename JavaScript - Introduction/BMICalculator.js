// Write a functoin that calculates the BMI and outputs a 
// different message depending on the BMI.

function bmiCalculator (weight, height) { 
    var bmi = Math.round(weight/Math.pow(height,2));
    
    if (bmi < 18.5) {
        var interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi < 25) {
        var interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        var interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}