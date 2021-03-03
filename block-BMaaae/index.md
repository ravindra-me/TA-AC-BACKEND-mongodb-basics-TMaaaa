writeCode

Write code to:-

- create a database named `sports`.
  // use sports
- list all databases present in local mongod server.
  ``admin 0.000GB config 0.000GB `local 0.000GB
- create 3 collections named `cricket`, `football`, `TT` in sports databse.

```js
db.createCollection('cricket');
db.createCollection('football');
db.createCollection('TT');
```

- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.

```js
// for cricket
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("603f894d5ebdc325ab745cab"),
                ObjectId("603f894d5ebdc325ab745cac")
        ]
}

// for footwall
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("603f8b885ebdc325ab745cad"),
                ObjectId("603f8b885ebdc325ab745cae")
        ]
}
```

- list all collections in sports database.
  `cricket football footwall`

- rename `TT` collection to `tennis`.

```js
db.TT.renameCollection('tennis');
```

- create a capped collection called `khokho` which should have max 3 documents.

```js
db.createCollection('khokho', { capped: true, size: 1024, max: 3 });

// {
//         "acknowledged" : true,
//         "insertedIds" : [
//                 ObjectId("603f92eb5ebdc325ab745caf"),
//                 ObjectId("603f92eb5ebdc325ab745cb0"),
//                 ObjectId("603f92eb5ebdc325ab745cb1")
//         ]
// }
```

Try inserting more than 3 and see what happens?
//WriteResult({ "nInserted" : 1 })

- check whether a collection is capped or not?
  // caped but one document pop out
- drop all documents from `football` collection.
  // db.football.drop()
- delete cricket collection completely.
  //db.cricket.remove({})
- delete sports database.
  // db.dropDatabase()
- check which database you are connected to ?
  // sports
- connect to test database
  //use text
