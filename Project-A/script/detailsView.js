'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../SeidoHelpers/seido-helpers.js';

export function MusicGroup (name, artists, genre, albums, establishedYear){

    this.musicGroupId = uniqueId();
    this.name = name;
    this.artists = artists;
    this.genre = genre;
    this.establishedYear = establishedYear;
    this.albums = albums;

    this.toString = function () {
        return `${this.title} written by ${this.author} in the year ${this.publishedYear}. ${this.millionsSold} million copies sold`;}

    this.seed = function (_seeder) {

        this.title = _seeder.latinSentence;
        this.author = _seeder.fullName;
        this.genre = _seeder.fromString("Adventure, Horror, SciFi, Computers, Animals, Children");
        this.millionsSold = randomNumber(1, 100);
        this.publishedYear = randomNumber(1800, 2020);
        return this;
    }

    this.seedMany = function (nrItems, _seeder) {
        let books = [];
        for (let index = 0; index < nrItems; index++) {

            const b = new Book().seed(_seeder);
            books.push(b);
        };
        return books;
    }
}

export function LibraryService (storage) {

    if (!storage) {
        const _seeder = new seedGenerator();
        this.books = new Book().seedMany(1_000, _seeder);
    }
    else {
        const tmp = storage.getItem('LibraryService');
        if (tmp) {
            this.books = JSON.parse(tmp);
        }
        else {
            const _seeder = new seedGenerator();
            this.books = new Book().seedMany(1_000, _seeder);
            storage.setItem('LibraryService', JSON.stringify(this.books));
        }
    }
     
    //services
    this.info = function (genre) {

        if (genre === undefined) return this.books.length;

        let count = 0;
        this.books.forEach(b => {
            if (b.genre === genre)
                {
                    count++;
                }
            });
        return count;
    }
    
    this.readBooks = function(pageNr, pageSize) {

        //return this.books;

        const ret = {};

        ret.pageNr = pageNr;
        ret.pageSize = pageSize;
        ret.maxNrpages = Math.ceil(this.books.length/pageSize);
        ret.totalCount = this.books.length;

        ret.pageItems = this.books.slice(pageNr*pageSize, pageNr*pageSize + pageSize);

        return ret;
    }

    this.readBook = function(id)
    {
        return this.books.find(book => book.bookId === id);
    }
}