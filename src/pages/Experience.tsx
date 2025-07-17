import { useRef, useState, useEffect } from 'react';
import Presentation from '../features/presentation/components/Presentation';
import Scene from '../features/scene/components/Scene';
import Controls from '../features/controls/components/Controls';
import Reveal from 'reveal.js';

const Experience = () => {
  const revealRef = useRef<Reveal.Api>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const onSlideChanged = (event: any) => {
      setCurrentSlide(event.indexh);
    };

    if (revealRef.current) {
      revealRef.current.on('slidechanged', onSlideChanged);
    }

    return () => {
      if (revealRef.current) {
        revealRef.current.off('slidechanged', onSlideChanged);
      }
    };
  }, []);

  const onNext = () => {
    if (revealRef.current) {
      revealRef.current.next();
    }
  };

  const onPrev = () => {
    if (revealRef.current) {
      revealRef.current.prev();
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Presentation ref={revealRef} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <Scene currentSlide={currentSlide} />
      </div>
      <Controls onNext={onNext} onPrev={onPrev} />
    </div>
  );
};

export default Experience;
