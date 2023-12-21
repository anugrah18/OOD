// You can use a third-party library for async mutex in TypeScript
import { Mutex } from "async-mutex";

class Singleton {
  // Class variable to hold the single instance of the class
  private static _instance: Singleton | null = null;

  // Mutex for thread safety
  private static _mutex = new Mutex();

  // Private constructor to prevent external instantiation
  private constructor() {}

  // Static method to get the single instance of the class
  public static getInstance(): Singleton {
    return this._mutex.runExclusive(async () => {
      if (!this._instance) {
        this._instance = new Singleton();
      }
      return this._instance;
    });
  }

  // Override the toString method to print custom content
  public toString(): string {
    return "I am a Singleton instance!";
  }
}

// Example usage
async function createSingletonInstance() {
  const singletonInstance = await Singleton.getInstance();
  console.log(`Singleton instance created: ${singletonInstance}`);
}

// Create multiple promises to demonstrate asynchronous usage
const promises: Promise<void>[] = [];
for (let i = 0; i < 5; i++) {
  promises.push(createSingletonInstance());
}

// Wait for all promises to finish
Promise.all(promises).then(() => {
  console.log("All promises completed.");
});
