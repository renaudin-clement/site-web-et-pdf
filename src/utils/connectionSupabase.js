
import { AuthInvalidCredentialsError, createClient } from '@supabase/supabase-js';

console.log("test");
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_DATABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Variables Supabase manquantes dans .env')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
if (supabase == null) {
  console.error('Erreur connexion:');
}

console.log('Connecté :');
