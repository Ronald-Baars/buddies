import React from 'react';

import './style.css';

const Badge = ({ userData, className = "" }) => {
  const getInitials = (name) => {
    const initials = name.match(/\b\w/g) || [];
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  };

  return (
    <div className={`Badge ${className}`} style={{ color: userData.color }}>
      <div className="Badge__background" style={{ background: userData.color }} />
      {getInitials(userData.username)}
    </div>
  );
};

export default Badge;
