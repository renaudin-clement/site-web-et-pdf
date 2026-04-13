

export default class Page_comp {
    async render(){;};

    async afterRender() {};

    static async renderPage(contentCallback) {
        return `          
                ${await contentCallback()}
        `;
      }
}