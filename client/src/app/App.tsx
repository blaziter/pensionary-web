import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Login, Status, Home, Layout } from '../pages/Pages';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='status' element={<Status />} />
        </Routes>
    </Provider>
  );
}

export default App;
