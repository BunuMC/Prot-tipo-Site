function Footer() {
    try {
        return (
            <footer className="bg-gray-800 text-white py-8" data-name="footer">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div data-name="footer-company">
                            <h3 className="text-xl font-bold mb-4">SolarTech Solutions</h3>
                            <p className="text-gray-400">
                                Fornecendo soluções de energia sustentável para um futuro mais brilhante.
                            </p>
                        </div>
                        <div data-name="footer-links">
                            <h3 className="text-xl font-bold mb-4">Links de fácil acesso</h3>
                            <ul className="space-y-2">
                                <li><a href="#products" className="text-gray-400 hover:text-white">Produtos</a></li>
                                <li><a href="#about" className="text-gray-400 hover:text-white">Sobre Nos</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white">Contato</a></li>
                            </ul>
                        </div>
                        <div data-name="footer-contact">
                            <h3 className="text-xl font-bold mb-4">Contate-nos</h3>
                            <div className="space-y-2 text-gray-400">
                                <p><i className="fas fa-phone mr-2"></i> (XX) XXXXX-XXXX</p>
                                <p><i className="fas fa-envelope mr-2"></i> emaildeteste@usuario.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 XxxxxXxxx Xxxxxxxx. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
