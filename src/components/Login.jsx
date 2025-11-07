import { useEffect, useRef, useState } from "react";
import axios from "axios";
import image from "../assets/makima.jpg";
import style from "../css/Login.module.css";
import { useNavigate } from "react-router";

const Login = () => {
  const [adminFetchData, setAdminFetchData] = useState([]);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const emailElement = useRef();
  const passwordElement = useRef();

  useEffect(() => {
    axios
      .get("/api/adminData")
      .then((response) => setAdminFetchData(response.data));
  }, []);

  const handleLoginForm = (event) => {
    event.preventDefault();

    const email = emailElement.current.value;
    const password = passwordElement.current.value;

    emailElement.current.value = "";
    passwordElement.current.value = "";

    const admin = adminFetchData[0];

    if (admin && email === admin.email && password === admin.password) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className={`container-fluid ${style.loginWrapper}`}>
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className={`col-lg-8 col-md-10 ${style.cardContainer}`}>
            <div className={`card shadow-lg ${style.glassCard}`}>
              <div className="row g-0">
                <div className="col-md-6">
                  <div className={`card-body ${style.formSection}`}>
                    <h3 className="card-title text-center mb-3">
                      👋 Welcome Back
                    </h3>
                    <p className="card-text text-center mb-4">
                      Login to your Admin Panel
                    </p>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
                    <form onSubmit={handleLoginForm}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          ref={emailElement}
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="password"
                          className="form-label d-flex justify-content-between"
                        >
                          <span>Password</span>
                          <a href="#" className={style.link}>
                            Forgot password?
                          </a>
                        </label>
                        <input
                          type="password"
                          ref={passwordElement}
                          className="form-control"
                          id="password"
                          placeholder=""
                        />
                      </div>
                      <button
                        type="submit"
                        className={`btn btn-primary w-100 ${style.submitBtn}`}
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-md-6 d-none d-md-block">
                  <img
                    src={image}
                    className={`img-fluid ${style.image}`}
                    alt="Login Visual"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
