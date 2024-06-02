'use strict';
import musicService from'./music-group-service.js';

//module global variables
const _musicservice = new musicService(`https://appmusicwebapinet8.azurewebsites.net/api`);

//paging
const _pageSize = 10;
let _currentPage = 0;
let _maxNrpages;

//Get Elements
const musicGroupList = document.querySelector("#musicGroupList");
const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");

//Add event listeners
btnPrev.addEventListener("click", clickPrev);
btnNext.addEventListener("click", clickNext);

//Declare event handlers
async function clickPrev (e){

    if (_currentPage > 0 ) {
        _currentPage--;
        await renderMusicGroupsAsync(_currentPage);
    }
}

async function clickNext (e){
    if (_currentPage < _maxNrpages-1) {
        _currentPage++;
        await renderMusicGroupsAsync(_currentPage);
    }
}

//helpers
function addRow(id, name, members, genre, establishingYear, albums) {
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


    //<div class="tdFluent"></div>
    let divFluent1 = document.createElement(`div`);
    divFluent1.classList.add("tdFluent");
    divFluent1.innerHTML = name;
    divGroup1_1.appendChild(divFluent1);

    let divFluent2 = document.createElement(`div`);
    divFluent2.classList.add("tdFluent");
    divFluent2.innerHTML = members;

    let divFluent3 = document.createElement(`div`);
    divFluent3.classList.add("tdFluent");
    divFluent3.innerHTML = genre;

    let divFluent4 = document.createElement(`div`);
    divFluent4.classList.add("tdFluent");
    divFluent4.innerHTML = establishingYear;

    let divFluent5 = document.createElement(`div`);
    divFluent5.classList.add("tdFluent");
    divFluent5.innerHTML = albums;

    divGroup1_2.appendChild(divFluent2);
    divGroup1_2.appendChild(divFluent3);
    divGroup1_2.appendChild(divFluent4);
    divGroup1_2.appendChild(divFluent5);

    //<a href="./new-book.html">view book</a>
    let a_tag = document.createElement(`a`);
    a_tag.innerText = "view book";
    a_tag.href=`./detailsView.html?id=${id}`;
    divGroup1_2.appendChild(a_tag);

    musicGroupList.appendChild(divRow);
}

async function renderMusicGroupsAsync(_pageNr) {
    while (musicGroupList.firstElementChild !== null) {
        musicGroupList.removeChild(musicGroupList.firstElementChild);
    }

    let response = await _musicservice.readMusicGroupsAsync(_pageNr, false, null, _pageSize);
    response.pageItems.forEach(group => {
        addRow(group.musicGroupId, group.name, group.artists.length, group.strGenre, group.establishedYear, group.albums.length);

        console.log(group.albums);
        console.log(group.artists);
    });
    
    _maxNrpages = response.pageCount;
}

//init
(async function pageInit() 
{
    await renderMusicGroupsAsync(_currentPage);
})();