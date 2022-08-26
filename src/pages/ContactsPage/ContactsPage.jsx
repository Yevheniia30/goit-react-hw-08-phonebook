import { useState } from 'react';
import { ContactForm, EditForm } from 'components/Form';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Modal } from 'components/Modal';

const ContactsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactToEdit, setContactToEdit] = useState({});

  const handleOpenModal = item => {
    setIsOpen(true);
    setContactToEdit(item);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setContactToEdit({});
  };

  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList openModal={handleOpenModal} />
      {isOpen && (
        <Modal closeModal={handleCloseModal}>
          <EditForm
            contactToEdit={contactToEdit}
            closeModal={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default ContactsPage;
