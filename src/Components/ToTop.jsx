import { useState, useEffect, useRef } from "react";
import { ChevronUp } from 'lucide-react';

const ToTop = () => {
  const [showButton, setShowButton] = useState(false);
  const observerTarget = useRef(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowButton(!entry.isIntersecting), 
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    {/* hidden div */}
      <div ref={observerTarget} className="h-10"></div> 
      
      {/* to top button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="btn btn-ghost fixed bottom-5 right-10 text-xs"
        >
          TOP <ChevronUp />
        </button>
      )}
    </>
  );
};

export default ToTop;
