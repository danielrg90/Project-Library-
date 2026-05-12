 
function Books(title, author, pages, read) { 
    this.title = title; 
    this.author = author; 
    this.pages = pages;
    this.read = read; 
}

function addBookToLibrary(title, author, pages, read) { 
    title = title.value; 
    author = author.value; 
    pages = pages.value; 
    read = read.value; 
}

const container = document.querySelector(".container"); 

const title = document.querySelector("#title"); 
const author = document.querySelector("#author"); 
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");  

const submitBook = document.querySelector(".submit")

const theHobbit = new Books("The Hobbit", "J.R.R. Tolkein", "276 pages", "finished"); 
const thinkLikeAProgrammer = new Books("Think Like A Programmer", "Anton Spraul", "226 pages", "No"); 
const theIntelligentInvestor = new Books("The Intelligent Investor", "Benjamin Graham", "531 pages", "Yes");

const myLibrary = [theHobbit, thinkLikeAProgrammer, theIntelligentInvestor]; 


function createBookCards() { 
    for (let book of myLibrary) { 
        
        let titles = document.createElement("div"); 
        titles.textContent = book.title; 
        container.appendChild(titles); 
        
        let authors = document.createElement("div"); 
        authors.textContent = book.author; 
        container.appendChild(authors);  
        
        let pages = document.createElement("div"); 
        pages.textContent = book.pages; 
        container.appendChild(pages); 

        let haveRead = document.createElement("div"); 
        haveRead.textContent = book.read; 
        container.appendChild(haveRead); 

    }
}

createBookCards(); 

submitBook.addEventListener("click", () => { 
    alert(title.value); 
    alert(author.value); 
    alert(pages.value); 
    alert(read.value); 

}); 
 

