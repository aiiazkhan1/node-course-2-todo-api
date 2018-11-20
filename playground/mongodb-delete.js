//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDB Server '+err);
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('ToDoApp');

 // delete Many

  // db.collection('Users').deleteMany({name:'Aiiaz'}).then((result)=>{
  //   console.log(result);
  // });

 // Delete one

// var object = new ObjectID('5bf4913548de9935058c8530');
//  db.collection('Todos').deleteOne({_id : object}).then((result)=>{
//    console.log(result);
//  });

 // find one and delete

 // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
 //   console.log(result);
 // });
 var object = new ObjectID('5bf4913548de9935058c8530');
  db.collection('Users').findOneAndDelete({_id : object}).then((result)=>{
    console.log(result);
  });

  // client.close();
});
