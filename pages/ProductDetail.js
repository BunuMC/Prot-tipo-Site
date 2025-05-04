function ProductDetail() {
    try {
        const [product, setProduct] = React.useState(null);
        const [loading, setLoading] = React.useState(true);
        const [errorMessage, setErrorMessage] = React.useState("");
        const [formData, setFormData] = React.useState({
            name: "",
            email: "",
            phone: "",
            message: "",
            productId: ""
        });
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [submitStatus, setSubmitStatus] = React.useState({
            success: false,
            error: false,
            message: ""
        });
        
        // Obter o ID do produto da URL
        React.useEffect(() => {
            try {
                const productId = window.location.hash.split("/")[1];
                
                // Carregar dados do produto pelo ID
                const products = [
                    {
                        id: 1,
                        name: "Painel Solar Residencial",
                        description: "Perfeito para residências, painel de alta eficiência de 400 W",
                        fullDescription: "Nosso painel solar residencial de 400W é a escolha perfeita para proprietários que desejam reduzir suas contas de energia e diminuir sua pegada de carbono. Este painel de alta eficiência foi projetado para maximizar a produção de energia mesmo em espaços limitados.",
                        price: "3.391,65",
                        discount: "3.891,65",
                        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                        specifications: [
                            { name: "Potência", value: "400W" },
                            { name: "Eficiência", value: "21.3%" },
                            { name: "Dimensões", value: "1700 x 1000 x 35 mm" },
                            { name: "Peso", value: "18.5 kg" },
                            { name: "Garantia", value: "25 anos" }
                        ],
                        features: [
                            "Alta resistência a condições climáticas adversas",
                            "Fácil instalação e manutenção mínima",
                            "Design compacto ideal para espaços residenciais",
                            "Certificado de acordo com padrões internacionais"
                        ],
                        installation: "A instalação típica leva apenas 1-2 dias com nossa equipe profissional."
                    },
                    {
                        id: 2,
                        name: "Painel Solar Industrial",
                        description: "Painel de 600 W de nível industrial para empresas",
                        fullDescription: "Nossa linha industrial de painéis solares de 600W é projetada para atender às demandas de energia de grandes empresas e instalações comerciais. Esses painéis de alta performance oferecem excelente retorno sobre o investimento.",
                        price: "5.090,31",
                        discount: "5.750,00",
                        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                        specifications: [
                            { name: "Potência", value: "600W" },
                            { name: "Eficiência", value: "22.5%" },
                            { name: "Dimensões", value: "2000 x 1200 x 40 mm" },
                            { name: "Peso", value: "27.8 kg" },
                            { name: "Garantia", value: "30 anos" }
                        ],
                        features: [
                            "Construção robusta para ambientes industriais",
                            "Sistema avançado de monitoramento remoto",
                            "Maior produção de energia por metro quadrado",
                            "Resistência superior a condições extremas"
                        ],
                        installation: "Nossa equipe de engenheiros projeta e implementa instalações industriais completas em 1-3 semanas."
                    },
                    {
                        id: 3,
                        name: "Painel Solar Premium",
                        description: "Painel de 800 W de primeira linha com recursos inteligentes",
                        fullDescription: "Nossa linha premium de painéis solares de 800W representa o mais alto padrão em tecnologia solar. Com recursos inteligentes integrados e eficiência incomparável, estes painéis são a escolha ideal para quem busca o melhor desempenho possível.",
                        price: "7.355,19",
                        discount: "8.100,00",
                        image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                        specifications: [
                            { name: "Potência", value: "800W" },
                            { name: "Eficiência", value: "24.1%" },
                            { name: "Dimensões", value: "2150 x 1300 x 45 mm" },
                            { name: "Peso", value: "32.6 kg" },
                            { name: "Garantia", value: "35 anos" }
                        ],
                        features: [
                            "Tecnologia de células solares de última geração",
                            "Integração com sistemas domésticos inteligentes",
                            "Monitoramento em tempo real via aplicativo móvel",
                            "Máxima produção de energia mesmo em condições de baixa luminosidade"
                        ],
                        installation: "Instalação premium com serviço white-glove e configuração de sistema inteligente em 2-3 dias."
                    }
                ];

                const selectedProduct = products.find(p => p.id === parseInt(productId));
                
                if (selectedProduct) {
                    setProduct(selectedProduct);
                    setFormData(prev => ({
                        ...prev,
                        productId: selectedProduct.id,
                        message: `Olá, estou interessado no produto ${selectedProduct.name}. Por favor, envie-me mais informações e um orçamento.`
                    }));
                } else {
                    setErrorMessage("Produto não encontrado.");
                }
                
                setLoading(false);
            } catch (error) {
                console.error("Error loading product data:", error);
                setErrorMessage("Erro ao carregar dados do produto.");
                setLoading(false);
            }
        }, []);

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            setSubmitStatus({ success: false, error: false, message: '' });

            try {
                // Enviar os dados para o Supabase
                const { data, error } = await window.supabaseClient
                    .from('contact_messages')
                    .insert([
                        {
                            name: formData.name,
                            email: formData.email,
                            phone: formData.phone,
                            message: formData.message,
                            product_id: formData.productId
                        }
                    ]);

                if (error) throw error;

                // Sucesso
                setSubmitStatus({
                    success: true,
                    error: false,
                    message: 'Obrigado pelo seu interesse! Entraremos em contato em breve com mais informações e um orçamento personalizado.'
                });
                setFormData({ 
                    name: '', 
                    email: '', 
                    phone: '', 
                    message: '', 
                    productId: product ? product.id : '' 
                });
            } catch (error) {
                console.error('Erro ao enviar solicitação:', error);
                setSubmitStatus({
                    success: false,
                    error: true,
                    message: 'Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.'
                });
            } finally {
                setIsSubmitting(false);
            }
        };

        if (loading) {
            return (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            );
        }

        if (errorMessage) {
            return (
                <div className="container mx-auto px-4 py-12">
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        <p>{errorMessage}</p>
                        <p className="mt-2">
                            <a href="#products" className="text-blue-500 hover:underline">Voltar para produtos</a>
                        </p>
                    </div>
                </div>
            );
        }

        if (!product) {
            return null;
        }

        return (
            <div className="py-12" data-name="product-detail-page">
                <div className="container mx-auto px-4">
                    <nav className="flex mb-8" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-2">
                            <li>
                                <a href="#home" className="text-gray-500 hover:text-blue-500">Home</a>
                            </li>
                            <li className="flex items-center">
                                <span className="text-gray-400 mx-2">/</span>
                                <a href="#products" className="text-gray-500 hover:text-blue-500">Produtos</a>
                            </li>
                            <li className="flex items-center">
                                <span className="text-gray-400 mx-2">/</span>
                                <span className="text-gray-800 font-medium">{product.name}</span>
                            </li>
                        </ol>
                    </nav>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                            <div className="product-image-container">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-auto rounded-lg shadow-md"
                                    data-name="product-detail-image"
                                />
                            </div>
                            
                            <div className="product-info">
                                <h1 className="text-3xl font-bold mb-4" data-name="product-detail-title">{product.name}</h1>
                                <p className="text-lg text-gray-700 mb-6" data-name="product-detail-description">
                                    {product.fullDescription || product.description}
                                </p>
                                
                                <div className="mb-6">
                                    <div className="flex items-center">
                                        <span className="text-3xl font-bold text-blue-600" data-name="product-detail-price">
                                            R${product.price}
                                        </span>
                                        {product.discount && (
                                            <span className="ml-3 text-lg text-gray-500 line-through" data-name="product-detail-original-price">
                                                R${product.discount}
                                            </span>
                                        )}
                                    </div>
                                    {product.discount && (
                                        <p className="text-green-600 font-medium mt-1">
                                            Economize {getDiscountPercentage(product.price, product.discount)}%
                                        </p>
                                    )}
                                </div>
                                
                                <div className="mb-8">
                                    <a href="#product-quote-form" className="btn-primary inline-block px-8 py-3 text-lg mr-4">
                                        Solicitar orçamento
                                    </a>
                                    <a href="#products" className="text-blue-500 hover:underline">
                                        Ver outros produtos
                                    </a>
                                </div>
                                
                                <div className="product-specifications my-8 border-t pt-6">
                                    <h3 className="text-xl font-bold mb-4">Especificações</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {product.specifications && product.specifications.map((spec, index) => (
                                            <div key={index} className="flex justify-between">
                                                <span className="font-medium">{spec.name}:</span>
                                                <span className="text-gray-700">{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gray-50 border-t">
                            <div data-name="product-features">
                                <h3 className="text-xl font-bold mb-4">Características</h3>
                                <ul className="list-disc pl-5 space-y-2">
                                    {product.features && product.features.map((feature, index) => (
                                        <li key={index} className="text-gray-700">{feature}</li>
                                    ))}
                                </ul>
                                
                                {product.installation && (
                                    <div className="mt-6">
                                        <h3 className="text-xl font-bold mb-2">Instalação</h3>
                                        <p className="text-gray-700">{product.installation}</p>
                                    </div>
                                )}
                            </div>
                            
                            <div className="bg-white shadow rounded-lg p-6" id="product-quote-form" data-name="product-quote-form">
                                <h3 className="text-xl font-bold mb-4">Solicite um orçamento</h3>
                                
                                {submitStatus.success ? (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
                                        <p className="font-bold">Solicitação enviada!</p>
                                        <p>{submitStatus.message}</p>
                                    </div>
                                ) : null}

                                {submitStatus.error ? (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                                        <p className="font-bold">Erro!</p>
                                        <p>{submitStatus.message}</p>
                                    </div>
                                ) : null}
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="name">Nome</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full p-3 border rounded-lg"
                                            required
                                            data-name="quote-name-input"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-3 border rounded-lg"
                                            required
                                            data-name="quote-email-input"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2" htmlFor="phone">Telefone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full p-3 border rounded-lg"
                                            required
                                            data-name="quote-phone-input"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 mb-2" htmlFor="message">Mensagem</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="3"
                                            className="w-full p-3 border rounded-lg"
                                            required
                                            data-name="quote-message-input"
                                            disabled={isSubmitting}
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className={`btn-primary w-full flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                        data-name="quote-submit-button"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Enviando...
                                            </>
                                        ) : (
                                            'Solicitar orçamento'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                        
                        <div className="p-8 border-t">
                            <h3 className="text-xl font-bold mb-6 text-center">Produtos Relacionados</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {getRelatedProducts(product.id).map(relatedProduct => (
                                    <div key={relatedProduct.id} className="product-card">
                                        <img
                                            src={relatedProduct.image}
                                            alt={relatedProduct.name}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-bold mb-2">{relatedProduct.name}</h3>
                                            <p className="text-gray-600 mb-4">{relatedProduct.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xl font-bold text-blue-500">
                                                    R${relatedProduct.price}
                                                </span>
                                                <a 
                                                    href={`#product/${relatedProduct.id}`}
                                                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded transition"
                                                >
                                                    Ver detalhes
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductDetail component error:', error);
        reportError(error);
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <p>Ocorreu um erro ao carregar a página do produto.</p>
                    <p className="mt-2">
                        <a href="#products" className="text-blue-500 hover:underline">Voltar para produtos</a>
                    </p>
                </div>
            </div>
        );
    }
}

// Funções utilitárias
function getDiscountPercentage(currentPrice, originalPrice) {
    // Remove qualquer formatação
    const current = parseFloat(currentPrice.replace(/[^\d,]/g, '').replace(',', '.'));
    const original = parseFloat(originalPrice.replace(/[^\d,]/g, '').replace(',', '.'));
    
    if (isNaN(current) || isNaN(original) || original <= 0) {
        return 0;
    }
    
    const percentage = Math.round(((original - current) / original) * 100);
    return percentage;
}

function getRelatedProducts(currentProductId) {
    const allProducts = [
        {
            id: 1,
            name: "Painel Solar Residencial",
            description: "Perfeito para residências, painel de alta eficiência de 400 W",
            price: "3.391,65",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            name: "Painel Solar Industrial",
            description: "Painel de 600 W de nível industrial para empresas",
            price: "5.090,31",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            name: "Painel Solar Premium",
            description: "Painel de 800 W de primeira linha com recursos inteligentes",
            price: "7.355,19",
            image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
    ];
    
    // Retorna todos os produtos exceto o atual
    return allProducts.filter(product => product.id !== currentProductId);
}