# Netflix-GPT

- built using create-react-app
- configured with css
- routing-react-router-dom
- header
- login form(useRef hook)
- signup form
- form validation
- Authentication(firebase)(disable cors extension for connecting email providers)
- firebase deployment(project url:https://netflixgpt-e0fdd.web.app)
- created redux store
- signout logic
- Bugfix:updating the username and profile picture of the user when signup and then navigate it to browse page with this updated data to display pic else it only appears once the page reloads.

- Bugfix: redirect to appropriate route only after authentication not manually.

- CLEAN UP:

  - unsubscribe to the onAuthStateChanged Api: When the component unmounts, we need to clean up the listener to prevent memory leaks or unwanted updates after the component is no longer in the UI.
    "unsubscribe" is the cleanup function returned by onAuthStateChanged. It stops the listener from monitoring authentication state changes when the component is destroyed (unmounted).

  - Added harcoded value to the constants file.

- "TMDB" => Movie Api =>get access token
- craeted movieSlice
- created videoTrailer Slice
- created custom hook to fetch movie data
- planning for Main Container
  - video background(tmdb Api + youtube video embedded with autoplay & mute)
  - video Title(tmdb api)
- Secondary Container
  - movielist
    - trending Now
    - documentaries

# features

- signup/login page
  - header
  - form page
- home/browse page (access only if logged in)

  - header component
    - nav menu
    - movie trailer playing
    - movie title and description with play button
  - movie suggestion carousel

- Gpt suugestion search bar
