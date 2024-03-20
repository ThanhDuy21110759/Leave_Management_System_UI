import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginFailed, setLoginFailed] = useState(false);
    const navigate = useNavigate();
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8080/api/auth/signin', {
          email,
          password,
        });
        if (response.data.success) {
          navigate('/employee');
        } else {
          setLoginFailed(true);
        }
      } catch (error) {
        console.error(error);
        setLoginFailed(true);
      }
    };

    return (
        <div className="wrapper signIn">
          <div className="illustration">
            <img src="https://source.unsplash.com/random" alt="illustration" />
          </div>
          <div className="form">
            <div className="heading">CREATE AN ACCOUNT</div>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Enter your E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit">
                Sign In
              </button>
            </form>
            <p>
              Have an account ? <Link to="/signup">Login</Link>
            </p>
          </div>
        </div>
    );
}

export default SignIn;
