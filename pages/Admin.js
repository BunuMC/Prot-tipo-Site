function Admin() {
    try {
        const [messages, setMessages] = React.useState([]);
        const [isLoading, setIsLoading] = React.useState(true);
        const [error, setError] = React.useState(null);
        const [isAuthenticated, setIsAuthenticated] = React.useState(false);
        const [authForm, setAuthForm] = React.useState({ email: '', password: '' });

        // Função para buscar mensagens do Supabase
        const fetchMessages = async () => {
            try {
                setIsLoading(true);
                const { data, error } = await window.supabaseClient
                    .from('contact_messages')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setMessages(data || []);
            } catch (err) {
                console.error('Erro ao buscar mensagens:', err);
                setError('Não foi possível carregar as mensagens. Por favor, tente novamente.');
            } finally {
                setIsLoading(false);
            }
        };

        // Função para fazer login
        const handleLogin = async (e) => {
            e.preventDefault();
            try {
                setIsLoading(true);
                const { data, error } = await window.supabaseClient.auth.signInWithPassword({
                    email: authForm.email,
                    password: authForm.password
                });

                if (error) throw error;
                setIsAuthenticated(true);
                fetchMessages();
            } catch (err) {
                console.error('Erro de autenticação:', err);
                setError('Falha na autenticação. Verifique suas credenciais e tente novamente.');
                setIsLoading(false);
            }
        };

        // Função para fazer logout
        const handleLogout = async () => {
            try {
                const { error } = await window.supabaseClient.auth.signOut();
                if (error) throw error;
                setIsAuthenticated(false);
                setMessages([]);
            } catch (err) {
                console.error('Erro ao fazer logout:', err);
                setError('Ocorreu um erro ao tentar sair. Por favor, tente novamente.');
            }
        };

        // Verificar se o usuário já está autenticado quando o componente é montado
        React.useEffect(() => {
            const checkSession = async () => {
                const { data } = await window.supabaseClient.auth.getSession();
                if (data.session) {
                    setIsAuthenticated(true);
                    fetchMessages();
                } else {
                    setIsLoading(false);
                }
            };
            
            checkSession();
        }, []);

        // Função para formatar a data
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            return date.toLocaleString('pt-BR');
        };

        const handleAuthFormChange = (e) => {
            setAuthForm({
                ...authForm,
                [e.target.name]: e.target.value
            });
        };

        return (
            <div className="py-12" data-name="admin-page">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">Área Administrativa</h1>
                    
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 max-w-3xl mx-auto" role="alert">
                            <p>{error}</p>
                        </div>
                    )}

                    {!isAuthenticated ? (
                        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8" data-name="login-form-container">
                            <h2 className="text-2xl font-bold mb-6">Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={authForm.email}
                                        onChange={handleAuthFormChange}
                                        className="w-full p-3 border rounded-lg"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2" htmlFor="password">Senha</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={authForm.password}
                                        onChange={handleAuthFormChange}
                                        className="w-full p-3 border rounded-lg"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className={`btn-primary w-full ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Entrando...' : 'Entrar'}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="max-w-6xl mx-auto" data-name="messages-container">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">Mensagens de Contato</h2>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                                >
                                    Sair
                                </button>
                            </div>

                            {isLoading ? (
                                <div className="flex justify-center items-center py-12">
                                    <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                </div>
                            ) : messages.length === 0 ? (
                                <div className="bg-gray-100 p-8 text-center rounded-lg">
                                    <p className="text-lg text-gray-600">Nenhuma mensagem encontrada.</p>
                                </div>
                            ) : (
                                <div className="bg-white rounded-lg shadow overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Nome
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Email
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Telefone
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Mensagem
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Data
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {messages.map((message) => (
                                                <tr key={message.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900">{message.name}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">{message.email}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">{message.phone}</div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm text-gray-500 max-w-xs truncate">
                                                            {message.message}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-500">{formatDate(message.created_at)}</div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Admin page error:', error);
        reportError(error);
        return null;
    }
}