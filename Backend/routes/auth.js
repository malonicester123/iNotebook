const express = require('express');
const User = require('../models/User');
const router = express.Router();


router.get('/',async(req,res)=>{
    console.log(req.body)
    const user = User(req.body)
  await  user.save();
    res.send(req.body)
     res.json();
})

module.exports = router

