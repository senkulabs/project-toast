import React from 'react';

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
  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
