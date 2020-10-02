import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

function App() {
  const responseSuccessGoogle = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http:localhost:8000/api/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      console.log(response);
    });
  };
  const responseErrorGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="App">
      <div className="col-md-6 offset-md-3 text-center">
        <h1>Login with Google Example</h1>
        <GoogleLogin
          clientId="67594180334-e3en2jo2k1nq114i1qllpkieu0c7941i.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default App;
