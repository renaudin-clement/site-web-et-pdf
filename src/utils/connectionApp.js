import { supabase } from "./connectionSupabase.js";

/**
 * Permet de se connecter a l'application
 * 
 * mauvais code
 * @example
 * // returns "1234"
 * // erreur c
 * 
 * bon code
 * @example
 * // returns "1234"
 * // ok
 * @returns {String} retourn si ca a marcher ou non.
 */
export async function connectionV2(MDP) {
    // set les valeur du local storage a false 
    localStorage.setItem("login", false);
    localStorage.setItem("admin", false);

    // check si code est valide
    const { data: ok, error: erroraaa } = await supabase
        .rpc("check_access_code", { input_code: MDP })

    if (ok == false) {
        console.log("erreur c");
        localStorage.setItem("code", "hahahaha");
        localStorage.setItem("login", false);
        return "erreur c";
    } else {
        localStorage.setItem("login", true);

    }

    const { data: okadmin, error: erroraaa2 } = await supabase
        .rpc("check_access_code2", { input_code: MDP })

    if (okadmin) {
        localStorage.setItem("login", true);
        localStorage.setItem("admin", true);
    }

    localStorage.setItem("code", MDP);
    return ("ok");

}