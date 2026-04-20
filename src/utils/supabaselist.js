import { supabase } from "./connectionSupabase.js";

const code = localStorage.getItem("code")

export async function refreshlist() {

  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/list-pdf-storage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        bucket: "pdf",
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

  if (listedocument[0]?.name === ".emptyFolderPlaceholder") {
    listedocument.splice(0, 1);
  }

  return listedocument;
}


export async function Ajouter(Listfiles) {
  console.log("les fichiers sont en cours de televersement :", Listfiles);
  const formData = new FormData();
  formData.append("code", code);
  for (let file of Listfiles) {
    formData.append(file.name, file);
  }

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

export async function Supprimer(ListNom) {

  console.log("liste a supp :", ListNom);
  const suppPart = ListNom.map(
    nom => `PDFstocker/${nom}`
  );

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

export async function UpdateFile(file) {
  console.log("le fichier :", file);
  const formData = new FormData();
  formData.append("code", code);
  formData.append("file", file);

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


