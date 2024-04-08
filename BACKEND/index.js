const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
 

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/main-db');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// Middleware
const userSchema = new mongoose.Schema({
    email: String,
    password: String
  });
  const User = mongoose.model('User', userSchema);
  const postSchema = new mongoose.Schema({
    heading: String,
    mbody: String
  });   
  const Post = mongoose.model('Post', postSchema);
// Middleware
 
 
app.use(express.json());
app.get('/postre', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});
app.post('/postre', async (req,res) => {
    const {heading, mbody} = req.body;  
      try {
      const newPost = await Post.create({ heading, mbody });
      newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ error: 'Signup failed' });
    }
})
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
      const newUser = await User.create({ email, password });
      newUser.save();
      console.log(newUser);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: 'Signup failed' });
    }
  });
  app.get("/",(req,res)=>{
    return res.json("sjfalk");
})
// Routes
// Define your routes here

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
