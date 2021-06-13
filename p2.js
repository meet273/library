console.log("welcome local storage");

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type
}

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", libraryformsubmit)

function libraryformsubmit(e) {

    let notes = localStorage.getItem("notes");
    if (notes == nul) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }


    let name = document.getElementById("name").Value;
    let author = document.getElementById("author").Value;
    let Programming = document.getElementById("Programming");
    let fiction = document.getElementById("fiction")
    let Cooking = document.getElementById("Cooking")
    let type ;

    if (fiction.checked) {
        type = fiction.Value;
    }

    else if (Programming.checked) {
        type = Programming.Value;
    }
    else if (Cooking.checked) {
        type = Cooking.Value;
    }

    let book = new book(name, author, type)
    notesobj.push(book);
    localStorage.setItem("notes",JSON.stringify(notesobj));



    e.preventDefault();
}
