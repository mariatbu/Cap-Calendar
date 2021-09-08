import {DAYSOFWEEK} from "../services/Config.js"

const css = `:host{
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(7,25px);
  } `

class DaysOfWeeks extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: "closed"});
        this.text = null;
    }

    connectedCallback(){

            let div= document.createElement('div');
            div.appendChild(text);
            const style = document.createElement("style");
            style.textContent = css;
            this._shadow.appendChild(style);
            return div;


        
            
    }

    disconnectedCallback(){

    }

   
}

customElements.define('cap-days-of-weeks', DaysOfWeeks);

export {DaysOfWeeks}