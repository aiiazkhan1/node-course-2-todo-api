//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server '+err);
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('ToDoApp');

  // db.collection('Todos').find({
  //     _id: new ObjectID('5bf470d1b8dc662aa1da2615')
  //
  //   }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs),undefined,2);
  // },(err) =>{
  //   console.log('Unable to fetch docs', err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count ${count}`);
  // },(err) =>{
  //   console.log('Unable to fetch docs', err);
  // });

  db.collection('Users').find({name:'Aiiaz'}).toArray().then((users)=>{
    console.log('SUCCESS');
    console.log(JSON.stringify(users,undefined,2));
  },(err)=>{
    console.log('Failed');
  });



  // client.close();
});
