import { Sphere } from '@react-three/drei';

interface EventSphereProps {
  event: {
    year: number;
    event: string;
    description: string;
  };
  onPointerOver: () => void;
  onPointerOut: () => void;
}

/**
 * Renders a sphere representing a historical event.
 */
const EventSphere = ({ event, onPointerOver, onPointerOut }: EventSphereProps) => {
  return (
    <Sphere
      position={[(event.year - 862) / 5, 0, 0]}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <meshStandardMaterial color="orange" />
    </Sphere>
  );
};

export default EventSphere;
