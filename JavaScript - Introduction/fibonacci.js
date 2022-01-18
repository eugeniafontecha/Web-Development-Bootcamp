// Create a function that returns the fibonacci sequence with length "n".

function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var output = [];
        if (n === 1) {
            output = [0];
            return output;
        } else if (n === 2) {
            output = [0,1];
            return output;
        } else {
            output = [0,1];
            while (output.length < n) {
                output.push(output[output.length - 1] + output[output.length - 2]);
            }
            return output;
    }

    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}
