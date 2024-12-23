var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const bookElements = document.querySelectorAll('.book');
const startSite = document.querySelector('.site-wrapper');
const infoSite = document.querySelector('.site-wrapper2');
const bookTitle = document.querySelectorAll('.book-title');
const bookAuthor = document.querySelectorAll('.book-author');
const mainText = document.querySelectorAll('.main-text');
const infoHeader = document.querySelectorAll('.info-header');
const infoText = document.querySelectorAll('.info-text');
const url = "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books";
const getApiData = () => __awaiter(this, void 0, void 0, function* () {
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
getApiData();
