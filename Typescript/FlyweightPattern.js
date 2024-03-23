var Character = /** @class */ (function () {
    function Character(character) {
        // Initialize a character object with the given character
        this.character = character;
    }
    Character.prototype.render = function (font, size) {
        // Simulate rendering the character with the provided font and size
        console.log("Character '".concat(this.character, "' rendered with font '").concat(font, "' and size ").concat(size));
    };
    return Character;
}());
var CharacterFactory = /** @class */ (function () {
    function CharacterFactory() {
    }
    CharacterFactory.getCharacter = function (character) {
        // Static method to get or create a character instance
        if (!CharacterFactory.characters[character]) {
            // If the character doesn't exist in the dictionary, create a new instance
            CharacterFactory.characters[character] = new Character(character);
        }
        // Return the character instance
        return CharacterFactory.characters[character];
    };
    CharacterFactory.characters = {}; // Dictionary to store created character instances
    return CharacterFactory;
}());
var TextEditor = /** @class */ (function () {
    function TextEditor() {
        this.characters = [];
    }
    TextEditor.prototype.addCharacter = function (character, font, size) {
        // Add a character to the text with the specified font and size
        var characterObj = CharacterFactory.getCharacter(character);
        this.characters.push([characterObj, font, size]);
    };
    TextEditor.prototype.render = function () {
        // Render all characters in the text
        for (var _i = 0, _a = this.characters; _i < _a.length; _i++) {
            var _b = _a[_i], character = _b[0], font = _b[1], size = _b[2];
            character.render(font, size);
        }
    };
    return TextEditor;
}());
// Example usage
var editor = new TextEditor();
// Add characters to the text with different fonts and sizes
editor.addCharacter("A", "Arial", 12);
editor.addCharacter("B", "Times New Roman", 14);
editor.addCharacter("A", "Arial", 12); // Reusing 'A' character
// Render the text
editor.render();
