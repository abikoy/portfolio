import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css'

import ig from '../assetes/ig1.jpg'


const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
      user_name: '',
      user_email: '',
      message: ''
  });

    // const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  //  const [Name, setName]=useState('');
  //  const [Email, setEmail]=useState('');
  //  const [Message, setMessage]=useState('');

  
    const sendEmail = async (e) => {
        e.preventDefault();

        
  
      emailjs
        .sendForm('service_p64woii',
         'template_mnh5rig', 
         form.current, {
          publicKey: '_gIxcKPI8GhwHXxCc',
        })
        .then(
          (result) => {
           
            console.log('SUCCESS!');
            console.log(result.text)
            setFormData({ user_name: '', user_email: '', message: '' }); // Reset form fields

            // setShowSuccessMessage(true);
        //     setName('');
        // setEmail('');
        // setMessage('');

            toast.success('Email sent successfully!', {
                position: 'top-center'
              });
              
           

          },
          (error) => {
            console.log('FAILED...', error.text);
            toast.error('Failed to send email!', { position: 'top-center' });

          },
        );
    };




    return (  
        <div className="Contact">
            <section id="Contact">
            <h1 className='contactme'> CONTACT ME</h1>
           
            <label htmlFor="input" className="icon-label">
    &#x1F4E7; hailekinfu00@gmail.com <img src={ig} /> abkoy19
</label>


       {/* <label htmlFor="name"></label> */}
       {/* {showSuccessMessage && <p>Message sent successfully!</p>} */}
        {/* Add this to render the toast notifications */}

    <form ref={form} onSubmit={sendEmail}>
    <p>Get in touch with me 👇👇👇</p>
{/* <span role="img" aria-label="contact">📞<br />Contact Me</span> */}


      <label>Name</label>
      <input type="text" name="user_name" value={formData.user_name} onChange={(e) => setFormData({ ...formData, user_name: e.target.value })} required/>
      <label>Email</label>
      <input type="email" name="user_email" value={formData.user_email} onChange={(e) => setFormData({ ...formData, user_email: e.target.value })} required/>
      <label>Message</label>
      <textarea name="message"   value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}  required/>
      <input type="submit" value="Send" />
    </form>
   <ToastContainer /> 
           </section>
           
        </div>
    );
}
 
export default Contact;