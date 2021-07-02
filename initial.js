var searchFormEl = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var clickMeButtonEl = document.querySelector('#click-button');
var mapsEl = document.querySelector('#maps');
var audioEl = document.querySelector('#audio');
var photosEl = document.querySelector('#photos');
var manuscriptsEl = document.querySelector('#manuscripts');
var newspapersEl = document.querySelector('#newspapers');
var filmAndVideos = document.querySelector('#film-and-videos');
var notatedMusic = document.querySelector('#notated-music');
var websites = document.querySelector('#websites');

var formSubmitHandler = function (event) {
    event.preventDefault();

    searchInput = searchInput.value.trim();

    if (searchInput) {
        getSearchTopics(searchInput);

        searchContainerEl.textContent = '';
        searchInput.value = '';
    } else {
        alert('Please enter a search');
    }

};

var getSearchTopics = function(input, select){
    var apiUrl = 'https://www.loc.gov/' + dropDown + '?q='+ searchInput + '&fo=json';
}
