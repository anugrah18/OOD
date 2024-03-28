class Character {
  constructor(character) {
    // Initialize a character object with the given character
    this.character = character;
  }

  render(font, size) {
    // Simulate rendering the character with the provided font and size
    console.log(
      `Character '${this.character}' rendered with font '${font}' and size ${size}`
    );
  }
}

class CharacterFactory {
  static characters = {}; // Dictionary to store created character instances

  static getCharacter(character) {
    // Static method to get or create a character instance
    if (!CharacterFactory.characters[character]) {
      // If the character doesn't exist in the dictionary, create a new instance
      CharacterFactory.characters[character] = new Character(character);
    }
    // Return the character instance
    return CharacterFactory.characters[character];
  }
}

class TextEditor {
  constructor() {
    this.characters = [];
  }

  addCharacter(character, font, size) {
    // Add a character to the text with the specified font and size
    const characterObj = CharacterFactory.getCharacter(character);
    this.characters.push([characterObj, font, size]);
  }

  render() {
    // Render all characters in the text
    for (const [character, font, size] of this.characters) {
      character.render(font, size);
    }
  }
}

// Example usage
const editor = new TextEditor();

// Add characters to the text with different fonts and sizes
editor.addCharacter("A", "Arial", 12);
editor.addCharacter("B", "Times New Roman", 14);
editor.addCharacter("A", "Arial", 12); // Reusing 'A' character

// Render the text
editor.render();
