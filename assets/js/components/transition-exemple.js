class TransitionExemple extends HTMLElement {

    connectedCallback() {
        // Affichage du HTML dans index.html.
        this.innerHTML = /* HTML */ `
        <h1 id="transition">Exemple</h1>
        
        <a href="index.html">Retour</a>
        `
    }

    disconnectedCallback() {
        console.log('Déconnecter');
    }
}
customElements.define("transition-exemple", TransitionExemple);