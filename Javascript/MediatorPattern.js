// Mediator interface
class ChatMediator {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  sendMessage(message, sender) {
    this.users.forEach((user) => {
      if (user !== sender) {
        // Don't send message to the sender
        user.receive(message);
      }
    });
  }
}

// Colleague interface
class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  send(message) {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message) {}
}

// Concrete Colleague
class ChatUser extends User {
  receive(message) {
    console.log(`${this.name} receives: ${message}`);
  }
}

// Example usage
const mediator = new ChatMediator();

// Create users
const alice = new ChatUser("Alice", mediator);
const bob = new ChatUser("Bob", mediator);
const charlie = new ChatUser("Charlie", mediator);

// Add users to the mediator
mediator.addUser(alice);
mediator.addUser(bob);
mediator.addUser(charlie);

// Simulate chat
alice.send("Hi, everyone!");
bob.send("Hello, Alice!");
charlie.send("Hey there!");
