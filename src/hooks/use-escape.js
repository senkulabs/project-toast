import React from "react";

function useEscape(callback) {
    React.useEffect(() => {
        function handleKeydown(event) {
          if (event.code === 'Escape') {
            console.log('escape pressed!');
            callback();
          }
        }
    
        window.addEventListener('keydown', handleKeydown);
    
        return () => {
          window.removeEventListener('keydown', handleKeydown);
        }
    }, [callback]);
}

export default useEscape;