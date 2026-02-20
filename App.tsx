import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/app/store/index";
import { RootNavigator } from "./src/app/navigation/RootNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
