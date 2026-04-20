import { supabase } from "./connectionSupabase.js";

const code = localStorage.getItem("code");

export async function GetSelected() {

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

    return await response.text();
}

export async function UpdateFile(Word) {
  const formData = new FormData();
  const newFile = new Blob([Word], {
    type: "text/plain"
  });

  formData.append("code", code);
  formData.append("file", newFile, "Select.txt");

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
  //console.log("Files Update Select successfully:", result);
  return Word;
}

