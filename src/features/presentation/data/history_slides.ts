import MarkdownIt from 'markdown-it';
import { history } from './history';

const md = new MarkdownIt();

export interface SlideContent {
  title: string;
  content: string;
}

const parsedContent = md.parse(history, {});

const slides: SlideContent[] = [];
let currentSlide: SlideContent | null = null;

for (const token of parsedContent) {
  if (token.type === 'heading_open' && token.tag === 'h2') {
    if (currentSlide) {
      slides.push(currentSlide);
    }
    currentSlide = { title: '', content: '' };
  } else if (token.type === 'heading_close' && token.tag === 'h2') {
    // NO-OP
  } else if (currentSlide) {
    if (token.type === 'inline') {
      if (!currentSlide.title) {
        currentSlide.title = token.content;
      } else {
        currentSlide.content += token.content + '\n';
      }
    } else if (token.content) {
      currentSlide.content += token.content + '\n';
    }
  }
}

if (currentSlide) {
  slides.push(currentSlide);
}

export const historySlides = slides;
