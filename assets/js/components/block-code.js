
class BlockCode extends HTMLElement {
    connectedCallback() {
        // Initialise les variables basées sur les attributs du balisage
        this.language = this.getAttribute("language");
        this.sourceCode = this.getAttribute("sourceCode");
        this.codeComment = this.getAttribute("codeComment");
        this.render(this.language, this.sourceCode, this.codeComment);
    }

    /**
     * Fonction de rendu pour afficher un bloc de code avec un commentaire explicatif
     * @param {string} language - Langue du code (JS ou CSS)
     * @param {string} sourceCode - Code source
     * @param {string} codeComment - Commentaire expliquant le code
     */
    render(language, sourceCode, codeComment) {
        let content = "";
        switch (language) {
            case "JS":
                content = `
              <div class="code-block js">
                  <h3>${language}</h3>
                  <pre>
                    <code>
                      <span class="comment">// ${codeComment}</span>
                      ${sourceCode}
                    </code>
                  </pre>
              </div>
            `;
                break;

            case "CSS":
                content = `
              <div class="code-block css">
                  <h3>${language}</h3>
                  <pre>
                    <code>
                      <span class="comment">/* ${codeComment} */</span>
                      ${sourceCode}
                    </code>
                  </pre>
              </div>
            `;
                break;

            default:
                content = `
              <div class="code-block">
                  <h3>${language}</h3>
                  <pre>
                    <code>
                      <span class="comment">/* ${codeComment} */</span>
                      ${sourceCode}
                    </code>
                  </pre>
              </div>
            `;
                break;
        }

        this.innerHTML = content;
    }
}
customElements.define("block-code",);