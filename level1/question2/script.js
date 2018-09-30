var requestURL = 'https://jsonplaceholder.typicode.com/todos';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


var header = document.querySelector('header');
var section = document.querySelector('section');

request.onload = function() {
    var userData = request.response;
    showCards(userData);
    addStyle(userData);
  }


  function addStyle(jsonObj){ 
    var cards = document.querySelectorAll('article');
    var section = document.querySelectorAll('section');
    

  
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.textAlign = 'center';
        cards[i].style.color = 'black';
        cards[i].style.boxShadow = '0px 10px';
        cards[i].style.backgroundColor = 'white';
    }
  }



  function showCards(jsonObj) {   
    for (var i = 0; i < jsonObj.length; i++) {
    
    var cards = jsonObj[i];

      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = jsonObj[i].id;
      myPara1.textContent = 'User ID: ' + jsonObj[i].userId;
      myPara2.textContent = 'ID: ' + jsonObj[i].id;
      myPara3.textContent = 'Title: ' + jsonObj[i].title;
      myPara4.textContent = 'Completed: ' + jsonObj[i].completed;
          
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
     
    }
  }