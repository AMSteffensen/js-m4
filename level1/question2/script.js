var requestURL = 'https://jsonplaceholder.typicode.com/todos';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


var header = document.querySelector('header');
var section = document.querySelector('section');

request.onload = function() {
    var userData = request.response;
    populateCards(userData);
    showCards(userData);
  }

  function populateCards(jsonObj) {
    var myCard = document.createElement('div');
    myCard.textContent = jsonObj['id'];
    header.appendChild(myCard);
    

 /*    // loop through json and populate data
    for(var i = 0; i < jsonObj.length; i++) {
        var obj = jsonObj[i];
    
        console.log(obj.userId);
        console.log(obj.id);
        console.log(obj.title);
        console.log(obj.completed);

        var myPara = document.createElement('p');
        myPara.textContent = 'User ID: ' + obj['userId'] + ' // ID: ' + obj['id'];
        div.setAttribute('class', 'note');
        header.appendChild(myPara);
    } */
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


      //document.body.appendChild(div);


    }
  }