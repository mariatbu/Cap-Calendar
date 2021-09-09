import {DAYSOFWEEK} from "../../services/Config.js";
import css from './daysofweek.css.js';

export class Daysofweek extends HTMLElement{
    constructor(){
        super();
        this._create();
    }

    _create(){
        const shadow = this.attachShadow({mode:"closed"})
        
    
        DAYSOFWEEK.forEach(element => {
            const div = document.createElement("div");
            const text = document.createTextNode(element);
            div.appendChild(text);
            shadow.appendChild(div);
            shadow.adoptedStyleSheets = [css];
        });
    }
 
}

customElements.define('cap-days-of-week', Daysofweek);