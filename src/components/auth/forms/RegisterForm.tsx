import { Link } from 'react-router-dom'
import './styles/form.css'
import { useState } from 'react'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  return (
    <div className='container mt-12 w-[40%]'>
    <div className="registration form">
      <header>Register</header>
      <form action="#">
        <input type="text" placeholder="Enter your email"/>
        <input type="password" placeholder="Create a password"/>
        <input type="button" className="button" value="Signup"/>
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