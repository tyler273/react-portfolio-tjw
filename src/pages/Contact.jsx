import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/Contact.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;
    // console.log(target)
    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleNameInput = (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!name) {
      setErrorMessage('Enter a name');

      return;
    } else {
      if (!message) {
        setErrorMessage('Enter a message');

        return;
      } else {
        if (!email) {
          setErrorMessage('Enter an email address');

          return;
        } else {
          if (!validateEmail(email)) {
            setErrorMessage('Enter a valid email address');

            return;
          } 
        }
      }
    }
  }

  const handleEmailInput = (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!email) {
      setErrorMessage('Enter an email address');

      return;
    } else {
      if (!validateEmail(email)) {
        setErrorMessage('Enter a valid email address');

        return;
      } else {
        if (!name) {
          setErrorMessage('Enter a name');

          return;
        } else {
          if (!message) {
            setErrorMessage('Enter a message');

            return;
          } 
        }
      }
    }
  }

  const handleMessageInput = (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!message) {
      setErrorMessage('Enter a message');

      return;
    } else {
      if (!name) {
        setErrorMessage('Enter a name');

        return;
      } else {
        if (!email) {
          setErrorMessage('Enter an email address');

          return;
        } else {
          if (!validateEmail(email)) {
            setErrorMessage('Enter a valid email address');

            return;
          } 
        }
      }
    }
  }

  return (
    <div className="contact-wrapper">
      <section className="contact-container">
        <h4 className="form-text">Fill in this contact form and I will get back to you as soon as possible!</h4>
        <Form className="form" action="https://formspree.io/f/xbjvkavk" method="POST">
          <Form.Group className="col-6 mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              value={name}
              onChange={handleInputChange}
              onBlur={handleNameInput}
              type="text"
              placeholder="Enter your name here"
              name="name"
            />
          </Form.Group>

          <Form.Group className="col-6 mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              value={email}
              onChange={handleInputChange}
              onBlur={handleEmailInput}
              type="email"
              placeholder="Enter your email here"
              name="email"
            />
          </Form.Group>

          <Form.Group className="col-6 mb-3" controlId="formControlTextarea">
            <Form.Label>Message</Form.Label>
            <Form.Control
              value={message}
              as="textarea"
              placeholder="Enter message"
              rows="4"
              onChange={handleInputChange}
              onBlur={handleMessageInput}
              name="message"
            />
            <Form.Text className="text-muted">{errorMessage}</Form.Text>
          </Form.Group>
            <Button className="button" variant="primary" type="submit" style={{ backgroundColor: "#668cff", color: "white", borderColor: "#668cff" }}>
              Submit
            </Button>
        </Form>
      </section>
        <section className="contact-info">
          <ul>
            <li>Email: tylerwoods468@gmail.com</li>
            <li>Phone: 267-886-6651</li>
          </ul>
        </section>
    </div>  
  );
}

export default Contact;

//NOTE - class code
{/* <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleNameInput}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleEmailInput}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleMessageInput}
          type="message"
          placeholder="message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <h5>Fill in email here!</h5>
    </div> */}