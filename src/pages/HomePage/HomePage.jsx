import { Box, Paper, Typography, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        minHeight: '100vh',
        padding: 3,
        // backgroundColor: '#f5f5f5',
      }}
    >
      <Paper
        sx={{
          padding: 4,
          maxWidth: 600,
          textAlign: 'center',
          boxShadow: 3,
          backgroundColor: '#f5f5f5',
        }}
      >
        <img
          src="https://via.placeholder.com/150"
          alt="Welcome"
          style={{
            borderRadius: '50%',
            marginBottom: 16,
            width: 150,
            height: 150,
          }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          Добро пожаловать в Книгу Контактов!
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Это ваше личное приложение для управления контактами. Храните
          телефонные номера, имена и другую важную информацию в удобной и
          безопасной форме.
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Добавляйте новые контакты, редактируйте существующие и удаляйте
          ненужные. Все под контролем — быстро и просто!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/contacts"
          sx={{ marginTop: 2 }}
        >
          Перейти к Контактам
        </Button>
      </Paper>
    </Box>
  );
};
export default HomePage;
