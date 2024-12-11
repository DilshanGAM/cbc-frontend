import { Link } from 'react-router-dom';
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="Enter your username" />
      <input type="password" placeholder="Enter your password" />
      <button>Login</button>
      <Link to="/" >Home</Link>
    </div>
  );
}
