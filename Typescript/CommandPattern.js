// Concrete Command for turning on the light
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(light) {
        this.light = light;
    }
    LightOnCommand.prototype.execute = function () {
        this.light.turnOn();
    };
    return LightOnCommand;
}());
// Concrete Command for turning off the light
var LightOffCommand = /** @class */ (function () {
    function LightOffCommand(light) {
        this.light = light;
    }
    LightOffCommand.prototype.execute = function () {
        this.light.turnOff();
    };
    return LightOffCommand;
}());
// Concrete Command for turning on the TV
var TVOnCommand = /** @class */ (function () {
    function TVOnCommand(tv) {
        this.tv = tv;
    }
    TVOnCommand.prototype.execute = function () {
        this.tv.turnOn();
    };
    return TVOnCommand;
}());
// Concrete Command for turning off the TV
var TVOffCommand = /** @class */ (function () {
    function TVOffCommand(tv) {
        this.tv = tv;
    }
    TVOffCommand.prototype.execute = function () {
        this.tv.turnOff();
    };
    return TVOffCommand;
}());
// Receiver
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.turnOn = function () {
        console.log("Light is on");
    };
    Light.prototype.turnOff = function () {
        console.log("Light is off");
    };
    return Light;
}());
// Receiver
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log("TV is on");
    };
    TV.prototype.turnOff = function () {
        console.log("TV is off");
    };
    return TV;
}());
// Invoker
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.command = null;
    }
    RemoteControl.prototype.setCommand = function (command) {
        this.command = command;
    };
    RemoteControl.prototype.pressButton = function () {
        if (this.command) {
            this.command.execute();
        }
    };
    return RemoteControl;
}());
// Client
var light = new Light();
var tv = new TV();
var lightOn = new LightOnCommand(light);
var lightOff = new LightOffCommand(light);
var tvOn = new TVOnCommand(tv);
var tvOff = new TVOffCommand(tv);
var remote = new RemoteControl();
remote.setCommand(lightOn);
remote.pressButton(); // This will turn on the light
remote.setCommand(tvOn);
remote.pressButton(); // This will turn on the TV
remote.setCommand(lightOff);
remote.pressButton(); // This will turn off the light
remote.setCommand(tvOff);
remote.pressButton(); // This will turn off the TV
