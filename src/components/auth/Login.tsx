import { useDispatch } from "react-redux"
import LoginForm from "./forms/LoginForm"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/auth/user/reducer";


export type handleLoginType = (email: string, pass: string) => void

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface handleLoginTypeInterface{
  email: string,
  pass: string
}

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  
  const handleLogin:handleLoginType = (email, pass) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
    .then(({user}) => {
      dispatch(setUser({
        id: user.uid,
        email: user.email,
        token: user.refreshToken
      }));
      navigate('/')
    }).catch(() => alert("Invalid user"))  
  }

  return (
      <LoginForm handleClick={handleLogin}/>
  )
}

export default Login