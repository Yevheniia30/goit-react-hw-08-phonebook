import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import s from './Form.module.css';

export const EditForm = ({ contactToEdit, closeModal }) => {
  const [contactTo, setContactTo] = useState(contactToEdit);
  const { name, number } = contactTo;

  const dispatch = useDispatch();

  const handleChange = e => {
    // console.log(e.currentTarget);
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setContactTo(prev => ({
          ...prev,
          name: value,
        }));
        break;
      case 'number':
        setContactTo(prev => ({
          ...prev,
          number: value,
        }));
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    closeModal();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
        />
      </label>
      <label className={s.label}>
        phone
        <input
          className={s.input}
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
        />
      </label>
      <button className={s.input + ' ' + s.btn} type="submit">
        Confirm changes
      </button>
    </form>
  );
};

EditForm.propTypes = {};
