var searchFormEl = document.querySelector('#search-form');
var clickMeButtonEl = document.querySelector('#click-button');
var testBtn = document.querySelector('#testBtn')
// html ID
var collectionInput = document.querySelector('#colltion-format');
// Title, Date, Subject, Description

  var getLibraryData = function () {
      console.log("Made it here");
    collectionInput = "maps";
    searchInput = "trump"
    var apiUrl = 'https://www.loc.gov/' + collectionInput + '?q='+ searchInput + '&fo=json';
  
    fetch(apiUrl).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
            console.log("display info");
            console.log(data);
          displayInfo(data);
        });
      }
      else {
          console.log("no data");
        // document.location.replace('./index.html');
      }
    });
  };

  var displayInfo = function (dataArray) {
    if (dataArray.length === 0) {
      infoContainerEl.textContent = 'This search is blank!';
      return;
    }
  
    for (var i = 0; i < dataArray.length; i++) {
      var infoEl = document.createElement('a');
      infoEl.classList = 'list-item flex-row justify-space-between align-center';
      var infoURL = dataArray.featured_items[i].url;
      infoEl.setAttribute('href', `https://www.loc.gov/${infoURL}`);
      infoEl.setAttribute('target', '_blank');
  
      var titleEl = document.createElement('span');
      titleEl.textContent = dataArray.featured_items[i].title;
      infoEl.appendChild(titleEl);
  
      var descriptionEl = document.createElement('span');
      descriptionEl.textContent = dataArray.featured_items[i].title;
        
  
      infoEl.appendChild(typeEl);
  
      infoContainerEl.appendChild(infoEl);
    }
  };
  
  testBtn.addEventListener("click", getLibraryData);