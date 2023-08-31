import React from 'react';

interface BlurredTextProps {
  text: string;
}

const BlurredText: React.FC<BlurredTextProps> = ({ text }) => {
  return (
    <>
      {text.split('').map((char, index) => (
        <span key={index} className="blurred-letter">
          {char}
        </span>
      ))}
    </>
  );
}

export default BlurredText;
