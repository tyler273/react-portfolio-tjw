import { useState } from 'react';

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
    <div className="container text-center">
      <h4>Fill in this contact form and I'll get back to you!</h4>
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleEmailInput}
          type="email"
          placeholder="email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleNameInput}
          type="text"
          placeholder="name"
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
    </div>
  );
}

export default Contact;
