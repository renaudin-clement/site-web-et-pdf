const code = localStorage.getItem("code")


/**
 * Permet de Raffraichir la liste des fichiers
 * 
 * avant ajout ME
 * @example
 * // returns [JJ,KK,loupopa]
 * 
 * apres ajout ME
 * @example
 * // returns [JJ,KK,loupopa,ME]
 * @returns {Array} retourn la listes des fichiers.
 */
export async function refreshlist() {
  // appelle de la fonction edge heberger dans supabase
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/list-pdf-storage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // presise le lieu ou elle est heberger
        bucket: "pdf",
        // presise le dossier ou elle est heberger
        folder: "PDFstocker",
        code
      })
    }
  );

  if (!response.ok) {
    console.error("Erreur:", await response.text());
    return [];
  }

  let listedocument = await response.json();

  // igniore le fichier de base de supabase
  if (listedocument[0]?.name === ".emptyFolderPlaceholder") {
    listedocument.splice(0, 1);
  }

  return listedocument;
}



/**
 * Permet d'ajouter plusieur fichier dans la base de donnees
 * 
 * avant ajout ME
 * @example
 * // returns [JJ,KK,loupopa]
 * 
 * apres ajout ME
 * @example
 * // returns [JJ,KK,loupopa,ME]
 * @returns {Array} retourn la listes des fichiers.
 */
export async function Ajouter(Listfiles) {
  console.log("les fichiers sont en cours de televersement :", Listfiles);
  // creation du body pour la fonction
  const formData = new FormData();
  formData.append("code", code);

  // ajout de tout les fichier dans le body
  for (let file of Listfiles) {
    formData.append(file.name, file);
  }

  // appelle de la fonction edge heberger dans supabase
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/add-file`,
    {
      method: "POST",
      body: formData
    }
  );

  if (!response.ok) {
    console.error("Erreur upload:", await response.text());
    return;
  }
  const result = await response.json();
  console.log("Upload result:", result);
  return result;
}




/**
 * Permet d'ajouter plusieur fichier dans la base de donnees
 * 
 * avant Supp ME
 * @example
 * // returns [JJ,KK,loupopa,ME]
 * 
 * apres Supp ME
 * @example
 * // returns [JJ,KK,loupopa]
 * @returns {Array} retourn la listes des fichiers Supp.
 */
export async function Supprimer(ListNom) {
  console.log("liste a supp :", ListNom);

  //prend la liste des nom a supprimer et presise le dossier concerner
  const suppPart = ListNom.map(
    nom => `PDFstocker/${nom}`
  );

  // appelle de la fonction edge heberger dans supabase
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/Supp-file`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bucket: "pdf",
        files: suppPart,
        code
      })
    }
  );

  if (!response.ok) {
    console.error("Erreur suppression:", await response.text());
    return;
  }
  const result = await response.json();

  if (result.length === 0) {
    console.error("Aucun fichier supprimé");
  } else {
    console.log("Files removed successfully:", result);
  }

  return result;
}


/**
 * Permet update plusieur fichier dans la base de donnees
 * 
 * avant modifier ME = 123
 * @example
 * // returns 123
 * 
 * apres avoir modifier ME avec 125
 * @example
 * // returns 125
 * @returns {string} retourn la listes des fichiers modifier.
 */
export async function UpdateFile(file) {
  console.log("le fichier :", file);
  const formData = new FormData();
  formData.append("code", code);
  formData.append("file", file);

    // appelle de la fonction edge heberger dans supabase
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/update-file`,
    {
      method: "POST",
      body: formData
    }
  );

  if (!response.ok) {
    console.error("Erreur update :", await response.text());
    return;
  }

  const result = await response.json();
  console.log("File updated successfully:", result);
  return result;
}


