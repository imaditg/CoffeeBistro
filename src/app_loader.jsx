import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from './loader'; // adjust path as needed

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate load delay

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="main-content">
          {/* Your Routes and Layout Here */}
        </div>
      )}
    </>
  );
};

export default App;