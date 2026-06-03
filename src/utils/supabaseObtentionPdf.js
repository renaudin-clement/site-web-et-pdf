import { GetSelected } from "./getSelectedFile.js";


/**
 * initialise l'affichage du document selectionner en recupperent un url signier
 * 
 * @example
 * // returns "/url/signier/grace/a/code"
 * @returns {String} retourn un url signier.
 */
export async function initPage() {
  //recupere le nom de l'element a afficher
  let selection = GetSelected();
  const code = localStorage.getItem("code");

  const path = "PDFstocker/" + selection;

  // Appelle de la fonction hedges permettant de creer l'url
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/get-signed-pdf-url`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, bucket: "pdf", path, expiresIn: 3600 }),
    }
  );

  // gestion de si il 'y a un probleme dans la fonction edge
  if (!response.ok) {
    console.error("Erreur:", await response.text());
    return "";
  }

  // recuper la valeur de la reponse
  const { signedUrl } = await response.json();
  return signedUrl;
}