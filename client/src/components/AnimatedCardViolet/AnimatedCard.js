import React from 'react';
import styles from './AnimatedCard.module.css';

function AnimatedCard({ children }) {
  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AnimatedCard;
