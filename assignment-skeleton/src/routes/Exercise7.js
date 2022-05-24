import { useState } from "react";

function Exercise7() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
  }
  return (
    <div>
      <div>
        <p>
          Build a form that accepts a first name and a last name. Add a button
          called "Greet Me" that when clicked, will alert "Hello, [first name]
          [last name]!". First name and last name should have the values from
          the corresponding inputs.
        </p>
        <div className="solution-container">
      <form className="form-alert" onSubmit={handleSubmit}>
      <div>
      <label>First Name  </label>
        <input
          type="text" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>  
      <div>
      <label>Last Name  </label>
        <input 
          type="text" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <input type="submit"/>
      </form>
        </div>
      </div>
    </div>
  );
}

export default Exercise7;
