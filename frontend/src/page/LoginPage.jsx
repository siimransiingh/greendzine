import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registeredUsers from '../data/RegidteredUser';
import group_3 from '../images/Group3.png'
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = registeredUsers.find(user => user.email === email && user.password === password);
    if (user) {
      navigate('/home');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="loginPage">
      <div className='loginLogo divCenter'>
        <img src={group_3} alt="" />
        <p>#We are Electric</p>
      </div>

      <div className="inputs divCenter">
        <input
          type="email"
          placeholder=' E-mail'
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="Loginbutton divCenter">
        <button type="button" onClick={handleLogin}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p>Forgot password?</p>
      </div>
    </div>
  );
};

export default LoginPage;
