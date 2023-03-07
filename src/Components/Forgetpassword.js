import React from "react";
import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";

function ForgetPassword() {
  const { handleChange, values } = useFormik({
    initialValues: { email: "", enterOTP: "" },
  });
  return (
    <div>
      <h5>Forget Password</h5>
      <form className="forgert-password">
        <TextField
          label="Email"
          variant="outlined"
          onChange={handleChange}
          value={values.email}
          name="email"
        />
        <TextField
          label="OTP"
          variant="outlined"
          onChange={handleChange}
          value={values.enterOTP}
          name="enterOTP"
        />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
    </div>
  );
}

export default ForgetPassword;
