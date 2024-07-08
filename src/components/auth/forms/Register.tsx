import { Link } from 'react-router-dom'
import './styles/form.css'

const Register = () => {
  return (
    <div className='container mt-12 w-[40%]'>
    <div className="registration form">
      <header>Register</header>
      <form action="#">
        <input type="text" placeholder="Enter your email"/>
        <input type="password" placeholder="Create a password"/>
        <input type="password" placeholder="Confirm your password"/>
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

export default Register