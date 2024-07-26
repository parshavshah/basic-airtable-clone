import { useState } from "react";
import userService from "../services/user.service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await userService.loginUser({ email, password });
    } catch (error) {
      console.error("There was an error making the POST request!", error);
    }
  };

  return (
    <>
      <div className="w3-row">
        <div className="w3-col s12">
          <h1 className="w3-center">WindTable</h1>
        </div>
      </div>
      <div className="w3-row">
        <div className="w3-col s3  w3-center">&nbsp;</div>
        <div className="w3-col s6  w3-center">
          <form
            onSubmit={handleSubmit}
            className="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin"
          >
            <h2 className="w3-center">Login</h2>

            <div className="w3-row w3-section">
              <div className="w3-col" style={{ width: "50px" }}>
                <i className="w3-xxlarge fa fa-envelope-o"></i>
              </div>
              <div className="w3-rest">
                <input
                  className="w3-input w3-border"
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="w3-row w3-section">
              <div className="w3-col" style={{ width: "50px" }}>
                <i className="w3-xxlarge fa fa-phone"></i>
              </div>
              <div className="w3-rest">
                <input
                  className="w3-input w3-border"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>

            <p className="w3-center">
              <button className="w3-button w3-section w3-blue w3-ripple">
                {" "}
                Send{" "}
              </button>
            </p>
          </form>
        </div>
        <div className="w3-col s3 w3-center">&nbsp;</div>
      </div>
    </>
  );
}
