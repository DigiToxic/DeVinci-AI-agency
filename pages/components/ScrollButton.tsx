import { ReactNode } from 'react';

interface ScrollButtonProps {
  targetId: string;
  children: ReactNode;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId, children }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default ScrollButton;
