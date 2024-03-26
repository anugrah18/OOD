"use strict";
exports.__esModule = true;
// Originator
var Editor = /** @class */ (function () {
    function Editor(content) {
        if (content === void 0) { content = ""; }
        this.content = content;
    }
    Editor.prototype.createMemento = function () {
        return new Memento(this.content);
    };
    Editor.prototype.restore = function (memento) {
        this.content = memento.getSavedContent();
    };
    Editor.prototype.setContent = function (content) {
        this.content = content;
    };
    Editor.prototype.getContent = function () {
        return this.content;
    };
    return Editor;
}());
// Memento
var Memento = /** @class */ (function () {
    function Memento(content) {
        this.content = content;
    }
    Memento.prototype.getSavedContent = function () {
        return this.content;
    };
    return Memento;
}());
// Caretaker
var History = /** @class */ (function () {
    function History() {
        this.mementos = [];
    }
    History.prototype.addMemento = function (memento) {
        this.mementos.push(memento);
    };
    History.prototype.getMemento = function (index) {
        return this.mementos[index];
    };
    return History;
}());
// Example usage
var editor = new Editor("Initial content");
var history = new History();
console.log("Current content:", editor.getContent());
// Save the initial state
history.addMemento(editor.createMemento());
// Modify the content
editor.setContent("Modified content");
console.log("Current content:", editor.getContent());
// Save the modified state
history.addMemento(editor.createMemento());
// Restore to the initial state
editor.restore(history.getMemento(0));
console.log("Current content:", editor.getContent()); // Output: Current content: Initial content
