import { sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../ScocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
  console.log(error);
  if(user){
      navigate(from,{replace: true});
      
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    signInWithEmailAndPassword(email,password)
    
  };
  
  const handlePasswordReset = () =>{
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth,email)
    .then(()=>{
      console.log('email sent')
    })
 }
  
 const verifyEmail = () => {
  sendEmailVerification(auth.currentUser)
  .then(()=>{
    console.log('Email verification sent')
  })
}
 if(user){
  verifyEmail();
 }

  const navigateRegister = (event) => {
    navigate('/register')
  };

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={handlePasswordReset}  variant="link">Forget password? </Button>
        <p className="text-danger">{error?.message}</p>
        <Button  variant="primary" type="submit">
          Login
        </Button>
      </Form>
      
      <p>
        New to AmaderSchool ? 
        <Link to='/register' className="text-danger pe-auto text-decoration-none" onClick={navigateRegister}>
           Please Register
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;