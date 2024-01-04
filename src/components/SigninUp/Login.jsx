import { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <input
        style={{
          margin: "10px",
          padding: "10px",
        }}
        type="text"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button></button>
    </>
  );
}

export default Login;
