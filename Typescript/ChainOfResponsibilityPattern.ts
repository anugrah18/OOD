export {};
// Base class representing a generic discount calculator
abstract class DiscountCalculator {
    public nextCalculator: DiscountCalculator | null;

    constructor(nextCalculator: DiscountCalculator | null = null) {
        this.nextCalculator = nextCalculator;
    }

    // Abstract method to apply discount, to be implemented by concrete classes
    abstract applyDiscount(amount: number): number | null;

    // Method to handle the request by either applying the discount or passing it to the next calculator
    handleRequest(amount: number): number {
        const discount = this.applyDiscount(amount);
        if (discount !== null) {
            console.log(`Discount applied: ${discount}`);
            return discount;
        } else if (this.nextCalculator !== null) {
            console.log("Passing request to next calculator");
            return this.nextCalculator.handleRequest(amount);
        } else {
            console.log("No discount applied");
            return 0;
        }
    }
}

// Concrete discount calculator class for applying a 10% discount
class TenPercentDiscountCalculator extends DiscountCalculator {
    applyDiscount(amount: number): number | null {
        if (amount >= 100) {
            return amount * 0.1; // Apply 10% discount
        } else {
            return null; // Can't handle the request
        }
    }
}

// Concrete discount calculator class for applying a 20% discount
class TwentyPercentDiscountCalculator extends DiscountCalculator {
    applyDiscount(amount: number): number | null {
        if (amount >= 200) {
            return amount * 0.2; // Apply 20% discount
        } else {
            return null; // Can't handle the request
        }
    }
}

// Concrete discount calculator class for applying a 50% discount
class FiftyPercentDiscountCalculator extends DiscountCalculator {
    applyDiscount(amount: number): number | null {
        if (amount >= 500) {
            return amount * 0.5; // Apply 50% discount
        } else {
            return null; // Can't handle the request
        }
    }
}

// Usage
const tenPercentCalculator = new TenPercentDiscountCalculator();
const twentyPercentCalculator = new TwentyPercentDiscountCalculator();
const fiftyPercentCalculator = new FiftyPercentDiscountCalculator();

// Create a chain of discount calculators
tenPercentCalculator.nextCalculator = twentyPercentCalculator;
twentyPercentCalculator.nextCalculator = fiftyPercentCalculator;

// Test with different purchase amounts
const purchaseAmounts: number[] = [50, 150, 250, 600];
purchaseAmounts.forEach(amount => {
    console.log(`\nPurchase amount: ${amount}`);
    const totalDiscount = tenPercentCalculator.handleRequest(amount);
    console.log(`Total discount: ${totalDiscount}`);
});
