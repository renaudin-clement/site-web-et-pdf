export * from "./connectionSupabase.js";
import { supabase } from "./connectionSupabase.js";

export async function refreshlist() {
  console.log("liste en cours :");
  let { data: listedocument, error: signedError } = await supabase.storage.from('pdf').list("PDFstocker");

  if (signedError) {
    console.error("Error liste files:", signedError);
    return [];
  } else {
    console.log("liste des fichier : ", listedocument);

    if (listedocument[0].name == ".emptyFolderPlaceholder") {
      listedocument.splice(0, 1);
    }

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

export async function Supprimer(ListNom) {

  console.log("liste a supp : " + ListNom);
  let lieusupp = 'PDFstocker/';
  let suppPart = [];

  for (let nom_fichier in ListNom) {

    suppPart.push(lieusupp+ListNom[nom_fichier]);
  }

  console.log(suppPart);
  
  let { data, error } = await supabase.storage.from('pdf').remove(suppPart);
    if (data.length == 0) {
      console.error("impossible de supprimer si aucun des fichier existe");
    }

    if (error) {
      console.error("Error removing files:", error);
    } else {
      console.log("Files removed successfully:", data);
    }

}

export async function UpdateFile(file) {
  console.log("le ficher :" + file);
  let { data: updatedata, error: updateError } = await supabase.storage.from('pdf').update('PDFstocker/' + file.name, file);

  if (updateError) {
    console.error("Error Update files:", signedError);
  } else {
    console.log("Files Update successfully:", updatedata);
  }
}


export function Enregistrer() {

}


