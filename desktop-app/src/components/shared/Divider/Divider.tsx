import React from 'react';
import * as styles from './Divider.treat';

function Divider({ className }: { className: string }) {
  return <div className={`${styles.divider} ${className}`} />;
}

export { Divider };
