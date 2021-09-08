import { FormatService } from "../../services/FormatService.js";
import { DateService } from "../../services/DateService.js";
import pubSub from "../../services/PubSub.js";
import { CHANNELS } from "../../services/Config.js";
import css from './systemdate.css.js';

class SystemDate extends HTMLElement{
    constructor(){
        super();
        this._text = null;
        this.date = new Date();
    }
    _formatDate() {
        return FormatService.getSystemDate(this.date);
    }
    connectedCallback(){
        const shadow = this.attachShadow({mode:"closed"})
        this._text = document.createTextNode(this._formatDate());
        const div = document.createElement('div');
        shadow.adoptedStyleSheets = [css];
        div.appendChild(this._text);
        shadow.appendChild(div);
        this._dispose = pubSub.on(CHANNELS.CHANGEDATE, (date) => {
            this.date = date;
            if(!DateService.isToday(date, new Date())){
                text.data = this._formatDate();
            }
        } )
    }
    disconnectedCallback(){
        this._dispose();
    }
}
customElements.define('cap-system-date', SystemDate);
export {SystemDate}