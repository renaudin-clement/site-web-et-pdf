import Home_page from "/src/Views/pages/home.js";
import Authentification from "/src/Views/pages/authentification.js";
import Document from "/src/Views/pages/griddocument.js";
import Error_Page from "/src/Views/pages/error_page.js";
import Utils from "/src/services/routeurfonction.js";


const routes = {
    ""             : Home_page,
    "/"            : Home_page,
    "/home"            : Home_page,
    "/aut"        :  Authentification,
    "/document"        :  Document,
}

const router = async () => {
    const content   = document.querySelector("#content");
    let   request   = Utils.parseRequestURL();
    console.log("router request :",request);
    let   parsedurl = `/${request.resource || ""}${request.id ? "" : ""}${request.verb ? `/${request.verb}` : ""}`;
    console.log("router parsedURL :",parsedurl);
    let   page      = routes[parsedurl] ? (new routes[parsedurl]()) : (new Error_Page()); 
    console.log("PAGE : ",page);
    console.log("TYPEOF PAGE : ",typeof page);
    content.innerHTML = await page.render();
};

window.addEventListener("load",router);
window.addEventListener("hashchange",router);





