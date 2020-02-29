class Note {
    constructor(title) {
      this.title = title;
      // HINT🤩 this.element = this.createElement(title);
      this.element = this.createElement(title);
    }
    
    createElement(title){
      let newNote = document.createElement("div");
      
      // HINT🤩 a.addEventListener('click', this.remove.bind(newNote));
      newNote.innerHTML = `<p>${title}</p> <a href="#" class="card-remove">Remove</a>`;
      newNote.classList = "card";

      let removeLink = newNote.querySelector(".card-remove");
      removeLink.addEventListener("click", this.remove.bind(newNote));

      return newNote;
    }
    
    add(){
      // HINT🤩
      // this function should append the note to the screen somehow
      let completeNote = this.element;
      document.querySelector(".notes").append(completeNote);
    }
    
    saveToStorage(){
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
      let localData = JSON.parse(localStorage.getItem("localData"));
      if(localData != null) {
        localData.push(this.title);
        console.log(localData);
        localStorage.setItem("localData", JSON.stringify(localData));
      } else {
        localData = [];
        localData.push(this.title);
        console.log(localData);
        localStorage.setItem("localData", JSON.stringify(localData));
      }
    }
    
    remove(){
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
      let removeFromArray = JSON.parse(localStorage.getItem("localData"));
      let getArrayIndex = removeFromArray.indexOf(this); //outputs -1
      removeFromArray.splice(getArrayIndex, 1);
      localStorage.setItem("localData", JSON.stringify(removeFromArray));
      console.log(removeFromArray);
      this.remove();
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
      this.btnAdd = document.querySelector("#btnAddNote");
      this.btnAdd.addEventListener("click",this.createNote.bind(this));

      this.enterAdd = document.querySelector("#txtAddNote");
      this.enterAdd.addEventListener("keydown", enter => {
        if(enter.keyCode == 13) {
          document.querySelector("#btnAddNote").click();
          return true;
        }
      });
      this.loadNotesFromStorage();
    }
    
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
      let dataStorage = JSON.parse(localStorage.getItem("localData"));
      if(dataStorage.length > 0) {
        dataStorage.forEach(title => {
          let note = new Note(title);
          note.add();
        });
      }
      
    }
     
    createNote(e){
      // this function should create a new note by using the Note() class
      
      // HINT🤩
      // note.add();
      // note.saveToStorage();
      // this.reset();

      let addNoteTitle = document.querySelector(`#txtAddNote`).value;
      let note = new Note(addNoteTitle);

      note.add();
      note.saveToStorage();
      this.reset();
    }
    
    reset(){
      // this function should reset the form 
      document.querySelector(`#txtAddNote`).value = ``;
    }
    
  }
  
  let app = new App();