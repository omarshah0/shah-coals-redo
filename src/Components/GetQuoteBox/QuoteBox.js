import React from "react";
import "./QuoteBox.css";

function QuoteBox(props) {
  const initialFormData = Object.freeze({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    text_area: "",
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // ... submit to API or something
  };

  return (
    <div className="quote-box">
      <div className="close-btn" onClick={props.closeQuoteBox}></div>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="phone_number"
        placeholder="Phone Number"
        onChange={handleChange}
      ></input>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      ></input>
      <textarea name="text_area" onChange={handleChange}></textarea>
      <input type="submit" value="Send" onClick={handleSubmit} />
    </div>
  );
}

export default QuoteBox;
