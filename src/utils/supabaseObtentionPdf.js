export * from "./connectionSupabase.js";
import {supabase} from "./connectionSupabase.js";


export async function initPage() {
  const { data: signedData, error: signedError } = await supabase.storage
    .from('pdf')
    .createSignedUrl('PDFstocker/elecr.pdf', 3600);

  if (signedError) {
    console.error('Erreur signed URL:', signedError.message);
    return;
  }

  console.log(signedData.signedUrl);
  return signedData.signedUrl;
}