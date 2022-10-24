import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Layout, Login, Register } from '../pages/Pages';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
