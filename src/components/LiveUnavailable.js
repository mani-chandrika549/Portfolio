import React, { useEffect } from 'react';
import ErrorImage from '../Assets/images/Error.png';
import { Link } from 'react-router-dom';
import '../Styles/LiveUnavailable.css';

function LiveUnavailable() {
  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = 'hidden';
    return () => {
      // Restore scroll on unmount
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="error-page">
      <img src={ErrorImage} alt="Error" className="error-image" />
      <h1>🚧 Project/Live Demo Not Available</h1>
      <p>
        Sorry, this project hasn't been deployed yet, the live link might be down, or files may not be uploaded properly.
      </p>
      <Link to="/projects" className="back-link">← Back to Projects</Link>
    </div>
  );
}

export default LiveUnavailable;
