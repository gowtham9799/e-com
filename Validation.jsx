import { useState, useEffect } from "react";


function Validation() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
  
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container pt-96 ">
      

      <form onSubmit={handleSubmit}>

        <div className="ui divider"></div>
        <div className="ui form">

          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>

          <p>{formErrors.username}</p>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>

          <p>{formErrors.email}</p>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>

          <p>{formErrors.password}</p>

          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Validation;

// import React from "react";
// import ReactDOM from "react-dom";
// import { Formik, Form, Field } from "formik";



// // Messages
// const required = "This field is required";
// const maxLength = "Your input exceed maximum length";

// // Error Component
// const errorMessage = error => {
//   return <div className="invalid-feedback">{error}</div>;
// };

// const validateUserName = value => {
//   let error;
//   if (!value) {
//     error = required;
//   } else if (value.length > 12) {
//     error = maxLength;
//   }
//   return error;
// };

// const validateName = value => {
//   let error;
//   if (!value) {
//     error = required;
//   } else if (value.length > 12) {
//     error = maxLength;
//   }
//   return error;
// };

// const validateEmail = value => {
//   let error;
//   if (!value) {
//     error = required;
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//     error = "Invalid email address";
//   }
//   return error;
// };

// const validateMobileNumber = value => {
//   let error;
//   if (value.length > 10) {
//     error = maxLength;
//   }
//   return error;
// };

// const validatePassword = value => {
//   let error;
//   if (!value) {
//     error = required;
//   }
//   return error;
// };

// const validateDateOfBirth = value => {
//   let error;
//   if (!value) {
//     error = required;
//   } else if (
//     !/(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i.test(
//       value
//     )
//   ) {
//     error = "Please use the following format MM/DD/YYYY";
//   }
//   return error;
// };

//  function Validation() {
//   return (
//     <Formik
//       initialValues={{
//         username: "",
//         name: "",
//         mobilenumber: "",
//         email: "",
//         password: "",
//         url: "",
//         genderOptions: "",
//         DateofBirth: "",
//         SubscribetoNewsletter: ""
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           console.log(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({ errors, touched, isValidating }) => (
//         <div className="container ml-40 mt-10">
//           <div className="col-sm-12">
//             <h3>Client Profile</h3>
//           </div>
//           <div className="col-sm-12">
//             <Form>
//               <div className="form-group">
//                 <Field
//                   className="form-control"
//                   type="text"
//                   placeholder="Username"
//                   name="username"
//                   validate={validateUserName}
//                 />
//                 {errors.username &&
//                   touched.username &&
//                   errorMessage(errors.username)}
//               </div>
//               <div className="form-group">
//                 <Field
//                   className="form-control"
//                   type="text"
//                   placeholder="Name"
//                   name="name"
//                   validate={validateName}
//                 />
//                 {errors.name && touched.name && errorMessage(errors.name)}
//               </div>
//               <div className="form-group">
//                 <Field
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   placeholder="Email"
//                   validate={validateEmail}
//                 />
//                 {errors.email && touched.email && errorMessage(errors.email)}
//               </div>
//               <div className="form-group">
//                 <Field
//                   className="form-control"
//                   type="tel"
//                   placeholder="Mobile number"
//                   name="mobilenumber"
//                   validate={validateMobileNumber}
//                 />
//                 {errors.mobilenumber &&
//                   touched.mobilenumber &&
//                   errorMessage(errors.mobilenumber)}
//               </div>
//               <div className="form-group">
//                 <Field
//                   className="form-control"
//                   type="url"
//                   placeholder="Website"
//                   name="Website"
//                 />
//               </div>
//               <div className="form-group">
//                 <Field
//                   className="form-control"
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   validate={validatePassword}
//                 />
//                 {errors.password &&
//                   touched.password &&
//                   errorMessage(errors.password)}
//               </div>
//               <div className="form-group">
//                 <label>Gender</label>
//                 <br />
//                 <div className="form-check form-check-inline">
//                   <Field
//                     className="form-check-input"
//                     type="radio"
//                     name="genderOptions"
//                     value="Male"
//                     id="inlineRadio1"
//                   />
//                   <label className="form-check-label" htmlFor="inlineRadio1">
//                     Male
//                   </label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                   <Field
//                     className="form-check-input"
//                     type="radio"
//                     name="genderOptions"
//                     value="Female"
//                     id="inlineRadio2"
//                   />
//                   <label className="form-check-label" htmlFor="inlineRadio2">
//                     Female
//                   </label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                   <Field
//                     className="form-check-input"
//                     type="radio"
//                     name="genderOptions"
//                     value=" Non-binary"
//                     id="inlineRadio3"
//                   />
//                   <label className="form-check-label" htmlFor="inlineRadio3">
//                     Non-binary
//                   </label>
//                 </div>
//               </div>
//               <div className="form-group">
//                 <Field
//                   className="form-control"
//                   type="datetime"
//                   placeholder="Date of Birth"
//                   name="DateofBirth"
//                   validate={validateDateOfBirth}
//                 />
//                 {errors.DateofBirth &&
//                   touched.DateofBirth &&
//                   errorMessage(errors.DateofBirth)}
//               </div>
//               <div className="form-group">
//                 <Field
//                   component="textarea"
//                   className="form-control"
//                   name="About"
//                 />
//               </div>
//               <div className="form-group">
//                 <Field
//                   type="checkbox"
//                   placeholder="Subscribe to Newsletter"
//                   name="SubscribetoNewsletter"
//                   id="customCheck1"
//                 />
//                 <label htmlFor="customCheck1"> Subscribe to Newsletter</label>
//               </div>
//               <div className="form-group">
//                 <button className="btn btn-primary" type="submit">
//                   Submit
//                 </button>
//               </div>
//             </Form>
//           </div>
//         </div>
//       )}
//     </Formik>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Validation />, rootElement);

// export default Validation