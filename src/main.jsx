import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from "./components/Header/header.jsx";
import Home from "./Home.jsx";
import Footer from "./components/Footer/footer.jsx";
import ErrorPage from "./components/Error/error.jsx";
import {ClickContextProvider} from "./utils/context/context.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <ClickContextProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            </ClickContextProvider>
            <Footer />
        </Router>
    </React.StrictMode>
);
