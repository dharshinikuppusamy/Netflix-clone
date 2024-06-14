import React from "react";
import Form from "../../../components/form/Form";
import Navbar from "../../../components/navbar/Navbar";

const SignUp = () => {
  return (
    <div className="auth-page">
      <Navbar />
      <Form isSignUp />
    </div>
  );
};
export default SignUp;
