import React from 'react';
import { createPortal } from 'react-dom';
import styles from './Loader.module.css';

const LOADER_ROOT: Element | null = document.querySelector('#loader-root');

const Loader = () => {
  if (!LOADER_ROOT) return null;

  return createPortal(
    <div className={styles.backDrop}>
      <div className={styles.loader}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.circle} />
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
          <div className={styles.circle} />
        </div>
      </div>
    </div>,
    LOADER_ROOT,
  );
};

export default Loader;
