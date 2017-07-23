import React from 'react';
import Scene from 'components/engine/Scene';
import Ground from 'components/primitives/Ground';
import Sphere from 'components/primitives/Sphere';
import HemisphericalLight from 'components/primitives/HemisphericalLight';
import FreeCamera from 'components/primitives/FreeCamera';

const HomePage = () => (
  <Scene clearColor={({ r: 0, g: 1, b: 1 })}>
    <HemisphericalLight direction={({ x: 0, y: 1, z: -1 })} intensity={1} />
    <Ground width={6} height={12} />
    <Sphere radius={1.5} position={({ x: 0, y: 2, z: 0 })} />
    <FreeCamera position={({ x: 0, y: 5, z: -10 })} target={({ x: 0, y: 0, z: 0 })} />
  </Scene>
);

export default HomePage;
