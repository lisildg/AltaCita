import React from 'react';
import styles from './AnimatedCard.module.css';

function AnimatedCard({ children }) {
  return (
    <div className={`${styles.box} relative rounded overflow-hidden w-36 h-16 `}>
      <div className="relative z-10 flex items-center justify-center h-full">
          {children}
      </div>
    </div>
  );
}

export default AnimatedCard;
