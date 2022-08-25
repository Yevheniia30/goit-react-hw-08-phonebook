import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  // toggleContact,
  deleteContact,
} from 'redux/contacts/contactsOperations';
import s from './ContactList.module.css';
import { FaTrash, FaEdit } from 'react-icons/fa';

export const ContactItem = ({ item, openModal }) => {
  const dispatch = useDispatch();
  // console.log('item', item);
  return (
    <li className={s.item}>
      {/* <FaStar
        fill={item?.isImportant ? '#f5d20d' : '#cecece'}
        title="mark as important"
        cursor="pointer"
        onClick={() =>
          dispatch(
            toggleContact({ id: item.id, isImportant: !item.isImportant })
          )
        }
      /> */}
      <b className={s.name}>{item.name}</b>
      <span>{item.number}</span>
      <div className={s.btns}>
        <button
          className={s.btn}
          onClick={() => openModal(item)}
          title="Edit contact"
        >
          <FaEdit fill="#757474" className={s.edit} />
        </button>
        <button
          className={s.btn}
          onClick={() => dispatch(deleteContact(item.id))}
          title="Delete contact"
        >
          <FaTrash fill="#757474" className={s.del} />
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    // isImportant: PropTypes.bool,
  }),
};
