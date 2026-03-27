const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Post = require("./models/Post");

const app = express();

// MIDDLEWARE
app.use(cors());        // allow frontend (React) to connect
app.use(express.json()); // parse JSON

// MongoDB connection
//mongoose.connect("mongodb+srv://hemalata221602_db_user:1lu3oOtJUtgCOtTe@cluster0.fb1vdib.mongodb.net/?appName=Cluster0")
mongoose.connect("mongodb://hemalata221602_db_user:1lu3oOtJUtgCOtTe@ac-jigutr6-shard-00-00.fb1vdib.mongodb.net:27017,ac-jigutr6-shard-00-01.fb1vdib.mongodb.net:27017,ac-jigutr6-shard-00-02.fb1vdib.mongodb.net:27017/?ssl=true&replicaSet=atlas-7elrqg-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// GET ALL POSTS 
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//CREATE POST (MongoDB)
app.post("/api/posts", async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
    });

    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//DELETE POST (MongoDB)
app.delete("/api/posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// START SERVER
app.listen(5000, () => console.log("Server running on port 5000"));