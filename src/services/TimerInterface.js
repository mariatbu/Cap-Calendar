export const timerInterface = {
    setInterval:(handler, timeInterval)=>{this.setInterval(handler, timeInterval).bind(window.setInterval(handler, timeInterval))},
    clearInterval:(intervalID)=>{this.clearInterval(intervalID).bind(window.clearInterval(intervalID))}
}