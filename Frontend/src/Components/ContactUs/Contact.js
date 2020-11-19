import axios from 'axios'
import {useState} from 'react'
import './Contact.css'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
import Navbar from './Navbar'

       function Contact() {
           const [FullName , setFullName]= useState("");
           const [PhoneNumber , setPhoneNumber] = useState(0);
           const [Email , setEmail] = useState("");
           const [Message , setMessage] = useState("");
       


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
           <div className='field'> <h1 className='header'> Contact Us </h1></div>
             <div classNam='codeeam'>
             <div >
                 <h4> Codeeam community team welcomes you in our website</h4>
                 <p> and we wish you a pleasant time </p>
                 <p> We are happy to Contact Us.</p>
             </div>
             </div>
             
             <div className='information'>  
                 <h3>  Contact Information </h3>
                 <p > <AddIcCallIcon/> Phone Number : +962-786025324 </p>
                 <p> <EmailIcon/> Email : Codeeam@gmail.com</p>
             </div>

        <div>
            <div className='contact-form'>
                <h3> Get in touch</h3>
                <div className='text'>
                    <label> Full Name </label> <input type='text' placeholder='Enter your Full Name ' onChange={(event) => {
                        setFullName(event.target.value)
                    }} />
                </div>
                <div className='text'> <label> Phone Number</label> <input type='number' placeholder='Enter your phone number' onChange={(event) => {
                    setPhoneNumber(event.target.value)
                }} />
                
                <div className='text'>
                    <label>Email</label><input type='text' placeholder='Enter your email ' onChange={(event) => {
                        setEmail(event.target.value)
                    }} />
                </div>
                <div className='text'>
                    <label>Message</label>  <textarea onChange={(event) => {
                        setMessage(event.target.value)
                    }} />
                </div>
                <button onClick={addMessage}> SEND </button>
            </div>
        </div>
        </div>
        </div>
    )
  }

export default Contact;