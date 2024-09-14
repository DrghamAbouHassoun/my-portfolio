import { useRef, useEffect } from 'react';

interface SmoothScrollProps {
  children: JSX.Element[] | JSX.Element
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let currentScrollPosition = 0;
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (!isScrolling && scrollContainer) {
        isScrolling = true;
        
        const targetScrollPosition = currentScrollPosition + e.deltaY;
        
        scrollContainer.style.scrollBehavior = 'smooth';
        scrollContainer.scrollTop = targetScrollPosition;
        
        setTimeout(() => {
          currentScrollPosition = scrollContainer.scrollTop;
          isScrolling = false;
          scrollContainer.style.scrollBehavior = 'auto';
        }, 66); // Adjust this value to change the smoothness
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef || undefined}
      style={{
        height: '100vh',
        overflow: 'auto',
        scrollBehavior: 'smooth',
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;