import { FormatService } from "../../services/FormatService.js";
import { ComponentDateBase } from "../core/componentDateBase.js";
import css from './clock.css.js';

class Clock extends ComponentDateBase {
 
    _formatDate(){
        return FormatService.getTimer(this.date);
    }

    _changeDate(value){
        return true;
    }

    _getStyle(){
        return this._shadow.adoptedStyleSheets = [css];
    }

}
window.customElements.define("cap-clock", Clock)
export {Clock}

