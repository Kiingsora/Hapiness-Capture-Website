import React, { useRef, useEffect } from 'react';
import styles from './CustomScrollbar.module.css';

interface CustomScrollbarProps {
  children: React.ReactNode;
  className?: string;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ children, className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollElement.scrollLeft += e.deltaY;
    };

    scrollElement.addEventListener('wheel', handleWheel);

    return () => {
      scrollElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className={`${styles.customScrollbar} ${className || ''}`} ref={scrollRef}>
      {children}
    </div>
  );
};

export default CustomScrollbar;
