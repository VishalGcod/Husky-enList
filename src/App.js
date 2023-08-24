import React from 'react';

import ImageGame from './icons/imagename.jpeg';

import { Image } from './icons/image';

import BackgroundImg from './icons/bg.svg';
import ExampleComponent, { Memo } from './useMemo';

function App() {
  return (
    <div>
      <h1>Hello, React App!</h1>
      <img src={ImageGame} alt="Random1" />
      <Image />
      <img src={BackgroundImg} alt="Random Image2" />
      <ExampleComponent />
      <Memo/>
    </div>
  );
}

export default App;
