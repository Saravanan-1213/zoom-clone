import { Button, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";

export function SignUp() {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: { firstname: "", lastname: "", email: "", password: "" },

    onSubmit: async (values) => {
      console.log(values);

      const data = await fetch("http://localhost:4000/user/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await data.json();
      console.log("SUCCESS", result);
    },
  });

  return (
    <div>
      <h1>Welcome to Zoom-Clone</h1>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <TextField
          label="Firstname"
          variant="outlined"
          onChange={handleChange}
          value={values.firstname}
          name="firstname"
        />
        <TextField
          label="Lastname"
          variant="outlined"
          onChange={handleChange}
          value={values.lastname}
          name="lastname"
        />
        <TextField
          label="Email Id"
          variant="outlined"
          onChange={handleChange}
          value={values.email}
          name="email"
        />
        <TextField
          label="Password"
          variant="outlined"
          onChange={handleChange}
          value={values.password}
          name="password"
        />
        <Button type="submit" variant="contained">
          SignUp
        </Button>
        <h5 className="space-tag-1">
          Already Signup Click Here
          <a href="Login">Login</a>
          Forget Password
          <a href="forgetpassword">Click Here</a>
        </h5>
        <h5 className="space-tag-2"></h5>
      </form>
    </div>
  );
}

export default SignUp;
