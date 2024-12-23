/* interface Book {
    id: number
    title: string
    author: string
    audience: string
    year: number
    pages: number
    publisher: string
    plot: string
}

const bookElements = {
    startSite: document.querySelector<HTMLElement>('.site-wrapper'),
    bookSite: document.querySelector<HTMLElement>('.site-wrapper2'),
    booksCon: document.querySelector<HTMLElement>('.books'),
    bookHeader: document.querySelector<HTMLElement>('.book-title'),
    bookAuthor: document.querySelector<HTMLElement>('.book-author'),
    bookDescription: document.querySelector<HTMLElement>('.main-text'),
    bookAudience: document.querySelector<HTMLElement>('.info-audience'),
    bookPublished: document.querySelector<HTMLElement>('.info-published'),
    bookPages: document.querySelector<HTMLElement>('.info-pages'),
    bookPublisher: document.querySelector<HTMLElement>('.info-publisher'),
    backButton: document.querySelector<HTMLElement>('.back-button')
};

const url: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"

const getApiData = async (): Promise<Book[] | undefined> => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP-fel! Status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data);
        
        return data
        
    } catch (error) {
        console.log("Error fetching data:", error);
        throw error;
    }
}
 
const displayBooks = (bookInfo: Book[]): void => {
    const books = document.querySelectorAll('.book');
    books.forEach((bookElement, index) => {
        bookElement.addEventListener('click', () => {
            const book = bookInfo[index];
            if (book) {
                displayBookInfo(book);
            }
        });
    });
};

const displayBookInfo = (book: Book): void => {
    if (bookElements.startSite) {
        bookElements.startSite.style.display = 'none';
    }

    if (bookElements.bookSite) {
        bookElements.bookSite.style.display = 'block';
    }


    if (bookElements.bookHeader) {
        bookElements.bookHeader.innerText = book.title;
    }
    if (bookElements.bookAuthor) {
        bookElements.bookAuthor.innerText = `By ${book.author}`;
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
}

const loadBooks = async (): Promise<void> => {
    const books = await getApiData();
    if (books && Array.isArray(books)) {
        displayBooks(books);
    } else {
        console.error('Failed to load books');
    }
};

loadBooks();

if (bookElements.backButton) {
    bookElements.backButton.addEventListener('click', () => {
      
        if (bookElements.startSite) {
            bookElements.startSite.style.display = 'block';
        }

        if (bookElements.bookSite) {
            bookElements.bookSite.style.display = 'none';
        }
    });
} */ 
