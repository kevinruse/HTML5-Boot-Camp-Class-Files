export class FoodGroup extends HTMLElement {
    constructor() {
        super();
        const htmlTemplate = `<section>
                                    <h1>
                                        <slot name="heading">Heading Goes Here</slot>
                                    </h1>
                                    <section>
                                        <p>
                                            <slot name="body">Contents of the dialog box.</slot>
                                        </p>
                                        <div>
                                            <slot name="tableData"></slot>
                                        </div>
                                    </section>
                                </section>`
        const styles = `:host {
                                font-family: Helvetica, sans-serif;
                         }`;

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `<style>${styles}</style>
                                     ${htmlTemplate} `;
    }
}

customElements.define('fp-foodgroup', FoodGroup);


