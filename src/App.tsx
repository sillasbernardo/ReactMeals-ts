import { Provider } from 'react-redux';

import "./App.css";
import Header from './Header/Header';
import Content from './Content/Content';
import store from './store/Index';

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Content />
    </Provider>
  );
}

export default App;
