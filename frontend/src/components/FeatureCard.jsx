import React, { useState } from 'react';

const FeatureCard = ({ icon, title, text, details }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`feature-tile ${expanded ? 'expanded' : ''}`}>
      <div className="feature-icon">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="feature-button" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Скрыть' : 'Подробнее'}
      </button>
      {expanded && (
        <div className="feature-details">
          <div className="feature-icon">
            <img src={icon} alt={title} />
          </div>
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
