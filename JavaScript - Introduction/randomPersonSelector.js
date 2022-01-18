// Write a function that selects a random name from a list of names.
// The person selected will have to poay for everybody's food bill.
// Example Input: ["Angela", "Chloe", "Michael", "Ben", "Jenny"]

function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        var i = Math.floor(Math.random()*names.length);
        return names[i] + " is going to buy lunch today!";
    
    /******Don't change the code below*******/    
    }