import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/contacts/selectors.js';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations.js';
import Loader from '../../components/Loader/Loader.jsx';
import Container from '../../components/Container/Container.jsx';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <Loader />}
        <ContactList />
      </Container>
    </>
  );
};

export default ContactsPage;
