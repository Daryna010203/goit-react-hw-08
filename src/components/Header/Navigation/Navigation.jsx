import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import clsx from 'clsx';
import css from './Navigation.module.css';
import { Typography } from '@mui/material';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

import { styled } from '@mui/material/styles';

const CustomTypography = styled(Typography)({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <CustomTypography>
      <NavLink className={buildLinkClass} to="/">
        <HomeTwoToneIcon fontSize="large" />
      </NavLink>

      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </CustomTypography>
  );
};

export default Navigation;
