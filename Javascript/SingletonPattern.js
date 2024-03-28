// You can use a third-party library for async mutex in JavaScript
import { Mutex } from "async-mutex";

class Singleton {
  // Class variable to hold the single instance of the class
  static _instance = null;

  // Mutex for thread safety
  static _mutex = new Mutex();

  // Private constructor to prevent external instantiation
  constructor() {}

  // Static method to get the single instance of the class
  static async getInstance() {
    return this._mutex.runExclusive(async () => {
      if (!this._instance) {
        this._instance = new Singleton();
      }
      return this._instance;
    });
  }

  // Override the toString method to print custom content
  toString() {
    return "I am a Singleton instance!";
  }
}

// Example usage
async function createSingletonInstance() {
  const singletonInstance = await Singleton.getInstance();
  console.log(`Singleton instance created: ${singletonInstance}`);
}

// Create multiple promises to demonstrate asynchronous usage
const promises = [];
for (let i = 0; i < 5; i++) {
  promises.push(createSingletonInstance());
}

// Wait for all promises to finish
Promise.all(promises).then(() => {
  console.log("All promises completed.");
});
