import { PubSub } from "./PubSub.js"
import { INTERVAL } from "./Config.js"
import { timerInterface } from "./TimerInterface.js"



class TimerService{
    constructor (pubSub, timerInterface){
        this._pubSub = pubSub;
        this._timerInterface = timerInterface;
    }
}

export default new TimerService(new PubSub(), timerInterface)
