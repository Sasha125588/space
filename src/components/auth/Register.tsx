import RegisterForm from './forms/RegisterForm'
import { useDispatch } from "react-redux"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../redux/auth/user/reducer';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const handleRegister = (email: string, pass: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
    .then(({user}) => {
      dispatch(setUser({
        id: user.uid,
        email: user.email,
        token: user.refreshToken
      }));
      navigate('/')
    }).catch(console.error)
  }

  return (
    <div>
      <RegisterForm handleClick={handleRegister} />
    </div>
  )
}

export default Register