import React from 'react';
import './App.css';
import { NavigationBar } from './components/header/navigation-bar/navigation-bar';
import { Container } from './components/header/container/container';

function App() {
  return (
    <div>
      <NavigationBar/>
      <Container/>
    </div>
  );
}

export default App;