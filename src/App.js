import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoginBox from './pages/login';
import RegisterBox from './pages/register';
import ProjectForm from './pages/projectForm';
import Navbar from "./components/navbar";
import SideNav from "./components/sideNav";
import Project from './pages/project';
import "./assets/css/adminlte.min.css";
import ProjectEditForm from './pages/projectEdit';
import ProjectView from "./pages/projectView"


export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

function AppContent() {
    let location = useLocation();

    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    if (isLoginPage || isRegisterPage) {
        return (
            <Routes>
                <Route path="/login" element={<LoginBox />} />
                <Route path="/register" element={<RegisterBox />} />
            </Routes>
        );
    }

    return (
        <div>
            <SideNav />
            <Navbar />
            <div className="content" style={{ padding: '70px 10px 30px 10px' }}>
                <Routes>
                    <Route path="/addProject" element={<ProjectForm />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/editProject" element={<ProjectEditForm />} />
                    <Route path="/viewProject" element={<ProjectView />} />
                    {/* Autres routes avec Navbar et SideNav */}
                </Routes>
            </div>
        </div>
    );
}
