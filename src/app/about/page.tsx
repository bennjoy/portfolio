'use client';

import Header from '@/components/Header';
import { Girassol } from 'next/font/google';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const girassol = Girassol({ weight: '400', subsets: ['latin'] });

export default function AboutPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offset for each section based on scroll progress
  const getParallaxOffset = (sectionIndex: number) => {
    // Each section appears at different scroll points with parallax effect
    const offset = Math.max(0, scrollProgress - sectionIndex * 0.2) * 100;
    return Math.min(offset, 100);
  };

  // Calculate opacity based on how centered the section is in viewport
  const getSectionOpacity = (sectionIndex: number) => {
    const sectionStart = sectionIndex * 0.2;
    const sectionMiddle = sectionStart + 0.1;
    
    if (scrollProgress < sectionStart) return 0;
    if (scrollProgress < sectionMiddle) {
      return (scrollProgress - sectionStart) / 0.1;
    }
    return 1;
  };

  const sections = [
    {
      title: "who i am",
      content: "I'm ben and I design things. Also I have a masters degree in robotics"
    },
    {
      title: "what i do",
      content: "With a focus on clean design and thoughtful interactions, I help brands and individuals tell their stories through design. My work spans visual design, web design, and interactive experiences."
    },
    {
      title: "my passion",
      content: "When I'm not designing, you can find me exploring new design trends, experimenting with creative coding, or working on passion projects that push the boundaries of web design."
    },
    {
      title: "my approach",
      content: "I believe in simplicity, elegance, and purpose. Every design decision should serve a reason. I'm committed to creating work that is not just beautiful, but also functional and meaningful."
    }
  ];

  return (
    <div className="min-h-screen bg-[#6320EE] text-white">
      <Header />
      <main className="relative">
        {/* Title Section */}
        <section className="min-h-screen flex items-center justify-center px-4 relative">
          <div className="max-w-4xl w-full text-center">
            {/* Scroll indicator */}
            <div
              className="fixed flex flex-col items-center"
              style={{
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: Math.max(0, 1 - scrollProgress * 10),
                pointerEvents: 'none'
              }}
            >
              <p className="text-white text-sm mb-2">scroll</p>
              <p className="text-white text-lg animate-bounce">↓</p>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8">
              about me
            </h1>
          </div>
        </section>

        {/* Parallax Sections */}
        {sections.map((section, index) => (
          <section
            key={index}
            className="min-h-screen flex items-center justify-center px-4 relative"
            style={{
              opacity: getSectionOpacity(index),
              transform: `translateY(${Math.max(0, (1 - getParallaxOffset(index) / 100) * 50)}px)`,
              transition: 'opacity 0.3s ease-out'
            }}
          >
            {/* Floating image for first section */}
            {index === 0 && (
              <div
                className="absolute left-0 md:left-[250px] flex items-center justify-center cursor-pointer"
                style={{
                  width: '200px',
                  height: '200px',
                  animation: 'float 6s ease-in-out infinite'
                }}
                onMouseEnter={() => setHoveredImageIndex(0)}
                onMouseLeave={() => setHoveredImageIndex(null)}
              >
                <style>{`
                  @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                  }
                `}</style>
                <div
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))',
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transform: hoveredImageIndex === 0 ? 'scale(1.15)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <Image
                    src="/degree.png"
                    alt="degree"
                    fill
                    priority
                    sizes="200px"
                    style={{
                      objectFit: 'contain'
                    }}
                  />
                </div>
              </div>
            )}

            <div className="max-w-4xl w-full md:ml-[300px]">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">{section.title}</h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed">
                {section.content}
              </p>
            </div>
          </section>
        ))}

        {/* Extra space for scrolling */}
        <div className="min-h-screen" />
      </main>
    </div>
  );
}
