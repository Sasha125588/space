import { Link } from 'react-router-dom'
import './styles/form.css'


const Login = () => {
  return (
        <div className='container w-[40%] mt-14'>
        <div className="login form">
      <header>Login</header>
      <form action="#">
        <input type="text" placeholder="Enter your email"/>
        <input type="password" placeholder="Enter your password"/>
        <a href="#">Forgot password?</a>
        <input type="button" className="button" value="Login"/>
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

export default Login