const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vrk7y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    await client.connect();
    const productCollection = client.db("laptopWarehouse").collection("product");
    const myItemsCollection = client.db("laptopWarehouse").collection("myItem")

    app.get("/product", async (req, res) => {
      const query = {};
      const cursor = productCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });
    
    app.get('/product/:id',async(req,res)=>{
      const id = req.params.id;
      const query = {_id:ObjectId(id)};
      const product = await productCollection.findOne(query);
      res.send(product);
    })

    //post
    app.post('/product',async(req,res)=>{
      const newProduct = req.body;
      const result = await productCollection.insertOne(newProduct);
      res.send(result);
    })

  //DELETE
  app.delete('/product/:id',async(req,res)=>{
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const result = await productCollection.deleteOne(query);
    res.send(result);
});


    // update 
    app.put("/product/:id",async(req,res)=>{
      const id = req.params.id;
      const newQuantity = req.body;
      console.log(id,newQuantity.quantity);
      const filter = {_id:ObjectId(id)};
      const option ={upsert: true};
      const updateQuantity = {
        $set: {
          quantity: newQuantity.quantity
        }
      };
      const result = await productCollection.updateOne(filter,updateQuantity,option);
      res.send(result)
      // console.log(quantity)
    })


    // myItem
    app.post('/myItems',async(req,res)=>{
      const myItem = req.body;
      const result = await myItemsCollection.insertOne(myItem);
      res.send(result);
    })
    app.get("/myItems", async (req, res) => {
      const query = {};
      const cursor = myItemsCollection.find(query);
      const myItems = await cursor.toArray();
      res.send(myItems);
    });
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running laptop-warehouse Server");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
