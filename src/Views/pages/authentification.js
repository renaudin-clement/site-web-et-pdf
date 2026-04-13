import Page_comp from "../composants/pagecomposer.js";

export default class Authentification extends Page_comp {
  
  async render() {
    // Affichage de la page
    return Page_comp.renderPage(() => `
        <div class="container">
            <form action="connection()">
                <h1>Tape le code</h1>
                <input type="text" name="ok" id="lecode">
                <button> Valider</button>
            </form>
        </div>

        <script type="module" src="/src/assets/testconnexion.js"></script>
    `);
  }
}