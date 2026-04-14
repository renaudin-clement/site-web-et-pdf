export * from "./connectionSupabase.js";
import {supabase} from "./connectionSupabase.js";

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
  console.log(nom);
  const { data, error } = await supabase.storage.from('pdf').remove(['PDFstocker/' + nom]);
  
  if(data.length == 0){
    console.error("impossible de supprimer un fichier qui n'existe pas : vous avez selectionner \""+nom+"\"");
  }

  if (error) {
    console.error("Error removing files:", error);
  } else {
    console.log("Files removed successfully:", data);
  }
}

export async function UpdateFile(file) {
  console.log("le ficher :" + file);
  let { data:updatedata, error: updateError } = await supabase.storage.from('pdf').update('PDFstocker/' + file.name, file);

  if (updateError) {
    console.error("Error Update files:", signedError);
  } else {
    console.log("Files Update successfully:", updatedata);
  }
}


export function Enregistrer() {

}


