function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            phone: '',
            message: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            alert('Obrigado pela mensagem! Nós iremos entrar em contato em breve.');
            setFormData({ name: '', email: '', phone: '', message: '' });
        };

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        return (
            <div className="py-12" data-name="contact-page">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">Contate-nos</h1>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-8" data-name="contact-form-container">
                            <form onSubmit={handleSubmit} data-name="contact-form">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="name">Nome</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full p-3 border rounded-lg"
                                            required
                                            data-name="contact-name-input"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-3 border rounded-lg"
                                            required
                                            data-name="contact-email-input"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2" htmlFor="phone">Telefone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-lg"
                                        required
                                        data-name="contact-phone-input"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2" htmlFor="message">Mensagem</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full p-3 border rounded-lg"
                                        required
                                        data-name="contact-message-input"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn-primary w-full"
                                    data-name="contact-submit-button"
                                >
                                    Enviar mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Contact page error:', error);
        reportError(error);
        return null;
    }
}
