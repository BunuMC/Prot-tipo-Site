// pages/Home.js
function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white-800">Energia Limpa para um Futuro Sustentável</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto text-white-600">
                            Soluções de energia solar de alta qualidade para residências e empresas.
                            Reduza sua conta de energia e contribua para um planeta mais verde.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#calculator" className="btn-primary hover:bg-blue-600 transition-colors duration-300">
                                Calcule sua Economia
                            </a>
                            <a href="#calculator" className="btn-primary hover:bg-blue-600 transition-colors duration-300">
                                Conheça Nossos Produtos
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-black">Por que escolher energia solar?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="feature-card">
                            <div className="icon-container mb-4">
                                <i className="fas fa-leaf text-green-400 text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Energia Limpa</h3>
                            <p>Reduza sua pegada de carbono e contribua para um futuro mais sustentável.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-container mb-4">
                                <i className="fas fa-wallet text-green-400 text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Economia</h3>
                            <p>Reduza drasticamente sua conta de energia e tenha retorno do investimento em alguns anos.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon-container mb-4">
                                <i className="fas fa-chart-line text-green-400 text-4xl"></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Valorização</h3>
                            <p>Aumente o valor do seu imóvel com a instalação de painéis solares de alta eficiência.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section id="calculator" className="calculator-section py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Calcule sua Economia</h2>
                    <p className="text-center mb-12 max-w-2xl mx-auto">
                        Descubra quanto você pode economizar com a instalação de painéis solares em sua residência ou empresa.
                    </p>
                    
                    <SolarCalculator />
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="products-section py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-black mb-12">Nossos Produtos</h2>
                    <div id="products-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Prévia dos produtos */}
                        {[
                            {
                                id: 1,
                                name: "Painel Solar Residencial",
                                description: "Painel de alta eficiência para residências.",
                                price: "R$ 3.391,65",
                                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                            },
                            {
                                id: 2,
                                name: "Painel Solar Industrial",
                                description: "Painel de 600 W para empresas.",
                                price: "R$ 5.090,31",
                                image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                            },
                            {
                                id: 3,
                                name: "Painel Solar Premium",
                                description: "Painel de 800 W com recursos inteligentes.",
                                price: "R$ 7.355,19",
                                image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                            }
                        ].map(product => (
                            <div key={product.id} className="product-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <p className="text-xl font-bold text-blue-500 mb-4">{product.price}</p>
                                <a
                                    href={`#product/${product.id}`}
                                    className="btn-primary w-full text-center block"
                                >
                                    Ver Detalhes
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-black mb-12">O que nossos clientes dizem</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="testimonial-card bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                            </div>
                            <p className="mb-4">"Instalei os painéis solares há 6 meses e já recuperei 30% do investimento. A economia na conta de luz é impressionante!"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                <div>
                                    <p className="font-semibold">Carlos Silva</p>
                                    <p className="text-sm text-gray-600">São Paulo, SP</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                            </div>
                            <p className="mb-4">"Além da economia financeira, estou contribuindo para o meio ambiente. O atendimento e a instalação foram impecáveis."</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                <div>
                                    <p className="font-semibold">Ana Paula Mendes</p>
                                    <p className="text-sm text-gray-600">Rio de Janeiro, RJ</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card bg-white p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star text-yellow-500"></i>
                                <i className="fas fa-star-half-alt text-yellow-500"></i>
                            </div>
                            <p className="mb-4">"Minha empresa reduziu os custos operacionais significativamente após a instalação dos painéis. Recomendo fortemente!"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                                <div>
                                    <p className="font-semibold">Marcelo Costa</p>
                                    <p className="text-sm text-gray-600">Belo Horizonte, MG</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}