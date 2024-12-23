import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
