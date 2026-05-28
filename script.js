 
function Books(title, author, pages, randomID) { 
    if (!new.target) { 
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.title = title; 
    this.author = author; 
    this.pages = pages;
    this.randomID = randomID; 
    this.readToggle = function() { 

    }
 } 
/* Global scope variables*/
 let toggle = true; 

 

function addBookToLibrary(title, author, pages, randomID) { 
    let newBook = new Books(title, author, pages, randomID) 
    myLibrary.push(newBook); 
}

const container = document.querySelector(".container"); 
const bookCard = document.querySelector(".bookCard"); 

const title = document.querySelector("#title"); 
const author = document.querySelector("#author"); 
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");  

const header1 = document.querySelector(".header")

const submitBook = document.querySelector(".submit")

const deleteButton = document.querySelector(".deleteButton"); 

const readButton = document.querySelector(".readButton"); 

const theHobbit = new Books("The Hobbit", "J.R.R. Tolkein", "276 pages", crypto.randomUUID()); 
const thinkLikeAProgrammer = new Books("Think Like A Programmer", "Anton Spraul", "226 pages", crypto.randomUUID()); 
const theIntelligentInvestor = new Books("The Intelligent Investor", "Benjamin Graham", "531 pages", crypto.randomUUID());

const myLibrary = [theHobbit, thinkLikeAProgrammer, theIntelligentInvestor]; 

function removeBookCard() { 
    for (let i = 0; i < myLibrary.length; i++) { 
        if (book.randomID === myLibrary[i].randomID) { 
            myLibrary.slice(myLibrary[i], 1); 
        }
    }

}

createBookCards(); 


function createBookCards() { 
    for (let book of myLibrary) {

        let bookCard = document.createElement("div"); 
        bookCard.classList.add("bookCard"); 

        let titles = document.createElement("div"); 
        titles.classList.add("titles"); 
        titles.textContent = book.title; 
        bookCard.appendChild(titles); 
        
        let authors = document.createElement("div"); 
        authors.classList.add("authors");
        authors.textContent = book.author; 
        bookCard.appendChild(authors);  
        
        let pages = document.createElement("div");
        pages.classList.add("pages");  
        pages.textContent = book.pages; 
        bookCard.appendChild(pages); 

        let deleteButton = document.createElement("button")
        deleteButton.classList.add("deleteButton"); 
        deleteButton.textContent = "remove";
        deleteButton.addEventListener("click", () => {  
            let indexOfLibrary; 
            for (let i = 0; i < myLibrary.length; i++) { 
                if (myLibrary[i].randomID === book.randomID) { 
                    indexOfLibrary = i;  
                    myLibrary.splice(indexOfLibrary, 1); 
                    updateDisplay(); 
                    createBookCards();     
                
                } 
            }
        }); 

        let readButton = document.createElement("button")
        readButton.classList.add("readButton"); 
        readButton.textContent = "mark as read"; 
        readButton.addEventListener("click", () => {  
            if (toggle === true) { 
                readButton.textContent = "Not Finished"
                readButton.style.backgroundColor = "red";  
                readButton.style.color = "white"; 
                toggle = false; 
            } else if (toggle === false) { 
                readButton.textContent = "Finished"; 
                readButton.style.backgroundColor = "green"
                readButton.style.color = "white"; 
                toggle = true;   
        }
    }); 

        

        bookCard.appendChild(readButton); 
        bookCard.appendChild(deleteButton);   

        container.appendChild(bookCard); 

    }
}; 

function updateDisplay() { 
    container.textContent = ""; 

}

submitBook.addEventListener("click", (event) => { 
    event.preventDefault(); 
    addBookToLibrary(title.value, author.value, pages.value, crypto.randomUUID()); 
    updateDisplay(); 
    createBookCards(); 

}); 
