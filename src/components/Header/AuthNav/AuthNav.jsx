import { NavLink } from 'react-router-dom';
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

const CustomButton = styled(Button)({
  marginTop: 2,
  fontWeight: '600',
  borderRadius: 8,
  fontSize: 'large',
  color: ' #f5f5f5',
  transition: 'background-color var(--transition-time), transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: 'rgb(36, 205, 36)',
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
});

const AuthNav = () => {
  return (
    <div>
      <CustomTypography>
        <NavLink to="/register">
          <CustomButton
            color="inherit"
            endIcon={<HowToRegIcon sx={{ color: ' #f5f5f5' }} />}
          >
            {' '}
            Register
          </CustomButton>
        </NavLink>
        <NavLink to="/login">
          <CustomButton
            color="inherit"
            endIcon={<LoginIcon sx={{ color: ' #f5f5f5' }} />}
          >
            {' '}
            LogIn
          </CustomButton>
        </NavLink>
      </CustomTypography>
    </div>
  );
};

export default AuthNav;
