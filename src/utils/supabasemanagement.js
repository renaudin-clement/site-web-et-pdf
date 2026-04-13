import { createClient } from '@supabase/supabase-js';

const elem = document.getElementById("error");
const elem2 = document.getElementById("errortext");



console.log("test");

// 1. Créer le client EN PREMIER
const supabaseUrl = import.meta.env.VITE_DATABASE_URL
const supabaseKey = import.meta.env.VITE_DATABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Variables Supabase manquantes dans .env')
}

export const supabase = createClient(supabaseUrl, supabaseKey)


// 2. Se connecter
const { data, error: errorlog } = await supabase.auth.signInWithPassword({
  email: import.meta.env.VITE_EMAIL,
  password: import.meta.env.VITE_PASSWORD,
});

if (errorlog) {
  elem2.textContent = errorlog.message;
  elem2.textContent += " petit probleme coter code les loggin on du changer";
  if (elem.style.getPropertyValue("visibility")) {
    elem.style.removeProperty("visibility");
  }
  console.error('Erreur connexion:', error.message)
} else {
  console.log('Connecté :', data.session)

  // 3. Utiliser le storage APRÈS connexion
  const { data: signedData, error: signedError } = await supabase.storage.from('pdf').createSignedUrl('PDFstocker/elecr.pdf', 3600)

  const { data: files, error } = await supabase.storage.from('pdf').list()
  console.log(files)
  if (signedError) {
    elem2.textContent = signedError.message;
    if (elem.style.getPropertyValue("visibility")) {
      elem.style.removeProperty("visibility");
    }
    console.error('Erreur signed URL:', signedError.message)
  } else {
    console.log(signedData.signedUrl)
  }
  const iframe = document.querySelector('iframe')
  iframe.src = signedData.signedUrl
}