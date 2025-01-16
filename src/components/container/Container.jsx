import React from 'react';

function Container({ children }) {
  return <div className='bg-bg text-text p-4 rounded-lg w-full max-w-8xl mx-auto'>{children}</div>;
}

export default Container;