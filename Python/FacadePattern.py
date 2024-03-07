# Complex subsystem classes
class CPU:
    def powerOn(self):
        return "CPU is powered On"

    def jump(self, position):
        return f"CPU is jumping to position {position}"

    def execute(self,data):
        return f"CPU is executing '{data}'"


class BIOS:
    def load(self, position, data):
        return f"BIOS loaded '{data}' into memory at position {position}"


class HardDrive:
    def read(self, sector, size):
        return f"HardDrive read {size} bytes from sector {sector}"


# Facade class
class ComputerFacade:
    def __init__(self):
        self.cpu = CPU()
        self.bios = BIOS()
        self.hard_drive = HardDrive()

    def start(self):
        result = []
        result.append(self.cpu.powerOn())
        result.append(self.bios.load(0, "BOOT data"))
        result.append(self.cpu.jump(0))
        result.append(self.cpu.execute("BOOT data"))
        result.append(self.hard_drive.read(0, 1024))
        result.append(self.bios.load(1, "OS data"))
        result.append(self.cpu.jump(1))
        result.append(self.cpu.execute("OS data"))
        return result


# Client code
def main():
    computer = ComputerFacade()
    result = computer.start()
    for action in result:
        print(action)


if __name__ == "__main__":
    main()
