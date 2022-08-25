const express = require('express');
const router =  express.Router();

router.get('/',(req,res)=>{
    const obj ={
        name:'rhrh',
        number:54
    }
    res.json(obj)
})
module.exports = router;