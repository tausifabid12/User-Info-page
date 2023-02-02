import React from 'react';

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center space-x-2">
      <div className="w-7 h-7 rounded-full animate-pulse bg-red-600"></div>
      <div className="w-7 h-7 rounded-full animate-pulse bg-red-600"></div>
      <div className="w-7 h-7 rounded-full animate-pulse bg-red-600"></div>
    </div>
  );
};

export default Loading;
