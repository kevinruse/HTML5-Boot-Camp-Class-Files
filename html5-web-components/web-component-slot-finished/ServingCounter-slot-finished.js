export class ServingCounter extends HTMLElement {
    constructor() {
        super();
        this.count = 0;
        console.log('custom element: ServingCounter has been constructed');

        const styles = `
          * {
            font-size: 100%;
            font-family: Arial, Helvetica, sans-serif;
          }
          
          #servingCounter {
            width: 140px;
            border: 2px solid #888;
            border-radius: .65em;
            margin-top: 0;
            text-align: center;
         }
         
         #servingCounterContent {
            display: flex; 
            justify-content: space-between;
            align-items: center;
            padding: 0.45em;
         }

        span {
            display: inline-block;
            text-align: center;
        }
 
        img {
            cursor: pointer;
        }
        `
        const htmlTemplate = `
            <div id="servingCounter">
                <slot name="foodGroup">Add Food Group Here</slot>
                <div id="servingCounterContent">
                    <img src="../images/delete-icon.png" id="decBtn">
                    <span>${this.count}</span>
                    <img src="../images/apple_sm.gif" id="incBtn">
                </div>
                <slot name="req"></slot>
            </div>`;

        this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML =
            `<style>
              ${styles}
            </style>
            ${htmlTemplate}`;

        this.buttonInc = this.shadowRoot.getElementById('incBtn');
        this.buttonDec = this.shadowRoot.getElementById('decBtn');
        this.spanValue = this.shadowRoot.querySelector('span');

        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }

    update() {
        this.spanValue.innerText = this.count;
    }

    inc() {
        this.count++;
        this.update();
    }

    dec() {
        if (this.count >= 1) {
            this.count--;
        } else if (this.count === 0)
            this.count = 0;
        this.update();
    }

    connectedCallback() {
        this.buttonInc.addEventListener('click', this.inc);
        this.buttonDec.addEventListener('click', this.dec);
    }

    disconnectedCallback() {
        this.buttonInc.removeEventListener('click', this.inc);
        this.buttonDec.removeEventListener('click', this.dec);
    }
}

customElements.define('serving-counter', ServingCounter);
