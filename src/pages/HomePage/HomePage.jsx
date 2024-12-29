import { Paper, Typography, Button } from '@mui/material';
import myImage from '../../assets/contact.jpg';
import { styled } from '@mui/material';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';

const CustomButton = styled(Button)({
  marginTop: 2,
  fontSize: 'large',
  fontWeight: 600,
  backgroundColor: 'rgb(36, 205, 36)',
  borderRadius: 8,
  transition: 'background-color var(--transition-time), transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
});

const HomePage = () => {
  return (
    <Paper
      sx={{
        padding: 4,
        maxWidth: 700,
        textAlign: 'center',
        boxShadow: 3,
        backgroundColor: '#0f3460',
      }}
    >
      <img
        src={myImage}
        alt="Welcome"
        style={{
          borderRadius: '50%',
          marginBottom: 16,
          width: 150,
          height: 150,
        }}
      />
      <Typography variant="h4" component="h1" color="#f5f5f5" gutterBottom>
        Welcome to the Contact Book!
      </Typography>
      <Typography variant="body1" color="#f5f5f5" gutterBottom>
        This is your personal contact management app. Keep your phone numbers
        numbers, names and other important information in a convenient and
        secure form.
      </Typography>
      <Typography variant="body1" color="#f5f5f5" gutterBottom>
        Add new contacts, edit existing ones and delete unnecessary. Everything
        is under control - quick and easy!
      </Typography>
      <Typography variant="body1" color="#f5f5f5" gutterBottom>
        <ArrowDownwardTwoToneIcon />
      </Typography>

      <CustomButton
        variant="contained"
        color="primary"
        href="/contacts"
        sx={{}}
      >
        Go to Contacts
      </CustomButton>
    </Paper>
  );
};
export default HomePage;
