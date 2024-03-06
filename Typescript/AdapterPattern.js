// Adaptee - EuropeanSocket
var EuropeanSocket = /** @class */ (function () {
    function EuropeanSocket() {
    }
    EuropeanSocket.prototype.plug = function () {
        return "Plugged into European socket";
    };
    return EuropeanSocket;
}());
// Adapter - EuropeanToUSAdapter
var EuropeanToUSAdapter = /** @class */ (function () {
    function EuropeanToUSAdapter(socket) {
        this.socket = socket;
    }
    EuropeanToUSAdapter.prototype.connect = function () {
        return this.socket.plug();
    };
    return EuropeanToUSAdapter;
}());
// Client Code
function chargeLaptop(socketAdapter) {
    return socketAdapter.connect();
}
// Usage
var europeanSocket = new EuropeanSocket();
var adapter = new EuropeanToUSAdapter(europeanSocket);
console.log(chargeLaptop(adapter));
