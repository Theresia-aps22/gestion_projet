import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginBox from './pages/login';
import RegisterBox from './pages/register';
import ProjetForm from './pages/projetForm';
import Navbar from "./components/navbar";
import SideNav from "./components/sideNav";

export default function App() {
    return (
        <BrowserRouter>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <Navbar />
                    <SideNav />
                </div>
            </div>
            <Routes>
                <Route path="/register" element={<RegisterBox />} />
                <Route path="/login" element={<LoginBox />} />
                <Route path="/projet " element={<ProjetForm />} />
            </Routes>
        </BrowserRouter>
    );
}
