'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../SeidoHelpers/seido-helpers.js';

//Module global variables
const seeder = new seedGenerator();
let books = [];

//paging
const pageSize = 10;
let maxNrPages;
let currentPage = 0;

//Get elements
const bookList = document.querySelector("#bookList");
const btnPopulate = document.querySelector("#btnPopulate");
const btnClear = document.querySelector("#btnClear");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");

//Add event listeners
btnPopulate.addEventListener("click", () => {
    clickPopulate();
})

btnClear.addEventListener("click", () => {
    clickClear();
})

btnPrev.addEventListener("click", () => {
    clickPrev();
})

btnNext.addEventListener("click", () => {
    clickNext();
})

//Declare event handelers
function clickPopulate(e) {
    populateList(randomNumber(1, 10))
    renderList(currentPage);
}

function clickClear(e) {
    books = [];
    currentPage = 0;
    renderList(currentPage);
}   

function clickPrev(e) {
    if (currentPage > 0) {
        currentPage--;
        renderList(currentPage)
    }
}

function clickNext(e) {
    if (currentPage < maxNrPages - 1) {
        currentPage++;
        renderList(currentPage)
    }
}

//helpers
function addRow(bookTitle, author, publishingYear, copiesSold) {
    let divRow = document.createElement(`div`);
    divRow.classList.add("trFluid");

    let divGroup2 = document.createElement(`div`);
    divGroup2.classList.add("trFluid_Grouping2");
    divRow.appendChild(divGroup2);

    let divGroup1_1 = document.createElement(`div`);
    divGroup1_1.classList.add("trFluid_Grouping1");
    let divGroup1_2 = document.createElement(`div`);
    divGroup1_2.classList.add("trFluid_Grouping1");

    divGroup2.appendChild(divGroup1_1);
    divGroup2.appendChild(divGroup1_2);

    let divFluent1 = document.createElement(`div`);
    divFluent1.classList.add("tdFluent");
    divFluent1.innerHTML = bookTitle;
    divGroup1_1.appendChild(divFluent1);

    let divFluent2 = document.createElement(`div`);
    divFluent2.classList.add("tdFluent");
    divFluent2.innerHTML = author;
    divGroup1_2.appendChild(divFluent2);

    let divFluent3 = document.createElement(`div`);
    divFluent3.classList.add("tdFluent");
    divFluent3.innerHTML = publishingYear;
    divGroup1_2.appendChild(divFluent3);

    let divFluent4 = document.createElement(`div`);
    divFluent4.classList.add("tdFluent");
    divFluent4.innerHTML = copiesSold;
    divGroup1_2.appendChild(divFluent4);

    bookList.appendChild(divRow);
}

function renderList(pageNr) {
    while (bookList.firstElementChild !== null) {
        bookList.removeChild(bookList.firstElementChild);
    }

    let page = books.slice(pageNr*pageSize, pageNr*pageSize+pageSize);

    page.forEach( b => {
        addRow(b.bookTitle, b.bookAuthor, b.publishedYear, b.millionsSold);
    })
}

function populateList(nrBooks) {
    for (let i = 0; i < nrBooks; i++) {
        const b = {};
        b.bookTitle = seeder.petName;
        b.bookAuthor = seeder.fullName;
        b.millionsSold = randomNumber(1, 100);
        b.publishedYear = randomNumber(1800, 2020);
        books.push(b);
    }

    maxNrPages = Math.ceil(books.length/pageSize)
}

//init
(function pageInit() {
    populateList(11);
    renderList(currentPage);
})();