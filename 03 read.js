db.inventory.find()  //fetch all documents
db.inventory.find({})  //fetch all documents
db.inventory.find({qty:85}) //fetch document whose quentaty equal 85

db.inventory.find( { status: { $in: [ "A", "D" ] } } )

//AND
db.inventory.find( { status: "A", qty: { $lt: 30 } } )


// OR
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )