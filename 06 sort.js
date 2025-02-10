//Building the database
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
])


db.inventory.find()  //find all the document from the database

db.inventory.find().sort({qty:1})  // this will short based on the increasing order of qty
db.inventory.find().sort({qty:-1})  // this will short based on the decreasing orser of qty

db.inventory.find().skip(1)  // this will skip first document 
db.inventory.find().skip(2)  // this will skip first two document

db.inventory.find().limit(1)  // show the first document from the db
db.inventory.find().limit(2)  // show the first two document from the db
