"use strict";
// Subject (Observable)
class WeatherStation {
    constructor(location) {
        this.observers = [];
        this.temperature = null;
        this.humidity = null;
        this.location = location;
    }
    addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
        }
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObserver() {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.location, WeatherStation.name);
        }
    }
    setConditions(temperature, humidity) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.notifyObserver();
    }
}
// ConcreteObserver
class WeatherDisplay {
    constructor(name) {
        this.name = name;
    }
    update(temperature, humidity, location, observerName) {
        console.log(`${this.name} received update from ${observerName}  at location ${location}- Temperature: ${temperature}°C, Humidity: ${humidity}%`);
    }
}
// Usage example
const station1 = new WeatherStation("Station 1");
const station2 = new WeatherStation("Station 2");
const display1 = new WeatherDisplay("Display 1");
const display2 = new WeatherDisplay("Display 2");
station1.addObserver(display1);
station1.addObserver(display2);
station2.addObserver(display1);
station2.addObserver(display2);
station1.setConditions(25, 60);
station2.setConditions(30, 50);
station1.removeObserver(display2);
station1.setConditions(28, 55);
