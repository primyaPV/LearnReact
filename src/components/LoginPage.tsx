import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

interface LoginForm {
  email: string;
  password: string;
}

export const LoginPage: React.FC = () => {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<LoginForm>({ email: '', password: '' });
  const [error, setError] = useState<string>('');



  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData= new FormData(e.target)
    const data=Object.fromEntries(formData)

    console.log('new data', data);

    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log('Parsed data:...........', parsedData);

      let isAuthenticated = false;
      for(let i=0;i<parsedData.length;i++){
      
      if(parsedData[i].email === data.email && parsedData[i].password === data.password){
           isAuthenticated = true;
              navigate('/welcome');
              break
      }
      
      }

      if (!isAuthenticated) {
    alert("Error: Invalid email or password.");
  }

  }

  
    //console.log("storedData",storedData)

    

    // const { email, password } = formData;

    // // Simple validation
    // if (!email || !password) {
    //   setError('Both email and password are required!');
    // } else {
    //   setError('');
    //   console.log('Form submitted:', formData);
    //   // Add your login logic here
    // }
  };

  return (
    <div className="container">
      <div className="loginBox">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label className="label" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              placeholder="Enter your email"
            />
          </div>
          <div className="formGroup">
            <label className="label" htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input"
              placeholder="Enter your password"
            />
          </div>
          {error && <div className="errorMessage">{error}</div>}
          <button type="submit" className="submitButton">Login</button>
        </form>
      </div>
    </div>
  );
};
