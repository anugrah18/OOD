// Command interface
class Command {
  execute() {
    throw new Error("Method not implemented.");
  }
}

// Concrete Command for turning on the light
class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

// Concrete Command for turning off the light
class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Concrete Command for turning on the TV
class TVOnCommand extends Command {
  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    this.tv.turnOn();
  }
}

// Concrete Command for turning off the TV
class TVOffCommand extends Command {
  constructor(tv) {
    super();
    this.tv = tv;
  }

  execute() {
    this.tv.turnOff();
  }
}

// Receiver
class Light {
  turnOn() {
    console.log("Light is on");
  }

  turnOff() {
    console.log("Light is off");
  }
}

// Receiver
class TV {
  turnOn() {
    console.log("TV is on");
  }

  turnOff() {
    console.log("TV is off");
  }
}

// Invoker
class RemoteControl {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    if (this.command) {
      this.command.execute();
    }
  }
}

// Client
const light = new Light();
const tv = new TV();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const tvOn = new TVOnCommand(tv);
const tvOff = new TVOffCommand(tv);

const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton(); // This will turn on the light

remote.setCommand(tvOn);
remote.pressButton(); // This will turn on the TV

remote.setCommand(lightOff);
remote.pressButton(); // This will turn off the light

remote.setCommand(tvOff);
remote.pressButton(); // This will turn off the TV
