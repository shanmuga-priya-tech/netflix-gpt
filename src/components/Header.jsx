import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-32 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />

      {user && (
        <div className="flex p-2 items-center">
          <img
            className="rounded-md w-8 h-8"
            src={user.photoURL}
            alt="signout img"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
