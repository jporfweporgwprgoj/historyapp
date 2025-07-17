import { useRef, useState, useEffect } from 'react';
import Presentation from '../features/presentation/components/Presentation';
import Scene from '../features/scene/components/Scene';
import Controls from '../features/controls/components/Controls';
import Reveal from 'reveal.js';
import { slides } from '../features/presentation/data/slides';
import './Experience.css';

const Experience = () => {
  const revealRef = useRef<Reveal.Api>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const onSlideChanged = (event: { indexh: number }) => {
      setCurrentSlide(event.indexh);
    };

    const deck = revealRef.current;
    if (deck) {
      deck.on('slidechanged', onSlideChanged);
    }

    return () => {
      if (deck) {
        deck.off('slidechanged', onSlideChanged);
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
    <div className="experience-container">
      <Presentation ref={revealRef} slides={slides} />
      <div className="scene-container">
        <Scene slide={slides[currentSlide]} />
      </div>
      <Controls onNext={onNext} onPrev={onPrev} />
    </div>
  );
};

export default Experience;
