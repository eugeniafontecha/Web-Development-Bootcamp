// Write a program that works out whether a given year is a leap year.

function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
        var output;
        if (year % 4 === 0) {
            if (year % 100 === 0){
                if (year % 400 === 0) {
                    output = "Leap year.";
                } else {
                    output = "Not leap year.";
                }
            } else {
                output = "Leap year.";
            }
        } else {
            output = "Not leap year.";
        }
        return output;
           
    
    /**************Don't change the code below****************/    
    
    }