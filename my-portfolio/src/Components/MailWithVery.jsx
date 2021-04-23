import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { Card, TextArea, TextField } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "../App.css";
const DemoContact = () => {
  const [successMessage, setSuccessMessage] = React.useState("");

  const { register, handleSubmit, errors } = useForm();

  const serviceID = "siddharth_308";
  const templateID = "template_a104iza";
  const userID = "user_ZiINrBsMFdhQQlYNuEm0q";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form Sent Sucessfully I will contact you as soon as possible"
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  console.log(successMessage);
  return (
    <div>
      <div>
        <section class="contact section" id="contact">
          <h2 class="section-title">Contact</h2>
          <span className="success-message">{successMessage}</span>

          <div class="contact__container bd-grid">
            <Card action="" class="contact__form">
              <TextField
                width="300"
                height="60"
                type="text"
                placeholder="Name"
                className="contact__input"
                id="name"
                name="name"
                ref={register({
                  required: "Please enter your name",
                  maxLength: {
                    value: 20,
                    message:
                      "Please enter a name with fewer than 20 characters",
                  },
                })}
              >
                <span className="error-message">
                  {errors.name && errors.name.message}
                </span>{" "}
              </TextField>
              <TextField
                width="300"
                height="60"
                type="email"
                placeholder="Email"
                className="contact__input"
                id="email"
                name="email"
                ref={register({
                  required: "Please provide you email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid Email",
                  },
                })}
              />
              <TextArea
                width="300"
                height="160"
                cols="0"
                rows="10"
                className="contact__input"
                id="subject"
                type="text"
                placeholder="Subject"
                name="subject"
                ref={register({
                  required: "OOPS, you forget to add the subject.",
                })}
              ></TextArea>
              <input
                type="button"
                value="Enter"
                class="contact__button button"
                onClick={handleSubmit(onSubmit)}
              />
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DemoContact;
