
import { createClient } from '@supabase/supabase-js';

// valeur de l'environement et clef publique
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_DATABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Variables Supabase manquantes dans .env')
}

// Creation d'un client supabase avec les clefs
export const supabase = createClient(supabaseUrl, supabaseKey)
if (supabase == null) {
  console.error('Erreur connexion:');
}

console.log('Connecté :');
