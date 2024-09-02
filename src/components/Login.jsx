import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const msg = validateData(
      isSignIn ? null : username?.current?.value, // Pass null for username when signing in
      email?.current?.value,
      password?.current?.value,
      isSignIn // Pass isSignIn flag to validation
    );
    setErrorMsg(msg);

    if (msg) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value,
            photoURL:
              "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg?20200418092106",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  name: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg("User already Exists! Try Signing In");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg("Incorrect Email Id / password");
        });
    }
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 w-3/12 bg-black absolute m-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="p-2 font-bold text-3xl py-4">
          Sign {isSignIn ? "In" : "Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={username}
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full  bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full  bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full bg-gray-700 "
        />

        <p className="text-red-500 font-semibold text-lg">{errorMsg}</p>

        <button
          className="p-4  my-6 w-full bg-red-700 rounded"
          onClick={handleButtonClick}
        >
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
