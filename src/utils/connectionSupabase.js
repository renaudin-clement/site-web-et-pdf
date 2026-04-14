
import { AuthInvalidCredentialsError, createClient } from '@supabase/supabase-js';


console.log("test");
const supabaseUrl = import.meta.env.VITE_DATABASE_URL
const supabaseKey = import.meta.env.VITE_DATABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Variables Supabase manquantes dans .env')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

const { data, error: errorlog } = await supabase.auth.signInWithPassword({
  email: import.meta.env.VITE_EMAIL,
  password: import.meta.env.VITE_PASSWORD,
});

if (errorlog) {
  console.error('Erreur connexion:', errorlog.message);
}

console.log('Connecté :', data.session);
