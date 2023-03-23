import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const dispatch = useDispatch();
  const value = useSelector(store => store.count);

  function increment() {
    dispatch({ type: "Increment" });
  }

  function decrement() {
    dispatch({ type: "Decrement" });
  }

  function reset() {
    dispatch({ type: "Reset" });
  }

  return (
    <div>
      <p>Count: {value.count}</p>

      <Button onClick={increment}>Increase</Button>
      <Button onClick={decrement}>Decrease</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}
