# Mediator interface
class ChatMediator:
    def send_message(self, message: str, sender: 'User') -> None:
        pass

# Concrete Mediator
class ConcreteChatMediator(ChatMediator):
    def __init__(self):
        self.users = []

    def add_user(self, user: 'User'):
        self.users.append(user)

    def send_message(self, message: str, sender: 'User') -> None:
        for user in self.users:
            if user != sender:  # Don't send message to the sender
                user.receive(message)

# Colleague interface
class User:
    def __init__(self, name: str, mediator: ChatMediator):
        self.name = name
        self.mediator = mediator

    def send(self, message: str) -> None:
        print(f"{self.name} sends: {message}")
        self.mediator.send_message(message, self)

    def receive(self, message: str) -> None:
        pass

# Concrete Colleague
class ChatUser(User):
    def receive(self, message: str) -> None:
        print(f"{self.name} receives: {message}")


# Example usage
if __name__ == "__main__":
    # Create mediator
    mediator = ConcreteChatMediator()

    # Create users
    alice = ChatUser("Alice", mediator)
    bob = ChatUser("Bob", mediator)
    charlie = ChatUser("Charlie", mediator)

    # Add users to the mediator
    mediator.add_user(alice)
    mediator.add_user(bob)
    mediator.add_user(charlie)

    # Simulate chat
    alice.send("Hi, everyone!")
    bob.send("Hello, Alice!")
    charlie.send("Hey there!")
