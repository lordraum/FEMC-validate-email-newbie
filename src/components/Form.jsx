import React from "react";
import { useState } from "react";

const Form = ({ phText, btnText }) => {
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex =
      /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !validateEmail(value) ? setShowError(true) : e.target.submit();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__container">
        <input
          type="text"
          placeholder={phText}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          className={`form__input ${showError && "form__input--error"}`}
        />
        <button className="form__button">{btnText}</button>
      </div>
      {showError && (
        <p className="form__error">Please provide a valid email adress</p>
      )}
    </form>
  );
};

export default Form;
