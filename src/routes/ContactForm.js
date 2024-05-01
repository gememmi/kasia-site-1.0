import food from "/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/food.png";
import React, { useRef, useState } from "react";

export default function ContactForm() {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);
  const [ result, setResult ] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);
    
    formData.append('access_key', 'c8ca7390-8c49-437b-b107-844b7ec1e930');
    
    const response = await fetch('https://api.web3forms.com/submit', {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    if(data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
    } else {
        console.log("Error", data);
        setResult(data.message);
    }
  };

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <>
    <div className="contact-form">
      <form onSubmit={ onSubmit }>
      <input type="hidden" name="access_key" value="c8ca7390-8c49-437b-b107-844b7ec1e930"></input>
        <p>First Name</p>
        <input type="text" name="first_name" required></input>
        <p>Last Name</p>
        <input type="text" name="last_name" required></input>
        <p>Phone Number</p>
        <input type="number" name="phone_number" required></input>
        <p>Email</p>
        <input type="email" name="email" required></input>
        <p>Event Date</p>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          ref={dateInputRef}
          required
        ></input>
        <p>Number of Guests</p>
        <input type="number" name="guests" required></input>
        <p>Anything Else You Would Like Me to Know</p>
        <textarea type="text" name="message" ></textarea>
        <input type="hidden" name="" value="https://web3forms.com/success"></input>
        <input id="submit-button" type="submit" value="Send"></input>
      </form>
      <span>{result}</span>
      <img className="contact-image" src={food} />
    </div>
    
    </>
  );
 
}
