import store from "./redux/store";
import { Provider } from "react-redux";
import MainScreen from "./components/mainScreen";

function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

export default App;
