//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server '+err);
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('ToDoApp');

  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo '+err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  //
  // });

  // db.collection('Users').insertOne({
  //   name:'Aiiaz',
  //   age:36,
  //   location:'Canada'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert user '+err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //
  // });

  client.close();
});
