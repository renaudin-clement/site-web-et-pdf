import { supabase } from "./connectionSupabase.js";



export async function connection(MDP) {
    let error = "";
    console.log(MDP);
    const { data, error: err } = await supabase
        .from("access_codes")
        .select("*")
        .eq("code", MDP)
        .eq("is_active", true)
        .single()
    if (err || !data) {
        error = "Code invalide ❌"
        console.log(err);
        return error;
    }
    localStorage.setItem("access_code", MDP)
    error = ""
    return "ok";
}



export async function recupcode() {
    let error = "";
    const { data, error: err } = await supabase
        .from("access_codes")
        .select("*")
    if (err || !data) {
        console.log(err)
        return error;
    }
    console.log(data);
}

export async function connectionV2(MDP) {

    const { data:ok, error:erroraaa } = await supabase
        .rpc("check_access_code", { input_code: MDP })

    if (ok == false) {
        console.log("code invalide");
        return "code invalide";
    }
    console.log(ok)
    return("ok");

}