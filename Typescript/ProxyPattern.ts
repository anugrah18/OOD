// Interface for payment
interface Payment {
  pay(amount: number): void;
}

// Real Payment
class RealPayment implements Payment {
  pay(amount: number): void {
    console.log(`Payment of ${amount} processed successfully.`);
  }
}

// User class (for demonstration purposes)
class User {
  private name: string;
  private authenticated: boolean;
  private permissions: string[];

  constructor(name: string, authenticated: boolean = false) {
    this.name = name;
    this.authenticated = authenticated;
    this.permissions = [];
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }

  setPermissions(permissions: string[]): void {
    this.permissions = permissions;
  }
}

// Proxy Payment
class ProxyPayment implements Payment {
  private realPayment: RealPayment;
  private user: User;

  constructor(realPayment: RealPayment, user: User) {
    this.realPayment = realPayment;
    this.user = user;
  }

  pay(amount: number): void {
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
const realPayment: RealPayment = new RealPayment();

// Creating a user with payment permission
const user: User = new User("John", true);
user.setPermissions(["payment"]);

// Proxy payment with limited permissions
const proxyPayment: ProxyPayment = new ProxyPayment(realPayment, user);

// Attempting payment with valid user
proxyPayment.pay(100);

// Creating a user without payment permission
const user2: User = new User("Alice", true);
user2.setPermissions(["some_other_permission"]);

// Proxy payment with limited permissions
const proxyPayment2: ProxyPayment = new ProxyPayment(realPayment, user2);

// Attempting payment with user without payment permission
proxyPayment2.pay(200);

// Attempting payment without authentication
const user3: User = new User("Bob", false);
const proxyPayment3: ProxyPayment = new ProxyPayment(realPayment, user3);
proxyPayment3.pay(300);
