class CSSExemple extends HTMLElement {

    connectedCallback() {
        // Affichage du HTML dans index.html.
        this.innerHTML = /* HTML */ `
        <h1 id="transition">Exemple</h1>
        <section class="spa">
            <h2>Transition de vue sur des applications monopage</h2>
            <p>Quand on effectue une transition de vue sur un seul document, 
            on parle de transition de vue dans le même document. 
            Dans les applications monopages (SPA, Single Page Application), 
            il est courant que JavaScript soit employé pour mettre à jour le DOM. 
            Afin de mettre en place une transition de vue dans le même document, 
            vous pouvez utiliser  <code>document.startViewTransition</code>.</p>
            <code>document.startViewTransition(() => {// Mise à jour du DOM ici});</code>
        </section>    
        <section class="mpa">
            <h2>Transition de vue sur des applications multi-pages</h2>
        </section>  
        <a href="index.html">Retour</a>
        `
    }
    disconnectedCallback() {
        console.log('Déconnecter');
    }
}
customElements.define("css-exemple", CSSExemple);