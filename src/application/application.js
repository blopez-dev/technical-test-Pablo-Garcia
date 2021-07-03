import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import createStore from './store';

function App() {
  return (
    <Provider store={createStore()}>
      <Routes />
    </Provider>
  );
}
export default App;
