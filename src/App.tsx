import * as React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from "@/pages/ProductsPage";
import ThankYouPage from "@/pages/ThankYouPage";

const App: React.FC = () => {
    // Simple hash-based routing
    const [currentPage, setCurrentPage] = useState(window.location.hash.replace('#', '') || 'home');

    useEffect(() => {
        const handleHashChange = () => {
            const page = window.location.hash.replace('#', '') || 'home';
            setCurrentPage(page);
            window.scrollTo(0, 0);
        };
        // Set initial page from hash
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderPage = () => {
        // Handle thank-you page
        if (currentPage === 'thank-you') {
            return <ThankYouPage />;
        }
        
        // Handle other pages with hash-based routing
        switch (currentPage) {
            case 'about':
                return <AboutPage />;
            case 'services':
                return <ServicesPage />;
            case 'contact':
                return <ContactPage />;
            case 'products':
                return <ProductsPage />;
            case 'home':
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="bg-slate-900 font-sans">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
