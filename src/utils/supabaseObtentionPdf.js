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

export async function initPage() {
  const elem = document.getElementById("error");       
  const elem2 = document.getElementById("errortext");  

  const { data, error: errorlog } = await supabase.auth.signInWithPassword({
    email: import.meta.env.VITE_EMAIL,
    password: import.meta.env.VITE_PASSWORD,
  });

  if (errorlog) {
    elem2.textContent = errorlog.message + " petit probleme coter code les loggin on du changer";
    elem.style.removeProperty("visibility");
    console.error('Erreur connexion:', errorlog.message);
    return;
  }

  console.log('Connecté :', data.session);

  const { data: signedData, error: signedError } = await supabase.storage
    .from('pdf')
    .createSignedUrl('PDFstocker/elecr.pdf', 3600);

  if (signedError) {
    elem2.textContent = signedError.message;
    elem.style.removeProperty("visibility");
    console.error('Erreur signed URL:', signedError.message);
    return;
  }

  console.log(signedData.signedUrl);
  document.querySelector('iframe').src = signedData.signedUrl;
  return signedData.signedUrl;
}