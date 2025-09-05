import React, { useContext, useState } from "react";
import { authStyles as styles } from "../assets/dummystyle";
import { UserContext } from "/src/context/userContext.jsx";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/helper";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
import Input from "./Input";

const SignUp = ({ setCurrentPage }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Enter Full Name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Enter valid email");
      return;
    }
    if (!password) {
      setError("Enter password");
      return;
    }

    setError("");
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
      });

      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.signupTitle}>Create Account</h3>
        <p className={styles.signupSubtitle}>Join Thousands of Professionals Today</p>
      </div>

      <form onSubmit={handleSignup} className={styles.signupForm}>
        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="John Doe"
          type="text"
        />
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email"
          placeholder="example@email.com"
          type="email"
        />
        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 6 Characters"
          type="password"
        />
        {error && <div className={styles.errorMessage}>{error}</div>}

        <button type="submit" className={styles.signupSubmit}>
          Create Account
        </button>

        <p className={styles.switchText}>
          Already have an account?{" "}
          <button
            type="button"
            className={styles.signupSwitchButton}
            onClick={() => setCurrentPage("login")}
          >
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
