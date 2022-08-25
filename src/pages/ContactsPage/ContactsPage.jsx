import { useState } from 'react';
import { ContactForm, EditForm } from 'components/Form';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import Modal from 'components/Modal/Modal';

const ContactsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [contactToEdit, setContactToEdit] = useState({});

  const handleOpenModal = item => {
    setIsOpen(true);
    console.log('item to edit', item);
    // const { id, name, number } = item;
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
            toEdit={true}
            closeModal={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default ContactsPage;
