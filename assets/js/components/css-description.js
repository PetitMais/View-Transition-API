import './button-action.js';
class CSSDescription extends HTMLElement {

    connectedCallback() {
        // Détermine le contenu en fonction du paramètre 'css' dans l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const cssValue = urlParams.get('css');


        // if (!urlParams.has('css')) {
        //     console.log("L'attribut ?css= est absent dans l'URL.");
        //     this.querySelector("button-action").style.display = 'none';
           
        // // Actions à réaliser si l'attribut ?css= est manquant
        // }

        switch (cssValue) {
            case 'Subgrid':
                this.contents = 'Subgrid';
                this.feature = 'subgrid';
                break;
            case '@layers':
                this.contents = '@layers';
                this.feature = 'cascade-layers';
                break;
            case '@scroll-timeline':
                this.contents = '@scroll-timeline';
                this.feature = '';
                break;
            case 'CSS Nesting':
                this.contents = 'CSS Nesting';
                this.feature = 'nesting'
                break;
             case ':has()':
                this.contents = ':has()';
                this.feature = 'has'
                break;
            case 'Scroll driven animation':
                this.contents = 'Scroll driven animation';
                this.feature = 'scroll-driven-animations';
                break;
            case 'oklch()':
                this.contents = 'oklch()';
                this.feature = 'oklab';
                break;
            case 'Anchor positioning':
                this.contents = 'Anchor positioning';
                this.feature = 'anchor-positioning';

                break;
            case 'Container queries':
                this.contents = 'Container queries';
                this.feature = 'container-queries';
                break;
            case 'Style queries':
                this.contents = 'Style queries';
                this.feature = '';
                break;
            case 'Scoped styles':
                this.contents = 'Scoped styles';
                this.feature = '';
                break;
            case 'Dynamic viewport units':
                this.contents = 'Dynamic viewport units';
                this.feature = 'viewport-units';
                break;
            case 'Logical properties':
                this.contents = 'Logical properties';
                this.feature = 'logical-properties';
                break;
            case 'View Transition API':
                this.contents = `
                <p>L'API View Transition permet de simplifier 
                et d'optimiser les transitions animées entre différentes vues 
                dans un site web. Elle s'adapte aux deux grandes approches 
                de développement d'applications web :</p>
                <ul>
                    <li>SPA (Single-Page Application) : Dans ce contexte, 
                    une seule page est chargée, et les changements d'état sont 
                    gérés dynamiquement via le DOM. Par exemple, lorsqu'un
                    utilisateur navigue entre différentes sections de l'application, 
                    l'API View Transition facilite l'animation des modifications 
                    directement au sein de la page actuelle.</li>
                    <li>MPA (Multi-Page Application) : Dans les applications 
                    multipages, chaque navigation entre documents implique un 
                    rechargement de page. Ici, l'API permet de gérer les 
                    transitions visuelles entre deux pages distinctes, offrant 
                    une continuité esthétique malgré les rechargements.</li>
                </ul>
                <p>En résumé, que ce soit pour un SPA ou un MPA, l'API View Transition 
                enrichit l'expérience utilisateur en rendant les interactions 
                plus fluides et agréables.</p>
                `;
                this.feature = 'view-transitions';
                break;
            default:
                this.contents = '<p>Bienvenue ! <a href="index.html">Choisissez une fonctionnalité CSS pour en savoir plus.</a></p>';
                break;
        }
        console.log();

        // Affichage du HTML dans index.html
        this.innerHTML = /* HTML */ `
        <h1>${cssValue === "" ||  cssValue === null || !urlParams.has('css')
            ? "Aucune fonctionnalité" 
            : cssValue}</h1>
        <baseline-status featureId="${this.feature}"></baseline-status>
        <div>
            ${this.contents}
        </div>
        <button-action url="exemple.html" content="Exemple" class="transition"></button-action>
        `;

        if (!urlParams.has('css') || cssValue === "" || cssValue === null) {
            console.log("L'attribut ?css= est absent dans l'URL.");
            this.querySelector("button-action").style.display = 'none';
            this.querySelector("baseline-status").style.display = 'none';
           
        // Actions à réaliser si l'attribut ?css= est manquant
        }
    }

    disconnectedCallback() {
        console.log('Déconnecté');
    }
}

customElements.define("css-description", CSSDescription);