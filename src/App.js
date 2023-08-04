import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/Store";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import "./App.css";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="custom-h1">ToDo Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
