export const validateData = (username, email, password, isSignIn) => {
  //test() is a method given by regex
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // Only check the username if it's a sign-up form (isSignIn is false)
  if (!isSignIn && username.length <= 3) {
    return "UserName must be at least 3 characters long";
  }
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid)
    return "Password must be 8 characters long which include [A-Z,a-z,@#*-,0-9]";

  return null;
};
