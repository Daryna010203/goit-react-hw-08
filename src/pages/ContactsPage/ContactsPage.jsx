import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/contacts/selectors.js';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js';
import Loader from '../../components/Loader/Loader.jsx';
import css from './ContactPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
