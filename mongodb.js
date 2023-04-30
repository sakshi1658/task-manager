// CRUD create read update delete

const { MongoClient } = require('mongodb');

const connectionURL = "mongodb+srv://sakshi:itisakshi@cluster0.ob3j3cv.mongodb.net/?retryWrites=true&w=majority";
const databaseName = "task-manager"

const client = new MongoClient(connectionURL);

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(databaseName);
    const collection = db.collection('users');
  
    // the following code examples can be pasted here...
    const data = await collection.insertOne({
        name: 'Sakshi',
        age: 20
    })


    console.log("inserted data",data)
  
    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
// MongoClient.connect(connectionURL, {
//     useNewUrlParser: true 
// }, (error, client) => {
//     if(error) {
//         return console.log('Unable to connect to the database')
//     }
//     console.log('Connected Correctyl!')
//     const db = client.db(databaseName)

//     const usersCollection = db.collection('users')

//     usersCollection.insertOne({
//         name: 'Sakshi',
//         age: 20
//     })

// })

