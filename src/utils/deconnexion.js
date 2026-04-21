

export async function deconnexion() {
    localStorage.setItem("login", false);
    localStorage.setItem("admin", false);
    localStorage.setItem("code", "");
}