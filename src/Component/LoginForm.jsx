import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dbData from "../../src/Server/db.json"

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and password are required.");
      return;
    }

    const user = dbData.user.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Login successful!", {
        style: { background: "green", color: "white" },
      });
      navigate("/table");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <>
     <h1>SIGN IN</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            placeholder="Enter User Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <br />
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter User Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="d-flex justify-content-center pt-4">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
