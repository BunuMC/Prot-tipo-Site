// Arquivo de configuração do Supabase
// ATENÇÃO: Em produção, estas credenciais devem ser armazenadas em variáveis de ambiente
const SUPABASE_URL = 'https://sbrteriyxlfabofddhbj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicnRlcml5eGxmYWJvZmRkaGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NjI4OTUsImV4cCI6MjA2MTQzODg5NX0.jtM1zR9W38ZLrIPIXg49HOGkKfBWNXnLFN2uGHWhG-Y';

// Inicializa o cliente do Supabase
const createSupabaseClient = () => {
  // Verifica se a biblioteca Supabase está disponível
  if (typeof supabase === 'undefined') {
    console.error('Biblioteca Supabase não carregada');
    return null;
  }
  
  try {
    return supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (error) {
    console.error('Erro ao criar cliente Supabase:', error);
    return null;
  }
};

// Inicializa o cliente e o exporta para a janela
window.supabaseClient = createSupabaseClient();