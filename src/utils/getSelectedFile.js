export * from "./connectionSupabase.js";
import { supabase } from "./connectionSupabase.js";

export async function GetSelected() {
    console.log("recuperation du fichier selectionner en cours :");
    const { data: signedData, error: signedError } = await supabase.storage
        .from('pdf')
        .createSignedUrl('Select.txt', 3600);

    if (signedError) {
        console.error('Erreur signed URL:', signedError.message);
        return;
    }

    console.log(signedData.signedUrl);

    let response = await fetch(signedData.signedUrl);
    const text = await response.text();

    console.log(text);
    return text;
}


export async function UpdateFile(Word) {

   
    const newFile = new Blob([Word], {
        type: "text/plain"
    })

    const { data:updatedata, error:updateError } = await supabase.storage
        .from('pdf')
        .update('Select.txt', newFile, {
            contentType: "text/plain",
            upsert: true
        });

    if (updateError) {
        console.error("Error Update Select:", signedError);
    } else {
        console.log("Files Update Select successfully:", updatedata);
        return Word;
    }
}


