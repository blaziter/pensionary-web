import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Login, Status, Home, Admin, Table, EditMenu, Info, Events } from '../pages/Pages';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
        <Routes>
          <Route index element={<Home />} />
          <Route path='admin' element={<Admin />}>
            <Route path='database' element={<Admin />} />
          </Route>
          <Route path='info' element={<Info />} />
          <Route path='login' element={<Login />} />
          <Route path='status' element={<Status />} />
          <Route path='events' element={<Events />} />
          <Route path='table/:role' element={<Table />} />
          <Route path='table/:role/edit/:id' element={<EditMenu />} />
        </Routes>
    </Provider>
  );
}

export default App;
