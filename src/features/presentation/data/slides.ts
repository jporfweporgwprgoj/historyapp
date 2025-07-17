export interface SlideData {
  title: string;
  content: string;
  modelUrl?: string;
  animationName?: string;
}

export const slides: SlideData[] = [
  {
    title: 'Добро пожаловать!',
    content: 'Интерактивное путешествие по истории.',
  },
  {
    title: 'Слайд 2',
    content: 'Содержимое второго слайда.',
    modelUrl: '/path/to/your/model.glb',
    animationName: 'animation_0',
  },
];
