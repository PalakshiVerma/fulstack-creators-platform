import { Link } from 'react-router-dom';
import ConnectionTest from '../components/common/ConnectionTest';
const containerStyle = {
  padding: '2rem'
};

const heroStyle = {
  padding: '2rem',
  backgroundColor: '#f5f5f5'
};
const Home = () => {
  return (
    <div style={containerStyle}>
      {/* Your existing hero section */}
      <div style={heroStyle}>
        {/* ... your existing home page content ... */}
      </div>

      {/* Add the connection test */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <ConnectionTest />
      </div>

      {/* Your existing features section */}
      {/* ... */}
    </div>
  );
};
export default Home;
// ... rest of your Home component