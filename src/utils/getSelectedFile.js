import { supabase } from "./connectionSupabase.js";

const code = localStorage.getItem("code");
console.log(localStorage.getItem("code"));

export async function GetSelected() {
    console.log("récupération fichier...")
    console.log(code);
    const { data: valid } = await supabase.rpc("check_access_code", {
        input_code: code
    })

    if (!valid) {
        console.error("Code invalide")
        return
    }

    const { data:signedData, error } = await supabase.storage
        .from("pdf")
        .createSignedUrl("Select.txt", 3600)

    if (error) {
        console.error(error.message)
        return
    }

    let response = await fetch(signedData.signedUrl);
    console.log(response);
    const text = await response.text();

    console.log(text);
    return text;
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


