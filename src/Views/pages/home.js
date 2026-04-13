import Page_comp from "../composants/pagecomposer.js";

export default class Home extends Page_comp {
  
  async render() {
    // Affichage de la page
    return Page_comp.renderPage(() => `
        <div class="container">
            <iframe src="elecr.pdf"></iframe>
        </div>

        <div class="error" id="error" style="visibility: hidden;">
            <img id="errorimg2" src="/src/assets/img/travailleur-plat-cle.png" alt="travailleur">
            <p id="errortext"></p>
            <img id="errorimg1" src="/src/assets/img/travailleur-plat-cle.png" alt="travailleur">
        </div>

        <a href="src/Authentification.html">helps</a>
        <a href="src/gridfile.html">helps2</a>

        <script type="module" src="/src/app.js"></script>
    `);
  }
}