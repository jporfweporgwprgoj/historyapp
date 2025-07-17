import React from 'react';
import { useTranslation } from 'react-i18next';

interface ControlsProps {
  onNext: () => void;
  onPrev: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onNext, onPrev }) => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        zIndex: 10,
        pointerEvents: 'all',
      }}
    >
      <button onClick={onPrev}>{t('prev')}</button>
      <button onClick={onNext}>{t('next')}</button>
    </div>
  );
};

export default Controls;
