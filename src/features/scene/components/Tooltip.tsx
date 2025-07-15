import { Html } from '@react-three/drei';

interface TooltipProps {
  event: {
    year: number;
    event: string;
    description: string;
  };
}

/**
 * Renders a tooltip with information about a historical event.
 */
const Tooltip = ({ event }: TooltipProps) => {
  return (
    <Html>
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          backgroundColor: 'white',
          padding: '5px',
          borderRadius: '3px',
        }}
      >
        <h3>{event.event}</h3>
        <p>{event.description}</p>
      </div>
    </Html>
  );
};

export default Tooltip;
