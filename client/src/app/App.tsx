import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, Status, Home, Admin, Table, EditMenu, Info, Events, Create, Update, CreateEvent, UpdateEvent, UpdateUser, CreateBoardMember } from '../pages/Pages';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/admin' element={<Navigate to='dashboard' replace />} />
        <Route path='admin/dashboard' element={<Admin />} />
        <Route path='info' element={<Info />} />
        <Route path='login' element={<Login />} />
        <Route path='status' element={<Status />} />
        <Route path='events' element={<Events />} />
        <Route path='table/:role/page/:page' element={<Table />} />
        <Route path='table/:role/edit/:uuid' element={<Update />} />
        <Route path='admin/create' element={<Create />} />
        <Route path='admin/create-event' element={<CreateEvent />} />
        <Route path='admin/create-member' element={<CreateBoardMember />} />
        <Route path='admin/edit/:id' element={<Update />} />
        <Route path='admin/edit-user/:id' element={<UpdateUser />} />
        <Route path='admin/edit-event/:id' element={<UpdateEvent />} />
      </Routes>
    </Provider>
  );
}

export default App;
