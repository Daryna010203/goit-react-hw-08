import css from './ContactPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/contacts/selectors.js';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js';
import Loader from '../../components/Loader/Loader.jsx';
import { Paper, styled } from '@mui/material';

const CustomPaper = styled(Paper)({
  padding: 4,
  maxWidth: 700,
  textAlign: 'center',
  boxShadow: 3,
  backgroundColor: '#0f3460',
  color: '#f5f5f5',
  borderRadius: '8px',
});

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectIsLoading);

  return (
    <CustomPaper>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </CustomPaper>
  );
};

export default ContactsPage;
