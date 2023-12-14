# Observer pattern implementation for a weather system

# Subject (Observable)
class WeatherStation:
    def __init__(self, location):
        self.location = location
        self._observers = []
        self._temperature = None
        self._humidity = None

    def add_observer(self, observer):
        if observer not in self._observers:
            self._observers.append(observer)

    def remove_observer(self, observer):
        self._observers.remove(observer)

    def set_conditions(self, temperature, humidity):
        self._temperature = temperature
        self._humidity = humidity
        self.notify_observers()

    def notify_observers(self):
        for observer in self._observers:
            observer.update(self._temperature, self._humidity, self.location)


# Observer (Observer)
class Display:
    def update(self, temperature, humidity, location):
        pass


# ConcreteObserver
class WeatherDisplay(Display):
    def update(self, temperature, humidity, location):
        print(f"Display at {location} updated - Temperature: {temperature}°C, Humidity: {humidity}%")


# Usage example
if __name__ == "__main__":
    # Create weather stations
    station1 = WeatherStation("Station 1")
    station2 = WeatherStation("Station 2")

    # Create displays
    display1 = WeatherDisplay()
    display2 = WeatherDisplay()

    # Register displays as observers for each station
    station1.add_observer(display1)
    station1.add_observer(display2)
    station2.add_observer(display1)
    station2.add_observer(display2)

    # Simulate weather changes
    station1.set_conditions(25, 60)
    station2.set_conditions(30, 50)

    # Unregister display2 from station1
    station1.remove_observer(display2)

    # Simulate another weather change
    station1.set_conditions(28, 55)
