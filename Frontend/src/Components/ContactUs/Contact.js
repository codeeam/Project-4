
import {useState} from 'react';
import axios from 'axios'
import './Contact.css';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
import Navbar from './Navbar/Navbar'


const addNewMessage=()=>{
    axios.post("http://localhost:5000/contact-us").then((responce)=>{
     console.log('Responce', responce)
    })
    .catch((err)=>{
     console.log('ERR', err)
    })
}

           function Contact() {
               const [FullName,setFullName ]=useState("")
               const [PhoneNumber,setPhoneNumber]=useState(0)
               const [Email,setEmail ]=useState("")
               const [Message,setMessage ]=useState("")

        const addMessage =()=>{
            axios.post("http://localhost:5000/contact-us" , {Full_Name:FullName , Phone_Number:PhoneNumber,Email:Email,Message:Message})
            .then((responce)=>{
                console.log('sucessfully')
            })
            .catch((err)=>{
                console.log('ERR' , err)
            })   
        }
        
               
    return (
        <div>
        <Navbar/>
           
        <div> <h1 className='header'> Contact Us </h1> </div>
        <div> <h2> Codeeam Comunity </h2>
        <p> Welcome in our website Languges comunity , We are very happy to get touch with us</p>
        </div>
        <div> 
        <p> <AddIcCallIcon className='phone' /> Phone Mobile : +962-786025324   </p>
                    <p> <EmailIcon className='email'/> Email : Codeeam@Gmail.com </p>
        </div>
        
      <div className='contact-form'>
                <h3> get in touch  </h3>
                    <div className='text'> <label>Full Name </label>
                     <input  type='text' placeholder='Enter your Full name'  onChange={(event)=>{
                     setFullName(event.target.value)
                     }} /> </div>

                    <div className='text'><label>Phone Number</label> 
                    <input type='number' placeholder='Enter your Phone number'  onChange={(event)=>{
                     setPhoneNumber(event.target.value) }}/> </div>

                    <div className='text'> <label>Email </label> 
                    <input type='text' placeholder='Enter your email'  onChange={(event)=>{
                     setEmail(event.target.value)}} /> </div>

                    <div className='text'> <label>Message </label> 
                    <textarea  onChange={(event)=>{
                     setMessage(event.target.value)}}/> </div>
                
                <button className='btn' onClick={addMessage} > Send </button>  
        </div>

        </div>   
    )
}

export default Contact;
