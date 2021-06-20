import React from 'react';
import PlanetEarth from './images/planet-earth.svg';
import GeologyEarth from './images/geology-earth.png';

const Tooltip = ({ mouse }) => {
  return (
    <img
      src={GeologyEarth}
      alt="Earth from space view"
      style={{
        position: 'absolute',
        left: mouse.x - 162, // mouse position -picture width to be in the center of the tooltip
        top: mouse.y,
      }}
    />
  );
};

const Mouse = props => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });

  const handleMouseMove = event => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <img onMouseMove={handleMouseMove} src={PlanetEarth} alt="Planet Earth" />
      {props.render(mousePosition)}
    </div>
  );
};

const MouseTracker = () => {
  return <Mouse render={mouse => <Tooltip mouse={mouse} />} />;
};

export const App = () => {
  return (
    <div className="App">
      <MouseTracker />
    </div>
  );
};
