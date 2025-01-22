const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://dbUser-Alvi:lFJFaP7AvbhY172Y@cluster0.nud8z.mongodb.net/testDB?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db("testDB"); // Replace with your actual database name
    const collection = database.collection("testCollection"); // Example collection

    app.get('/data', async (req, res) => {
      const data = await collection.find({}).toArray();
      res.send(data);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

run();

app.get('/', (req, res) => {
  res.send('Simple CRUD is running!');
});

app.listen(port, () => {
  console.log(`Simple CRUD is running on port ${port}`);
});
