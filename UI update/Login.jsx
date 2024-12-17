import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post('/login', {
        email,
        password
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ email: '', password: '' }); // Clear the form fields
        navigate('/dash'); // Navigate to dashboard after login
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed, please try again.");
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <form onSubmit={loginUser} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>Email</label>
        <input
          type='text'
          placeholder='Enter email...'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          style={{ padding: '8px' }}
        />

        <label>Password</label>
        <input
          type='password'
          placeholder='Enter password...'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          style={{ padding: '8px' }}
        />

        <button type='submit' style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
}
