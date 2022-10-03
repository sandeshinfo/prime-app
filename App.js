import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';

import { Provider } from "react-redux";
import store from './android/Redux/store/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Tabs />
      </NavigationContainer>
    </Provider>


  );
}

export default App;