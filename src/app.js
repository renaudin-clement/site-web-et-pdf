import { createClient } from '@supabase/supabase-js';



console.log("test");

// 1. Créer le client EN PREMIER
const supabaseUrl = import.meta.env.VITE_DATABASE_URL
const supabaseKey = import.meta.env.VITE_DATABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Variables Supabase manquantes dans .env')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

console.log(supabase);

// 2. Se connecter
const { data, error } = await supabase.auth.signInWithPassword({
  email:import.meta.env.VITE_EMAIL,
  password:import.meta.env.VITE_PASSWORD,
});

if (error) {
  console.error('Erreur connexion:', error.message)
} else {
  console.log('Connecté :', data.session)





  // 3. Utiliser le storage APRÈS connexion
  const { data: signedData, error: signedError } = await supabase.storage.from('pdf').createSignedUrl('PDFstocker/PDF1.pdf', 3600)

  const { data: files, error } = await supabase.storage.from('pdf').list()
    console.log(files)

    console.log('signedError:', signedError)

  if (error) {
    console.error('Erreur signed URL:', signedError.message)
  } else {
    console.log(signedData.signedUrl)
  }
  const iframe = document.querySelector('iframe')
    iframe.src = signedData.signedUrl
}