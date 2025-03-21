function Products() {
    try {
        const products = [
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

        return (
            <div className="py-12" data-name="products-page">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">Nossos Produtos</h1>
                    <div className="product-grid">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Products page error:', error);
        reportError(error);
        return null;
    }
}
