function App() {
    try {
        const [currentPage, setCurrentPage] = React.useState(window.location.hash || '#home');

        React.useEffect(() => {
            const handleHashChange = () => setCurrentPage(window.location.hash || '#home');
            window.addEventListener('hashchange', handleHashChange);
            return () => window.removeEventListener('hashchange', handleHashChange);
        }, []);

        const renderPage = () => {
            switch (currentPage) {
                case '#products':
                    return <Products />;
                case '#about':
                    return <About />;
                case '#contact':
                    return <Contact />;
                case '#admin': // Nova rota para a página de administração
                    return <Admin />;
                default:
                    return <Home />;
            }
        };

        return (
            <div data-name="app">
                <Navbar />
                <main>
                    {renderPage()}
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);