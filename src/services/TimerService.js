import pubSub from "./PubSub.js"
import { INTERVAL, CHANNELS } from "./Config.js"
import { timerInterface } from "./TimerInterface.js"



class TimerService{
    constructor (pubSub, timerInterface){
        this._pubSub = pubSub;
        this._timerInterface = timerInterface;
        this._intervalID = this._timerInterface.setInterval(()=>{
            const date = new Date();
            this._pubSub.emit(CHANNELS.CHANGEDATE, date)
        }, INTERVAL);
    }

    dispose(){
        this._timerInterface.clearInterval(this._intervalID);
    }
}

//TODO: va a dar problemas que se instancie cada vez, habría que usar import y export probablemente en el index.html
export default new TimerService(pubSub, timerInterface)
