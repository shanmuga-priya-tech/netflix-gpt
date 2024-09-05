import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/store/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchBar } from "../utils/store/gptSlice";
import lang from "../utils/languageConstants";
import { SUPPPORTED_LANG } from "../utils/languageConstants";
import { updateLanguage } from "../utils/store/configSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const selectedLang = useSelector((store) => store.config.lang);
  const showGptSearch = useSelector((store) => store.GPT.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //navigate to login page done at a central place inside useeffect below
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  //onAuthStateChanged api is used to add event listener to monitor the state change of authentication.
  //whenever the state is changed we update the store with the appropriate data.
  //onAuthStateChange returns a unsubscribe fn which is used to cleanup the attached event listener when the component unmounts.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe whenver the componenet unmount
    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    //toggle GPTsearch component
    dispatch(toggleGptSearchBar());
  };

  const handleLangOption = (e) => {
    dispatch(updateLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-20 py-2 bg-gradient-to-b from-black  z-10 flex  flex-col justify-between md:flex-row">
      <img className="w-48 mx-auto md:mx-0" src={LOGO} alt="netflix-logo" />

      {user && (
        <div className="flex p-2 items-center">
          <select
            className="p-2 bg-gray-900 text-white m-2"
            onChange={handleLangOption}
          >
            {SUPPPORTED_LANG.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleGPTSearch}
            className="py-2 px-4 m-2 bg-red-600  bg-opacity-70 text-white rounded-lg mx-4 hover:bg-red-600"
          >
            {showGptSearch
              ? lang[selectedLang].homepage
              : lang[selectedLang].HeaderSearchBox}
          </button>
          <img
            className="hidden md:inline-block rounded-md w-10 "
            src={user?.photoURL}
            alt="img"
          />
          <button className=" font-bold text-white" onClick={handleSignOut}>
            {lang[selectedLang].signoutbtn}
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
