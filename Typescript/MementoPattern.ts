export {};
// Originator
class Editor {
  private content: string;

  constructor(content: string = "") {
    this.content = content;
  }

  createMemento(): Memento {
    return new Memento(this.content);
  }

  restore(memento: Memento): void {
    this.content = memento.getSavedContent();
  }

  setContent(content: string): void {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

// Memento
class Memento {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getSavedContent(): string {
    return this.content;
  }
}

// Caretaker
class History {
  private mementos: Memento[];

  constructor() {
    this.mementos = [];
  }

  addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  getMemento(index: number): Memento {
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
