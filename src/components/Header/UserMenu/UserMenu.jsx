import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/operations';
import { selectUser } from '../../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTypography = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  margin: '8px',
});

const CustomButton = styled(Button)({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: 2,
  fontWeight: '600',
  borderRadius: 8,
  fontSize: 'large',
  paddingRight: 16,
  paddingLeft: 16,
});

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <CustomTypography>
        <p className={css.menu}> Welcome, {user.name}</p>
        <CustomButton
          color="inherit"
          onClick={() => dispatch(logout())}
          endIcon={<LogoutTwoToneIcon />}
        >
          {' '}
          Logout
        </CustomButton>
      </CustomTypography>
    </div>
  );
};

export default UserMenu;
