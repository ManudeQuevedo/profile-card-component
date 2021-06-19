import React from 'react';
import Card from './Components/Card/Card';
import { ReactComponent as BgPatternTop } from './images/bgPatternTop.svg';
import { ReactComponent as BgPatternBottom } from './images/bgPatternBottom.svg';
import './App.css';

function App() {
   return (
      <div className='App'>
         <h1 className='App-title'>Hello from React World!</h1>
         <Card className='Card' />
      </div>
   );
}

export default App;
