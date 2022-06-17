import './Login.css';
import { login } from '../../api';
import { useCookies } from 'react-cookie';
import Spline from '@splinetool/react-spline';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [_, setToken] = useCookies(['token'])
  const navigate= useNavigate();
 async function handleUser(e) {
    e.preventDefault();
    const user = {
      name:e.target.username.value,
      password:e.target.password.value
    }
   const token= await login(user);
   setToken('token', token);
   navigate("/feed");
  }
  return(
    <div className='login'>
      <div className='LoginTitle'>
        {/* <h1>Login to Xtrude new relations</h1> */}
      </div>
    <div className='splineSide'>
    <Spline scene="https://prod.spline.design/YyWpMZToJyhLiu2i/scene.splinecode" />
       </div>
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form className='form' onSubmit={(e)=> handleUser(e)}>
       <label>
        <p>Username</p>
        <input type="text" name ="username" />
        </label>
        <label>
        <p>Password</p>
        <input type="password" name ="password" />
       </label>
        <div>
        <button type="submit">Submit</button>
        </div>
     </form>
     
      <Link to="/register"><p className='registerlink'> Don't already have a account, create one here</p></Link>
    </div>
    </div>
  )
}