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
  email: any,
  pass: string
}

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  
  const handleLogin:handleLoginType = (email, pass) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
    .then(({user}) => {
      console.log(user)
      dispatch(setUser({
        id: user.uid,
        email: user.email,
        token: user.refreshToken
      }));
      navigate('/')
    }).catch(() => alert("Invalid user"))  
  }

  return (
    <div>
      <LoginForm handleClick={handleLogin}/>
    </div>
  )
}

export default Login