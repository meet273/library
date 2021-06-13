
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
function Display() {

}
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (mytype, displayMessage) {
    let message = document.getElementById("mgs");
    message.innerHTML = `<div class="alert alert-${mytype} alert-dismissible fade show" role="alert">
    <strong>message: </strong> ${displayMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);
}

Display.prototype.add = function (book) {
    let tablebody = document.getElementById("tablebody");
    let uistring = `<tr>
                         <td>${book.name}</td>
                         <td>${book.author}</td>
                         <td>${book.type}</td>
                    </tr>`
    tablebody.innerHTML += uistring;
}

Display.prototype.clear = function () {
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
}

let libraryform = document.getElementById("addbtn")
libraryform.addEventListener('click', libraryformsubmit)
function libraryformsubmit(e) {
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("fiction");
    let Programming = document.getElementById("Programming");
    let Cooking = document.getElementById("Cooking");
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (Programming.checked) {
        type = Programming.value;
    }
    else if (Cooking.checked) {
        type = Cooking.value;
    }
    let book = new Book(name, author, type);

    let display = new Display();
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added')
    }
    else {
        display.show('danger', 'Sorry you cannot add this book');
    }

    e.preventDefault()
}
