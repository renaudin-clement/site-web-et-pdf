import Page_comp from "../composants/pagecomposer.js";

export default class Authentification extends Page_comp {
  
  async render() {
    // Affichage de la page
    var boxElem = document.querySelector("link");
       boxElem.innerHTML= `<link href="/src/assets/style/style.css" rel="stylesheet" />
        <link href="/src/assets/style/styleform.css" rel="stylesheet" />`

    return Page_comp.renderPage(() => `
        <div class="container">
            <form action="connection()" class="autform">
                <h1>Tape le code</h1>
                <input type="text" name="ok" id="lecode">
                <button> Valider</button>
            </form>
        </div>

        <nav class="separateur"> 
            <a href="/#/home">home</a>
            <a href="/#/document">document</a>
        </nav>

        <script type="module" src="/src/assets/testconnexion.js"></script>
    `);
  }
}