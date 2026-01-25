import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DataStreams: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createDataStream = () => {
      const stream = document.createElement('div');
      stream.className = 'absolute h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-60';
      stream.style.width = `${Math.random() * 200 + 100}px`;
      stream.style.left = `${Math.random() * 100}%`;
      stream.style.top = `${Math.random() * 100}%`;

      container.appendChild(stream);

      gsap.fromTo(stream,
        {
          x: '-100%',
          opacity: 0
        },
        {
          x: '100vw',
          opacity: 0.7,
          duration: Math.random() * 3 + 2,
          ease: 'none',
          onComplete: () => {
            stream.remove();
          }
        }
      );
    };

    const createWaveform = () => {
      const waveform = document.createElement('div');
      waveform.className = 'absolute flex items-center space-x-1';
      waveform.style.left = `${Math.random() * 100}%`;
      waveform.style.top = `${Math.random() * 100}%`;

      // Create waveform bars
      for (let i = 0; i < 20; i++) {
        const bar = document.createElement('div');
        bar.className = 'w-px bg-neon-green opacity-40';
        bar.style.height = `${Math.random() * 20 + 5}px`;
        waveform.appendChild(bar);
      }

      container.appendChild(waveform);

      gsap.fromTo(waveform,
        {
          x: '-100%',
          opacity: 0
        },
        {
          x: '100vw',
          opacity: 0.8,
          duration: Math.random() * 4 + 3,
          ease: 'none',
          onComplete: () => {
            waveform.remove();
          }
        }
      );
    };

    const createParticleBurst = () => {
      const burst = document.createElement('div');
      burst.className = 'absolute w-2 h-2 rounded-full';
      burst.style.background = `radial-gradient(circle, ${['#00ffff', '#00ff00', '#8000ff'][Math.floor(Math.random() * 3)]} 0%, transparent 70%)`;
      burst.style.left = `${Math.random() * 100}%`;
      burst.style.top = `${Math.random() * 100}%`;

      container.appendChild(burst);

      gsap.fromTo(burst,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 1,
          opacity: 0,
          duration: 2,
          ease: 'power2.out',
          onComplete: () => {
            burst.remove();
          }
        }
      );
    };

    // Create streams periodically
    const streamInterval = setInterval(createDataStream, 2000 + Math.random() * 3000);
    const waveformInterval = setInterval(createWaveform, 4000 + Math.random() * 4000);
    const burstInterval = setInterval(createParticleBurst, 1000 + Math.random() * 2000);

    return () => {
      clearInterval(streamInterval);
      clearInterval(waveformInterval);
      clearInterval(burstInterval);

      // Clean up any remaining elements
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
    />
  );
};

export default DataStreams;
