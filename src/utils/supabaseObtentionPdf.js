import { supabase } from "./connectionSupabase.js";
import { GetSelected } from "./getSelectedFile.js";

export async function initPage() {
  let selection = await GetSelected();
  const code = localStorage.getItem("code");

  const path = "PDFstocker/" + selection;

  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/get-signed-pdf-url`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code, bucket: "pdf", path, expiresIn: 3600 }),
    }
  );

  if (!response.ok) {
    console.error("Erreur:", await response.text());  
    return "";
  }

  const { signedUrl } = await response.json();
  return signedUrl;
}