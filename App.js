import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';

// import store
import {store} from './src/Redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Text>Hello World</Text>
    </Provider>
  );
}
