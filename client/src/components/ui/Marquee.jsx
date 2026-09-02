import React from 'react';

/**
 * Infinite horizontal marquee. Children are duplicated (2x) and the
 * track translates -50% for a seamless loop. Pauses on hover.
 */
const Marquee = ({ children, reverse = false, duration = 32, className = '' }) => {
  return (
    <div className={`marquee ${reverse ? 'marquee-reverse' : ''} ${className}`}>
      <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
        <div className="flex items-center shrink-0">{children}</div>
        <div className="flex items-center shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
