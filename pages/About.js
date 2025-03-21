function About() {
    try {
        return (
            <div className="py-12" data-name="about-page">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">Sobre Nós</h1>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-8" data-name="about-content">
                            <p className="text-lg text-gray-700 mb-6">
                                A SolarTech Solutions está na vanguarda da inovação solar desde XXXX. Estamos comprometidos em fornecer soluções de energia sustentáveis ​​que ajudem nossos clientes e o meio ambiente.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div data-name="mission-section">
                                    <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
                                    <p className="text-gray-700">
                                        Acelerar a transição mundial para energia sustentável por meio de soluções solares acessíveis.
                                    </p>
                                </div>
                                <div data-name="vision-section">
                                    <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
                                    <p className="text-gray-700">
                                        Um mundo onde a energia limpa e renovável é o padrão para abastecer nossas casas e empresas.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t pt-8" data-name="stats-section">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <h3 className="text-3xl font-bold text-blue-500">XXXX+</h3>
                                        <p className="text-gray-600">Instalações</p>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-blue-500">XX%</h3>
                                        <p className="text-gray-600">Índice de satisfação</p>
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-blue-500">XX+</h3>
                                        <p className="text-gray-600">Anos de Experiência</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('About page error:', error);
        reportError(error);
        return null;
    }
}
