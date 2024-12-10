class ViewTransition extends HTMLElement {
    static observedAttributes = ['content','url'];

    connectedCallback() {
        // Affichage du HTML dans index.html.
        this.content = this.getAttribute('content');
        this.url = this.getAttribute('url');

        this.innerHTML = /* HTML */ `
        <h1>View Transition API</h1>
        <baseline-status featureId="view-transitions"></baseline-status>
        <p>${this.content}</p>
        <a href="${this.url}" id="transition">Exemple</a>
        `}

    disconnectedCallback() {
        console.log('Déconnecter');
    }
}
customElements.define("view-transition", ViewTransition);