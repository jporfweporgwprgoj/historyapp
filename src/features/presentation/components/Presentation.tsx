import React, { useEffect, forwardRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import Slide from './Slide';

interface PresentationProps {
  // empty
}

const Presentation = forwardRef<Reveal.Api, PresentationProps>((props, ref) => {
  useEffect(() => {
    const deck = new Reveal();
    deck.initialize({
      controls: false, // We are using custom controls
      progress: true,
      history: true,
      center: true,
      transition: 'fade',
      backgroundTransition: 'fade',
    });
    if (ref) {
      if (typeof ref === 'function') {
        ref(deck);
      } else {
        ref.current = deck;
      }
    }
  }, [ref]);

  return (
    <div className="reveal">
      <div className="slides">
        <Slide>
          <h2>Добро пожаловать!</h2>
          <p>Интерактивное путешествие по истории.</p>
        </Slide>
        <Slide>
          <h2>Слайд 2</h2>
          <p>Содержимое второго слайда.</p>
        </Slide>
      </div>
    </div>
  );
});

export default Presentation;
