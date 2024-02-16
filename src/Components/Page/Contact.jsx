import React from 'react';
import contact from '../../Assets/Image/Contact Us Image.png';
import style from '../Style/contact.module.css';
import {IoAddOutline} from 'react-icons/io5';

const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        {/* <img src={contact} alt="" /> */}
        <div className={style.textOverlay}>
          <h1>Contact Us </h1>
          <p>Have a question or need assistance? Reach out to us, and we will be glad to help!</p>
        </div>
      </div>
      <div className={style.formContainer}>
        <div className={style.textContainer}>
          <h1>Get In Touch</h1>
          <p>Let's connect! Whether you have feedback, inquiries, or just want to say hello, don't hesitate to get in touch with us. We're eager to hear from you.</p>
        </div>
        <form>
          <div className={style.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="8"></textarea>
          </div>
          <button type="submit"className={style.submit}>Send Message</button>
        </form>
      </div>
      <section>
        <div className={style.textContainer2}>
         <h1>Frequently Asked Questions</h1>
         <p>Our FAQs provide concise answers to help streamline your experience and address any uncertainties you may have.</p>
                </div>
                <div className={style.questionContainer}>
                  <div className={style.question}>
                    <div>
                    <p>How Can I be a member of techstylers</p>
                    <IoAddOutline className={style.plusSign}/>
                    </div>
                 <hr />
                  </div>
                  <div className={style.question}>
                  <div>
                    <p>How Can I be a member of techstylers</p>
                    <IoAddOutline className={style.plusSign}/>
                    </div>
                    <hr />
                  </div>
                  <div className={style.question}>
                  <div>
                    <p>How Can I be a member of techstylers</p>
                    <IoAddOutline className={style.plusSign}/>
                    </div>
                    <hr />
                  </div>
                  <div className={style.question}>
                  <div>
                    <p>How Can I be a member of techstylers</p>
                    <IoAddOutline className={style.plusSign}/>
                    </div>
                    <hr />
                  </div>
                  <div className={style.question}>
                  <div>
                    <p>How Can I be a member of techstylers</p>
                    <IoAddOutline className={style.plusSign}/>
                    </div>
                    <hr />
                  </div>
                  <div className={style.question}>
                  <div>
                    <p>How Can I be a member of techstylers</p>
                    <IoAddOutline className={style.plusSign}/>
                    </div>
                  </div>
                </div>
      </section>
    </div>
  );
};

export default Contact;
