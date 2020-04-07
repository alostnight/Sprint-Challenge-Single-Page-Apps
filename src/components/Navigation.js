import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div>
      <div className="App">
        <div>
          <Link to="/welcomepage">Home</Link>
        </div>
        <div>
          <Link to="/characterlist">Characters</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;