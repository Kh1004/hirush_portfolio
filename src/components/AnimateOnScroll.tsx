'use client';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimateOnScroll({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay === 1 ? 'animate-fade-in-up-delay-1' :
    delay === 2 ? 'animate-fade-in-up-delay-2' :
    delay === 3 ? 'animate-fade-in-up-delay-3' :
    'animate-fade-in-up';

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? delayClass : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}
