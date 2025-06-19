import React, { useState } from 'react';

const FeatureCard = ({ icon, title, text, details }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`feature-tile ${expanded ? 'expanded' : ''}`}>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="feature-button" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Скрыть' : 'Подробнее'}
      </button>
      {expanded && <div className="feature-details">{details}</div>}
    </div>
  );
};

export default FeatureCard;
