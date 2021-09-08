import { FormatService } from "../../services/FormatService.js";
import pubSub from "../../services/PubSub.js";
import { CHANNELS } from "../../services/Config.js";
import css from './clock.css.js';

class Clock extends HTMLElement {
 
    constructor() {
        super();
        this.date = new Date();
    }
 
    _formatDate() {
        return FormatService.getTimer(this.date);
    }
 
    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" })
        const div = document.createElement("div");
        const text = document.createTextNode(this._formatDate());
        div.appendChild(text);
        shadow.appendChild(div);
        shadow.adoptedStyleSheets = [css];
        this._dispose = pubSub.on(CHANNELS.CHANGEDATE, (date) => {
                this.date = date;
                text.data = this._formatDate();
        });
    }
 
    disconnectedCallback() {
        this._dispose();
    }
}
window.customElements.define("cap-clock", Clock)
export {Clock}

