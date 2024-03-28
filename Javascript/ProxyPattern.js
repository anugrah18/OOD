// Interface for payment
class Payment {
  pay(amount) {
    throw new Error("Method not implemented.");
  }
}

// Real Payment
class RealPayment extends Payment {
  pay(amount) {
    console.log(`Payment of ${amount} processed successfully.`);
  }
}

// User class (for demonstration purposes)
class User {
  constructor(name, authenticated = false) {
    this.name = name;
    this.authenticated = authenticated;
    this.permissions = [];
  }

  isAuthenticated() {
    return this.authenticated;
  }

  hasPermission(permission) {
    return this.permissions.includes(permission);
  }

  setPermissions(permissions) {
    this.permissions = permissions;
  }
}

// Proxy Payment
class ProxyPayment extends Payment {
  constructor(realPayment, user) {
    super();
    this.realPayment = realPayment;
    this.user = user;
  }

  pay(amount) {
    if (this.user.isAuthenticated()) {
      if (this.user.hasPermission("payment")) {
        this.realPayment.pay(amount);
      } else {
        console.log(
          "Permission denied: User does not have permission to make payments."
        );
      }
    } else {
      console.log("Authentication required.");
    }
  }
}

// Usage
const realPayment = new RealPayment();

// Creating a user with payment permission
const user = new User("John", true);
user.setPermissions(["payment"]);

// Proxy payment with limited permissions
const proxyPayment = new ProxyPayment(realPayment, user);

// Attempting payment with valid user
proxyPayment.pay(100);

// Creating a user without payment permission
const user2 = new User("Alice", true);
user2.setPermissions(["some_other_permission"]);

// Proxy payment with limited permissions
const proxyPayment2 = new ProxyPayment(realPayment, user2);

// Attempting payment with user without payment permission
proxyPayment2.pay(200);

// Attempting payment without authentication
const user3 = new User("Bob", false);
const proxyPayment3 = new ProxyPayment(realPayment, user3);
proxyPayment3.pay(300);
