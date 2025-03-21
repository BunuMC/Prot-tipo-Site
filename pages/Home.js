function Home() {
    try {
        return (
            <div data-name="home-page">
                <section className="hero-section flex items-center justify-center text-white" data-name="hero-section">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">Alimente seu futuro com energia solar</h1>
                        <p className="text-xl mb-8">Soluções de energia sustentável para residências empresas</p>
                        <a href="#products" className="btn-primary">
                            Explorar Produtos
                        </a>
                    </div>
                </section>

                <section className="py-16 bg-white" data-name="calculator-section">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Calcule sua economia</h2>
                        <div className="max-w-3xl mx-auto">
                            <SavingsCalculator />
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white" data-name="features-section">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Por que nos escolher?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="feature-card" data-name="feature-card-efficiency">
                                <i className="fas fa-bolt text-4xl text-blue-500 mb-4"></i>
                                <h3 className="text-xl font-bold mb-2">Alta Eficiência</h3>
                                <p className="text-gray-600">Nossos painéis convertem mais luz solar em eletricidade</p>
                            </div>
                            <div className="feature-card" data-name="feature-card-warranty">
                                <i className="fas fa-shield-alt text-4xl text-blue-500 mb-4"></i>
                                <h3 className="text-xl font-bold mb-2">Garantia de XX anos</h3>
                                <p className="text-gray-600">Proteção de longo prazo para seu investimento</p>
                            </div>
                            <div className="feature-card" data-name="feature-card-installation">
                                <i className="fas fa-tools text-4xl text-blue-500 mb-4"></i>
                                <h3 className="text-xl font-bold mb-2">Instalação Profissional</h3>
                                <p className="text-gray-600">Equipe de especialistas para uma configuração perfeita</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Home page error:', error);
        reportError(error);
        return null;
    }
}
