class Character:
    def __init__(self, character):
        # Initialize a character object with the given character
        self.character = character

    def render(self, font, size):
        # Simulate rendering the character with the provided font and size
        print(f"Character '{self.character}' rendered with font '{font}' and size {size}")


class CharacterFactory:
    _characters = {}  # Dictionary to store created character instances

    def get_character(character):
        # Static method to get or create a character instance
        if character not in CharacterFactory._characters:
            # If the character doesn't exist in the dictionary, create a new instance
            CharacterFactory._characters[character] = Character(character)
        # Return the character instance
        return CharacterFactory._characters[character]


class TextEditor:
    def __init__(self):
        # Initialize the TextEditor with an empty list to store characters
        self.characters = []

    def add_character(self, character, font, size):
        # Add a character to the text with the specified font and size
        character_obj = CharacterFactory.get_character(character)
        self.characters.append((character_obj, font, size))

    def render(self):
        # Render all characters in the text
        for character, font, size in self.characters:
            character.render(font, size)


# Example usage
editor = TextEditor()

# Add characters to the text with different fonts and sizes
editor.add_character('A', 'Arial', 12)
editor.add_character('B', 'Times New Roman', 14)
editor.add_character('A', 'Arial', 12)  # Reusing 'A' character

# Render the text
editor.render()
