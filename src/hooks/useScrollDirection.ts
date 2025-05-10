import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down' | null;

export const useScrollDirection = (
  threshold = 10,
  initialDirection: ScrollDirection = null
) => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(initialDirection);
  const [scrolledToTop, setScrolledToTop] = useState<boolean>(true);
  const [prevOffset, setPrevOffset] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Check if scrolled to top
      if (scrollY <= 0) {
        setScrolledToTop(true);
        setScrollDirection(null);
        setPrevOffset(scrollY);
        return;
      }
      
      // Set scrolledToTop to false as we're not at the top anymore
      setScrolledToTop(false);
      
      // Determine scroll direction
      if (Math.abs(scrollY - prevOffset) >= threshold) {
        const newScrollDirection = scrollY > prevOffset ? 'down' : 'up';
        setScrollDirection(newScrollDirection);
        setPrevOffset(scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, prevOffset]);

  return { scrollDirection, scrolledToTop };
};