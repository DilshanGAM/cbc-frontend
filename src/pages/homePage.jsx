import { Link } from 'react-router-dom';
import './homePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website!</h1>
      <p>
        Explore a world of possibilities with our services. We are here to make your life easier and more enjoyable.
      </p>
      <button onClick={() => alert('Button Clicked!')}>Get Started</button>

      <Link to="/login">Login</Link>
    </div>
  );
}
