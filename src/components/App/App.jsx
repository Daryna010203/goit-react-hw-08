import { Route, Routes } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import HomePage from '../../pages/HomePage/HomePage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserMenu />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
      <Route path="register" element={<RegistrationPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};
export default App;
