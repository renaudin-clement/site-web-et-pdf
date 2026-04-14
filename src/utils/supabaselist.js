import { AuthInvalidCredentialsError, createClient } from '@supabase/supabase-js';


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




export async function refreshlist() {
  console.log("liste en cours :");
  let { data: listedocument, error: signedError } = await supabase.storage.from('pdf').list("PDFstocker");

  if (signedError) {
    console.error("Error liste files:", signedError);
    return [];
  } else {
    console.log("liste des fichier : ", listedocument);
    return listedocument;
  }
  
}


export async function Ajouter(file) {
  console.log("le ficher :" + file);
  let { data: Ajoutdocument, error: signedError } = await supabase.storage.from('pdf').upload('PDFstocker/' + file.name, file);
  
  if (signedError) {
    console.error("Error ajouter files:", signedError);
  } else {
    console.log("Files ajouter successfully:", Ajoutdocument);
  }
}

export async function Supprimer(nom) {
  const { data, error } = await supabase.storage.from('pdf').remove(['PDFstocker/' + nom]);

  if (error) {
    console.error("Error removing files:", error);
  } else {
    console.log("Files removed successfully:", data);

  }
}

export function Enregistrer() {

}
