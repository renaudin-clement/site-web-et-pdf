import { supabase } from "./connectionSupabase.js";



export async function connection(MDP) {
    let error = "";
    const { data, error: err } = await supabase
        .from("access_codes")
        .select("*")
        .eq("code", MDP)
        .eq("is_active", true)
        .single()
    if (err || !data) {
        error = "erreur c ❌"
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
    localStorage.setItem("login", false);
    localStorage.setItem("admin", false);

    const { data:ok, error:erroraaa } = await supabase
        .rpc("check_access_code", { input_code: MDP })

    if (ok == false) {
        console.log("erreur c");
        localStorage.setItem("code", MDP);
        localStorage.setItem("login", false);
        return "erreur c";
    } else{
        localStorage.setItem("login", true);

    }

    const { data:okadmin, error:erroraaa2 } = await supabase
        .rpc("check_access_code2", { input_code: MDP })

    if(okadmin){
        localStorage.setItem("login", true);
        localStorage.setItem("admin", true);
    }

    console.log(localStorage.getItem("login"));
    console.log(localStorage.getItem("admin"));

    localStorage.setItem("code", MDP);
    return("ok");

}