interface Book {
  id: number;
  title: string;
  author: string;
  audience: string;
  year: number;
  pages: number | null;
  publisher: string;
  plot: string;
}

const bookElements = {
  startSite: document.querySelector<HTMLElement>(".site-wrapper"),
  bookSite: document.querySelector<HTMLElement>(".site-wrapper2"),
  booksCon: document.querySelector<HTMLElement>(".books"),
  bookHeader: document.querySelector<HTMLElement>(".book-title"),
  bookAuthor: document.querySelector<HTMLElement>(".book-author"),
  bookHeaderTwo: document.querySelector<HTMLElement>(".book-title-black"),
  bookAuthorTwo: document.querySelector<HTMLElement>(".book-author-black"),
  bookDescription: document.querySelector<HTMLElement>(".main-text"),
  bookAudience: document.querySelector<HTMLElement>(".info-audience"),
  bookPublished: document.querySelector<HTMLElement>(".info-published"),
  bookPages: document.querySelector<HTMLElement>(".info-pages"),
  bookPublisher: document.querySelector<HTMLElement>(".info-publisher"),
  backButton: document.querySelector<HTMLElement>(".back-button"),
};

const getApiData = async (): Promise<Book[] | undefined> => {
  const url: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP-fel! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
};

const displayBooks = (bookInfo: Book[]): void => {
  const booksCon = bookElements.booksCon;
  if (!booksCon) return;
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

const displayBookInfo = (book: Book): void => {
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

const loadBooks = async (): Promise<void> => {
  const books = await getApiData();
  if (books && Array.isArray(books)) {
    displayBooks(books);
  } else {
    console.error("Failed to load books");
  }
};

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
