import Page_comp from "../composants/pagecomposer.js";

export default class Home extends Page_comp {
  
  async render() {
    // Affichage de la page
    return Page_comp.renderPage(() => `
        <div class="error" id="error" style="visibility: ;">
            <img id="errorimg2" src="/src/assets/img/travailleur-plat-cle.png" alt="travailleur">
            <p id="errortext"></p>
            <img id="errorimg1" src="/src/assets/img/travailleur-plat-cle.png" alt="travailleur">
        </div>

        <a href="/#/aut">helps</a>
        <a href="src/gridfile.html">helps2</a>

        <script type="module" src="/src/app.js"></script>
    `);
  }
}