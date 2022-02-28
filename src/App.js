import logo from './logo.svg';
import './App.css';
import makeGuy from "./three";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    makeGuy()
  });
  return (
    <div id='animation'>siema: sfereczko i stożeczko</div>
  );
}

export default App;
