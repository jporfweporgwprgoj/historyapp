import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AnimatedModel from './AnimatedModel';

interface SceneProps {
  currentSlide: number;
}

const Scene: React.FC<SceneProps> = ({ currentSlide }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <AnimatedModel
        url="/path/to/your/model.glb"
        animationName="animation_0"
        play={currentSlide === 1}
      />
    </Canvas>
  );
};

export default Scene;
