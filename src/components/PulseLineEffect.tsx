'use client';

import { useRef, useState } from 'react';

export function PulseLineEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const spawnIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const spawnLine = (centerX: number, centerY: number) => {
    // Create a line element
    const line = document.createElement('div');
    line.style.position = 'fixed';
    line.style.left = centerX + 'px';
    line.style.top = centerY + 'px';
    line.style.width = '2px';
    line.style.height = '40px';
    line.style.backgroundColor = '#FFFFFF';
    line.style.pointerEvents = 'none';
    line.style.zIndex = '999';
    line.style.opacity = '0.8';
    line.style.transformOrigin = 'center top';
    line.style.transition = 'all 0.8s ease-out';

    // Random angle for the line to radiate outward
    const angle = Math.random() * 360;
    line.style.transform = `rotate(${angle}deg) translateY(0)`;

    document.body.appendChild(line);

    // Animate the line expanding outward and fading
    setTimeout(() => {
      line.style.transform = `rotate(${angle}deg) translateY(100px)`;
      line.style.opacity = '0';
    }, 10);

    // Remove the line after animation
    setTimeout(() => {
      line.remove();
    }, 800);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);

    // Add pulsing scale animation to the image
    if (imageRef.current) {
      imageRef.current.style.animation = 'pulse 0.6s ease-in-out infinite';
    }

    // Spawn lines at intervals while hovering
    spawnIntervalRef.current = setInterval(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        spawnLine(centerX, centerY);
      }
    }, 250);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    
    // Remove pulsing animation
    if (imageRef.current) {
      imageRef.current.style.animation = 'none';
    }

    if (spawnIntervalRef.current) {
      clearInterval(spawnIntervalRef.current);
      spawnIntervalRef.current = null;
    }
  };

  return { containerRef, imageRef, handleMouseEnter, handleMouseLeave };
}
