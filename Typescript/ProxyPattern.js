"use strict";
exports.__esModule = true;
// Real Payment
var RealPayment = /** @class */ (function () {
    function RealPayment() {
    }
    RealPayment.prototype.pay = function (amount) {
        console.log("Payment of ".concat(amount, " processed successfully."));
    };
    return RealPayment;
}());
// User class (for demonstration purposes)
var User = /** @class */ (function () {
    function User(name, authenticated) {
        if (authenticated === void 0) { authenticated = false; }
        this.name = name;
        this.authenticated = authenticated;
        this.permissions = [];
    }
    User.prototype.isAuthenticated = function () {
        return this.authenticated;
    };
    User.prototype.hasPermission = function (permission) {
        return this.permissions.includes(permission);
    };
    User.prototype.setPermissions = function (permissions) {
        this.permissions = permissions;
    };
    return User;
}());
// Proxy Payment
var ProxyPayment = /** @class */ (function () {
    function ProxyPayment(realPayment, user) {
        this.realPayment = realPayment;
        this.user = user;
    }
    ProxyPayment.prototype.pay = function (amount) {
        if (this.user.isAuthenticated()) {
            if (this.user.hasPermission("payment")) {
                this.realPayment.pay(amount);
            }
            else {
                console.log("Permission denied: User does not have permission to make payments.");
            }
        }
        else {
            console.log("Authentication required.");
        }
    };
    return ProxyPayment;
}());
// Usage
var realPayment = new RealPayment();
// Creating a user with payment permission
var user = new User("John", true);
user.setPermissions(["payment"]);
// Proxy payment with limited permissions
var proxyPayment = new ProxyPayment(realPayment, user);
// Attempting payment with valid user
proxyPayment.pay(100);
// Creating a user without payment permission
var user2 = new User("Alice", true);
user2.setPermissions(["some_other_permission"]);
// Proxy payment with limited permissions
var proxyPayment2 = new ProxyPayment(realPayment, user2);
// Attempting payment with user without payment permission
proxyPayment2.pay(200);
// Attempting payment without authentication
var user3 = new User("Bob", false);
var proxyPayment3 = new ProxyPayment(realPayment, user3);
proxyPayment3.pay(300);
