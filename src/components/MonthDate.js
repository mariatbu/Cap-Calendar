import { FormatService } from "../services/FormatService.js";
import { DateService } from "../services/DateService.js";
import pubSub from "../services/PubSub.js";
import { CHANNELS } from "../services/Config.js";

class MonthDate extends HTMLElement{
    constructor(){
        super();
        this._text = null;
        this.date = new Date();
    }
    connectedCallback(){
        this._dispose = pubSub.on(CHANNELS.CHANGEDATE, (date) => {
            this.date = date;
            if(!DateService.isMonth(date, new Date())){
                this._text.data = FormatService.getMonth(this.date);
            }
        })
        const shadow = this.attachShadow({mode:"closed"})
        this._text = document.createTextNode(FormatService.getMonth(this.date));
        const div = document.createElement('div');
        div.appendChild(this._text);
        shadow.appendChild(div);
    }
    disconnectedCallback(){
        this._dispose();
    }
}
customElements.define('cap-month-date', MonthDate);
export {MonthDate}