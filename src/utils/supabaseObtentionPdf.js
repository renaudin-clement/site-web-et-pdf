export * from "./connectionSupabase.js";
import {supabase} from "./connectionSupabase.js";
import {GetSelected} from "./getSelectedFile.js";

export async function initPage() {

  let selection =await GetSelected();

  console.log(selection);

  const { data: signedData, error: signedError } = await supabase.storage
    .from('pdf')
    .createSignedUrl('PDFstocker/'+selection, 3600);

  if (signedError) {
    console.error('Erreur signed URL:', signedError.message);
    return"";
  }

  console.log(signedData.signedUrl);
  return signedData.signedUrl;
}