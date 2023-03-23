import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Counter from "./Counter";
import Auth from "./Auth";

export default function ReduxCounter() {
  const initialCountState = {
    count: 0,
  };

  function counterReducer(state = initialCountState, action) {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
      case "Reset":
        return { count: 0 };
      default:
        return state;
    }
  }

  const initialAuthState = {
    isAuth: false,
  };

  function authReducer(state = initialAuthState, action) {
    switch (action.type) {
      case "Login":
        return { isAuth: true };
      case "Logout":
        return { isAuth: false };
      default:
        return state;
    }
  }
  const rootReducer = combineReducers({ count: counterReducer, auth: authReducer });

  const store = createStore(rootReducer);

  return (
    <div>
      <Provider store={store}>
        <Counter />
        <Auth></Auth>
      </Provider>
    </div>
  );
}
