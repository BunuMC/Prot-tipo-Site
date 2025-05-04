function ProductCard({ product }) {
    try {
        return (
            <div className="product-card" data-name="product-card">
                <a href={`#product/${product.id}`} className="block">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                        data-name="product-image"
                    />
                </a>
                <div className="p-4">
                    <a href={`#product/${product.id}`} className="block">
                        <h3 className="text-xl font-bold mb-2 hover:text-blue-500 transition" data-name="product-name">{product.name}</h3>
                    </a>
                    <p className="text-gray-600 mb-4" data-name="product-description">{product.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-blue-500" data-name="product-price">
                            R${product.price}
                        </span>
                        <div>
                            <a 
                                href={`#product/${product.id}`}
                                className="text-blue-500 hover:text-blue-700 mr-3 transition"
                            >
                                Ver detalhes
                            </a>
                            <button 
                                className="btn-primary"
                                data-name="product-cta-button"
                                onClick={() => window.location.href = `#product/${product.id}#product-quote-form`}
                            >
                                Obter Cotação
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
        return null;
    }
}