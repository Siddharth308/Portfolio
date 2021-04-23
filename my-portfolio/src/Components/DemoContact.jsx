import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { Alert, Card, TextArea, TextField } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import "../App.css";
const DemoContact = () => {
  const [successMessage, setSuccessMessage] = React.useState("Success");

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [sub, setSub] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const serviceID = "siddharth_308";
  const templateID = "template_a104iza";
  const userID = "user_ZiINrBsMFdhQQlYNuEm0q";

  const onSubmit = (e) => {
    
    e.preventDefault();
    sendEmail(
      serviceID,
      templateID,
      {
        name: name,
        email: email,
        subject: sub,
        description: desc,
      },
      userID
    );
    setEmail("")
    setName("")
    setDesc("")
  };

  // console.log(window.screen.width)
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
 
      var wid = window.screen.width > 768 ? 300 : 280

  console.log(successMessage);
  return (
    <div>
      <div>
        <section class="contact section" id="contact">
          <h2 class="section-title">Contact</h2>

          {/* <Alert closable type="success">{successMessage}</Alert> */}
          <div class="contact__container bd-grid">
            <Card action="" class="contact__form">
              <TextField
                width={wid}
                height="60"
                type="text"
                placeholder="Name"
                
                className="contact__input"
                value={name}
                append
                onChange={(e) => setName(e.value)}
              >
                {" "}
              </TextField>
              <TextField
                width={wid}
                height="60"
                type="email"
                placeholder="Email"
                className="contact__input"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.value)}
              />
              <TextArea
                width={wid}
                height="160"
                cols="0"
                rows="10"
                className="contact__input"
                id="subject"
                type="text"
                placeholder="Subject"
                name="subject"
                value={desc}
                onChange={(e) => setDesc(e.value)}
              ></TextArea>
              <input
                type="button"
                value="Enter"
                class="contact__button button"
                onClick={onSubmit}
              />
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DemoContact;
