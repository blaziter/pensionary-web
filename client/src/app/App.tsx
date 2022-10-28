import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Login, Status, Home, Admin } from '../pages/Pages';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='admin' element={<Admin />} />
          <Route path='login' element={<Login />} />
          <Route path='status' element={<Status />}>
            <Route path='' element={<Status />} />
          </Route>
        </Routes>
    </Provider>
  );
}

export default App;
