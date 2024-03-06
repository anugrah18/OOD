// Adaptee - EuropeanSocket
class EuropeanSocket {
  plug(): string {
    return "Plugged into European socket";
  }
}

// Target Interface - SocketAdapter
interface SocketAdapter {
  connect(): string;
}

// Adapter - EuropeanToUSAdapter
class EuropeanToUSAdapter implements SocketAdapter {
  private socket: EuropeanSocket;

  constructor(socket: EuropeanSocket) {
    this.socket = socket;
  }

  connect(): string {
    return this.socket.plug();
  }
}

// Client Code
function chargeLaptop(socketAdapter: SocketAdapter): string {
  return socketAdapter.connect();
}

// Usage
const europeanSocket = new EuropeanSocket();
const adapter = new EuropeanToUSAdapter(europeanSocket);
console.log(chargeLaptop(adapter));
