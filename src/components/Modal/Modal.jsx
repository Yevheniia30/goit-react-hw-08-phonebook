import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { UserForm } from 'components/Form';
import s from './Modal.module.css';
import { GrClose } from 'react-icons/gr';

const Modal = ({ children, closeModal }) => {
  const modalRoot = document.getElementById('modal-root');
  // const body = document.querySelector('body');

  return createPortal(
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <button className={s.btn} onClick={closeModal}>
          {/* <Fa500Px /> */}
          <GrClose className={s.icon} />
        </button>
        {/* <img src={image} alt={altImage} /> */}
        {children}
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {};

export default Modal;
