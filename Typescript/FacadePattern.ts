// Complex subsystem classes
class CPU {
  powerOn(): string {
    return "CPU is powered ON";
  }

  jump(position: number): string {
    return `CPU is jumping to position ${position}`;
  }

  execute(data: string): string {
    return `CPU is executing '${data}'`;
  }
}

class BIOS {
  load(position: number, data: string): string {
    return `BIOS loaded '${data}' into memory at position ${position}`;
  }
}

class HardDrive {
  read(sector: number, size: number): string {
    return `HardDrive read ${size} bytes from sector ${sector}`;
  }
}

//Facade class
class ComputerFacade {
  private cpu: CPU;
  private bios: BIOS;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.bios = new BIOS();
    this.hardDrive = new HardDrive();
  }

  start(): string[] {
    const result: string[] = [];
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
function main(): void {
  const computer = new ComputerFacade();
  const result = computer.start();
  for (const action of result) {
    console.log(action);
  }
}

main();
