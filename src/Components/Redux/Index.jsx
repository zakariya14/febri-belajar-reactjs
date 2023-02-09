import { Provider } from "react-redux";
import store from "../../app/store";
import Counter from "./Counter/Counter";

const IndexRedux = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default IndexRedux;
