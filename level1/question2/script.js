fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((res) => {
        forLoop(res);
    })
    .catch((err) => console.log('fetchError', err))


    function createCard(res) {
        
    }