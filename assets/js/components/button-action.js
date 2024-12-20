class ButtonAction extends HTMLElement {
    static observedAttributes = ['content', 'url'];

    connectedCallback() {
        // Affichage du HTML dans index.html.
        this.content = this.getAttribute('content');
        this.url = this.getAttribute('url');

        this.innerHTML = /* HTML */ `
        <style>
        .action-local{
        padding: 10px 25px;
        background-color: var(--blue);
        border-radius: 15px;
        box-shadow: 5px 5px var(--indigo);
        text-decoration: none;
        color: black;
        display: inline-block;
        width: 100%;
        }
        .action-local:hover{
        padding: 10px 25px;
        background-color: var(--blue);
        border-radius: 15px;
        box-shadow: none;
        transition:box-shadow .2s;
        }
        </style>
        <a href="${this.url}" class="action-local">${this.content}</a>
        `
        this.querySelector("a").addEventListener("click", async (event) => {
            event.preventDefault(); // Empêche le rechargement de la page
            // Redirection vers la page description
            window.location.href = `${this.url}?css=${this.content}`;
        });
    }



    disconnectedCallback() {
        console.log('Déconnecter');
    }
}
customElements.define("button-action", ButtonAction)