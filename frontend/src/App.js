import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Register from './component/Register';
import Dashboard from './component/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
