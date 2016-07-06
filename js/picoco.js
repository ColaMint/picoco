var LifeCycle = exports.LifeCycle = new (function() {
    this.INIT = 1;    
    this.SELECT_FOLDER = 2;    
    this.CLASSIFY_PICS = 3;    
    this.DONE = 4;    
})();

exports.Picoco = function() {
    this.state = LifeCycle.INIT;

    this.listeners = new Array();

    this.onStateChanged = function(state, callback) {
        if (!(state in this.listeners)) {
            this.listeners[state] = new Array();
        }
        this.listeners[state].push(callback); 
    };

    this.changeState = function(newState) {
        oldState = this.state;
        this.state = newState;
        if (state in this.listeners) {
            for (i in this.listeners[state]) {
                this.listeners[state][i](oldState, newState);
            }
        }
    };
}
