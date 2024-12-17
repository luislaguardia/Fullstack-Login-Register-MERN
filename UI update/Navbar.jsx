import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to='/'>Home</Link>
      <Link style={linkStyle} to='/register'>Register</Link>
      <Link style={linkStyle} to='/login'>Login</Link>
    </nav>
  );
}

// Styles for the navbar
const navStyle = {
  backgroundColor: '#f0f0f0', // Light grey background
  padding: '10px 20px', // Padding around the navbar
  display: 'flex', // Use flexbox for layout
  justifyContent: 'flex-end', // Align items to the end of the navbar
  gap: '10px', // Space between links
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)' // Subtle shadow for depth
};

// Styles for the links
const linkStyle = {
  textDecoration: 'none', // Remove underline from links
  color: '#333', // Dark grey text color
  fontWeight: 'bold', // Bold font weight
  padding: '8px 16px', // Padding around the text
  borderRadius: '4px', // Rounded corners for the links
  transition: 'background-color 0.3s', // Smooth transition for hover effect

  // Hover state for the links
  ':hover': {
    backgroundColor: '#ddd' // Lighten background on hover
  }
};
