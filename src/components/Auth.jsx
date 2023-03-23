import { useDispatch, useSelector } from "react-redux";

export default function Auth() {
  const dispatch = useDispatch();
  const value = useSelector(store => store.auth);

  function login() {
    dispatch({ type: "Login" });
  }

  function logout() {
    dispatch({ type: "Logout" });
  }

  return (
    <div>
      <h1>Login: {value.isAuth ? "true" : "false"}</h1>
      <button onClick={login}>Loign</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
