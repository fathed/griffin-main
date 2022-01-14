const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const yelp = require('yelp-fusion');
const handlebars = require('express-handlebars');

const apiKey = 'CL8ByrnKU7w6vUEfiJqJaiepljjvNSjUzIBfiue3kofP7tP_HdwhEpL-JenzIMz5IdV52w91Ym2lqy7HgFaprWTPZk0EYbOJa5So_Z6-gnSaqyeO1wUxMrnvcEPgYXYx';
const client = yelp.client(apiKey);


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());



app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}));

app.use('/src', express.static('src'))

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', { layout: 'index' });
});


















// app.get('/', function(req, res, next) {
//     res.sendFile(path.join(__dirname + '/starter.html'));
// })


app.get('/test', (req, res) => {
    //res.sendFile(__dirname +"/views/test.html",);
    res.json({ title: "api", message: "root" });
})



app.get('/data', function(req, res) {
    res.send('hello world'); //replace with your data here
});

app.post('/search', (req, res) => {


    client.search({
        term: 'Parking+Lot',
        location: 'san francisco, ca',
    }).then(response => {
        console.log(response.jsonBody.businesses);
    }).catch(e => {
        res.locals.message = e.message;
        console.log(e);
    });
    // client.search({
    //     term: 'Parking+Lot',
    //     location: req.body.fname,
    // }).then(response => {
    //     const firstResult = response.jsonBody.businesses;
    //     const prettyJson = JSON.stringify(firstResult, null, 4);
    //     console.log(prettyJson)
    // }).catch(e => {
    //     console.log(e);
    // });




    // const searchRequest = {
    //     term: 'Parking+Lot',
    //     location: req.body.fname
    // };


    // client.search(searchRequest).then(response => {
    //     const firstResult = response.jsonBody.businesses;
    //     const prettyJson = JSON.stringify(firstResult, null, 4);

    //     console.log(prettyJson);

    // }).catch(e => {
    //     console.log(e);
    // });


    res.redirect('/');
});


app.listen(3000, function() {
    console.log('CORS-enabled web server listening on port 3000')
})