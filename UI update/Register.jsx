import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post('/register', {
        name, email, password
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ name: '', email: '', password: '' }); // Clear the form fields after successful registration
        toast.success('Registration successful. Welcome!');
        navigate('/login'); // Navigate to login page after registration
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration failed, please try again.");
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <form onSubmit={registerUser} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>Name</label>
        <input
          type='text'
          placeholder='Enter name...'
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          style={{ padding: '8px' }}
        />

        <label>Email</label>
        <input
          type='email' // Ensures input is in email format
          placeholder='Enter email...'
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          style={{ padding: '8px' }}
        />

        <label>Password</label>
        <input
          type='password' // Hides password input
          placeholder='Enter password...'
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          style={{ padding: '8px' }}
        />

        <button type='submit' style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}
