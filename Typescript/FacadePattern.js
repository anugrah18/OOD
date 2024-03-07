// Complex subsystem classes
var CPU = /** @class */ (function () {
    function CPU() {
    }
    CPU.prototype.powerOn = function () {
        return "CPU is powered ON";
    };
    CPU.prototype.jump = function (position) {
        return "CPU is jumping to position ".concat(position);
    };
    CPU.prototype.execute = function (data) {
        return "CPU is executing '".concat(data, "'");
    };
    return CPU;
}());
var BIOS = /** @class */ (function () {
    function BIOS() {
    }
    BIOS.prototype.load = function (position, data) {
        return "BIOS loaded '".concat(data, "' into memory at position ").concat(position);
    };
    return BIOS;
}());
var HardDrive = /** @class */ (function () {
    function HardDrive() {
    }
    HardDrive.prototype.read = function (sector, size) {
        return "HardDrive read ".concat(size, " bytes from sector ").concat(sector);
    };
    return HardDrive;
}());
//Facade class
var ComputerFacade = /** @class */ (function () {
    function ComputerFacade() {
        this.cpu = new CPU();
        this.bios = new BIOS();
        this.hardDrive = new HardDrive();
    }
    ComputerFacade.prototype.start = function () {
        var result = [];
        result.push(this.cpu.powerOn());
        result.push(this.bios.load(0, "BOOT data"));
        result.push(this.cpu.jump(0));
        result.push(this.cpu.execute("BOOT data"));
        result.push(this.hardDrive.read(0, 1024));
        result.push(this.bios.load(1, "OS data"));
        result.push(this.cpu.jump(1));
        result.push(this.cpu.execute("OS data"));
        return result;
    };
    return ComputerFacade;
}());
// Client code
function main() {
    var computer = new ComputerFacade();
    var result = computer.start();
    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
        var action = result_1[_i];
        console.log(action);
    }
}
main();
