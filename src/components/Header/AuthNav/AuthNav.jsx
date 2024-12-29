import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AuthNav.module.css';
import { Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { styled } from '@mui/material/styles';

const CustomTypography = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const AuthNav = () => {
  return (
    <div>
      <CustomTypography>
        <NavLink to="/register">
          <Button
            color="inherit"
            endIcon={<HowToRegIcon />}
            sx={{
              ':hover': { backgroundColor: 'rgb(36, 205, 36)' },
            }}
          >
            {' '}
            <span className={css.btnOut}>Register</span>
          </Button>
        </NavLink>
        <NavLink to="/login">
          <Button
            color="inherit"
            endIcon={<LoginIcon color="white" />}
            sx={{
              ':hover': { backgroundColor: 'rgb(36, 205, 36)' },
            }}
          >
            {' '}
            <span className={css.btnOut}>Log In</span>
          </Button>
        </NavLink>
      </CustomTypography>
    </div>
  );
};

export default AuthNav;
