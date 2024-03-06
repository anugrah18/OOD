# Adaptee - EuropeanSocket
class EuropeanSocket:
    def plug(self):
        return "Plugged into European socket."

# Target Interface - SocketAdapter
class SocketAdapter:
    def connect(self):
        pass

# Adapter - EuropeanToUSAdapter
class EuropeanToUSAdapter(SocketAdapter):
    def __init__(self,socket):
        self.socket = socket

    def connect(self):
        return self.socket.plug()

# Client code
def charge_laptop(socket_adapter):
    return socket_adapter.connect()

# Usage
european_socket = EuropeanSocket()
adapter = EuropeanToUSAdapter(european_socket)
print(charge_laptop(adapter))

