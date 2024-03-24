// Mediator interface
interface ChatMediator {
  send_message(message: string, sender: User): void;
  add_user(user: User): void;
}

// Concrete Mediator
class ConcreteChatMediator implements ChatMediator {
  private users: User[] = [];

  add_user(user: User): void {
    this.users.push(user);
  }

  send_message(message: string, sender: User): void {
    this.users.forEach((user) => {
      if (user !== sender) {
        // Don't send message to the sender
        user.receive(message);
      }
    });
  }
}

// Colleague interface
abstract class User {
  constructor(protected name: string, protected mediator: ChatMediator) {}

  send(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.send_message(message, this);
  }

  abstract receive(message: string): void;
}

// Concrete Colleague
class ChatUser extends User {
  receive(message: string): void {
    console.log(`${this.name} receives: ${message}`);
  }
}

// Example usage
const mediator: ChatMediator = new ConcreteChatMediator();

// Create users
const alice: User = new ChatUser("Alice", mediator);
const bob: User = new ChatUser("Bob", mediator);
const charlie: User = new ChatUser("Charlie", mediator);

// Add users to the mediator
mediator.add_user(alice);
mediator.add_user(bob);
mediator.add_user(charlie);

// Simulate chat
alice.send("Hi, everyone!");
bob.send("Hello, Alice!");
charlie.send("Hey there!");
