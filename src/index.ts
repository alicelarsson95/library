interface Book {
    id: number
    title: string
    author: string
    audience: string
    firstPublished: number
    pages: number
    publisher: string
    description: string 
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
};

const url: string = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"

const getApiData = async (): Promise<string | undefined> => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`HTTP-fel! Status: ${response.status}`)  
        }
        const data = await response.json()

        return data
        
    } catch (error) {
        console.log("Error fetching data:", error);
        throw error;
    } 
}

const bookClick = 

