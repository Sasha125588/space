import { useDispatch } from "react-redux"
import LoginForm from "./forms/LoginForm"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export type handleLoginType = (email: string, pass: string) => void

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Login = () => {

  const dispatch = useDispatch()
  
  const handleLogin:handleLoginType = (email: string, pass: string): any => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
    .then(console.log).catch(err => console.log(err))
  }

  return (
      <LoginForm handleClick={handleLogin}/>
  )
}

export default Login