class ButtonAction extends HTMLElement {
    static observedAttributes = ['content'];

    connectedCallback() {
        // Affichage du HTML dans index.html.
        this.content = this.getAttribute('content');

        this.innerHTML = /* HTML */ `
        <a href="description.html">${this.content}</a>
        `
    }

    disconnectedCallback() {
        console.log('Déconnecter');
    }
}
customElements.define("button-action", ButtonAction);