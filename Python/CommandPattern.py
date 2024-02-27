# Command interface
class Command:
    def execute(self):
        pass


# Concrete Command for turning on the light
class LightOnCommand(Command):
    def __init__(self, light):
        self.light = light

    def execute(self):
        self.light.turn_on()


# Concrete Command for turning off the light
class LightOffCommand(Command):
    def __init__(self, light):
        self.light = light

    def execute(self):
        self.light.turn_off()


# Concrete Command for turning on the TV
class TVOnCommand(Command):
    def __init__(self, tv):
        self.tv = tv

    def execute(self):
        self.tv.turn_on()


# Concrete Command for turning off the TV
class TVOffCommand(Command):
    def __init__(self, tv):
        self.tv = tv

    def execute(self):
        self.tv.turn_off()


# Receiver
class Light:
    def turn_on(self):
        print("Light is on")

    def turn_off(self):
        print("Light is off")


# Receiver
class TV:
    def turn_on(self):
        print("TV is on")

    def turn_off(self):
        print("TV is off")


# Invoker
class RemoteControl:
    def __init__(self):
        self.command = None

    def set_command(self, command):
        self.command = command

    def press_button(self):
        if self.command:
            self.command.execute()


# Client
if __name__ == "__main__":
    light = Light()
    tv = TV()

    light_on = LightOnCommand(light)
    light_off = LightOffCommand(light)
    tv_on = TVOnCommand(tv)
    tv_off = TVOffCommand(tv)

    remote = RemoteControl()

    remote.set_command(light_on)
    remote.press_button()  # This will turn on the light

    remote.set_command(tv_on)
    remote.press_button()  # This will turn on the TV

    remote.set_command(light_off)
    remote.press_button()  # This will turn off the light

    remote.set_command(tv_off)
    remote.press_button()  # This will turn off the TV
