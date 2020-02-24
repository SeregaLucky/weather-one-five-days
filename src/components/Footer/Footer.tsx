import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footerMain}>
    <div className={styles.container}>
      <p className={styles.text}>Footer</p>
    </div>
  </footer>
);

export default Footer;
