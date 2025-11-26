'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export function ScrollScrubAnimation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress as a percentage of total scrollable height
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map progress (0-1) to rotation angle (0-360 degrees, back and forth)
  // Goes from 0° to 360° as you scroll

  const rotation = (180 + (scrollProgress * 6 * 70));
  const rot1 = (180 + (1))
  // FIGURE THIS OUT!!!!!!!!!!!!!!
  
  // Check if animation is complete
  const isAnimationComplete = scrollProgress >= (32.5 / 36);
  
  useEffect(() => {
    if (isAnimationComplete) {
      console.log('Animation is now complete!');
    }
  }, [isAnimationComplete]);
  
  const handleLogoClick = () => {
    if (isAnimationComplete) {
      router.push('/home');
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-[#6320EE] z-10 pointer-events-none">
        {/* Scroll indicator */}
        {!isAnimationComplete && (
          <div 
            className="fixed center pl-24 text-white text-sm transition-all duration-300"
            style={{
              top: `calc(48% - ${scrollProgress * 100}px)`,
              opacity: 1 - scrollProgress * 2, // Fades out as you scroll
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <span>scroll</span>
              <span className="animate-bounce">↓</span>
            </div>
          </div>
        )}
        
        <svg
          width="300"
          height="300"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl transition-opacity duration-300"
          style={{
            opacity: isHovering && isAnimationComplete ? 0.7 : 1,
          }}
        >
        {/*Default White Line*/}
        <g transform={`translate(46, 50)`}>
            <line
              x1="-14"
              y1="0"
              x2="-7"
              y2="0"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="square"
            />
            <line
              x1="-8"
              y1="0"
              x2="-4"
              y2="0"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
        </g>
        {/*Phase 1*/}
        {scrollProgress < 1/6 && (
          <g transform={`translate(43, 50) rotate(${rotation})`}>
            {/* A line rotating from one end */}
            <line
              x1="0"
              y1="0"
              x2="13"
              y2="0"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Center dot */}
            {/* <circle cx="0" cy="0" r="4" fill="white" /> */}
          </g>
        )}
        {scrollProgress >= 1/6 && (
          <g transform={`translate(43, 50) rotate(250)`}>
            {/* A line rotating from one end */}
            <line
              x1="0"
              y1="0"
              x2="13"
              y2="0"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Center dot */}
            {/* <circle cx="0" cy="0" r="4" fill="white" /> */}
          </g>
        )}
        {/*Phase 2*/}
        {scrollProgress >= 1/6 && scrollProgress < 10.5/36 && (
          <g transform={`translate(39, 38) rotate(-${rotation + 38})`}>
            {/* A line rotating from the other end */}
            <line
              x1="0"
              y1="0"
              x2="12"
              y2="0"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Center dot */}
            {/* <circle cx="0" cy="0" r="4" fill="white" /> */}
          </g>
        )}
        {scrollProgress >= 10.5/36 && (
          <g transform={`translate(39, 38) rotate(20)`}>
            {/* A line rotating from the other end */}
            <line
              x1="0"
              y1="0"
              x2="11.5"
              y2="0"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Center dot */}
            {/* <circle cx="0" cy="0" r="4" fill="white" /> */}
          </g>
        )}
        {/*Phase 3*/}
        {scrollProgress >= 10.5/36 && scrollProgress < 22.5/36 && (
          <g transform={`translate(50, 42) rotate(${rotation - 100})`}>
            {/* A line rotating from the other end */}
            <line
              x1="12.5"
              y1="0"
              x2="0"
              y2="0"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Center dot */}
            {/* <circle cx="0" cy="0" r="4" fill="white" /> */}
          </g>
        )}
        {scrollProgress >= 16.3/36 && (
        <g transform={`translate(50, 42) rotate(-90)`}>
  
            <line
              x1="10"
              y1="0"
              x2="2"
              y2="0"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="square"
            />
          
          </g>
        )}

        {/*Phase 4*/}
        {scrollProgress >= 22.5/36 && (
        <g transform={`translate(50.5, 42) rotate(-20)`}>
  
            <line
              x1="12"
              y1="0"
              x2="0"
              y2="0"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          
          </g>
        )}
        {scrollProgress >= 22.5/36 && scrollProgress < 26.5/36 && (
          <g transform={`translate(62, 38) rotate(${- rotation + 240})`}>
            {/* A line rotating from the other end */}
            <line
              x1="12.5"
              y1="0"
              x2="0"
              y2="0"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Center dot */}
            {/* <circle cx="0" cy="0" r="4" fill="white" /> */}
          </g>
        )}

        {/*Phase 5*/}
        {scrollProgress >= 26.5/36 && (
          <g transform={`translate(62, 38) rotate(110)`}>
            {/* A line rotating from the other end */} 
            <line
              x1="12.8"
              y1="0"
              x2="0"
              y2="0"
              stroke="white" 
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        )}
        {scrollProgress >= 26.5/36 && scrollProgress < 32.5/36 &&(
          <g transform={`translate(57.5, 50) rotate(${rotation - 200})`}>
            {/* A line rotating from the other end */} 
            <line
              x1="11.5"
              y1="0"
              x2="2.5"
              y2="0"
              stroke="white" 
              strokeWidth="4"
              strokeLinecap="square"
            />
          </g>
        )}

        {/*Phase 6*/}
        {scrollProgress >= 32.5/36 && (
          <g transform={`translate(57.5, 50) rotate(0)`}>
            {/* A line rotating from the other end */} 
            <line
              x1="11.5"
              y1="0"
              x2="2.5"
              y2="0"
              stroke="white" 
              strokeWidth="4"
              strokeLinecap="square"
            />
          </g>
        )}
        </svg>
      </div>
      
      {/* Separate clickable overlay on top */}
      {isAnimationComplete && (
        <Link href="/home">
          <div 
            className="fixed z-20 flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{ 
              pointerEvents: 'auto',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -75%)',
              width: '120px',
              height: '80px'
            }}
          >
            {/* Invisible clickable area covering the logo */}
          </div>
        </Link>
      )}
    </>
  );
}
