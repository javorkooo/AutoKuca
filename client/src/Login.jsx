import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };

    try {
      const user = await axios.post("http://localhost:8081/user/login", data);
      if (user.data.status === "aktivan") {
        localStorage.setItem("user", JSON.stringify(user.data));
        history.push("/home");
      } else {
        alert(
          "You are not active user! Please contact admin to make you an active user."
        );
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
      alert("Pogresan username ili sifra");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3">
              <div className="card-body p-4 p-sm-5">
                <img
                  src="data:image/png;base64,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"
                  style={{ width: "100%" }}
                  alt=""
                />
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Sign In
                </h5>
                <form onSubmit={submitForm}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingInput">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="d-grid mb-1">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>

                  <div className="d-grid mb-1">
                    <button
                      className="btn btn-secondary btn-login text-uppercase fw-bold"
                      onClick={() => history.push("/register")}
                    >
                      Go to Registration
                    </button>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-outline-secondary btn-login text-uppercase fw-bold"
                      onClick={() => {
                        const guest = {
                          status: "neaktivan",
                          role: "guest",
                        };
                        localStorage.setItem("user", JSON.stringify(guest));
                        history.push("/home");
                      }}
                    >
                      Continue as guest
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
