import React, { useState, useEffect, useRef } from 'react';
import { Calendar, BookMarked, Users } from 'lucide-react';

type StatItemProps = {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
};

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current!);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000; // ms
    const step = 16; // ms (roughly 60fps)
    
    const startTime = performance.now();
    
    const updateCount = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: cubic-bezier
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOut(progress);
      
      setCount(Math.floor(easedProgress * value));
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value); // Ensure we end exactly at the target value
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [value, isVisible]);
  
  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-yellow-400 mb-4">{icon}</div>
      <div className="text-5xl font-bold mb-2 flex items-center text-white">
        {count}
        <span>{suffix}</span>
      </div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatItem
            icon={<Calendar size={48} />}
            value={3}
            label="Years of Experience"
            suffix="+"
          />
          <StatItem
            icon={<BookMarked size={48} />}
            value={14}
            label="Projects Completed"
            suffix="+"
          />
          <StatItem
            icon={<Users size={48} />}
            value={8}
            label="Happy Clients"
            suffix="+"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;