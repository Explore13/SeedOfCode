import React, { useEffect, useState } from 'react';

const Alert = ({ type, message, timeout }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);

  return (
    <>
      {isVisible && (
        <div
          className={`bg-${type}-200 text-${type}-800 p-3 mb-4 rounded-md border border-${type}-500`}
        >
          {message}
        </div>
      )}
    </>
  );
};

Alert.defaultProps = {
  type: 'blue',
  timeout: 3000,
};

export default Alert;
