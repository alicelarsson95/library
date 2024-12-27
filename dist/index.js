var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const bookElements = {
    startSite: document.querySelector(".site-wrapper"),
    bookSite: document.querySelector(".site-wrapper2"),
    booksCon: document.querySelector(".books"),
    bookHeader: document.querySelector(".book-title"),
    bookAuthor: document.querySelector(".book-author"),
    bookHeaderTwo: document.querySelector(".book-title-black"),
    bookAuthorTwo: document.querySelector(".book-author-black"),
    bookDescription: document.querySelector(".main-text"),
    bookAudience: document.querySelector(".info-audience"),
    bookPublished: document.querySelector(".info-published"),
    bookPages: document.querySelector(".info-pages"),
    bookPublisher: document.querySelector(".info-publisher"),
    backButton: document.querySelector(".back-button"),
};
const getApiData = () => __awaiter(this, void 0, void 0, function* () {
    const url = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP-fel! Status: ${response.status}`);
        }
        const data = yield response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.log("Error fetching data:", error);
        throw error;
    }
});
const displayBooks = (bookInfo) => {
    const booksCon = bookElements.booksCon;
    if (!booksCon)
        return;
    booksCon.innerHTML = "";
    bookInfo.forEach((book, index) => {
        const bookElement = document.createElement("article");
        bookElement.classList.add("book");
        bookElement.classList.add(`book-${index + 1}`);
        const bookTitle = document.createElement("h2");
        bookTitle.classList.add("book-header");
        bookTitle.innerText = book.title;
        const bookAuthor = document.createElement("h3");
        bookAuthor.classList.add("book-subheader");
        bookAuthor.innerText = book.author;
        bookElement.appendChild(bookTitle);
        bookElement.appendChild(bookAuthor);
        const line = document.createElement("div");
        line.classList.add("line");
        bookElement.appendChild(line);
        booksCon.appendChild(bookElement);
        bookElement.addEventListener("click", () => {
            displayBookInfo(book);
        });
    });
};
const displayBookInfo = (book) => {
    if (bookElements.startSite) {
        bookElements.startSite.style.display = "none";
    }
    if (bookElements.bookSite) {
        bookElements.bookSite.style.display = "block";
    }
    if (bookElements.bookHeader) {
        bookElements.bookHeader.innerText = book.title;
    }
    if (bookElements.bookAuthor) {
        bookElements.bookAuthor.innerText = `By ${book.author}`;
    }
    if (bookElements.bookHeaderTwo) {
        bookElements.bookHeaderTwo.innerText = book.title;
    }
    if (bookElements.bookAuthorTwo) {
        bookElements.bookAuthorTwo.innerText = `By ${book.author}`;
    }
    if (bookElements.bookDescription) {
        bookElements.bookDescription.innerText = book.plot;
    }
    if (bookElements.bookAudience) {
        bookElements.bookAudience.innerText = `Audience: ${book.audience}`;
    }
    if (bookElements.bookPublished) {
        bookElements.bookPublished.innerText = `Published: ${book.year}`;
    }
    if (bookElements.bookPages) {
        bookElements.bookPages.innerText = `Pages: ${book.pages}`;
    }
    if (bookElements.bookPublisher) {
        bookElements.bookPublisher.innerText = `Publisher: ${book.publisher}`;
    }
};
const loadBooks = () => __awaiter(this, void 0, void 0, function* () {
    const books = yield getApiData();
    if (books && Array.isArray(books)) {
        displayBooks(books);
    }
    else {
        console.error("Failed to load books");
    }
});
loadBooks();
if (bookElements.backButton) {
    bookElements.backButton.addEventListener("click", () => {
        if (bookElements.startSite) {
            bookElements.startSite.style.display = "block";
        }
        if (bookElements.bookSite) {
            bookElements.bookSite.style.display = "none";
        }
    });
}
