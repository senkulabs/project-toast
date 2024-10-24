import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ variant, message, id}) => {
        return (
        <li key={id} className={styles.toastWrapper}>
          <Toast handleDismiss={handleDismiss} id={id} variant={variant}>{message}</Toast>
        </li>
        )
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
