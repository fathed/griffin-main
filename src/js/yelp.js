// console.log('Client-side code running');

// const button = document.getElementById('searchBtn');




// button.addEventListener('click', function(e) {
//     console.log('button was clicked');

//     fetch('/clicked', { method: 'POST' })
//         .then(function(response) {
//             if (response.ok) {
//                 console.log('Click was recorded');
//                 return;
//             }
//             throw new Error('Request failed.');
//         })
//         .catch(function(error) {
//             console.log(error);
//         });



// });





// document.getElementById("searchValue").addEventListener("click", getList);

// function getList() {

//     client.search(searchRequest).then(response => {
//         const firstResult = response.jsonBody.businesses[0];
//         const prettyJson = JSON.stringify(firstResult, null, 4);
//         console.log(prettyJson);
//     }).catch(e => {
//         console.log(e);
//     });
// }