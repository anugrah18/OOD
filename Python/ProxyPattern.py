# Interface for Payment
class Payment:
    def pay(self,amount):
        pass

# Real Payment
class RealPayment(Payment):
    def pay(self,amount):
        print(f"Payment of {amount} processed successfully")

# Proxy Payment
class ProxyPayment(Payment):
    def __init__(self,real_payment,user):
        self._real_payment = real_payment
        self._user = user

    def pay(self,amount):
        if self._user.is_authenticated():
            if self._user.has_permission("payment"):
                self._real_payment.pay(amount)
            else:
                print("Permission denied: User does not have permission to make payments.")
        else:
            print("Authentication required.")

# User class (for demonstration purposes)
class User:
    def __init__(self, name, authenticated=False):
        self.name = name
        self.authenticated = authenticated
        self.permissions = []

    def is_authenticated(self):
        return self.authenticated

    def has_permission(self, permission):
        return permission in self.permissions

# Usage
if __name__ == "__main__":
    # Real payment object
    real_payment = RealPayment()

    # Creating a user with payment permission
    user = User("John", authenticated=True)
    user.permissions = ["payment"]

    # Proxy payment with limited permissions
    proxy_payment = ProxyPayment(real_payment, user)

    # Attempting payment with valid user
    proxy_payment.pay(100)

    # Creating a user without payment permission
    user2 = User("Alice", authenticated=True)
    user2.permissions = ["some_other_permission"]

    # Proxy payment with limited permissions
    proxy_payment2 = ProxyPayment(real_payment, user2)

    # Attempting payment with user without payment permission
    proxy_payment2.pay(200)

    # Attempting payment without authentication
    user3 = User("Bob", authenticated=False)
    proxy_payment3 = ProxyPayment(real_payment, user3)
    proxy_payment3.pay(300)
