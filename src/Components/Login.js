import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formState, setFormState] = useState("success");
  const navigate = useNavigate();
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: async (values) => {
      console.log(values);

      const data = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (data.status == 401) {
        console.log("Error");
        setFormState("error");
      } else {
        const result = await data.json();
        console.log("SUCCESS", result);
        localStorage.setItem("token", result.token);
        navigate("/zoom-home");
      }
    },
  });
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <TextField
          label="Email"
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
        <Button color={formState} type="submit" variant="contained">
          {formState == "error" ? "Retry" : "Login"}
        </Button>
      </form>
    </div>
  );
}

export default Login;
