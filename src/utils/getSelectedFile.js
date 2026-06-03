const code = localStorage.getItem("code");

/**
 * recupere le nom de l'element a afficher depuis la base de donnees
 * 
 * @example
 * // returns "JeSuisPasUn.pdf"
 * @returns {String} retourn un le nom du fichier a afficher.
 */
export async function GetSelected() {
  // appelle de la fonction edge heberger dans supabase
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/smooth-function`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    }
  );

  if (!response.ok) {
    console.error("Erreur:", await response.text())
    return
  }
  // convertie la reponse en String
  return await response.text();
}



/**
 * charge le nouveau nom du fichier a mettre dans select
 * 
 * @example
 * // returns "JeSuisUn.pdf"
 * @returns {String} retourn un le nom du fichier dans select.
 */
export async function UpdateFile(Word) {
  // Creation du futur body de la fonction edge
  const formData = new FormData();

  // Creation d'un fichier file a transmettre
  const newFile = new Blob([Word], {
    type: "text/plain"
  });

  // ajout des valeur dans body pour la fonction edge
  formData.append("code", code);
  formData.append("file", newFile, "Select.txt");

  // appelle de la fonction edge heberger dans supabase
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/update-select`,
    {
      method: "POST",
      body: formData
    }
  );

  if (!response.ok) {
    console.error("Error Update Select:", await response.text());
    return;
  }

  const result = await response.json();
  console.log("Files Update Select successfully:", result);
  return Word;
}

