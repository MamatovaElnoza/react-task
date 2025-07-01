import './contact.css';
import React, { useState } from 'react';

const Contact = () => {
<<<<<<< HEAD
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
=======
  return (
    <div></div>
  )
}
>>>>>>> 703ea98bf27e2c61713b8c813bf1a92971d87566

  const [status, setStatus] = useState('');

  const telegramTokenBot = "8033535318:AAGEyxYQsskH8qt6864DEdTe2DEs_ZgwIT4";
  const chatId = '6221497201';

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,[name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
    setStatus('Please fill out the form');
    setTimeout(() => setStatus(''), 2500);
    return;
  }

    const message = `
    Yangi xabar:
    Ism: ${formData.name}
    Email: ${formData.email}
    Telefon: ${formData.phone}
    Xabar: ${formData.message}
    `

    try {
      await fetch(`https://api.telegram.org/bot${telegramTokenBot}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      })
      setStatus('thanks for contacting with us');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('Something went wrong');
    }

    setTimeout(() => setStatus(''), 2500);
  };

  return (
    <div id='Contact'>
      <div className="container my-5">
        <div className="row">
          <div className="map col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7472.311996221953!2d67.82140942889609!3d40.139787815455385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1751272277964!5m2!1suz!2s"
              width="100%"
              height="450"
              title="Joylashuv"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="form col-md-6">
            <h1>Contact us</h1>
            <form className="contactform " onSubmit={handleSubmit}>
              <label className='col-12'>Name
                <input type="text" name="name" className='col-12' placeholder='Enter Name' value={formData.name} onChange={handleChange} />
              </label>
              <label className='col-12'>Email
                <input type="email" name="email" className='col-12' placeholder='Enter Email' value={formData.email} onChange={handleChange}/>
              </label>
              <label className='col-12'>Phone
                <input type="tel" name="phone" className='col-12' placeholder='Enter Phone' value={formData.phone} onChange={handleChange}/>
              </label>
              <label className='col-12'>Message
                <textarea name="message" className='textara col-12' placeholder='message' value={formData.message} onChange={handleChange} ></textarea>
              </label>
              <button type="submit" className='sendmessage mt-3'>Contact Us</button>
              <div className="modal__dialog">{status}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
