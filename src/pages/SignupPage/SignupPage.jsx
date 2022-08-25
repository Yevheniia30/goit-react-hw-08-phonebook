import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/authOperations';
import { UserForm } from 'components/Form';
const SignupPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = user => {
    // console.log('user', user);
    dispatch(signup(user));
  };

  return <UserForm isSignup={true} onSubmit={handleSubmit} />;
};

export default SignupPage;
