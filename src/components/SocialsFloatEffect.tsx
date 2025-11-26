'use client';

import { useRef } from 'react';

export function SocialsFloatEffect() {
  const lastPosRef = useRef({ x: 0, y: 0 });
  const spawnIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const spawnIcon = (clientX: number, clientY: number) => {
    // Create a floating icon
    const icon = document.createElement('div');
    icon.innerHTML = '@';
    icon.style.position = 'fixed';
    icon.style.left = clientX + 'px';
    icon.style.top = clientY + 'px';
    icon.style.fontSize = '24px';
    icon.style.pointerEvents = 'none';
    icon.style.color = '#FFFFFF';
    icon.style.fontWeight = 'bold';
    icon.style.zIndex = '1000';
    icon.style.opacity = '1';
    icon.style.transition = 'all 1.2s ease-out';
    
    // Random rotation between -15 and 15 degrees
    const rotation = Math.random() * 30 - 15;
    icon.style.transform = `rotate(${rotation}deg)`;

    document.body.appendChild(icon);

    // Animate the icon floating upward and fading out
    setTimeout(() => {
      icon.style.transform = `translateY(-120px) rotate(${rotation}deg)`;
      icon.style.opacity = '0';
    }, 10);

    // Remove the icon after animation completes
    setTimeout(() => {
      icon.remove();
    }, 1200);
  };

  const handleMouseEnter = (e: React.MouseEvent<SVGAElement>) => {
    const element = e.currentTarget as SVGAElement;
    
    const handleMouseMove = (moveEvent: MouseEvent) => {
      lastPosRef.current = { x: moveEvent.clientX, y: moveEvent.clientY };
    };

    element.addEventListener('mousemove', handleMouseMove);

    // Spawn icons at reduced frequency (every 300ms)
    spawnIntervalRef.current = setInterval(() => {
      if (lastPosRef.current.x > 0 && lastPosRef.current.y > 0) {
        spawnIcon(lastPosRef.current.x, lastPosRef.current.y);
      }
    }, 300);
  };

  const handleMouseLeave = () => {
    if (spawnIntervalRef.current) {
      clearInterval(spawnIntervalRef.current);
      spawnIntervalRef.current = null;
    }
  };

  return { handleMouseEnter, handleMouseLeave };
}
