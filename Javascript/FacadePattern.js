// Complex subsystem classes
class CPU {
  powerOn() {
    return "CPU is powered ON";
  }

  jump(position) {
    return `CPU is jumping to position ${position}`;
  }

  execute(data) {
    return `CPU is executing '${data}'`;
  }
}

class BIOS {
  load(position, data) {
    return `BIOS loaded '${data}' into memory at position ${position}`;
  }
}

class HardDrive {
  read(sector, size) {
    return `HardDrive read ${size} bytes from sector ${sector}`;
  }
}

// Facade class
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.bios = new BIOS();
    this.hardDrive = new HardDrive();
  }

  start() {
    const result = [];
    result.push(this.cpu.powerOn());
    result.push(this.bios.load(0, "BOOT data"));
    result.push(this.cpu.jump(0));
    result.push(this.cpu.execute("BOOT data"));
    result.push(this.hardDrive.read(0, 1024));
    result.push(this.bios.load(1, "OS data"));
    result.push(this.cpu.jump(1));
    result.push(this.cpu.execute("OS data"));
    return result;
  }
}

// Client code
function main() {
  const computer = new ComputerFacade();
  const result = computer.start();
  for (const action of result) {
    console.log(action);
  }
}

main();
