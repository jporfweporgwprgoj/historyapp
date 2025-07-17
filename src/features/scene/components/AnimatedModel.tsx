import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

interface AnimatedModelProps {
  url: string;
  animationName: string;
  play: boolean;
}

const AnimatedModel: React.FC<AnimatedModelProps> = ({ url, animationName, play }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (play) {
      actions[animationName]?.play();
    } else {
      actions[animationName]?.stop();
    }
  }, [play, actions, animationName]);

  return <primitive ref={group} object={scene} />;
};

export default AnimatedModel;
