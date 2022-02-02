const MongoClient = require('mongodb').MongoClient;

//testing, validation
const assert = require('assert'); 

//base url for connecting to the db
const url = "mongodb://localhost:27017";

// database name
const dbName = "fruitsDB";

// create a new MonogClient
const client = new MongoClient(url, {useNewUrlParser: true});

// use connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    // add new docuements to fruits collection
    insertDocuments(db, function() {
        client.close();
    });
    

    // find documents from fruits collection
    /*
    findDocuments(db, function() {
        client.close();
    });
    */
    
});

const insertDocuments = function(db, callback) {

    // get the documents collection
    const collection = db.collection("fruits");

    // insert some documents
    collection.insertMany([
        {   
            _id: 1,
            name: "Apple",
            score: 6,
            review: "Kinda boring"
        }, 
        {
            _id: 2,
            name: "Orange",
            score: 8,
            review: "Great stuff!"
        }, 
        {
            _id: 3,
            name: "Banana",
            score: 7,
            review: "Great fruit"
        }
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3,result.insertedCount);
        assert.equal(3,Object.keys(result.insertedIds).length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    }
    );
};

const findDocuments = function(db, callback) {

    // get the documents collection
    const collection = db.collection("fruits");

    // find some documents
    collection.find({}).toArray(function(err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
};


