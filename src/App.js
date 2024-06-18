import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterBox from './pages/register';
import LoginBox from './pages/login';
import NavBar from './components/navbar';

export default function App() {
    return (
        <Router>
                <NavBar />
                <Route path="/register" component={RegisterBox} />
                <Route path="/login" component={LoginBox} />
        </Router>
    );
}
