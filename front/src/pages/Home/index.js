import React from 'react';
import {Link} from 'react-router-dom';

const HOME = () => {
  return (
    <div className="inner">
      <h2>HOME</h2>
      <Link to="/list">go list</Link>
    </div>
  );
};

export default HOME;
