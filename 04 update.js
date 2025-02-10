//updateOne-> only one document is updated
db.inventory.updateOne(
    {item: "paper"}, 
    {
        $set: {"size.uom": "cm", status: "P"}, 
        $currentDate: {lastModified: true} 
    }
 )

 //updateMany-> more then one document is updated
db.inventory.updateMany(
    { "qty": { $lt: 50 } },
    {
      $set: { "size.uom": "in", status: "P" },
      $currentDate: { lastModified: true }
    }
 )

 //replace the document from the database
 db.inventory.replaceOne(
    { item: "paper" },
    { item: "paper", instock: [ { warehouse: "A", qty: 60 }, { warehouse: "B", qty: 40 } ] }
 )