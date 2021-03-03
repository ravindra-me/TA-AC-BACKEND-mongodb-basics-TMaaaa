let arr = [
  {
    title: 'javascript',
    details: 'javascript basic',
    author: {
      name: 'ankit',
      email: 'ankit@gmail.com',
      age: '28',
    },
    tags: ['js', 'react'],
  },
  {
    title: 'html and css',
    details: 'basic and advance css',
    author: {
      name: 'suraj',
      email: 'suraj@gmail.com',
      age: '27',
    },
    tags: ['html', 'css'],
  },
  {
    title: 'git hub',
    details: 'git hub commands',
    author: {
      name: 'prashant',
      email: 'pra@gmail.com',
      age: '29',
    },
    tags: ['unix', 'git'],
  },
];
db.articles.insertMany(arr);
db.articles.find().pretty();
db.articles.findOne({ title: 'javascript' });
db.articles.find({ 'author.name': 'ankit' }).pretty();
db.articles.find({ tags: ['html', 'css'] }).pretty();
db.articles.update(
  { _id: ObjectId('603fbdcb8db930d4d746e6eb') },
  { $set: { title: 'advance css and html' } }
);
db.articles.update({ title: 'git hub' }, { $push: { tags: 'ruby' } });
db.articles.update({ title: 'git hub' }, { $set: { title: 'full stack' } });
db.articles.update(
  { title: 'advance css and html' },
  { $set: { 'author.age': '32' } }
);
db.articles.remove({ _id: ObjectId('603fbdcb8db930d4d746e6eb') });
db.articles.update({ title: 'full stack' }, { title: 'git hub' });
