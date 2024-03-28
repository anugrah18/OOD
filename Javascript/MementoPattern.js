// Originator
class Editor {
  constructor(content = "") {
    this.content = content;
  }

  createMemento() {
    return new Memento(this.content);
  }

  restore(memento) {
    this.content = memento.getSavedContent();
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

// Memento
class Memento {
  constructor(content) {
    this.content = content;
  }

  getSavedContent() {
    return this.content;
  }
}

// Caretaker
class History {
  constructor() {
    this.mementos = [];
  }

  addMemento(memento) {
    this.mementos.push(memento);
  }

  getMemento(index) {
    return this.mementos[index];
  }
}

// Example usage
const editor = new Editor("Initial content");
const history = new History();
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

// Output: Current content: Initial content
console.log("Current content:", editor.getContent());
