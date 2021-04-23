import React, { useState } from 'react';
import emailjs from "emailjs-com";
import {useForm} from "react-hook-form"

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const { register, handleSubmit, errors } = useForm();

    const serviceID = "sidhant2709";
    const templateID = "sidhant_2709";
    const userID = "user_hBrt9lWtEmHAkOP5XbgCr";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description:data.description
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form Sent Sucessfully I will contact you as soon as possible")
            })
            .catch(err=>console.error(`Something went wrong ${err}`))
    }

    console.log(successMessage);

    return (
        <div id="contacts" className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container contact-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col col-mf-6 col-xs-12">
                            <div className="text-center">
                                <input type="text" id="name" className="form-control" placeholder="Name" name="name"
                                    ref={
                                    register({
                                    required: "Please enter your name",
                                    maxLength: {
                                        value: 20,
                                        message: "Please enter a name with fewer than 20 characters"
                                    }
                                    })
                                }/>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            <div className="text-center">
                                <input id="phone" type="text" className="form-control" placeholder="Phone Number"
                                    name="phone"
                                    ref={
                                        register({
                                            required:"Please add your Phone Number"
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            <div className="text-center">
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    ref={
                                        register({
                                        required: "Please provide you email",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid Email"
                                        }
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            <div className="text-center">
                                <input
                                    id="subject"
                                    type="text"
                                    className="form-control"
                                    placeholder="Subject"
                                    name="subject"
                                    ref={
                                        register({
                                        required: "OOPS, you forget to add the subject.",
                                        })
                                    }
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                                <textarea
                                    type="text"
                                    id="description"
                                    className="form-control"
                                    placeholder="Description"
                                    name="description"
                                    ref={
                                        register({
                                        required: "Please describe shortly your project needs...",
                                        })
                                    }
                                ></textarea>
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
    )
}

export default Contact
