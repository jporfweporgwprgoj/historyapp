import React from 'react';

interface SlideProps {
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default Slide;
