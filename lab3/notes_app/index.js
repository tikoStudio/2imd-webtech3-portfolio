class Note {
    constructor(title) {
      this.title = title;
      // HINT🤩 this.element = this.createElement(title);
      this.element = this.createElement(title);
    }
    
    createElement(title){
      let newNote = document.createElement('div');
      
      // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
      newNote.innerHTML = `<p>${title}</p> <a href="#" class="card-remove">Remove</a>`;
      a.addEventListener(`click`, this.remove.bind(newNote));

      return newNote;
    }
    
    add(){
      // HINT🤩
      // this function should append the note to the screen somehow
      let completeNote = this.element;
      document.querySelector(`.notes`).append(completeNote);
    }
    
    saveToStorage(){
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify

      localStorage.setItem(`noteData`, JSON.stringify(Note));
      JSON.parse(localStorage.getItem(`noteData`));
      /* incomplete */
    }
    
    remove(){
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element

    } 
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
    
      // HINT🤩
      // clicking the button should work
      // pressing the enter key should also work
      // this.btnAdd = ???
      // this.btnAdd.addEventListener("click", this.createNote.bind(this));
      // this.loadNotesFromStorage();
      this.btnAdd = document.querySelector(`#btnAddNote`);
      this.btnAdd.addEventListener(`click`,this.createNote.bind(this));

      this.enterAdd = document.querySelector(`#txtAddNote`);
      this.enterAdd.addEventListener(`keypress`, enter => {
        if(enter.keyCode == 13) {
          this.createNote.bind(this);
        }
      });
      this.loadNotesFromStorage();
    }
    
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
    }
     
    createNote(e){
      // this function should create a new note by using the Note() class
      
      // HINT🤩
      // note.add();
      // note.saveToStorage();
      // this.reset();

      let addNoteTitle = document.querySelector(`#textAddNote`).value;
      let note = new Note(addNoteTitle);

      /* incomplete: add to localstorage */
    }
    
    reset(){
      // this function should reset the form 
      document.querySelector(`#textAddNote`).value = ``;
    }
    
  }
  
  let app = new App();