const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/Signup')
const Post = require('./models/Posts')
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
 

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/main-db');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// Middleware
const transporter = nodemailer.createTransport({
  // Specify your email service and credentials
  service: 'Gmail',
  auth: {
    user: 'arihantjain72000@gmail.com',
    pass: 'Arihant@9873'
  }
});
const sendVerifyEmail = async (email, namefield, userId) => {
  try {
   const transporter =  nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      requireTLS: true,
      auth:{
        user: 'arihantjain72000@gmail.com',
        pass: 'gtbhzcvsogpjedsu'
      }
    })
    const mailOptions = {
      from: 'arihantjain72000@gmail.com',
      to: email,
      subject: 'for verification mail',
      html:   `<p>Dear user,</p><p>Please verify your email by clicking on the following link:<a href="http://localhost:3000/verify?id=${userId}" >Verify Email</a></p>`
    }
    transporter.sendMail(mailOptions,function(error ,info){
      if(error){
        console.log(error);
      }else{
        console.log("email has been sent", info.response);
      }
    })
  } catch (error) {
    console.log(error);
  } 
 }  
 
 
 const normalCititzenProfile = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  cityState: String,
  address: String,
  civicProblemsOfInterest:  [String] 
 }
 )
 const Civicpost = mongoose.model('Civicpost', normalCititzenProfile);
app.use(express.json());
app.get('/verify', async (req, res) => {
  const userId = req.query.id;
  const user = await User.findByIdAndUpdate(userId, { isVerified: true });
  if(user){
    res.send('Email verification successful');
  }else{
    res.status(404).json("user not find");
  }
  // Here you can perform the verification logic using the userId
  // For example, you can mark the user as verified in your database
  
  // Send a response indicating that the verification was successful
  
});
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
    const { email, password ,namefield, option} = req.body;
    try {
      const newUser = await User.create({ email, password ,namefield ,option});
      newUser.save();    
      if(newUser){
        sendVerifyEmail(newUser.email,newUser.namefield,newUser._id);    
      }
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
