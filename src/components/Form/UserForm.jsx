import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './Form.module.css';
import { routes } from 'routes';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const UserForm = ({ onSubmit, isSignup }) => {
  const initialState = isSignup
    ? {
        name: '',
        email: '',
        password: '',
      }
    : { email: '', password: '' };
  const [credentials, setCredentials] = useState({
    ...initialState,
  });

  const { name, email, password } = credentials;

  const handleChange = e => {
    const { name, value } = e.target;
    // console.log(name, value);

    setCredentials(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(credentials);
    setCredentials({
      ...initialState,
    });
  };

  const [type, setType] = useState('password');
  const togglePassword = e => {
    // const { type } = e.target.type;
    type === 'password' ? setType('text') : setType('password');
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        {isSignup && (
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
        )}

        <label className={s.label}>
          Email
          <input
            className={s.input}
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
            //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
        </label>

        <label className={s.label} style={{ position: 'relative' }}>
          Password
          <input
            className={s.input}
            value={password}
            onChange={handleChange}
            type={type}
            name="password"
            // {type==='password'?<FaEye/>: <FaEyeSlash/>}
            //  {<FaEyeSlash/>}
            //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //   title="Password  must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
          {type === 'password' ? (
            <FaEye
              onClick={togglePassword}
              style={{
                // width: '24px',
                // height: '24px',
                position: 'absolute',
                top: '35px',
                left: '185px',
              }}
            />
          ) : (
            <FaEyeSlash
              onClick={togglePassword}
              style={{
                // width: '24px',
                // height: '24px',
                position: 'absolute',
                top: '35px',
                left: '185px',
              }}
            />
          )}
        </label>

        <button className={s.input + ' ' + s.btn} type="submit">
          {isSignup ? 'Sign up' : 'Log In'}
        </button>
      </form>
      <Link to={isSignup ? routes.login : routes.signup} className={s.link}>
        {isSignup
          ? 'Already have an account? Log in'
          : 'Do not have an account yet? Sign up'}
      </Link>
    </>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSignup: PropTypes.bool,
};
