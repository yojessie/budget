// src/components/Login.js
import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
import { StyledButton } from "./Button.styled";

const Login = () => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  return !user ? (
    <StyledButton onClick={handleGoogleLogin}>
      구글 계정으로 시작하기
    </StyledButton>
  ) : (
    <div>Welcome, {user.displayName}</div>
  );
};

export default Login;
