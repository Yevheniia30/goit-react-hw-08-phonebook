import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { UserForm } from 'components/UserForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = user => {
    dispatch(login(user));
  };

  return <UserForm onSubmit={handleSubmit} />;
};

export default LoginPage;
