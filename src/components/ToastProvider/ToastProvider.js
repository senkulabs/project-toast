import React from 'react';
import useEscape from '../../hooks/use-escape';
import useKeydown from '../../hooks/use-keydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  
  function addToast(toast) {
    const nextToasts = [...toasts, toast];
    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const updatedToasts = toasts.filter(toast => {
      return toast.id !== id;
    });

    setToasts(updatedToasts);
  }

  const handleKeydown = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown('Escape', handleKeydown);
  
  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
