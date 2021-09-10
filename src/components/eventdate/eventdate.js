import { FormatService } from "../../services/FormatService.js";
import { ComponentDateBase } from "../core/componentDateBase.js";
import { CHANNELS } from "../../services/Config.js";

export class EventDate extends ComponentDateBase{

    constructor(){
        super();
    }

    _setStyle(){
        return document.createElement("style");
    }


    connectedCallback(){
        this._subscribe(CHANNELS.CHANGESELECTEDATE);
    }

    _changeDate(){
        return true;
    }

    _formatDate(){
        return FormatService.getSelected(this.date);
    }

}

customElements.define("cap-event-date", EventDate);
