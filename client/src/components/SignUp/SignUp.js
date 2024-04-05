import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './SignUp.css';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [serverMessage, setServerMessage] = useState(''); 
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
      const response = await fetch('http://localhost:3000/api/v2/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setServerMessage(result.message);

      if(response.status === 201){
        navigate('/signin');
      }else{
        if(response.status === 400){
          setServerMessage(result.message);
        }
        else if(response.status ===500){
          setServerMessage(result.message)
        }
        else{
          setServerMessage("An unexpected error occured due to poor programming. Sorry. :3")
        }
        
      }

    }catch (error){
      console.error('Signup failed:', error);
      setServerMessage('Sign up failed. Please try again later...')
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        {serverMessage && <div className="server-message">{serverMessage}</div>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
