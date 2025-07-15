import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import events from '../data/events.json';
import Tooltip from './Tooltip';
import EventSphere from './EventSphere';

const Scene = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {events.map((event, i) => (
        <EventSphere
          key={i}
          event={event}
          onPointerOver={() => setSelectedEvent(event)}
          onPointerOut={() => setSelectedEvent(null)}
        />
      ))}
      {selectedEvent && <Tooltip event={selectedEvent} />}
    </Canvas>
  );
};

export default Scene;
