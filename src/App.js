import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './config/reactotron';
import store from './store';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ToastContainer />
    <Routes />
  </Provider>
);

export default App;
