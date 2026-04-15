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


export async function UpdateFile(file) {
    console.log("le ficher :" + file);
    let { data: updatedata, error: updateError } = await supabase.storage
        .from('pdf')
        .update('Selected', file);

    if (updateError) {
        console.error("Error Update Select:", signedError);
    } else {
        console.log("Files Update Select successfully:", updatedata);
    }
}


