const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

/*** creating a schema for documents in a collection ***/

const fruitSchema = new mongoose.Schema ( {
    _id: Number,
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// creates a 'fruits' collection
const Fruit = mongoose.model("Fruit", fruitSchema);

/*** inserting one document into collection ***/

const fruit = new Fruit ({
    _id: 1,
    name: Apple,
    rating: 10,
    review: "Delicious."
});

// inserts fruit into fruits collection
fruit.save();

const raspberry = new Fruit( {
    _id: 6,
    name: "Raspberry",
    score: 10,
    review: "Best fruit ever."
});

raspberry.save();

/****** Exercise ********/
// Create a new people collection.
// Create a schema for a new person that needs to have two fields: name and age. 
// Create a new person (name John and age 37) and save it into the collection

const personSchema = new mongoose.Schema ({
    _id: Number,
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    _id: 11,
    name: "John",
    age: 37
});

person.save()


/*** inserting more than one document into collection ***/

const kiwi = new Fruit({
    _id: 2,
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
});

const orange = new Fruit ({
    _id: 3,
    name: "Orange",
    score: 8,
    review: "Pretty good."
});

const banana = new Fruit ({
    _id: 4,
    name: "Banana",
    score: 7,
    review: "Weird texture."
});


Fruit.insertMany([kiwi, orange, banana], function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits to fruitsDB");
    }
});


/*** updating one document ***/

Fruit.updateOne( {_id: 4}, {rating: 7}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully updated the document.");
    }
});


/*** deleting one document from collection ***/
Fruit.deleteOne( {_id: 5}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully deleted one document.");
    }
});


/*** deleting many documents from collection ***/
Person.deleteMany({name: "John"}, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Successfully deleted the documents.");
    }
});


/**** finding documents in collection ****/
Fruit.find( function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
    }
});


/*** creating relations between documents ***/

const pineapple = new Fruit( {
    _id: 5,
    name: "Pineapple",
    score: 9,
    review: "Great fruit."
});

pineapple.save();

const amy = new Person({
    _id: 12,
    name: "Amy",
    age: 12,
    favoriteFruit: pineapple
});

amy.save();

// Updating John person so that now it has raspberry as favorite fruit
Fruit.find({_id: 6}, function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        console.log(fruits);

        // retrieve raspberry's document
        raspberry = fruits[0]; 

        // save it into john's document
        Person.updateOne({name: "John"}, {favoriteFruit: raspberry}, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully updated the document.");

                // console log john's document
                Person.find({name: "John"}, function(err, people) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(people);
                        mongoose.disconnect();
                    }
                });                
            }
        });        
    }
});



/*** schema definition without validation ***/

/*
const fruitSchema = new mongoose.Schema ({
    _id: Number,
    name: String,
    rating: Number,
    review: String
});
*/

