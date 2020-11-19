
import axios from 'axios'
import './Contact.css'
import {useState} from 'react'
import Navbar from './Navbar'


       function Contact() {


           const {FullName , setFullName}= useState("");
           const {PhoneNumber , setPhoneNumber} = useState(0);
           const{Email , setEmail} = useState("");
           const{Message , setMessage} = useState("");
       


           const addMessage=()=>{
               axios.post("http://localhost:3000/contact-us" ,
                {Full_Name:FullName , Phone_Number:PhoneNumber , Email:Email  , Message:Message}).then((responce)=>{
                 console.log('sucessfully')
                })
                .catch((err)=>{
                    console.log('Err', err)
                })
           }
    return (
          
        <div> 
            <Navbar/>
           <div> <h1 className='header'> Contact Us </h1></div>
        

            <div className='contact-form'>
                <h3> Get in touch</h3>
                <div className='text'> 
                    <label> Full Name </label> <input type='text' placeholder='Enter your Full Name ' onChange={(event)=>{
                      setFullName(event.target.value)
                    }} />
                </div>
                <div className='text'> <label> Phone Number</label> <input type='number' placeholder='Enter your phone number' onChange={(event)=>{
                    setFullName(event.target.value)}}/> 
                </div>
           <div className='text'>
               <label>Email</label><input type='text' placeholder='Enter your email ' onChange={(event)=>{
               setEmail(event.target.value)
               }}/>
           </div>
           <div className='text'>
               <label>Message</label>  <textarea onChange={(event)=>{
                setMessage(event.target.value)
               }} />

           </div>
           <button onClick={addMessage}> SEND </button>
            </div>
            </div>
        
    )
}
export default  Contact;