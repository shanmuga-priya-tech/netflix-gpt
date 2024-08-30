import { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/cc3b7bcb-3f79-449e-a37c-26ffb20fce3c/IN-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7a193436-88c7-4f66-a8f0-e191d3b26d13_large.jpg"
          alt="netflix-banner"
        />
      </div>
      <form className="p-12 w-3/12 bg-black absolute m-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="p-2 font-bold text-3xl py-4">
          Sign {isSignIn ? "In" : "Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full  bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full  bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full bg-gray-700 "
        />
        <button className="p-4  my-6 w-full bg-red-700 rounded">
          Sign {isSignIn ? "In" : "Up"}
        </button>
        <p className="py-4">
          {isSignIn ? "New to Netflix ?" : "Already registered ?"}{" "}
          <span
            className="font-bold cursor-pointer underline"
            onClick={toggleSignInForm}
          >
            Sign {isSignIn ? "up" : "in"}
          </span>{" "}
          now
        </p>
      </form>
    </div>
  );
}

export default Login;
