import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/navigation'


const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
