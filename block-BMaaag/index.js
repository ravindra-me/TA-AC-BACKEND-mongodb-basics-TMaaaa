db.himalayas({ name: 'Dhauldhar range', height: '4000 mtrs' });

db.himalayas.insertMany([
  { name: 'Avraest range', height: '8000 mtrs' },
  { name: 'kelash range', height: '7000mts' },
]);
db.himalayas.find().pretty();
db.himalayas.find({ name: 'Dhauldhar range' }).pretty();
