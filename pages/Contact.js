function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [submitStatus, setSubmitStatus] = React.useState({ 
            success: false, 
            error: false, 
            message: '' 
        });

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
                            message: formData.message
                        }
                    ]);

                if (error) throw error;

                // Sucesso
                setSubmitStatus({
                    success: true,
                    error: false,
                    message: 'Obrigado pela mensagem! Nós iremos entrar em contato em breve.'
                });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } catch (error) {
                console.error('Erro ao enviar mensagem:', error);
                setSubmitStatus({
                    success: false,
                    error: true,
                    message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
                });
            } finally {
                setIsSubmitting(false);
            }
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
                            {submitStatus.success ? (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
                                    <p className="font-bold">Mensagem enviada!</p>
                                    <p>{submitStatus.message}</p>
                                </div>
                            ) : null}

                            {submitStatus.error ? (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                                    <p className="font-bold">Erro!</p>
                                    <p>{submitStatus.message}</p>
                                </div>
                            ) : null}

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
                                            disabled={isSubmitting}
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
                                            disabled={isSubmitting}
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
                                        rows="4"
                                        className="w-full p-3 border rounded-lg"
                                        required
                                        data-name="contact-message-input"
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className={`btn-primary w-full flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    data-name="contact-submit-button"
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
                                        'Enviar mensagem'
                                    )}
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