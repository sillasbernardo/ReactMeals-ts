import { ShoppingItemsContextProvider } from './Context/ShoppingItemsContext';

import "./App.css";
import Header from './Header/Header';
import Content from './Content/Content';

function App() {

  return (
    <ShoppingItemsContextProvider>
      <Header />
      <Content />
    </ShoppingItemsContextProvider>
  );
}

export default App;
