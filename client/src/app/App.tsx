import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
//import { Layout, Login, Register } from '../pages/Pages';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
        <Routes>
          <Route path='login' />
          <Route path='register' />
        </Routes>
    </Provider>
  );
}

export default App;
