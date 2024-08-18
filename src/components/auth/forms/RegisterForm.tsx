import { Link } from 'react-router-dom'
import './styles/form.css'
import { useState } from 'react'
import { handleLoginType } from '../Login'

const RegisterForm = ({handleClick}: {handleClick: handleLoginType}) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <div className='container mt-8 w-[40%]'>
    <div className="registration form">
      <header>Register</header>
      <form action="#">
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Create a password"/>
        <input type="button" className="button" onClick={() => handleClick(email, pass)} value="Signup"/>
        <button></button>
      </form>
      <div className="signup">
        <span className="signup">Already have an account?
         <label htmlFor="check"><Link to="/login">Login</Link></label>
        </span>
      </div>
    </div>
    </div>
  )
}

export default RegisterForm