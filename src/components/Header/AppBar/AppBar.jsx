import css from './Appbar.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Toolbar from '@mui/material/Toolbar';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.menu}>
      <Toolbar>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </header>
  );
};

export default AppBar;
