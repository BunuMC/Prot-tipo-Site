// services/SupabaseService.js
const supabaseUrl = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicnRlcml5eGxmYWJvZmRkaGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4NjI4OTUsImV4cCI6MjA2MTQzODg5NX0.jtM1zR9W38ZLrIPIXg49HOGkKfBWNXnLFN2uGHWhG-Y';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicnRlcml5eGxmYWJvZmRkaGJqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTg2Mjg5NSwiZXhwIjoyMDYxNDM4ODk1fQ.yDY4zse28Yh3sYEW5nJDGFFK3znGPZBR7jS4V2k_XBw';

// Initialize the Supabase client
const createSupabaseClient = () => {
  const { createClient } = supabase;
  return createClient(supabaseUrl, supabaseKey);
};

// Get Supabase client instance
const getSupabaseClient = () => {
  // Use singleton pattern to avoid creating multiple instances
  if (!window.supabaseClient) {
    window.supabaseClient = createSupabaseClient();
  }
  return window.supabaseClient;
};

// Save contact message to Supabase
const saveContactMessage = async (contactData) => {
  try {
    const client = getSupabaseClient();
    
    const { data, error } = await client
      .from('contact_messages')
      .insert([
        {
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone,
          message: contactData.message,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Error saving contact message:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Supabase service error:', error);
    throw error;
  }
};

// Get all contact messages
const getContactMessages = async () => {
  try {
    const client = getSupabaseClient();
    
    const { data, error } = await client
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching contact messages:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Supabase service error:', error);
    throw error;
  }
};