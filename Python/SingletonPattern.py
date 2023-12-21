import threading


class Singleton:
    # Class variable to hold the single instance of the class
    _instance = None

    # Class variable to be used as a lock for thread safety
    _lock = threading.Lock()

    # The __new__ method is called when creating a new instance of the class
    def __new__(cls):
        # Use a lock to ensure thread safety during instance creation
        with cls._lock:
            # Check if an instance already exists
            if not cls._instance:
                # If no instance exists, create a new one
                cls._instance = super(Singleton, cls).__new__(cls)
        # Return the single instance of the class
        return cls._instance


# Example usage in a multithreaded environment
def create_singleton_instance():
    # Create an instance of the Singleton class
    singleton_instance = Singleton()
    # Print a message indicating that an instance has been created
    print(f"Singleton instance created: {singleton_instance}")


# Create a list to store thread objects
threads = []

# Create multiple threads to demonstrate thread safety
for _ in range(5):
    # Create a thread with the target function create_singleton_instance
    thread = threading.Thread(target=create_singleton_instance)
    # Append the thread to the list
    threads.append(thread)

# Start all threads
for thread in threads:
    thread.start()

# Wait for all threads to finish
for thread in threads:
    thread.join()

# Output should show that only one instance is created, even with multiple threads
