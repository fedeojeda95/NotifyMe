import React, { memo } from 'react';
import * as styles from './LoadingIndicator.treat';

interface IndicatorProps {
  style: string;
}

function Indicator({ style }: IndicatorProps) {
  return (
    <div className={`${styles.loadingIndicatorContainer} ${style}`}>
      <div className={styles.firstPoint}></div>
      <div className={styles.secondPoint}></div>
      <div className={styles.thirdPoint}></div>
    </div>
  );
}

const LoadingIndicator = memo(Indicator);

export { LoadingIndicator };
