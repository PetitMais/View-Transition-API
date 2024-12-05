class ViewTransition extends HTMLElement {

    connectedCallback() {
        // Affichage du HTML dans index.html.
        this.innerHTML = /* HTML */ `
        <h1>View Transition API</h1>
        <baseline-status featureId="view-transitions"></baseline-status>
        <p>Description de l'api</p>
        <a href="exemple.html">Exemple</a>
        `
    }

    disconnectedCallback() {
        console.log('Déconnecter');
    }
}
customElements.define("view-transition", ViewTransition);