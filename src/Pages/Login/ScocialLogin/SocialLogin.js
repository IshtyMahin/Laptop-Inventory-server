import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "2px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button onClick={() => signInWithGoogle()} className="btn btn-info w-50 d-block mx-auto my-3">
          <FcGoogle className="mx-2"></FcGoogle>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
