import React from 'react'
import { Card, TextArea, TextField } from 'ui-neumorphism'
import "ui-neumorphism/dist/index.css";
import "../App.css";
const ContactPage = () => {
    
    return (
        <div>
            <section class="contact section" id="contact">
            <h2 class="section-title">Contact</h2>

            <div class="contact__container bd-grid">
              <Card action="" class="contact__form">
                <TextField
                  width="300"
                  height="60"
                  type="text"
                  placeholder="Name"
                  className="contact__input"
                  
                >
                  {" "}
                </TextField>
                <TextField
                  width="300"
                  height="60"
                  type="email"
                  placeholder="Email"
                  className="contact__input"
                />
                <TextArea
                  width="300"
                  height="160"
                  name=""
                  id=""
                  cols="0"
                  rows="10"
                  className="contact__input"
                ></TextArea>
                <input
                  type="button"
                  value="Enter"
                  class="contact__button button"
                />
              </Card>
            </div>
          </section> 
        </div>
    )
}

export default ContactPage
