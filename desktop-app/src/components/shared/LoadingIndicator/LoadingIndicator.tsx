import React, { memo } from 'react';
import * as styles from './LoadingIndicator.treat';

function Indicator() {
  return (
    <div className={styles.loadingIndicatorContainer}>
      <div className={styles.firstPoint}></div>
      <div className={styles.secondPoint}></div>
      <div className={styles.thirdPoint}></div>
    </div>
  );
}

const LoadingIndicator = memo(Indicator);

export { LoadingIndicator };
