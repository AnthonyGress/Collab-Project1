var searchFormEl = document.querySelector('#search-form');
var clickMeButtonEl = document.querySelector('#click-button');
var testBtn = document.querySelector('#testBtn')
// html ID
var collectionInput = document.querySelector('#colltion-format');


  var getLibraryData = function () {
      console.log("Made it here");
    collectionInput = "maps";
    searchInput = "truman"
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
      var issueEl = document.createElement('a');
      issueEl.classList = 'list-item flex-row justify-space-between align-center';
      issueEl.setAttribute('href', dataArray[i].something);
      issueEl.setAttribute('target', '_blank');
  
      var titleEl = document.createElement('span');
      titleEl.textContent = dataArray[i].title;
      issueEl.appendChild(titleEl);
  
      var typeEl = document.createElement('span');
  
      if (issues[i].pull_request) {
        typeEl.textContent = '(Pull request)';
      } else {
        typeEl.textContent = '(Issue)';
      }
  
      issueEl.appendChild(typeEl);
  
      issueContainerEl.appendChild(issueEl);
    }
  };
  
  testBtn.addEventListener("click", getLibraryData);