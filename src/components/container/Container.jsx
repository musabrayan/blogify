import React from 'react';

function Container({ children }) {
  return (
    <div className="bg-bg text-text p-4 md:p-6 lg:p-8 rounded-lg w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

export default Container;