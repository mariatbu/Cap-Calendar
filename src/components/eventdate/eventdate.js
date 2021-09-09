import { FormatService } from "../../services/FormatService.js";
import { ComponentDateBase } from "../core/componentDateBase.js";
import { CHANNELS } from "../../services/Config.js";

class EventDate extends ComponentDateBase{

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

window.customElements.define("cap-event-date", EventDate);