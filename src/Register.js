import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useEffect } from "react";
import { RegisterUserInfo } from "./redux/actions/Register_actions";
import { useNavigate } from "react-router-dom";
const Register = (props) => {
  const [employeeName, setEmployeeName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    let data = {
      employeeName: employeeName,
      password: password,
      email: email,
      employeeId: employeeId,
      phone: phone,
      role: role,
    };
    navigate("/");

    //props.RegisterUserInfo(data);
  };

  useEffect(() => {
    console.log("registration", props.details);
  }, [props]);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3 form-control" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter EmployeeId"
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Role"
            onChange={(e) => setRole(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  details: state.registraton,
});

const mapDispatchToProps = {
  // getUserInfo,
  RegisterUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
