import { DateService } from "../../services/DateService.js";
import { FormatService } from "../../services/FormatService.js";
import { ComponentDateBase } from "../core/componentDateBase.js";
import css from './monthdate.css.js';

export class MonthDate extends ComponentDateBase{

    _formatDate(){
        return FormatService.getMonth(this.date);
    }

    _changeDate(value){
        return !this.date || !DateService.isMonth(value, this._oldDate);
    }

    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }

}
customElements.define('cap-month-date', MonthDate);