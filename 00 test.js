db.inventory.findOne({status: "A"})  //find only one document from the topo whose status is A only
db.inventory.find({status: "A"})  //find the document whose status is A only
db.inventory.find({status: {$in: ["A", "D"]}})  // find the document whose status is A and D

//AND
db.inventory.find({status:"A", qty: { $lt: 30}})

//OR
db.inventory.find({$or: [{status: "A"}, {qty: {$lt: 50}}]})