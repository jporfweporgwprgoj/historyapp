import { useEffect, forwardRef, useImperativeHandle, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import Slide from './Slide';
import { SlideContent } from '../data/history_slides';

interface PresentationProps {
  slides: SlideContent[];
}

const Presentation = forwardRef<Reveal.Api, PresentationProps>((props, ref) => {
  const deckRef = useRef<Reveal.Api>(null);

  useImperativeHandle(ref, () => deckRef.current as Reveal.Api, []);

  useEffect(() => {
    const deck = new Reveal(deckRef.current, {
      controls: false,
      progress: true,
      history: true,
      center: true,
      transition: 'fade',
      backgroundTransition: 'fade',
    });
    deck.initialize();
  }, []);

  return (
    <div className="reveal" ref={deckRef as React.RefObject<HTMLDivElement>}>
      <div className="slides">
        {props.slides.map((slide, index) => (
          <Slide key={index}>
            <h2>{slide.title}</h2>
            <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
              <div dangerouslySetInnerHTML={{ __html: slide.content }} />
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
});

export default Presentation;
