import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';


const Contract = () => {
    const form = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xjrjpno', 'template_hlnr088', form.current, 'user_WPjxmoq2PfN3FFGgjGJt3')
            .then((result) => {
                console.log(result);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
        /*   const onSubmit = data => {
              emailjs.sendForm('service_xjrjpno', 'template_hlnr088', data, 'user_WPjxmoq2PfN3FFGgjGJt3')
                  .then((result) => {
                      console.log(result.text);
                  })
                  .catch(error => {
                      console.log(error.text);
                  });*/
    };
    return (
        <div className='m-0 row'>
            <h1>Contract Me</h1>

            <div className="col-md-6 text-start ps-5">
                <h3>Get in touch</h3>

                <p> <i style={{ color: '#eec957' }} class="fas fa-user"></i> Name: Nurul Islam</p>
                <p><i style={{ color: '#eec957' }} class="fas fa-map-marker-alt"></i> Address: halishahar,pahartali,chattogram</p>
                <p> <i style={{ color: '#eec957' }} class="fas fa-envelope"></i> E-mail: nurul.islam02310@gmail.com</p>
            </div>
            <div className="col-md-6 contract-form">
                <h3>Message Me</h3>
                <form ref={form} onSubmit={sendEmail}>

                    <input placeholder='name' type="text" name="user_name" />

                    <input placeholder='email' type="email" name="user_email" />

                    <textarea placeholder='your message' name="message" />
                    <input type="submit" value="Send" />
                </form>
                {/*  <form onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder='name' {...register("name", { required: true })} /><br />
                    {errors.name && <span className='text-danger'>This field is required</span>} <br />

                    <input placeholder='email'  {...register("email", { required: true })} /><br />
                    {errors.email && <span className='text-danger'>This field is required</span>} <br />
                    <input placeholder='subject'  {...register("subject", { required: true })} /> <br />
                    {errors.subject && <span className='text-danger'>This field is required</span>} <br />
                    <textarea placeholder='message'  {...register("message", { required: true })} /> <br />

                    {errors.message && <span className='text-danger'>This field is required</span>} <br />

                    <button className='text-start' type="submit">Send Message</button>
                </form> */}
            </div>
        </div>
    );
};

export default Contract;