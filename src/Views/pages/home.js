import Page_comp from "../composants/pagecomposer.js";

export default class Home extends Page_comp {
  
  async render() {
    // Affichage de la page
    return Page_comp.renderPage(() => `



        <div class="container">
            <iframe src="asset/pdf.pdf"></iframe>
        </div>

        <div class="error" id="error" style="visibility: hidden;">
            <img id="errorimg2" src="/src/assets/img/travailleur-plat-cle.png" alt="travailleur">
            <p id="errortext"></p>
            <img id="errorimg1" src="/src/assets/img/travailleur-plat-cle.png" alt="travailleur">
        </div>

        <section class="separateur"> 
            <a href="/#/aut">autentification</a>
            <a href="/#/document">document</a>

          <section>
              <button class="button-15" role="button">Charger</button>
              <button class="button-15" role="button">Aide 15</button>
              <button class="button-15" role="button">Button 15</button>
          </section>

        </section>


        <script type="module" src="/src/app.js"></script>
    `);
  }
}
