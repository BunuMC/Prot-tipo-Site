function ProductCard({ product }) {
    try {
        return (
            <div className="product-card" data-name="product-card">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    data-name="product-image"
                />
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2" data-name="product-name">{product.name}</h3>
                    <p className="text-gray-600 mb-4" data-name="product-description">{product.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-blue-500" data-name="product-price">
                            R${product.price}
                        </span>
                        <button 
                            className="btn-primary"
                            data-name="product-cta-button"
                            onClick={() => alert('Contact form will be implemented here')}
                        >
                            Obter Cotação
                        </button>
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
