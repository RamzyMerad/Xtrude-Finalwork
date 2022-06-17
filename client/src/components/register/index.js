import './register.css';
import { register } from '../../api';
import { useCookies } from 'react-cookie';
import Spline from '@splinetool/react-spline';
import { Link, useNavigate } from 'react-router-dom';
export default function Register() {
  const [_, setToken] = useCookies(['token'])
  const navigate= useNavigate();
 async function handleUser(e) {
    e.preventDefault();
    if(e.target.password.value == e.target.repeatpassword.value){
      const user = {
        name:e.target.username.value,
        password:e.target.password.value,
        level:e.target.level.value
      }
     const token= await register(user);
     setToken('token', token);
     navigate("/feed");
    }
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
      <h1>Please Register</h1>
      <form className='form' onSubmit={(e)=> handleUser(e)}>
       <label>
        <p>Username</p>
        <input type="text" name ="username" />
        </label>
        <label>
        <p>Password</p>
        <input type="password" name ="password" />
       </label>
       <label>
        <p>Repeat password</p>
        <input type="password" name ="repeatpassword" />
       </label>
       <label>
        <p>LEVEL</p>
        <select name="level" >
          <option value="Junior">Junior</option>
          <option value="Master">Master</option>
          <option value="Senior">Senior</option>
        </select>
       </label>
        <div>
        <button type="submit">Submit</button>
        </div>
     </form>
     <Link to="/login"><p className='registerlink'> already have a account, login here</p></Link>
    </div>
    </div>
  )
}