export class PubSub{

    constructor () {
        this._subscriptor = new Map();
    }
    emit(channel, data){
        const channelSubscriptors = this._subscriptor.get(channel);
        if (channelSubscriptors){
            channelSubscriptors.forEach(s=> {
                s(data);
            });
        }
    }
    on(channel, handler){
        const channelSubscriptors = this._subscriptor.get(channel);
        if(!channelSubscriptors){
            channelSubscriptors = [handle];
            this._subscriptor.set(channelSubscriptors);
        } else {
            channelSubscriptors.push(handler);
        }
        return () => {
            const index = channelSubscriptors.indexOf(handler);
            if(index > -1){
                if(channelSubscriptors.length === 0){
                    this._subscriptor.delete(channel);
                }
            }
        }
    }
}