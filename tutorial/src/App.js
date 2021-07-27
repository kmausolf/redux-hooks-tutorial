import store from "./redux/store";
import { Provider } from "react-redux";
import MainScreen from "./features/pokemon/mainScreen";

function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

export default App;
