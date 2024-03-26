# Originator
class Editor:
    def __init__(self, content=''):
        self.content = content

    def create_memento(self):
        return Memento(self.content)

    def restore(self, memento):
        self.content = memento.get_saved_content()

    def set_content(self, content):
        self.content = content

    def get_content(self):
        return self.content

# Memento
class Memento:
    def __init__(self, content):
        self.content = content

    def get_saved_content(self):
        return self.content

# Caretaker
class History:
    def __init__(self):
        self.mementos = []

    def add_memento(self, memento):
        self.mementos.append(memento)

    def get_memento(self, index):
        return self.mementos[index]


# Example usage
if __name__ == "__main__":
    editor = Editor("Initial content")
    history = History()
    print("Current content:", editor.get_content())

    # Save the initial state
    history.add_memento(editor.create_memento())


    # Modify the content
    editor.set_content("Modified content")
    print("Current content:", editor.get_content())

    # Save the modified state
    history.add_memento(editor.create_memento())

    # Restore to the initial state
    editor.restore(history.get_memento(0))

    print("Current content:", editor.get_content())  # Output: Current content: Initial content
