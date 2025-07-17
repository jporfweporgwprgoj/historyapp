import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedModel from './AnimatedModel';
import { SlideData } from '../../presentation/data/slides';

interface SceneProps {
  slide: SlideData;
}

const Scene: React.FC<SceneProps> = ({ slide }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {slide.modelUrl && (
        <AnimatedModel
          url={slide.modelUrl}
          animationName={slide.animationName}
          play={true}
        />
      )}
    </Canvas>
  );
};

export default Scene;
