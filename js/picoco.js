var LifeCycle = exports.LifeCycle = new (function() {
    this.INIT = 1;    
    this.SELECT_FOLDER = 2;    
    this.CLASSIFY_PICS = 3;    
    this.DONE = 4;    
})();

exports.Picoco = function() {
    this.state = LifeCycle.INIT;
    this.folder = null;
    this.picNum = 0;
    this.imagesInFolder = null;
    this.listeners = new Array();

    this.onStateChanged = function(callback) {
        this.listeners.push(callback); 
    };

    this.changeState = function(newState) {
        oldState = this.state;
        this.state = newState;
        for (i in this.listeners) {
            this.listeners[i](oldState, newState);
        }
    };
}
