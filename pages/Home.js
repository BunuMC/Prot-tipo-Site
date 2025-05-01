function Home() {
  try {
      const [heroImage, setHeroImage] = React.useState('/api/placeholder/1200/600');
      
      // Hero Section
      const HeroSection = () => (
          <div className="hero-section flex items-center justify-center text-center" data-name="hero-section">
              <div className="container mx-auto px-4">
                  <h1 className="text-5xl font-bold text-white mb-6">Energia Solar para um Futuro Sustentável</h1>
                  <p className="text-xl text-white mb-8">
                      Descubra como nossas soluções solares podem ajudar você a economizar dinheiro e preservar o meio ambiente.
                  </p>
                  <a href="#products" className="btn-primary text-lg px-8 py-3">
                      Explore nossos produtos
                  </a>
              </div>
          </div>
      );

      // Features Section
      const FeaturesSection = () => (
          <div className="py-16 bg-white" data-name="features-section">
              <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-12">Por que escolher energia solar?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="feature-card">
                          <div className="text-center mb-4">
                              <i className="fas fa-leaf text-4xl text-green-500"></i>
                          </div>
                          <h3 className="text-xl font-bold text-center mb-4">Sustentável</h3>
                          <p className="text-gray-600 text-center">
                              Energia renovável que não esgota os recursos naturais e reduz as emissões de carbono.
                          </p>
                      </div>
                      <div className="feature-card">
                          <div className="text-center mb-4">
                              <i className="fas fa-coins text-4xl text-yellow-500"></i>
                          </div>
                          <h3 className="text-xl font-bold text-center mb-4">Econômico</h3>
                          <p className="text-gray-600 text-center">
                              Reduza drasticamente suas contas de eletricidade e obtenha retorno sobre seu investimento.
                          </p>
                      </div>
                      <div className="feature-card">
                          <div className="text-center mb-4">
                              <i className="fas fa-tools text-4xl text-blue-500"></i>
                          </div>
                          <h3 className="text-xl font-bold text-center mb-4">Confiável</h3>
                          <p className="text-gray-600 text-center">
                              Tecnologia comprovada com manutenção mínima e vida útil de décadas.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      );

      // Calculator Section
      const CalculatorSection = () => (
          <div className="py-16 bg-gray-100" data-name="calculator-section">
              <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto">
                      <h2 className="text-3xl font-bold text-center mb-12">Veja quanto você pode economizar</h2>
                      <SavingsCalculator />
                  </div>
              </div>
          </div>
      );

      // CTA Section
      const CTASection = () => (
          <div className="py-16 bg-blue-600 text-white text-center" data-name="cta-section">
              <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold mb-6">Pronto para mudar para energia solar?</h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto">
                      Dê o primeiro passo para um futuro sustentável e econômico. Entre em contato conosco hoje para uma consulta gratuita.
                  </p>
                  <a href="#contact" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                      Fale conosco agora
                  </a>
              </div>
          </div>
      );

      return (
          <div data-name="home-page">
              <HeroSection />
              <FeaturesSection />
              <CalculatorSection />
              <CTASection />
          </div>
      );
  } catch (error) {
      console.error('Home page error:', error);
      reportError(error);
      return null;
  }
}