

export default class Page_comp {
    async render(){;};
    static async renderPage(contentCallback) {
        return `          
                ${await contentCallback()}
        `;
      }
}