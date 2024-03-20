export {};
// Command interface
interface Command {
  execute(): void;
}

// Concrete Command for turning on the light
class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}

// Concrete Command for turning off the light
class LightOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}

// Concrete Command for turning on the TV
class TVOnCommand implements Command {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.turnOn();
  }
}

// Concrete Command for turning off the TV
class TVOffCommand implements Command {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  execute(): void {
    this.tv.turnOff();
  }
}

// Receiver
class Light {
  turnOn(): void {
    console.log("Light is on");
  }

  turnOff(): void {
    console.log("Light is off");
  }
}

// Receiver
class TV {
  turnOn(): void {
    console.log("TV is on");
  }

  turnOff(): void {
    console.log("TV is off");
  }
}

// Invoker
class RemoteControl {
  private command: Command | null = null;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
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
