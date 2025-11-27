'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [designChars, setDesignChars] = useState(0);
  const designWord = 'design';

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Typing animation for "design"
  useEffect(() => {
    if (!isLoaded) return;
    
    // Start typing after 2.5s (when "and i" appears + 0.5s delay)
    const startTypingTimeout = setTimeout(() => {
      let charIndex = 0;
      const typingInterval = setInterval(() => {
        charIndex++;
        setDesignChars(charIndex);
        if (charIndex >= designWord.length) {
          clearInterval(typingInterval);
        }
      }, 100); // 100ms per character
    }, 2500);

    return () => clearTimeout(startTypingTimeout);
  }, [isLoaded]);

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col justify-center p-6 md:p-8 md:pt-32 md:pl-16 bg-[#6320EE]">
        <div className="text-left space-y-6 md:space-y-12">
          {/* Main Heading */}
          <div className="space-y-4 md:space-y-6">
            {/* First line: "hi," */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight items-start text-white break-words">
                hi,
              </h1>
            </div>
            
            {/* Second line: "i'm ben worrall" */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isLoaded ? '1s' : '0s' }}>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight items-start text-white break-words">
                i&apos;m ben worrall
              </h1>
            </div>
            
            {/* Third line: "and i design" with chevron */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isLoaded ? '2s' : '0s' }}>
              <p className="text-4xl md:text-6xl lg:text-8xl text-white font-medium flex flex-wrap items-center gap-2 md:gap-4">
                and i <span className="italic">{designWord.slice(0, designChars)}</span>.
                
                {/* Bouncing chevron after "design" completes */}
                {designChars === designWord.length && (
                  <a href="/about" className="inline-block animate-bounce" style={{ transitionDelay: '0.3s' }}>
                    <span className="text-4xl md:text-6xl lg:text-8xl text-white font-bold hover:opacity-70 transition-opacity duration-300 cursor-pointer">
                      ›
                    </span>
                  </a>
                )}
              </p>
            </div>
          </div>

          {/* Featured Work Section - add more details here */}
          <div className="pt-8 md:pt-12 space-y-8">
            {/* More content to follow */}
          </div>
        </div>
      </main>
    </>
  );
}
