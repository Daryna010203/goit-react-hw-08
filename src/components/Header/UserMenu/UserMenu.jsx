import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/auth/operations';
import { selectUser } from '../../../redux/auth/selectors';
import css from './UserMenu.module.css';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTypography = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  margin: '16px',
});

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <CustomTypography>
        <p className={css.menu}> Welcome, {user.name}</p>
        <Button
          color="inherit"
          onClick={() => dispatch(logout())}
          endIcon={<LogoutTwoToneIcon />}
        >
          {' '}
          <span className={css.btnOut}>Logout</span>
        </Button>
      </CustomTypography>
    </div>
  );
};

export default UserMenu;
