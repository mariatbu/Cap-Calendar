import { FormatService } from "../services/FormatService.js"

class SystemDate extends HTMLElement{
    constructor(){
        super();
        this._shadow = this.attachShadow({mode:"closed"})
    }
    connectedCallback(){
        (function(parent, date){
            let text = document.createTextNode(FormatService.getSystemDate(date));
            let div = document.createElement('div');
            div.appendChild(text);
            parent.appendChild(div);  
        }(this._shadow,new Date()))
        const slot = document.createElement('slot');
        this._shadow.appendChild(slot);
    }
    disconnectedCallback(){}
}
customElements.define('cap-system-date', SystemDate);
export {SystemDate}