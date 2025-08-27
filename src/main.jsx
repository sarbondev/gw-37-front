import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./store/RootStore.jsx";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
