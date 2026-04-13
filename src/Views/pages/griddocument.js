import Page_comp from "../composants/pagecomposer.js";

export default class Home extends Page_comp {
  
  async render() {
    // Affichage de la page

    return Page_comp.renderPage(() => `
        <div class="container">
            <h1 style="font-size:4em">Gestion Document</h1>
            <form action="" class="gridforme">
                <section>

                    <h2>DOC DOC</h2>
                    <div id="drop-zone"> 
                        <p>Dépose tes fichiers ici</p> 
                    </div>
                    <section class="chargment" style="">
                        <p>chargement ...</p>
                        <img src="/src/assets/img/189768.png" alt="chargement">
                    </section>

                    <section>
                        <button class="button-15" role="button">Button 15</button>
                        <button class="button-15" role="button">Button 15</button>
                        <button class="button-15" role="button">Button 15</button>
                    </section>
                </section>
                <div class="wrapper scroller">
                    <div class="one">
                        <p>Un</p>
                        <img src="/pdf_file.png" alt="">
                        <div>
                            <input class="checkbox" type="checkbox" name="" id="">
                        </div>

                    </div>

                    <div class="two">
                        <p>Deux</p>
                        <img src="/pdf_file.png" alt="">
                        <div>
                            <input class="checkbox" type="checkbox" name="" id="">
                        </div>

                    </div>

                    <div class="three">
                        <p>Trois</p>
                        <img src="/pdf_file.png" alt="">
                        <div>
                            <input class="checkbox" type="checkbox" name="" id="">
                        </div>

                    </div>

                    <div class="four">
                        <p>Quatre</p>
                        <img src="/pdf_file.png" alt="">
                        <div>
                            <input class="checkbox" type="checkbox" name="" id="">
                        </div>
                    </div>

                    <div class="five">
                        <p>Cinq</p>
                        <img src="/pdf_file.png" alt="">
                        <div>
                            <input class="checkbox" type="checkbox" name="" id="">
                        </div>
                    </div>

                    <div class="six">
                        <p>Six</p>
                        <img src="/pdf_file.png" alt="">
                        <div>
                            <input class="checkbox" type="checkbox" name="" id="">
                        </div>
                    </div>

                </div>

            </form>
        </div>

        <nav class="separateur"> 
            <a href="/#/home">home</a>
            <a href="/#/aut">authentification</a>
        </nav>
    `);
  }
}