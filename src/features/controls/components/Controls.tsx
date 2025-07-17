import React from 'react';
import { useTranslation } from 'react-i18next';
import './Controls.css';

interface ControlsProps {
  onNext: () => void;
  onPrev: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onNext, onPrev }) => {
  const { t } = useTranslation();

  return (
    <div className="controls-container">
      <button onClick={onPrev}>{t('prev')}</button>
      <button onClick={onNext}>{t('next')}</button>
    </div>
  );
};

export default Controls;
