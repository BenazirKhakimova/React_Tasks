import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    let obj = {
      email: email,
      password: password,
      password2: password2,
    };
    if (!email.trim() || !password.trim() || !password2.trim()) {
      alert("Заполните поля");
      return;
    } else if (password !== password2) {
      alert("Пароли не совпадают!");
      return;
    } else {
      setIsLogin(true);
    }
  };
  function logOut() {
    setIsLogin(false);
    setEmail("");
    setPassword("");
    setPassword2("");
  }

  return isLogin ? (
    <>
      <h1>Добро пожаловать {email}!</h1>
      <button onClick={() => logOut()}>Выход</button>
    </>
  ) : (
    <div>
      <h1>Sign Up</h1>
      <form action="">
        <input
          type="text"
          placeholder="email"
          // name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="пароль"
          // name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="потвердите пароль"
          // name="password2"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <br />
        <button onClick={handleSignUp}>Войти</button>
      </form>
    </div>
  );
};

export default SignUp;
