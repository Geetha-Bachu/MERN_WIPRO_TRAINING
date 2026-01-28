import React, { useRef, useState } from "react";

function RegistrationForm() {

  // UNCONTROLLED INPUTS (useRef) creates refernce objects
     
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

    //CONTROLLED STATE (useState) for errors and submission status
     
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Read values ONLY on submit (UNCONTROLLED)
    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;

    let newErrors = {};//store all validation errors

    // First Name validation
    if (!firstName) {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
      newErrors.firstName = "Only alphabets allowed";
    }

    // Last Name validation
    if (!lastName) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z]+$/.test(lastName)) {
      newErrors.lastName = "Only alphabets allowed";
    }

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password)
    ) {
      newErrors.password =
        "Min 8 chars, uppercase, lowercase, number & special char";
    }

    // Update CONTROLLED state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true);
      alert("Registration Successful!");
    }
  };


//Error boxes to highlight invalid inputs

  const errorStyle = {
    border: "2px solid red"
  };

  return (
    <div>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>

        {/* 👇 CHANGE INPUTS LIKE THIS */}

        <input
          type="text"
          placeholder="First Name"
          ref={firstNameRef}
          style={errors.firstName ? errorStyle : {}}
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName}</p>
        )}

        <input
          type="text"
          placeholder="Last Name"
          ref={lastNameRef}
          style={errors.lastName ? errorStyle : {}}
        />
        {errors.lastName && (
          <p style={{ color: "red" }}>{errors.lastName}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          style={errors.email ? errorStyle : {}}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          style={errors.password ? errorStyle : {}}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password}</p>
        )}

        <button type="submit">Register</button>
      </form>

      {isSubmitted && (
        <p style={{ color: "green" }}>
          Form submitted successfully
        </p>
      )}
    </div>
  );







  return (
    <div>
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" ref={firstNameRef} />
        {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}

        <input type="text" placeholder="Last Name" ref={lastNameRef} />
        {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}

        <input type="email" placeholder="Email" ref={emailRef} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

        <input type="password" placeholder="Password" ref={passwordRef} />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

        <button type="submit">Register</button>
      </form>

      {isSubmitted && (
        <p style={{ color: "green" }}>
         Form submitted successfully
        </p>
      )}
    </div>
  );
}

export default RegistrationForm;
