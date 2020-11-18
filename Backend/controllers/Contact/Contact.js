const mysql = require('./../../database')


const getAllUser=(req , res)=>{
    console.log('User Usrs')
    res.json('i will send the message wait!')
}


const addMessage=(req , res)=>{
const emp = req.body
console.log('REQ.BODY' , req.body)
const sql = `INSERT INTO Contact (Full_Name , Phone_Number , Email , Message) VALUES (? , ? , ? , ?)`;
mysql.query(sql,[emp.Full_Name , emp.Phone_Number, emp.Email , emp.Message] , (err , result , field)=>{
   if(err){
       console.log('Err' , err)
   }
   res.json('Thanks for contact us , will contact you as soon as possable')
})
}

module.exports={
    getAllUser,
    addMessage
}




