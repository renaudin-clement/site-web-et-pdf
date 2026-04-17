import { supabase } from "./connectionSupabase.js";

const code = localStorage.getItem("code");
console.log(localStorage.getItem("code"));

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
    const newFile = new Blob([Word], {
        type: "text/plain"
    })

    const { data: updatedata, error: updateError } = await supabase.storage
        .from('pdf')
        .update('Select.txt', newFile, {
            contentType: "text/plain",
            upsert: true,
            headers: {
                code: code
            }

        });

    if (updateError) {
        console.error("Error Update Select:", updatedata);
    } else {
        console.log("Files Update Select successfully:", updatedata);
        return Word;
    }
}


