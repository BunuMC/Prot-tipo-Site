function Navbar() {
    try {
        const [currentPath, setCurrentPath] = React.useState(window.location.hash || '#home');

        React.useEffect(() => {
            const handleHashChange = () => setCurrentPath(window.location.hash || '#home');
            window.addEventListener('hashchange', handleHashChange);
            return () => window.removeEventListener('hashchange', handleHashChange);
        }, []);

        const navLinks = [
            { path: '#home', label: 'Home' },
            { path: '#products', label: 'Produtos' },
            { path: '#about', label: 'Sobre Nós' },
            { path: '#contact', label: 'Contate-nos' }
        ];

        return (
            <nav className="navbar" data-name="navbar">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center" data-name="navbar-brand">
                            <i className="fas fa-solar-panel text-2xl text-blue-500 mr-2"></i>
                            <span className="text-xl font-bold text-gray-800">SolarTech</span>
                        </div>
                        <div className="flex space-x-4" data-name="navbar-links">
                            {navLinks.map(link => (
                                <a
                                    key={link.path}
                                    href={link.path}
                                    className={`nav-link ${currentPath === link.path ? 'active' : ''}`}
                                    data-name={`navbar-link-${link.label.toLowerCase()}`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
