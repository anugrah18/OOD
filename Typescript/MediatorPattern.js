var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Concrete Mediator
var ConcreteChatMediator = /** @class */ (function () {
    function ConcreteChatMediator() {
        this.users = [];
    }
    ConcreteChatMediator.prototype.add_user = function (user) {
        this.users.push(user);
    };
    ConcreteChatMediator.prototype.send_message = function (message, sender) {
        this.users.forEach(function (user) {
            if (user !== sender) {
                // Don't send message to the sender
                user.receive(message);
            }
        });
    };
    return ConcreteChatMediator;
}());
// Colleague interface
var User = /** @class */ (function () {
    function User(name, mediator) {
        this.name = name;
        this.mediator = mediator;
    }
    User.prototype.send = function (message) {
        console.log("".concat(this.name, " sends: ").concat(message));
        this.mediator.send_message(message, this);
    };
    return User;
}());
// Concrete Colleague
var ChatUser = /** @class */ (function (_super) {
    __extends(ChatUser, _super);
    function ChatUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatUser.prototype.receive = function (message) {
        console.log("".concat(this.name, " receives: ").concat(message));
    };
    return ChatUser;
}(User));
// Example usage
var mediator = new ConcreteChatMediator();
// Create users
var alice = new ChatUser("Alice", mediator);
var bob = new ChatUser("Bob", mediator);
var charlie = new ChatUser("Charlie", mediator);
// Add users to the mediator
mediator.add_user(alice);
mediator.add_user(bob);
mediator.add_user(charlie);
// Simulate chat
alice.send("Hi, everyone!");
bob.send("Hello, Alice!");
charlie.send("Hey there!");
