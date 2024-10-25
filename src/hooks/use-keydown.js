import React from "react";

function useKeydown(key, callback) {
    React.useEffect(() => {
        function handleKeydown(event) {
          if (event.code === key) {
            console.log('escape pressed!');
            callback();
          }
        }
    
        window.addEventListener('keydown', handleKeydown);
    
        return () => {
          window.removeEventListener('keydown', handleKeydown);
        }
    }, [key, callback]);
}

export default useKeydown;