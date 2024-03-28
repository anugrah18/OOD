// Adaptee - EuropeanSocket
class EuropeanSocket {
  plug() {
    return "Plugged into European socket";
  }
}

// Target Interface - SocketAdapter
class SocketAdapter {
  connect() {
    throw new Error("Method not implemented.");
  }
}

// Adapter - EuropeanToUSAdapter
class EuropeanToUSAdapter extends SocketAdapter {
  constructor(socket) {
    super();
    this.socket = socket;
  }

  connect() {
    return this.socket.plug();
  }
}

// Client Code
function chargeLaptop(socketAdapter) {
  return socketAdapter.connect();
}

// Usage
const europeanSocket = new EuropeanSocket();
const adapter = new EuropeanToUSAdapter(europeanSocket);
console.log(chargeLaptop(adapter));
