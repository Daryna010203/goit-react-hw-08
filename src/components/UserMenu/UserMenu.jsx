import { Outlet } from 'react-router-dom';
import css from './UserMenu.module.css';
import Header from '../Header/Header';

const UserMenu = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default UserMenu;
