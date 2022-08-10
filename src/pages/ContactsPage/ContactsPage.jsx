// import PropTypes from 'prop-types';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const ContactsPage = props => {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

ContactsPage.propTypes = {};

export default ContactsPage;
