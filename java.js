import { createClient } from '@supabase/supabase-js'
const supabase = createClient('your_project_url', 'your_supabase_api_key')


let { data } = supabase.storage.from('pdf').getPublicUrl('PDF1.pdf')
console.log(data.publicUrl)


let { data } = await supabase.storage.from('pdf').createSignedUrl('monfichier.pdf', 3600)