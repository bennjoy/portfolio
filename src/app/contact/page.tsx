'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import { MailFloatEffect } from '@/components/MailFloatEffect';
import { LinkedInFloatEffect } from '@/components/LinkedInFloatEffect';
import { SocialsFloatEffect } from '@/components/SocialsFloatEffect';

export default function Contact() {
  const { containerRef, handleMouseEnter, handleMouseLeave } = MailFloatEffect();
  const { handleMouseEnter: handleLinkedInEnter, handleMouseLeave: handleLinkedInLeave } = LinkedInFloatEffect();
  const { handleMouseEnter: handleSocialsEnter, handleMouseLeave: handleSocialsLeave } = SocialsFloatEffect();

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center p-8 pt-32">
        <div className="flex flex-col items-center justify-center space-y-8 relative">
          {/* Business Card Image with Clickable Overlay */}
          <div className="w-full max-w-2xl relative group transition-transform duration-300 hover:scale-105">
            <Image
              src="/businesscard.png"
              alt="worra design studio business card"
              width={800}
              height={500}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
              className="w-full h-auto rounded-lg"
            />
            
            {/* SVG Overlay for Clickable Areas */}
            <svg
              ref={containerRef}
              className="absolute top-0 left-0 w-full h-full cursor-pointer"
              viewBox="0 0 800 500"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Email Link */}
              <a href="mailto:ben@worra.me" onMouseEnter={handleMouseEnter as any} onMouseLeave={handleMouseLeave}>
                <rect
                  x="230"
                  y="225"
                  width="350"
                  height="25"
                  fill="transparent"
                />
              </a>
              
              {/* LinkedIn Link */}
              <a href="https://www.linkedin.com/in/benrhysworrall" target="_blank" rel="noopener noreferrer" onMouseEnter={handleLinkedInEnter as any} onMouseLeave={handleLinkedInLeave}>
                <rect
                  x="230"
                  y="255"
                  width="350"
                  height="25"
                  fill="transparent"
                />
              </a>
              
              {/* Socials Link */}
              <a href="https://x.com/benworra" target="_blank" rel="noopener noreferrer" onMouseEnter={handleSocialsEnter as any} onMouseLeave={handleSocialsLeave}>
                <rect
                  x="230"
                  y="285"
                  width="350"
                  height="25"
                  fill="transparent"
                />
              </a>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}
