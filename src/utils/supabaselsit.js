import { createClient } from '@supabase/supabase-js';


const elem = document.getElementById("error");
const elem2 = document.getElementById("errortext");

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
    elem2.textContent = errorlog.message + " petit probleme coter code les loggin on du changer";
    elem.style.removeProperty("visibility");
    console.error('Erreur connexion:', errorlog.message);
  }

  console.log('Connecté :', data.session);

let { data: listedocument, error: signedError } = await supabase.storage.from('pdf').list();

console.log(listedocument);

export default listedocument;
  
  
