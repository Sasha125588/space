import { Link } from 'react-router-dom'
import './styles/form.css'
import { useState } from 'react'

const LoginForm = ({handleClick}: {handleClick: any})  => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

  return (
    <div className='container w-[40%] mt-8'>
        <div className="login form">
      <header>Login</header>
      <form action="#">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>
        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter your password"/>
        <a href="#">Forgot password?</a>
        <input type="button" className="button" onClick={() => handleClick(email, pass)} value="Signin"/>
      </form>
      <div className="signup">
        <span className="signup">Don't have an account?
         <label htmlFor="check"><Link to="/register">Register</Link></label>
        </span>
      </div>
    </div>
        </div>
  )
}

export default LoginForm