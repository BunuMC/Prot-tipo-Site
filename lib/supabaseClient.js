// Arquivo de configuração do Supabase
// Substitua estas URLs e chaves pelas suas credenciais reais do Supabase
const SUPABASE_URL = 'https://sbrteriyxlfabofddhbj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicnRlcml5eGxmYWJvZmRkaGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NjI4OTUsImV4cCI6MjA2MTQzODg5NX0.jtM1zR9W38ZLrIPIXg49HOGkKfBWNXnLFN2uGHWhG-Y';

// Inicializa o cliente do Supabase
const createSupabaseClient = () => {
  return supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
};

// Exporta a função que cria o cliente
window.supabaseClient = createSupabaseClient();