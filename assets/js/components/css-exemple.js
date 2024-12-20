class CSSExemple extends HTMLElement {

    connectedCallback() {
        // Affichage du HTML dans index.html.
        this.innerHTML = /* HTML */ `
        <h1 class="transition">Exemple</h1>
        <section>
            <h2>Interfaces</h2>
            <p><code>ViewTransition</code> est un objet qui représente une 
            animation de transition entre deux états de l'interface 
            utilisateur dans une application. Il permet de suivre et 
            de réagir à différents moments de la transition, 
            comme lorsqu'elle est prête à démarrer ou lorsqu'elle 
            est terminée. Vous pouvez également choisir d'annuler 
            ou d'ignorer la transition si nécessaire. Cela offre un 
            contrôle précis pour créer des expériences visuelles fluides 
            et personnalisées dans les applications web.</p>
        </section>
        <section>
            <h2>Extensions à d'autres interfaces</h2>
            <p><code>document.startViewTransition()</code> est une méthode utilisée pour 
            lancer une transition visuelle fluide entre l'état actuel du DOM et 
            un nouvel état dans une application monopage (SPA). Elle prend en 
            argument une fonction qui modifie le DOM (comme changer le contenu ou 
            naviguer entre sections). Pendant que cette fonction exécute les 
            modifications, le navigateur capture les anciens et nouveaux états 
            pour appliquer des animations fluides. Cette méthode retourne un 
            objet ViewTransition qui permet d'ajouter des comportements personnalisés 
            ou d'interagir avec le cycle de vie de la transition.</p>
            <p>Le <code>PageRevealEvent</code> est un objet événement lié à l'événement 
            pagereveal, utilisé lors d'une navigation entre documents. Cet événement permet 
            de contrôler et personnaliser la transition visuelle entre deux pages. Si une 
            transition de vue est déclenchée par la navigation, le <code>PageRevealEvent</code> 
            donne accès à un objet <code>ViewTransition</code>, qui contient les informations 
            nécessaires pour gérer l'animation entre l'ancien document et le nouveau. </p>
            <p>Le <code>PageSwapEvent</code> est un événement utilisé lors des navigations 
            entre documents pour gérer les transitions de vue associées. Il permet d'accéder à 
            l'objet <code>ViewTransition</code>, qui contrôle les animations de transition entre 
            l'état actuel et l'état cible. Cet événement fournit aussi des informations sur le type 
            de navigation (comme "suivant" ou "précédent") et les entrées d'historique du document 
            actuel et de celui vers lequel on navigue.</p>
        </section>
        <section>
            <h2>Ajouts HTML</h2>
            <p><code>link rel="expect"</code> est un attribut HTML qui aide à identifier le contenu le 
            plus critique du document pour la vue initiale de la page. En utilisant ce lien, le 
            navigateur pourra analyser et traiter le contenu critique en priorité, garantissant ainsi 
            une première peinture cohérente et rapide pour l'utilisateur. Cela permet d'éviter le blocage 
            du rendu jusqu'à ce que le contenu essentiel soit chargé, ce qui améliore la performance et 
            réduit les délais de chargement pour une meilleure expérience utilisateur sur tous les 
            navigateurs compatibles.</p>
        </section>
        <section>
            <h2>Ajouts CSS</h2>
                <h3>Règles AT</h3>
                <p><code>@view-transition</code> est utilisée pour définir des transitions visuelles 
                entre deux documents HTML lors de la navigation, comme lors d'un changement de page 
                dans une application monopage (SPA). En utilisant @view-transition, vous pouvez spécifier 
                comment le contenu de la page actuelle et de la nouvelle page doivent se fondre 
                l'un dans l'autre visuellement.</p>
                <h3>Propriétés</h3>
                <p><code>view-transition-name</code> permet d'identifier un élément spécifique 
                lors des transitions de vue dans une application monopage. En lui attribuant un nom 
                distinct, cet élément peut participer à une transition de vue qui lui est propre, 
                différente de la transition générale appliquée à la racine de la page. Si la valeur none est 
                utilisée, l'élément ne participera pas aux transitions de vue, ce qui est utile pour 
                isoler certains contenus ou éviter des animations indésirables. Cela permet d'avoir un 
                contrôle plus fin sur le comportement des animations et des changements visuels sur la page.</p>
                <h3>Pseudo-éléments</h3>
                <p><code>::view-transition</code> agit comme la superposition de toutes les transitions 
                de vue dans une application monopage (SPA). Elle contient toutes les animations et 
                transitions de contenu, se plaçant au-dessus de tout autre élément sur la page. 
                Cela permet de gérer les changements d'état et de contenu de manière cohérente et 
                unifiée, offrant une transition fluide entre différentes vues sans perturber le reste 
                de l'interface utilisateur.</p>
                <p><code>::view-transition-group()</code> est une pseudo-classe CSS utilisée pour 
                encapsuler plusieurs éléments HTML dans un conteneur unique lors d'une transition de vue. 
                Cela permet de gérer efficacement les animations de changements de contenu entre les éléments, 
                en appliquant une seule animation à l'ensemble des éléments encapsulés, plutôt que 
                d'appliquer une animation individuelle à chaque élément.</p>
                <p><code>::view-transition-image-pair()</code> est utilisée pour styliser le conteneur 
                qui affiche à la fois l'ancienne et la nouvelle vue lors d'une transition de vue. Ce conteneur 
                permet de voir simultanément l'état actuel (avant la transition) et l'état futur 
                (après la transition) de l'interface utilisateur, créant ainsi une visualisation plus fluide 
                du changement. Il est particulièrement utile pour les animations qui nécessitent une vue 
                comparative, comme dans les transitions d'images ou de contenu, où l'utilisateur peut 
                observer à la fois l'ancienne et la nouvelle version avant que la transition ne soit complétée.</p>
                <p><code>::view-transition-old()</code> est utilisé pour capturer un instantané statique 
                de l'ancienne vue avant que la transition ne commence.</p>
                <p><code>::view-transition-new()</code>est utilisé pour capturer un instantané 
                statique de la nouvelle vue avant que la transition ne commence.</p>
        </section>

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