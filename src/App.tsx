import * as React from 'react';
import * as styles from './App.treat';

interface AppProps {}

const Hello = (props: AppProps) => (
  <h1 className={`${styles.title}`}>Hello!</h1>
);

export default Hello;
